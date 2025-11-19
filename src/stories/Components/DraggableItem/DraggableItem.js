import { BaseComponent, UIUtils, debounce, createContext, useContext } from "../../../Utils";

export class DraggableItem extends BaseComponent {
  constructor(options = {}, dataArr = []) {
    let tableContainer = document.createElement("div");
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
      container: null,
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
    createContext(this, this.options.cols);
    console.log(window.CoreContexts);
    this._createPagination();//建立對應分頁元件
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
    this.table.id = this.id;
    this.table.appendChild(this.tableHeader.getElem());
    this.table.appendChild(this.tableBody);
    this._elem.appendChild(this.table);
    //class設定
    UIUtils.addClass(this.table, ["table"]);
    UIUtils.addClass(this._elem, this.options.classes);

    //渲染rows
    this._updateRows();//取回全部data
    this._renderRows(0, this.options.limits);
    //判斷是否有帶入容器 
    if (this.options.container) {
      this.options.container.appendChild(this._elem);
      this._elem.after(this._pagination.getElem());

    } else {
      console.error("請指定table要放入的位置");
    }

  }

  //事件綁定
  _bindEvent() { }

  //設定表列資料
  _setRows(arr, selection) {
    let thisTable = this;
    let tableRows = arr.map((dataObj, index) => {
      return new TableRow(dataObj, index, selection, thisTable);
    });

    return tableRows;
  }

  _updateRows() {
    this.tableRows = this._setRows(this.data);
  }

  _renderRows(startIndex, endIndex) {
    if (!this.tableRows) return;
    let showRows = this.tableRows.slice(startIndex, endIndex);
    let rowFragment = document.createDocumentFragment();
    for (let row of showRows) {
      rowFragment.appendChild(row.getElem());
    }
    let currentTr = this.tableBody.querySelectorAll("tr[data-index]");
    for (let row of currentTr) {
      row.remove();
    }
    this.tableBody.appendChild(rowFragment);
    this._elem.scrollTop = 0;
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
    this._pagination.renderPage(this.dataCounts);//更新pagination資料數量
    this._render();
  }


  //[內部]建立對應Pagination元件
  _createPagination() {
    //分頁設定
    this._pagination = new Pagination({
      currentPage: 1, pageSize: this.options.limits, total: this.dataCounts, handler: (page) => {
        console.log("handler page:", page);
        const start = (page - 1) * this.options.limits;
        const end = start + this.options.limits;
        this._renderRows(start, end);
      }
    });
  }
}
