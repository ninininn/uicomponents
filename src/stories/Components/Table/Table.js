import { BaseComponent, UIUtils, debounce } from "../../../Utils";
import { Checkbox } from "../Checkbox/Checkbox";

export class Table extends BaseComponent {
  constructor(options = {}, dataArr = []) {
    const tableContainer = document.createElement("div");
    const tableElem = document.createElement("table");
    super(tableContainer);
    this.UItype = "Table";
    this.options = { ...this.config, ...options };
    this.tableRows = this._setRows(dataArr);
    this.tableHeader = new TableHeader(this.options.cols, this.options.selection);
    this.tableBody = document.createElement("tbody");
    this.table = tableElem;
    this.dataCounts = this.tableRows.length;
    //TODO cols欄位要作為 context 讓所有子元件能夠共用?
    //TODO this.options.selection 勾選欄位顯示與否
    this._init();
  }

  get config() {
    return {
      id: '',
      elem: null,
      limits: 50,
      name: 'defaultTable',
      classes: ['table-container'],
      cols: [],
      selection: 'checkbox',
    };
  }

  //初始化
  _init() {
    this._render();
    this._bindEvent();
  }

  //樣式渲染
  _render() {
    this.table.appendChild(this.tableHeader.getElem());
    this._elem.appendChild(this.table);

    UIUtils.addClass(this.table, ["table"]);
    UIUtils.addClass(this._elem, this.options.classes);
    this.table.appendChild(this.tableBody);

    let count = 0;
    for (let row of this.tableRows) {
      count++;
      if (count <= this.options.limits) {
        this.tableBody.appendChild(row.getElem());
      }
    }
  }

  //事件綁定
  _bindEvent() {

  }

  //設定表列資料
  _setRows(arr, selection) {
    let tableRows = arr.map((dataObj, index) => {
      return new TableRow(dataObj, index, selection);
    });

    return tableRows;
  }


  //[外部控制]-設定表格尺寸
  //!如果超過max-width,max-height則直接用max-width/height
  setSize(width, height) {
    UIUtils.addClass([`w-[${width}px]`, `h-[${height}px]`]);
  }

  //[外部控制]-取得表格所有資料
  getTableData() {
    let fullData = this.tableRows.map((row) => {
      return row.data;
    });
    return fullData;
  }

  //[外部控制]-取得表格內所有選取的Row
  getSelected() {
    return;
  }
}

//TableHeader 表頭
class TableHeader extends BaseComponent {
  constructor(cols, selection) {
    const headerElem = document.createElement("thead");
    super(headerElem);
    this.UItype = "TableHeader";
    this.cols = cols;
    this.selection = selection;
    this._init();
  }

  //初始化
  _init() {
    let headerRow = new TableRow(this.cols, 0, this.selection, this.UItype);
    const main = document.createDocumentFragment();

    // for (let col of this.cols) {
    //   let th = document.createElement("th");
    //   UIUtils.setAttribute(th, "field", col.field);
    //   UIUtils.setText(th, col.title);

    //   main.appendChild(th);
    // }
    main.appendChild(headerRow._elem);
    this._elem.appendChild(main);
  }
}

//TableRow 表列
class TableRow extends BaseComponent {
  constructor(data, index, selection = 'checkbox', uitype) {
    const rowContainer = document.createElement("tr");
    super(rowContainer);
    this.UItype = "TableRow";
    this.data = data;
    this.selection = this._checkSelection(selection, uitype);
    this.cells = this._setTableCells(this.data, uitype);
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
    if (this.selection) this.onevent(this.selection.getElem(), "change", checkEvent.bind(this));
  }

  _checkSelection(selectionType, uitype) {
    let type = uitype === "TableHeader" ? "th" : "td";
    let cellElem = document.createElement(`${type}`);
    if (selectionType === "checkbox") {
      let checkbox = new Checkbox(cellElem, { checked: false });
      return checkbox;
    } else if (selectionType === "radio") {
      return;
    }
  }
  _setTableCells(data, uitype) {
    let type = uitype === "TableHeader" ? "th" : "td";
    let cells = Object.values(data).map((value) => {
      return new TableCell(value, type);
    });
    return cells;
  }
}

//TableCell 資料格
class TableCell extends BaseComponent {
  constructor(dataValue, elemType = "") {
    const td = document.createElement(`${elemType}`);
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

//掛到全域window上供外部使用
window.Table = Table;
