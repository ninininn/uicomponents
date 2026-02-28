import { BaseComponent, setUUID, defineTypeof } from "../../../Utils/Utils";

import { Notification } from "../Notification/Notification";

export class Card extends BaseComponent {
  constructor(title, cardSize) {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.innerHTML = ` <div class="card-header">
            <div class="data-title">${title}</div>
            <div class="flex flex-row-reverse">
              <button type="button" class="closeBtn btn icon-btn text-btn" data-modal-target="close-data-modal">
                <svg class="icon text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>
              <button type="button" class="miniBtn btn icon-btn text-btn" >
                <svg class="icon text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

              </button>
            </div>     
        </div>`;
    super(cardContainer);
    this.UItype = "Card";
    this.cardContainer = this._elem;
    this.title = title;
    this._cardsize = this._setCardSize(cardSize); //設定卡片尺寸
    this.minimize = false;
    this._bindEvent();
  }

  _setCardSize(size) {
    switch (size) {
      case 2:
        this.cardContainer.classList.add("md:col-span-2");
        return "2-col";
      case 3:
        this.cardContainer.classList.add("md:col-span-3");
        return "full-col";
      default:
        return "1-col";
    }
  }

  _bindEvent() {
    this.onevent(this.cardContainer
      .querySelector(".miniBtn"), "click", miniCard.bind(this));

    function miniCard() {
      this.minimize = !this.minimize;

      this.cardContainer.dataset.minimize = this.minimize ? "mini" : "expand";

      let icon = this.minimize
        ? `<svg class="icon text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"/>
</svg>`
        : `<svg class="icon text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>`;
      this.cardContainer.querySelector(".miniBtn").innerHTML = icon;
    }
    this.cardContainer.querySelector(".closeBtn").addEventListener("click", closeNotify.bind(this));

    function closeNotify() {
      Notification.modal(this.cardContainer.querySelector(".closeBtn"), {
        msgContent: "確定關閉此資料區塊? 關閉後須重新查詢",
        placement: "center",
        confirm: ["確定關閉", () => { this.cardContainer.remove(); }],
        cancel: "取消",
        backdropClasses: "bg-gray-800/50"
      });
    }
  }
}

export class BasicInfoCard extends Card {
  constructor(title, infoList, cardSize = 1) {
    super(title, cardSize);
    this._infoStruct = new Info(infoList);
    this.infoList = this._infoStruct.infos;
    // this.infoList = infoList; // 傳進來的 infoListTemp
    this.blocks = []; // 存放建立的區塊 DOM
    this._contentBlock = document.createElement("div");

    this._init();
  }

  /**
   *  [內部控制]-建立單一區塊 function _createBlocks
   * @description 接收info參數，info參數為infoList array內的各個{}obj
   * @param {object} info - 單一區塊要渲染的資料
   * @property {string} blockId
   * @property {array} blockclass - 每個區塊的class
   * @property {string | array} label - 標籤文字
   * @property {string | array} value - 標籤對應值
   * @property {string | array} valueId - 標籤對應值<span/>的id
   *
   * @typedef {array} btn
   * @type {Array<btn>} btn - 按鈕群組
   * @property {string} text - 按鈕文字
   * @property {array} class - 按鈕樣式
   * @property {function} handler - 按鈕事件
   *
   * @property {string | array | HTMLElement} customInner - 客製innerHTML內容，也可以配合其他元件傳入container
   * @property {string} btngroupClass - 按鈕群組樣式(如果沒有特別設定則是吃blockClass)
   * @returns {HTMLElement} block - 渲染完成的節點
   */

  _createBlock(row) {
    let rowElem = document.createElement("div");
    rowElem.classList.add("row-block");

    //check blockId
    if (row.blockId) rowElem.id = row.blockId;
    //check label
    if (row.label) {
      let group = document.createElement("div");
      if (row.blockclass) {
        group.classList.add(...row.blockclass);
      }
      if (Array.isArray(row.label)) {
        //check巢狀label
        row.label.forEach((lb, idx) => {
          const labelSpan = document.createElement("span");
          labelSpan.textContent = lb;
          labelSpan.classList.add("card-label");
          group.appendChild(labelSpan);

          if (row.value?.[idx]) {
            const valSpan = document.createElement("span");
            valSpan.textContent = row.value[idx];
            if (row.valueId?.[idx]) valSpan.id = row.valueId[idx];
            group.appendChild(valSpan);
          }
        });
      } else {
        // 單一label-value
        const labelSpan = document.createElement("span");
        labelSpan.textContent = row.label;
        labelSpan.classList.add("card-label");
        group.appendChild(labelSpan);

        if (row.value) {
          const valSpan = document.createElement("span");
          valSpan.textContent = row.value;
          if (row.valueId) valSpan.id = row.valueId;
          group.appendChild(valSpan);
        }
      }

      //check customInner
      if (row.customInner) {
        row.customInner.forEach((el) => {
          if (el instanceof HTMLElement) {
            group.appendChild(el);
          } else {
            let customRow = document.createElement("div");
            customRow.innerHTML = el;
            group.appendChild(customRow);
          }
        });
        //check if HTMLElement
        // if (row.customInner instanceof HTMLElement) {
        //   group.appendChild(row.customInner);
        // } else {
        //   let customRow = document.createElement("div");
        //   customRow.innerHTML = row.customInner;
        //   group.appendChild(customRow);
        // }
      }
      rowElem.appendChild(group);
    }

    //check customInner Only
    if (row.customInner && !row.label) {
      row.customInner.forEach((el) => {
        if (el instanceof HTMLElement) {
          if (row.blockclass) el.classList.add(...row.blockclass);
          rowElem.appendChild(el);
        } else {
          let customRow = document.createElement("div");
          customRow.innerHTML = el;
          if (row.blockclass) customRow.classList.add(...row.blockclass);
          rowElem.appendChild(customRow);
        }
      });
      // if (row.customInner instanceof HTMLElement) {
      //   //check blockclass
      //   if (row.blockclass) row.customInner.classList.add(...row.blockclass);
      //   rowElem.appendChild(row.customInner);
      // } else {
      //   let customRow = document.createElement("div");
      //   //check blockclass
      //   customRow.innerHTML = row.customInner;
      //   if (row.blockclass) customRow.classList.add(...row.blockclass);
      //   rowElem.appendChild(customRow);
      // }
    }

    //check btn
    if (row.btn) {
      const btnGroup = document.createElement("div");
      btnGroup.classList.add("card-buttons");

      //check btngroupClasses
      if (row.btngroupClass) {
        btnGroup.classList.add(...row.btngroupClass.split(" "));
      } else if (row.blockclass && !row.label) {
        btnGroup.classList.add(...row.blockclass);
      }
      row.btn.forEach((btnInfo) => {
        const btn = document.createElement("button");
        btn.classList.add("btn");

        btn.textContent = btnInfo.text;
        //check btn class
        if (btnInfo.class) {
          btn.classList.add(...btnInfo.class);
        }
        //check handler
        if (btnInfo.handler) {
          btn.addEventListener("click", btnInfo.handler.bind(this));
        }

        //check btn id
        if (btnInfo.id) {
          btn.id = btnInfo.id;
        }
        btnGroup.appendChild(btn);
      });
      rowElem.appendChild(btnGroup);
    }

    return rowElem;
  }

  // [內部控制]-初始化
  _init() {
    this._contentBlock.className = "card-data-content";
    this._render();
  }

  // [內部控制]-渲染全部卡片
  _render() {
    this.clearBlocks();
    const groupMap = new Map();

    this.infoList.forEach((row) => {
      if (row._groupId) {
        //check groupMap has this groupId
        const isValid = groupMap.has(row._groupId);
        if (!isValid) {
          groupMap.set(row._groupId, []);
        }
        groupMap.get(row._groupId).push(row);
      } else {
        if (row._visible === false) return;
        const block = this._createBlock(row);
        this.blocks.push(block);
        this._contentBlock.appendChild(block);
      }
    });

    groupMap.forEach((rows, groupid) => {
      const groupDiv = document.createElement("div");
      groupDiv.id = groupid;

      rows.forEach((rw) => {
        if (rw._visible === false) return;
        const block = this._createBlock(rw);
        groupDiv.appendChild(block);
      });
      this._contentBlock.appendChild(groupDiv);
      this.blocks.push(groupDiv);
    });
    this.cardContainer.appendChild(this._contentBlock);
  }

  /**
   * [外部控制]-新增項目or欄位
   * @param {array} addInfo
   * @param {object} onceSetting
   * @property {boolean} once - 是否只新增一次，其他用替換方式
   * @property {string} id - 當once=true時，必須給定id作為groupId
   * @returns
   */
  addBlocks(addInfo, options = {}) {
    this._infoStruct.add(addInfo, options); //資料整理
    this.infoList = this._infoStruct.infos; //更新BasicInfoCard的資料
    this._render();
  }

  /**
   * [外部控制]-清空dataContent
   * @description 僅清空blocks節點，資料仍留存
   */
  clearBlocks() {
    if (!this._contentBlock.children) return;

    while (this._contentBlock.firstChild) {
      this._contentBlock.firstChild.remove();
    }
    this.blocks = [];
  }

  /**
   * [外部控制]-移除某一塊欄位
   * @description 刪除單一欄位UI&對應資料
   * @param {string} label-欄位文字 
   * 須注意是針對單一欄位來做刪除(要有label)!
   */
  deleteBlock(label) {
    this._infoStruct.delete(label);
    this.infoList = this._infoStruct.infos; //更新BasicInfoCard的資料
    this._render();
  }

  /**
   * [外部控制]-切換區塊visible
   * @description 可以切換同一個card內的group(有點類似tab)
   * @param {string} groupId-使用addBlock({once})後會綁定_groupId，可以用來切換
   */
  toggleBlock(groupId) {
    this._infoStruct.toggle(groupId);
    this.blocks.forEach((block) => { if (block.id === groupId) block.classList.add("hidden"); });
  }

  /**
   * [外部控制]-更新某欄位資料
   * 
   */
  updateLabel(label, value) {
    this._infoStruct.update(label, value);
    this.infoList = this._infoStruct.infos; //更新BasicInfoCard的資料
    this._render();
  }
}


/**
 * Info
 * @description 負責整併card資料欄位(不會直接操作到!)
 * @param {Array} infoArray - 各欄位資料設定
 */

var defaultInfoConfig = {
  blockId: null,
  blockclass: null,
  label: null,
  value: null,
  valueId: null,
  customInner: [],
  btn: undefined,
  btngroupClass: undefined
};

class Info {
  constructor(infoArray) {
    this.infoProps = this._wrapInfos(infoArray);
    this.rowNum = infoArray.length;
    this.infos = this._createInfoRows(infoArray);
    this.uuid = setUUID();
    // this._init();
  }

  _init() {
    this.infos = [];
    //create row-struct
    for (let i = 0; i < this.rowNum; i++) {
      const row = {
        blockId: this.getInfoKeys("blockId")[i] || null,
        blockclass: this.getInfoKeys("blockClass")[i] || null,
        label: this.getInfoKeys("label")[i] || null,
        value: this.getInfoKeys("value")[i] || null,
        valueId: this.getInfoKeys("valueId")[i] || null,
        customInner: this.getInfoKeys("customInner")[i] || [],
        btn: Array.isArray(this.getInfoKeys("btn"))
          ? this.getInfoKeys("btn")[i]
          : this.getInfoKeys("btn"),
        btngroupClass: this.getInfoKeys("btngroupClass")[i],
      };
      this.infos.push(row);
    }
  }

  /**
   * @description 整理包裝個欄位屬性資料
   * @param {Array} infoArray 
   * @returns {Object} wrapped - 整併的全屬性 object
   */
  _wrapInfos(infoArray) {
    return infoArray.reduce((wrapped, info) => {
      wrapped.blockId.push(info.blockId || "");
      wrapped.label.push(info.label || "");
      wrapped.blockClass.push(info.blockclass || "");
      wrapped.value.push(info.value || "");
      wrapped.valueId.push(info?.valueId || "");
      wrapped.customInner.push(
        !info.customInner ? [] :
          Array.isArray(info.customInner) ? info.customInner : [info.customInner]
      );
      wrapped.btn.push(info.btn);
      wrapped.btngroupClass.push(info.btngroupClass);
      return wrapped;
    }, {
      blockId: [], label: [], blockClass: [], value: [],
      valueId: [], customInner: [], btn: [], btngroupClass: []
    });
  }

  /**
   * @description 取得對應property的value array
   * @param {String} key - 要取得的欄位資料 
   * @returns {Array} 該屬性欄位所有 values
   */
  getInfoKeys(key) {
    return this.infoProps[key];
  }


  _createInfoRows(infoArray) {
    const wrapped = this._wrapInfos(infoArray);
    const infos = infoArray.map((info, i) => ({
      blockId: info.blockId || null,
      blockclass: wrapped.blockClass[i] || null,
      label: wrapped.label[i] || null,
      value: wrapped.value[i] || null,
      valueId: wrapped.valueId[i] || null,
      customInner: wrapped.customInner[i] || [],
      btn: Array.isArray(wrapped.btn) ? wrapped.btn[i] : wrapped.btn,
      btngroupClass: wrapped.btngroupClass[i],
    }));
    return infos;
  }

  /**
   * @description 新增資料(Info更改資料，BascicCard負責重新渲染)
   * @param {Array} addedInfoArray - 新增的資料
   * @param {Object} options - 單一新增設定
   * @property {boolean} once - 僅新增一次，其餘用覆蓋資料的方式
   * @property {string} id - 設定once=true時，必須要給定一個id作為groupId
   */
  add(addedInfoArray, { once = false, id } = {}) {
    // 扁平化傳入的infoArray成多個rows object
    const newRows = this._createInfoRows(addedInfoArray);
    newRows.forEach((rowObj) => rowObj._groupId = id || null);

    if (once) {
      if (!id) {
        console.error("once 模式需要提供 id");
        return;
      }

      //移掉有groupId的row object
      this.infos = this.infos.filter((r) => r._groupId !== id);
    }
    this.infos.push(...newRows);

    // 更新同步
    this.infoProps = this._wrapInfos(this.infos);
    this.rowNum = this.infos.length;
  }

  /**
   * 刪除單一欄位資料
   * @param {string} label (也可以傳入blockId)
   */
  delete(label) {
    //直接從label文字去找，沒有label就找blockId
    let valueIndex = this.getInfoKeys("label").findIndex((val) => val.includes(label));
    if (valueIndex < 0) {
      //check blockId
      valueIndex = this.getInfoKeys("blockId").findIndex((val) => val === label);
      if (valueIndex < 0) {
        console.error("沒有對應的block");
        return;
      }
    } else {
      //check if innerArray
      if (Array.isArray(this.getInfoKeys("label")[valueIndex])) {
        //is in innerArray
        let innerIndex = this.getInfoKeys("label")[valueIndex].findIndex(val => val.includes(label));
        //value&label要對應修改
        this.getInfoKeys("label")[valueIndex] = this.getInfoKeys("label")[valueIndex].filter((val, index) => index !== innerIndex);
        this.getInfoKeys("value")[valueIndex] = this.getInfoKeys("value")[valueIndex].filter((val, index) => index !== innerIndex);

        if (this.getInfoKeys("label")[valueIndex].length === 1) {
          //只剩一個可以扁平化
          this.getInfoKeys("label")[valueIndex] = this.getInfoKeys("label")[valueIndex].toString();
          this.getInfoKeys("value")[valueIndex] = this.getInfoKeys("value")[valueIndex].toString();
          this.infos[valueIndex].label = this.getInfoKeys("label")[valueIndex];
          this.rows[valueIndex].value = this.getInfoKeys("value")[valueIndex];
        } else {
          this.rows[valueIndex].label = this.getInfoKeys("label")[valueIndex].filter((val, index) => index !== innerIndex);
          this.rows[valueIndex].value = this.getInfoKeys("value")[valueIndex].filter((val, index) => index !== innerIndex);
        }

      } else {
        for (let prop in this.infoProps) {
          this.infoProps[prop] = this.infoProps[prop].filter((arr, index) => index !== valueIndex);
        }
        this.rowNum = this.rowNum - 1;
        this.infos = this.infos.filter((info, index) => index !== valueIndex);
      }
    }
    console.log("after delete:", this.infoProps);
  }

  /**
   * @description 清空所有資料
   */
  clear() {
    this.infoProps = {};
    this.rowNum = 0;
    this.infos = [];
  }

  /**
   * @description 如果有groupId的資料可以控制可視(visibility)，就能做切換
   * @param {string} groupId 
   */
  toggle(groupId) {
    this.infos.forEach((infoObj) => {
      let isVisible = infoObj._visible || true;
      if (infoObj._groupId === groupId) infoObj._visible = !isVisible;
    });
  }

  /**
   * @description 更新指定欄位資料
   * @param {string,object} updateInfo 要更新進去的label/區塊資料
   */
  update(updateInfo, updateValue, groupId) {
    //判斷是object還是string，obj代表更新整個區塊資料/str代表更新label或指定blockId
    const isUpdateLabel = defineTypeof(updateInfo, "string");
    if (isUpdateLabel) {
      //直接從label文字去找，沒有label就找blockId
      const labelKeys = this.getInfoKeys("label");
      const valueKeys = this.getInfoKeys("value");
      let valueIndex = labelKeys.findIndex((val) => val.includes(updateInfo));
      if (valueIndex < 0) {
        //check blockId
        valueIndex = this.getInfoKeys("blockId").findIndex((val) => val === updateInfo);
        if (valueIndex < 0) {
          console.error("沒有對應的block");
          return;
        }
      }
      if (Array.isArray(labelKeys[valueIndex])) {
        //is in innerArray
        let innerIndex = labelKeys[valueIndex].findIndex(val => val.includes(updateInfo));
        //value要對應修改
        valueKeys[valueIndex][innerIndex] = updateValue;
      } else {
        valueKeys[valueIndex] = updateValue;
      }
      this.infos[valueIndex].value = valueKeys[valueIndex];
    } else {

      console.log(updateInfo, updateValue, groupId);
      //移掉有groupId的row object
      // this.infos = this.infos.filter((r) => r._groupId !== id);
    }

  }
}

let testCard = [
  {
    blockId: "testa",
    updateInfo: "統計範圍內(橘框虛線)建物資料數量：",
    value: 1,
    btn: [
      { text: "btn01", class: ["a", "b", "c"] },
      { text: "btn01", class: ["a", "b", "c"] },
    ],
    btngroupClass: "a b c",
  },
  {
    blockId: "testb",
    label: "平均屋齡：",
    value: `1`,
    blockclass: ["test-class"],
  },
  {
    label: ["最大值", "最小值"],
    value: [2, 3],
  },
  {
    blockclass: ["flex", "flex-col", "tips-container", "text-sm"],
    customInner: `<span>＊計算可能受到建築完成日未填寫影響，數據僅供參考</span><span>檢視屋齡分布可操作[交易安全]></span><a class="text-btn" href="javascript:overnav(555);">[建物屋齡模擬]</a>`,
  },
];



//圖例card
export class LevelCard {
  constructor({ labels, legends }) {
    this.labels = labels;
    this.legends = legends;
    this.container = document.createElement("div");
    this._init();
  }

  _init() {
    this.entries = Object.fromEntries(this.labels.map((lb, index) => [lb, this.legends[index]]));
    this._render();
  }

  _render() {
    for (let label in this.entries) {
      let div = document.createElement("div");
      let lg = document.createElement("span");
      let lb = document.createElement("p");
      lb.textContent = label;
      lg.classList.add("inline-block", "w-6", "h-5", "border-gray-700");
      lg.classList.add(this.entries[label]);
      div.classList.add("flex", "gap-2", "items-center");
      div.appendChild(lg);
      div.appendChild(lb);
      this.container.appendChild(div);
    }
  }
}

let testLevelCard = new LevelCard({ labels: ["a", "b", "c"], legends: ["bg-red-700", "bg-green-500", "bg-blue-500"] });
// console.log(testLevelCard);