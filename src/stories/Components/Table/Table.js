import { BaseComponent, UIUtils, debounce, createContext, useContext } from "../../../Utils";
import { Checkbox } from "../Checkbox/Checkbox";

export class Table extends BaseComponent {
  constructor(options = {}, dataArr = []) {
    const tableContainer = document.createElement("div");
    const tableElem = document.createElement("table");
    super(tableContainer, options.theme || 'var(--color-primary-200)');
    this.UItype = "Table";
    this.id = options.id;
    this.options = { ...this.config, ...options };
    this.data = dataArr;

    this.table = tableElem;
    this.dataCounts = this.data.length;
    //TODO cols欄位要作為 context 讓所有子元件能夠共用?
    //TODO this.options.selection 勾選欄位顯示與否
    this._init();
  }

  get config() {
    return {
      id: "",
      elem: null,
      limits: 50,
      name: "defaultTable",
      classes: ["table-container"],
      cols: [],
      selection: "checkbox",
      themeColor: 'var(--color-primary-100)',
    };
  }

  //初始化
  //資料改變應在邏輯層進行，然後再呼叫 _render()
  _init() {
    this.tableBody = document.createElement("tbody");
    this.tableHeader = new TableHeader(
      this.options.cols,
      this.options.selection
    );

    let colsCount = this.options.cols.length;
    this.skeleton = new Skeleton({ type: 'table', colNum: this.options.selection ? colsCount + 1 : colsCount });


    this._render();
    this._bindEvent();
  }

  //樣式渲染(UI snpshot)把目前狀態→轉成畫面
  //根據目前的 state 產出畫面結構
  _render() {
    super.setTheme(this.options.themeColor);
    UIUtils.setProperty(this._elem, "--theme", this._theme);

    //TODO 渲染完成前顯示skeleton
    if (this.dataCounts < 1) {
      this.tableBody.appendChild(this.skeleton.getElem());
    } else {
      this.skeleton.hide();
    }
    //組裝
    this.table.appendChild(this.tableHeader.getElem());
    this.table.appendChild(this.tableBody);
    this._elem.appendChild(this.table);
    //class設定
    UIUtils.addClass(this.table, ["table"]);
    UIUtils.addClass(this._elem, this.options.classes);

    //渲染rows
    this._updateRows();
    this._renderRows();
    this.options.elem.appendChild(this._elem);
  }

  //事件綁定
  _bindEvent() { }

  //設定表列資料
  _setRows(arr, selection) {
    let tableRows = arr.map((dataObj, index) => {
      return new TableRow(dataObj, index, selection);
    });

    return tableRows;
  }

  _updateRows() {
    this.tableRows = this._setRows(this.data);
  }

  _renderRows() {
    let count = 0;
    for (let row of this.tableRows) {
      count++;
      if (count <= this.options.limits) {
        this.tableBody.appendChild(row.getElem());
      }
    }
  }
  //[外部控制]-設定表格尺寸
  //!如果超過max-width,max-height則直接用max-width/height
  setSize(width, height = 'auto') {
    UIUtils.setStyle(this._elem, 'width', `${width}px`);
    UIUtils.setStyle(this._elem, 'height', `${height}px`);
  }

  //[外部控制]-取得表格所有資料
  getTableData() {
    if (!this.tableRows) {
      console.error("No Data Yet!");
      return;
    }
    let fullData = this.tableRows.map((row) => {
      return row.data;
    });
    return fullData;
  }

  //[外部控制]-取得表格內所有選取的Row
  getSelected() {
    return;
  }

  //[外部控制]-放入資料
  setData(dataArr) {
    this.data = dataArr;
    this.dataCounts = this.data.length;
    this._render();
  }

  //[外部控制]-修改對應Row資料
}

//TableHeader 表頭
class TableHeader extends BaseComponent {
  constructor(cols, selection) {
    const headerElem = document.createElement("thead");
    super(headerElem);
    this.UItype = "TableHeader";
    this.cols = cols;
    this.selection = this._checkSelection(selection);
    this._init();
  }

  //初始化
  _init() {
    this._render();
  }

  _render() {
    // let headerRow = new TableRow(this.cols, 0, this.selection, this.UItype);
    // this._elem.appendChild(headerRow._elem);
    const tr = document.createElement("tr");
    const main = document.createDocumentFragment();
    if (this.selection.UItype === "Checkbox") {
      const th = document.createElement("th");
      th.appendChild(this.selection.getElem());
      tr.appendChild(th);
    }

    for (let col of this.cols) {
      let th = document.createElement("th");
      UIUtils.setAttribute(th, "field", col.field);
      UIUtils.setText(th, col.title);

      main.appendChild(th);
    }
    tr.appendChild(main);
    this._elem.appendChild(tr);
  }

  _checkSelection(selectionType) {
    let cellElem = document.createElement("th");
    if (selectionType === "checkbox") {
      let checkbox = new Checkbox(cellElem, { checked: false });
      return checkbox;
    } else if (selectionType === "radio") {
      return;
    }
  }
}

//TableRow 表列
class TableRow extends BaseComponent {
  constructor(data, index, selection = "checkbox") {
    const rowContainer = document.createElement("tr");
    super(rowContainer);
    this.UItype = "TableRow";
    this.data = data;
    this.selection = this._checkSelection(selection);
    this.cells = this._setTableCells(this.data);
    this.index = ++index;
    this._init();
  }

  _init() {
    let fragment = document.createDocumentFragment();
    if (this.selection) fragment.appendChild(this.selection.container);
    for (let cell of this.cells) {
      fragment.appendChild(cell.getElem());
    }
    this._elem.appendChild(fragment);
    UIUtils.setAttribute(this._elem, "index", this.index);
    this._bindEvent();
  }

  _bindEvent() {
    function checkEvent() {
      let isChecked = this.selection.getChecked();
      if (isChecked) {
        UIUtils.setAttribute(this._elem, "rowSelected");
      } else {
        delete this._elem.dataset.rowselected;
      }
    }
    if (this.selection)
      this.onevent(this.selection.getElem(), "change", checkEvent.bind(this));
  }

  _checkSelection(selectionType) {
    let cellElem = document.createElement("td");
    if (selectionType === "checkbox") {
      let checkbox = new Checkbox(cellElem, { checked: false });
      return checkbox;
    } else if (selectionType === "radio") {
      return;
    }
  }
  _setTableCells(data) {
    let cells = Object.values(data).map((value) => {
      return new TableCell(value);
    });
    return cells;
  }
}

//TableCell 資料格
class TableCell extends BaseComponent {
  constructor(dataValue) {
    const td = document.createElement("td");
    super(td);
    this.UItype = "TableCell";
    this.dataValue = dataValue;
    this._init();
  }

  _init() {
    if (this.dataValue.field) {
      UIUtils.setText(this._elem, this.dataValue.title);
    } else {
      UIUtils.setText(this._elem, this.dataValue);
    }
  }
}

//Pagination 分頁元件
//! 未來要獨自拆出檔案
class Pagination extends BaseComponent {
  constructor(counts) {
    const componentContainer = document.createElement("div");
    super(componentContainer);
    this.UItype = "Pagination";
  }
}

//Skeleton 元件
//! 未來要獨自拆出檔案
export class Skeleton extends BaseComponent {
  constructor(options) {
    let container;
    switch (options.type) {
      case "table":
        container = document.createElement("tr");
        break;
      case "text":
        break;
      case "img":
        break;
      default:
        container = document.createElement("div");
    }
    super(container);
    this.UItype = 'Skeleton';
    this.options = options;
    this._render();
  }

  _render() {
    UIUtils.addClass(this._elem, ["skeleton"]);
    this.defineType(this.options.type, this.options?.colNum);
  }

  defineType(type, colNum) {
    UIUtils.clearClass(this._elem, ["skeleton"]);
    switch (type) {
      case "table":
        UIUtils.addClass(this._elem, ["table-skeleton"]);
        this._elem.innerHTML = `
          <td colspan='${colNum}' class="shadow-sm animate-pulse">
              <div class="flex items-center justify-between">
                  <div>
                      <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                  <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
              </div>
              <div class="flex items-center justify-between pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                  <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
              </div>
              <div class="flex items-center justify-between pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                  <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
              </div>
              <span class="sr-only">Loading...</span>
          </td>`;
        break;
      case "text":
        UIUtils.addClass(this._elem, ["text-skeleton"]);
        this._elem.innerHTML = `
          <div role="status" class="max-w-sm animate-pulse">
              <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
              <span class="sr-only">Loading...</span>
          </div>`;
        break;
      case "img":
        UIUtils.addClass(this._elem, ["img-skeleton"]);
        this._elem.innerHTML = `
          <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
              <svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
            </svg>
              <span class="sr-only">Loading...</span>
          </div>`;
        break;
    }
  }

  show() {
    UIUtils.removeClass(this._elem, ["hidden"]);
  }

  hide() {
    UIUtils.addClass(this._elem, ["hidden"]);
  }

}

//掛到全域window上供外部使用
window.Table = Table;
