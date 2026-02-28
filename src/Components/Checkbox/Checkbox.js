import { Dom, BaseComponent, defineArgs, bindState } from "../../Utils/Utils";

export class Checkbox extends BaseComponent {
  constructor(...args) {
    //1. 判斷初始化節點
    //如果不是 <input> 或 <label> 則視為容器
    const { element, options } = defineArgs(args, "input");

    let inputElem = null,
      label = null,
      container = null,
      originParent = null;

    originParent = element.parentNode;

    switch (element?.nodeName) {
      case "INPUT":
        inputElem = element;
        break;
      case "LABEL":
        label = element;
        // 從 <label> 裡找 input，如果沒有就建立一個 input
        inputElem =
          label.querySelector("input") || document.createElement("input");
        break;
      default:
        container = element;
        // 從容器找 input，如果沒有就建立一個 input
        inputElem =
          container.querySelector("input") || document.createElement("input");
        break;
    }

    const defaultTheme = options.disabled
      ? "#808080"
      : options.theme || "var(--color-yellow-500)";

    // 把 inputElem 傳入作為 this._elem
    super(inputElem, defaultTheme);
    this.UItype = "Checkbox";
    this.options = { ...this._defaultOptions, ...options };
    this.defaultTheme = options.theme || defaultTheme;
    this.inputValue = this._defineInputValue(
      this.options.style,
      this.options.title,
      this.options.value
    ).inputValue;
    this.label = this._createLabelGroup(label, this.options?.style);
    this.name = this._elem.name || this.options.name || null;
    this.container = this._createContainerGroup(container, this.label);

    //0805
    this.originParent = originParent;
    if (originParent) {
      originParent.appendChild(this.container);
    }

    //當前Img
    this.activeImg = this._toggleImg(this.options.style, this.options.checked);
    // callback handlers
    if (this.options.handlers) {
      this.handlers = this.options.handlers;
    }
    //event
    this.onChange = this._onChange.bind(this);
    this._init();
  }

  // 封裝基本(預設)設定
  get _defaultOptions() {
    return {
      style: "default", //樣式
      title: "", //文字
      value: "", //<input/>的value attribute
      checked: true,
      theme: "var(--color-yellow-500)", //預設顏色
      checkImg: null, //check圖標
      classes: ["checkbox"],
      disabled: false,
    };
  }

  // 元件初始化
  _init() {
    this.render();
    // this.setDisabled(this.disabled);
    this._bindEvents();
  }

  // 元件渲染
  render() {
    //1. <input/> attribute settings
    this._elem.type = "checkbox";
    this._elem.checked = this.options.checked;
    this._elem.value = this.inputValue;
    Dom.addClass(this._elem, this.options.classes);
    Dom.setAttribute(this._elem, "checkstyle", this.options.style || "default");
    // 2. theme設定
    Dom.setProperty(this.label, "--themeColor", this._theme);
    //3. 判斷樣式
    switch (this.options.style) {
      case "switch":
        Dom.addClass(this.label, ["label"]);
        //切換文字節點
        let titlenode = document.createTextNode(
          this._defineInputValue(
            this.options.style,
            this.options.title,
            this.options.value
          ).displayText
        );
        this.label.replaceChild(titlenode, this.label.childNodes[1]);
        break;
      case "toggle":
        Dom.setProperty(this.label, "--toggle-img", `url(${this.activeImg})`);
        break;
      case "tag":
        //label classes:input-label,input-tag-group
        Dom.addClass(this.label, ["input-label", "input-tag-group"]);
        Dom.addClass(this._elem, ["tag-input"]);
        break;
      default:
        break;
    }
    //4. 判斷是否設定為禁止操作
    if (!this.options.disabled) {
      Dom.removeClass(this._elem, ["disabled"]);
      this._elem.removeAttribute("disabled");
    } else {
      Dom.addClass(this._elem, ["disabled"]);
      this._elem.setAttribute("disabled", true);
    }
  }

  // 內部控制用
  // 建立完整結構
  // include "title"
  _createLabelGroup(label, style) {
    let labelElem = label || document.createElement("label");
    const checkboxStyle = style || "default";
    labelElem.appendChild(this._elem);
    // 如果有title文字(style=switch/toggle時一律不加)：
    if (this.options.title && checkboxStyle !== "toggle") {
      let titlenode = document.createTextNode(this.options.title);
      labelElem.appendChild(titlenode);
      labelElem.setAttribute("name", this.options.title);
    }
    return labelElem;
  }

  //內部控制-容器設定
  //如果初始化時傳入不是<label>或<input>節點，就把該節點視為container
  _createContainerGroup(outterContainer, labelgroup) {
    if (outterContainer) {
      outterContainer.appendChild(labelgroup);
      return outterContainer;
    }
    return labelgroup;
  }
  //內部控制-設定Img
  _toggleImg(style, checkedState) {
    if (style !== "toggle") return;

    let state = checkedState ? 0 : 1;
    return this.options.checkImg[state];
  }

  //內部控制-切換inputValue
  _defineInputValue(style, title, value) {
    let displayText = title; //預設文字為title設定
    let inputValue = value || title; // 預設 input.value為value，如果沒有設定則是title
    let onoff = this.options.checked ? 0 : 1;
    if (style === "switch") {
      const titleText = title.trim().split("|");
      const currentValue = value ? value.trim().split("|") : titleText;
      console.log(currentValue);
      displayText = titleText[onoff] || displayText || "";
      inputValue = currentValue[onoff] || displayText || " ";
    } else {
      inputValue = this.options.checked ? inputValue : "";
    }
    return { displayText, inputValue };
  }
  //外部控制-取得checked狀態
  getChecked() {
    return this.options.checked;
  }
  //外部控制-設定checked狀態
  setChecked(checked) {
    this.options.checked = checked;
    this._applyUpdate();
  }
  //外部控制-取得value狀態
  getValue() {
    return this.inputValue;
  }
  //外部控制-設定value狀態
  setValue(value) {
    this.inputValue = value;
    this._applyUpdate();
  }
  // 外部控制-更改顏色
  changeTheme(value) {
    if (this.options.disabled) {
      console.error("請將disabled設定為false");
      return;
    }
    super.setTheme(value);
    this._applyUpdate();
  }

  //外部控制-更改disabled狀態
  setDisabled(value) {
    this.options.disabled = value;
    this._applyUpdate();
  }
  // Event-relate
  _onChange(e) {
    // console.log("checkbox this._onChange");
    this.options.checked = e.target.checked;
    // this.options.checked = this._elem.checked;
    if (this.handlers) {
      this.handlers(this.options.checked);
    }

    this._applyUpdate();
  }

  _bindEvents() {
    this.onevent(this._elem, "change", this.onChange);
  }

  //內部控制-更新elem狀態+重新渲染
  _applyUpdate() {
    this._elem.checked = this.options.checked;
    this._elem.value = this.inputValue;
    this._elem.disabled = this.options.disabled;
    //如果是toggle樣式，要切換checkImg
    if (this.options.style === "toggle") {
      this.activeImg = this._toggleImg("toggle", this.options.checked);
    }

    this.inputValue = this._defineInputValue(
      this.options.style,
      this.options.title,
      this.options.value
    ).inputValue;

    this.render();
  }
}

// checkbox-Group
export class CheckboxGroup extends BaseComponent {
  constructor(name, container) {
    let groupContainer = container || document.createElement("ul");
    super(groupContainer);
    this.UItype = "CheckboxGroup";
    this.groupContainer = this._elem;
    this.groupName = name; //群組名稱
    this.items = [];
    this._init();
  }

  _init() {
    this.render();
  }
  //內部控制-渲染樣式
  render() {
    this.groupContainer.className = "checkbox-group w-full grid grid-cols-2";
  }

  //外部控制-取得group內指定input的value
  //應該要回傳一組物件{name,value}，讓後續可以直接取用
  getValue(name) {
    if (name) {
      let nameValuePair = {};
      for (let item of this.items) {
        if (!item.name || item.name !== name) break;
        nameValuePair.name = item.name;
        nameValuePair.value = item.getValue();
      }
      return nameValuePair;
    } else {
      let allPairs = [];
      for (let item of this.items) {
        let nameValuePair = {};
        nameValuePair.name = item.name;
        nameValuePair.value = item.getValue();
        allPairs.push(nameValuePair);
      }
      return allPairs;
    }
  }
  //外部控制-放入checkbox item
  addCheckItems(item) {
    let isItemsArray = Array.isArray(item);
    if (isItemsArray) {
      this.items = [...this.items, ...item]; //放入的是Checkbox instance，不是<input/>
      for (let itm of item) {
        let li = document.createElement("li");
        li.classList.add("item");
        li.appendChild(itm.container);
        this._elem.appendChild(li);
      }
    } else {
      this.items = [...this.items, item]; //放入的是Checkbox instance，不是<input/>
      let li = document.createElement("li");
      li.classList.add("item");
      li.appendChild(item.container);
      this._elem.appendChild(li);
    }
  }
}
