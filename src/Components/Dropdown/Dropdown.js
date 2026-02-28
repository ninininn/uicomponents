import { Dropdown as flowbiteDropdown } from "flowbite";

export class Dropdown extends flowbiteDropdown {
  constructor(target, trigger, bindFilteroption = null, changeHandler = null) {
    let bindtarget, bindtrigger;
    if (!(target instanceof HTMLElement)) {
      bindtarget = document.createElement("ul");
      bindtarget.id = `${target}_dropdown`;
      bindtarget.classList.add("dropdown-item");
    } else {
      bindtarget = target;
    }

    if (!(trigger instanceof HTMLElement)) {
      let label = document.createElement("label");
      label.classList.add("input-label");

      bindtrigger = document.createElement("input");
      bindtrigger.classList.add("dropdown-input");
      label.appendChild(bindtrigger);

      bindtarget.insertAdjacentElement("afterBegin", label);
    } else {
      bindtrigger = trigger;
    }
    super(bindtarget, bindtrigger);
    this.dropdownChildren = this._targetEl.children;
    this._options = { ...this._options, ...this.config };
    this.bindSelect =
      this._targetEl.nextElementSibling ||
      this._createBindSelect(target, trigger); //綁定的下拉選單

    this.containerEl = target.parentElement || this._createContainer();
    if (changeHandler) this.changeHandler = changeHandler.bind(this.bindSelect);

    //如果建立時select有預設value就用它，沒有的話就先用第一個li
    this.optValuePair = this.getMatchValue(
      this.bindSelect.options[this.bindSelect.selectedIndex].text
    ); //key-value pair Object

    //如果有開啟綁定篩選功能
    //預設傳入<input>設定readonly，但如果有開啟filter功能，則移除
    this._triggerEl.readOnly = true;
    if (this._triggerEl.tagName === "INPUT" && bindFilteroption) {
      this.bindFilteroption = bindFilteroption;
    }

    this._init();
  }

  _createBindSelect(selectId, selectOptions) {
    let select = document.createElement("select");
    select.classList.add("select", "dropdown-select");
    select.id = selectId;
    selectOptions.forEach((opt) => {
      let option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.text;
      if (opt.selected) option.selected = true;
      select.appendChild(option);
    });

    return select;
  }

  _createContainer() {
    let container = document.createElement("div");
    container.classList.add("w-full");
    container.appendChild(this._triggerEl.parentElement);
    container.appendChild(this._targetEl);
    container.appendChild(this.bindSelect);
    return container;
  }

  //內部控制 - 初始化
  _init() {
    super.init();
    super.hide();
    // console.log("init instance:", this, this.optValuePair);
    // 0815 如果傳入的<ul>(targetEl)沒有子節點，先放對應的<option/>
    if (this.dropdownChildren.length === 0) {
      Array.from(this.bindSelect.options).forEach((opt) => {
        let li = document.createElement("li");
        li.textContent = opt.textContent;
        this._targetEl.appendChild(li);
      });
      this.getDropdownChildren();
    }
    this._triggerEl.value = this.optValuePair.text;
    this.bindSelect.value = this.optValuePair.value;

    this._bindBasicHandler();
    //data-drop代表已經初始過
    this._targetEl.dataset.drop = true;
    // 0815 如果初始值是"不拘/全部"，要記錄
    if (
      this.optValuePair.value === "不拘" ||
      this.optValuePair.value === "全部"
    ) {
      this.ifAll = true;
    } else if (this.optValuePair.value === "目前圖面範圍") {
      this.ifMap = true;
      this.ifAll = true;
    }
  }

  //預設option設定
  get config() {
    return {
      placement: "bottom",
      triggerType: "click",
      offsetSkidding: 0,
      offsetDistance: 10,
      ignoreClickOutsideClass: false,
    };
  }

  //內部控制-dropdown監聽器
  _bindBasicHandler() {
    //0826 如果有傳入<select/>的change監聽器
    if (this.changeHandler)
      this.bindSelect.addEventListener("change", this.changeHandler);
    this._targetEl.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
      let updateValue = event.target.textContent;
      this._triggerEl.value = updateValue;

      this.optValuePair = this.getMatchValue(updateValue);
      this.bindSelect.value = this.optValuePair.value;
      this.bindSelect.dispatchEvent(new Event("change"));
      super.hide();
    });

    //filter功能開啟
    if (this.bindFilteroption?.filter) {
      this._bindfilterHandler();
    }
  }

  //內部控制-綁定篩選功能監聽器
  _bindfilterHandler() {
    this._triggerEl.addEventListener("focus", () => {
      this._triggerEl.removeAttribute("readOnly");
      this._triggerEl.addEventListener(
        "input",
        this.bindFilteroption.filterHandler.bind(this._triggerEl)
      );
    });
    this._triggerEl.addEventListener("blur", () => {
      this._triggerEl.setAttribute("readOnly", true);
      this._triggerEl.removeEventListener(
        "input",
        this.bindFilteroption.filterHandler.bind(this._triggerEl)
      );
    });
  }

  //外部取得Dropdown元件instance方法
  getdropDownInstance() {
    return this;
  }
  //外部取得所有dropdown<li/>子節點
  getDropdownChildren() {
    this.dropdownChildren = this._targetEl.children;
    return this.dropdownChildren;
  }

  //外部取得dropdown target元素
  getTargetDropdown() {
    return this._targetEl;
  }

  //外部取得綁定<select/>方法
  getBindSelect() {
    return this.bindSelect;
  }

  //外部清除所有<ul/>子節點方法
  clearDropdown() {
    //先取得所有childNode
    if (!this.dropdownChildren) return;
    // remove節點
    //0815 修改刪除方式
    if (this.bindSelect) {
      while (this.bindSelect.firstChild) {
        this.bindSelect.firstChild.remove();
      }
    }
    while (this._targetEl.firstChild) {
      this._targetEl.firstChild.remove();
    }
  }

  //外部渲染<ul/><select/>清單方法(單純加入、不改值)
  renderDropdownChildren(newliChild, newoptChild, text, optValue = null) {
    // 0818 ifMap
    if (
      this.ifMap &&
      !Array.from(this.bindSelect.options).some((opt) =>
        ["目前圖面範圍"].includes(opt.textContent)
      )
    ) {
      let mapLi = document.createElement("li");
      let mapOpt = document.createElement("option");
      mapLi.textContent = "目前圖面範圍";
      mapOpt.textContent = "目前圖面範圍";
      mapOpt.value = "map";
      this._targetEl.appendChild(mapLi);
      this.bindSelect.appendChild(mapOpt);
    }
    // 0815 ifAll
    let allValue = ["不拘", "全部", "全縣"];
    if (
      this.ifAll &&
      !Array.from(this.bindSelect.options).some((opt) =>
        allValue.includes(opt.textContent)
      )
    ) {
      let val =
        Array.from(this.bindSelect.options).filter((opt) =>
          allValue.includes(opt.textContent)
        ).textContent || "不拘";
      let allLi = document.createElement("li");
      let allOpt = document.createElement("option");
      allLi.textContent = val;
      allOpt.textContent = val;
      allOpt.value = "all"; //不論文字是甚麼都設定為"all"
      this._targetEl.appendChild(allLi);
      this.bindSelect.appendChild(allOpt);
    }
    // 加入要塞入的childNode
    // 判斷空值時 li 顯示 "-"
    let liText = text;
    if (optValue === " " || (!optValue && text === "")) {
      liText = "-";
    }

    // li
    newliChild.textContent = liText;

    //0815 檢查是否有重複的，只留一個
    const isDuplicate = Array.from(this.bindSelect.options).some(
      (opt) => opt.textContent === liText
    );

    if (isDuplicate) {
      return;
    }

    this._targetEl.appendChild(newliChild);
    // option
    if (newoptChild) {
      //如果有指定<option>的value
      if (optValue !== null) {
        newoptChild.value = optValue;
      } else {
        //沒有指定則以文字為預設value
        newoptChild.value = text;
      }
      newoptChild.textContent = liText;
      this.bindSelect.appendChild(newoptChild);
    }

    //0815 配合調整
    if (this.bindFilteroption?.filter) {
      this._triggerEl.readOnly = false;
    }
  }

  //將Select的文字及value儲存成數組並比對
  getMatchValue(text) {
    let optList = Array.from(this.bindSelect.children).map((el) => {
      return { value: el.value, text: swipeValue(el.textContent) };
    });
    let match = optList.filter((list) => list.text === text)[0];
    //match設定測試點
    if (!match) {
      console.error("getMatchValue() 取值錯誤");
      return;
    }
    return match;
  }

  //更新value成預設第一項(或是既有selected option值)
  updateValue() {
    let selectIndex = this.bindSelect.selectedIndex;
    // 如果第一筆是空("")的，就選第二筆
    //if (
    //  this.bindSelect.options[selectIndex] &&
    //  this.bindSelect.options[selectIndex].value.trim() === "" &&
    //  this.bindSelect.options.length > 1
    //) {
    //  selectIndex = 1;
    //}
    let currentSelectedText = swipeValue(
      this.bindSelect.options[selectIndex].textContent
    );

    this.optValuePair = this.getMatchValue(currentSelectedText);
    console.log("after update:", this.optValuePair);
    this._triggerEl.value = this.optValuePair.text;
  }
}

//掛到全域window上供外部使用
// window.Gdropdown = Gdropdown;

//0814 過濾value用，後續可增加
function swipeValue(value) {
  let targetText = [" "];
  if (value === targetText[0]) {
    return "-";
  } else {
    return value;
  }
}
