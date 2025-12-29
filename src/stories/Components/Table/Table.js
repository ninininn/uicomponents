import {
  BaseComponent,
  UIUtils,
  findElem,
} from "../../../Utils";
import { Checkbox } from "../Checkbox/Checkbox";
import { Dropdown } from "../Dropdown/Dropdown";

const DATA_ATTR_INDEX = "index";
const DATA_ATTR_ROWSELECTED = "rowselected";
const DATA_ATTR_FIELD = "field";
const DATA_ATTR_SORT = "sort";
const PAGE_LIMITS = [10, 20, 25, 50, 100];

var defaultTableConfig = {
  id: "",
  container: null,
  limits: PAGE_LIMITS[2],
  name: "defaultTable",
  classes: ["table-container"],
  cols: [],
  selection: "checkbox",
  tools: ["group", "exports", "print"],
};

var defaultColumnConfig = {
  field: undefined,
  title: undefined,
  align: "left",
  fixed: false,
  sort: undefined,
  template: undefined,
  visible: true,
};

export class Table extends BaseComponent {
  constructor(options = {}, dataArr) {
    let tableContainer = document.createElement("div");
    const tableElem = document.createElement("table");

    tableContainer.appendChild(tableElem);
    //!把初始設定值定義好-cols
    let tableCols = options.cols;
    options.cols = tableCols.map((col) => Object.assign({}, defaultColumnConfig, col));

    super(tableContainer, options.theme = "var(--color-primary-500)");
    this.UItype = "Table";
    this.id = options.id;
    this._config = Object.assign(defaultTableConfig, options);
    this.table = tableElem;
    this.tableBody = document.createElement("tbody");
    this.tableHeader = new TableHeader(this);
    let colsCount = this.config.cols.length;
    this.skeleton = new Skeleton({
      type: "table",
      colNum: this.config.selection ? colsCount + 1 : colsCount,
    });

    this.data = dataArr;
    this.dataCounts = this.data?.length || 0;

    this._createPagination(); //建立對應分頁元件
    this._init();
  }

  get config() {
    return this._config;
  }

  //!取得內部快取
  get cacheKey() {//內部快取key
    return this.UItype + "-" + this.id;
  }


  async pullData(url) {
    let table = this;

    let data = await fetch(url);
    return data;
  }


  //初始化
  //資料改變應在邏輯層進行，然後再呼叫 _render()
  _init() {
    //建立工具列
    if (this.config.tools) {
      this._createToolBar(this.config.tools);
    }

    this._render();
    this._bindEvent();
  }

  //樣式渲染(UI snpshot)把目前狀態→轉成畫面
  //根據目前的 state 產出畫面結構
  _render() {
    super.setTheme(this.config.theme);
    UIUtils.setProperty(this._elem, "--theme", this._theme);

    //TODO 渲染完成前顯示skeleton;
    if (this.dataCounts < 1) {
      this.tableBody.appendChild(this.skeleton.getElem());
      this.skeleton.show();
    } else {
      this.skeleton.hide();
    }

    if (!this.data && this.config.url) {
      this.pullData(this.config.url)
        .then((res) => res.json())
        .then((data) => {
          this.setData(data);
          this.skeleton.hide();
        });
    }

    //組裝
    this.table.id = this.id;
    this.table.appendChild(this.tableHeader.getElem());
    this.table.appendChild(this.tableBody);

    //class設定
    UIUtils.addClass(this.table, ["table"]);
    UIUtils.addClass(this._elem, this.config.classes);

    //判斷是否有容器
    let container = findElem(this.config.container);
    if (!container) {
      container = document.createElement("div");
    }
    if (this.tools) {
      container.appendChild(this.tools);
    }
    container.appendChild(this.getElem());

    //放入分頁元件
    this._elem.after(this._pagination.getElem());
  }

  //事件綁定
  _bindEvent() {
    //click TableHeader的Checkbox時要全選該頁Rows

    //檢查該row是否已經在cache內
    this.onevent(
      this.tableBody,
      "click",
      function (e) {
        let isChecked;
        if (e.target.nodeName === 'INPUT') {
          isChecked = e.target.checked;
        } else {
          const checkbox = e.target.closest("tr[data-index]").querySelector("input[type='checkbox']");
          isChecked = !checkbox.checked;
          checkbox.checked = isChecked;
        }
        let targetRowIndex = parseInt(e.target.closest("tr[data-index]").dataset.index);
        this.selectedRows[targetRowIndex] = isChecked;
        this.restoreState();

        const isfullSelected = this.checkPageSelected();
        this.tableHeader.selection.setChecked(isfullSelected);
      }.bind(this)
    );
  }

  //表格工具列設定
  _createToolBar(toolConfig) {
    let toolBar = document.createElement("div");
    for (let feature of toolConfig) {
      let btn, btnHandler;
      switch (feature) {
        case 'group':
          let popover = document.createElement("div");
          UIUtils.addClass(popover, ["tools-popover"]);
          popover.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            const attr = e.target.getAttribute("name");
          });
          let cols = this.config.cols;
          for (let col of cols) {
            let colsCheck = new Checkbox({
              theme: this._theme,
              checked: col.visible,//!依據初始設定值
              title: col.title,
              handlers: (checked) => {
                col.visible = checked;
                this.tableHeader._updateCol(`${col.field}`, col);
              }
            });
            popover.appendChild(colsCheck.container);
          }

          btn = UIUtils.setButtons({
            classes: ["btn-sm", "outline-btn", "relative"],
            icon: '/filter.svg',
            handler: (e) => {
              e.stopImmediatePropagation();
              if (e.target === btn) {
                UIUtils.toggleClass(popover, ["visible"]);
              }
            }
          });
          toolBar.appendChild(popover);
          break;
        case 'exports':
          btnHandler = () => { };
          btn = UIUtils.setButtons({ classes: ["btn-sm", "outline-btn"], icon: '/export.svg', handler: btnHandler });
          break;
        case 'print':
          btnHandler = () => { };
          btn = UIUtils.setButtons({ classes: ["btn-sm", "outline-btn"], icon: '/print.svg', handler: btnHandler });
          break;
        default:
          toolBar.appendChild(UIUtils.setButtons(feature));
          break;
      }
      toolBar.appendChild(btn);
    }
    UIUtils.addClass(toolBar, ["table-tools"]);
    this.tools = toolBar;
  }

  //建立TableRow
  _createRow(data, index, colConfig) {
    const tr = document.createElement("tr");
    UIUtils.setAttribute(tr, DATA_ATTR_INDEX, index);

    if (this.config.selection === 'checkbox') {
      const td = document.createElement("td");
      const checkbox = new Checkbox(td, {
        checked: false,
        theme: this._theme,
      });
      tr.appendChild(checkbox.container);
    }

    colConfig.forEach(config => {
      const fieldData = data[config.field] || data;
      const td = this._createCell(fieldData, config);
      tr.appendChild(td);
    });

    return tr;
  }

  _createCell(value, config) {
    const td = document.createElement("td");
    let { field, align = "left", template, fixed } = config;
    let textContainer = document.createElement("span");
    switch (align) {
      case "center":
        UIUtils.addClass(td, ["text-center"]);
        break;
      case "right":
        UIUtils.addClass(td, ["text-right"]);
        break;
      default:
        UIUtils.clearClass(td);
        break;
    }

    UIUtils.setAttribute(td, DATA_ATTR_FIELD, field);
    //TODO template function - 傳入自訂函式來建立內容
    if (typeof (value) === "string" || typeof (value) === "number") {
      UIUtils.setText(textContainer, value);
    }
    td.appendChild(textContainer);

    if (template) {
      template.call({ _elem: td }, value);
    }

    return td;
  }


  //依據欄位排序設定排序(只針對當前頁)
  _rowSort(rule, field) {
    switch (rule) {
      case 'asc'://小到大 升冪
        // currentRows.sort((x, y) => x.data[field] - y.data[field]);
        this.data.sort((x, y) => x[field] - y[field]);
        break;
      case 'dec'://大到小 降冪
        // currentRows.sort((x, y) => y.data[field] - x.data[field]);
        this.data.sort((x, y) => y[field] - x[field]);
        break;
    }

    this._showRows();
  }

  //紀錄勾選欄位資料
  //[外部&內部控制]-檢查該row是否有紀錄選取
  _checkRowState(index) {
    let state = this.selected[index];
    return state;
  }

  //渲染指定範圍的rows
  //使用時機:goPage()、_rowSort()
  _showRows() {
    const colConfig = this.config.cols.filter(col => col.visible !== false);
    const pageData = this.getCurrentData();
    let rowFragment = document.createDocumentFragment();

    pageData.forEach((dataObj, i) => {
      const index = ((this.getCurrentPage() - 1) * this.config.limits) + i + 1;

      const tr = this._createRow(dataObj, index, colConfig);
      rowFragment.appendChild(tr);
    });

    this.tableBody.innerHTML = ``;
    this.tableBody.appendChild(rowFragment);
    this.restoreState();
    this._elem.scrollTop = 0;
  }

  restoreState() {
    const isfullSelected = this.checkPageSelected();
    this.tableHeader.selection.setChecked(isfullSelected);
    const rows = this.tableBody.querySelectorAll("tr[data-index]");
    rows.forEach(row => {
      const index = parseInt(row.dataset.index);
      const isChecked = this.selectedRows[index] || false;

      const checkbox = row.querySelector('input[type="checkbox"]');

      if (checkbox) checkbox.checked = isChecked;
      if (isChecked) {
        UIUtils.setAttribute(row, DATA_ATTR_ROWSELECTED);
      } else {
        delete row.dataset[DATA_ATTR_ROWSELECTED];
      }
    });

  }


  //[外部控制]-設定表格尺寸
  //!如果超過max-width,max-height則直接用max-width/height
  setSize(width, height = "auto") {
    UIUtils.setStyle(this._elem, "width", `${width}px`);
    UIUtils.setStyle(this._elem, "height", `${height}px`);
  }

  //[外部控制]-取得表格所有資料
  getTableData() {
    if (!this.data) {
      console.error("No Data Yet!");
    }
  }

  //[外部控制]-取得全表格內所有選取的Row
  getSelectedRows() {
    const checkedIndex = Object.keys(this.selectedRows).filter((key) =>
      this.selectedRows[key] !== false
    );

    const selectedData = this.data.filter((data, index) => {
      if (checkedIndex.includes((index + 1).toString())) { return data; }
    });
    return selectedData;
  }

  //[外部控制]-取得指定過濾條件Rows
  getFiltedRows(fn) {
    let filtedDataRow = this.tableRows.filter(fn);
    return filtedDataRow;
  }

  //[外部控制]-直接放入資料
  setData(dataArr) {
    this.data = dataArr;
    this.dataCounts = this.data.length;
    this._pagination.renderPage(this.dataCounts); //更新pagination資料數量

    this.selectedRows = {};
    this._showRows();//渲染部分TableRow
    this._render();

    return this;
  }

  //[外部控制]-全選全頁
  selectedFullPage(pageNum, selected = true) {
    const pageData = this.getCurrentData(pageNum);
    console.log(pageData);
    pageData.forEach((data, i) => {
      const index = ((pageNum - 1) * this.config.limits) + i + 1;
      this.selectedRows[index] = selected;
    });
    return this;
  }

  //[內部]建立對應Pagination元件
  _createPagination() {
    //分頁設定
    this._pagination = new Pagination({
      theme: this._theme,
      currentPage: 1,
      pageSize: this.config.limits,
      total: this.dataCounts,
      controlPage: this.config.controlPage,
      handler: ({ page, size }) => {
        this.config.limits = size;
        this._showRows();
        this.restoreState();
        //設定HeaderSelected值
        console.log("目前selected的row:", this.getSelectedRows());
      },
    });
  }

  //取得當前頁rows的data資料
  getCurrentData(pageNum = this.getCurrentPage()) {
    // let currentPage = this.getCurrentPage();
    const start = (pageNum - 1) * this.config.limits;
    const end = start + this.config.limits;
    let currentData = this.data.slice(start, end);
    return currentData;
  }

  //取得當前頁面number
  getCurrentPage() {
    return this._pagination.currentPage;
  }

  checkPageSelected() {
    const rows = Array.from(this.tableBody.querySelectorAll("tr[data-index]"));
    const isfullSelected = rows.every((row) => row.dataset[DATA_ATTR_ROWSELECTED] === '');
    return isfullSelected;
  }

  //清除所有選取狀態
  clearSelected() {
    let totalPages = this._pagination.total;
    for (let i = 1; i <= totalPages; i++) {
      this.selectedFullPage(i, false);
      this.restoreState();
      console.log(this);
    }

    this.tableHeader.selection.setChecked(false);
  }
}

//TableHeader 表頭
class TableHeader extends BaseComponent {
  constructor(table) {
    const { cols, selection, theme } = table.config;
    const headerElem = document.createElement("thead");
    const tr = document.createElement("tr");
    headerElem.appendChild(tr);

    super(headerElem, theme);
    this.UItype = "TableHeader";
    this.table = table;
    this.cols = cols;
    this.selection = this._checkSelection(selection);
    this._init();
  }

  //初始化
  _init() {
    if (this.selection.UItype === "Checkbox") {
      const th = document.createElement("th");
      th.appendChild(this.selection.getElem());
      this._elem.querySelector("tr").appendChild(th);
    }
    this._elem.querySelector("tr").appendChild(this._createHead());
    this._bindEvent();
  }

  _bindEvent() {
    function setSortCursor(e) {
      e.stopPropagation();
      if (e.currentTarget.dataset.sort) {
        let sort = e.currentTarget.dataset.sort === 'asc' ? 'dec' : 'asc';
        this.table._rowSort(sort, e.currentTarget.dataset.field);
        UIUtils.setAttribute(e.currentTarget, DATA_ATTR_SORT, sort);
      }
    }
    if (this.cols.some((col) => col.sort)) {
      this.getElem().querySelectorAll("[data-sort]").forEach((th) => {
        this.onevent(th, "click", setSortCursor.bind(this));
      });
    }
  }

  _render() {
    const oldFragment = document.createDocumentFragment();
    const existNodes = this.getElem().querySelectorAll("th");
    oldFragment.append(...existNodes);

    //!把節點放到新的片段中組裝
    const newFragment = document.createDocumentFragment();
    if (this.selection.UItype === "Checkbox") {
      newFragment.appendChild(oldFragment.firstElementChild);
    }
    const existCol = Array.from(existNodes).map((node) => node.dataset.field);

    for (let i = 0; i < this.cols.length; i++) {
      if (this.cols[i].visible) {//如果是可見的欄位，去現有的node找存不存在
        if (existCol.includes(this.cols[i].field)) {
          let node = oldFragment.querySelector(`[data-field=${this.cols[i].field}]`);
          newFragment.appendChild(node);
        } else {
          newFragment.appendChild(this._createCol(this.cols[i]));
        }
      }
    }

    this._elem.querySelector("tr").appendChild(newFragment);
  }

  _createHead() {
    const main = document.createDocumentFragment();
    for (let col of this.cols) {
      if (!col.visible) continue;
      let th = this._createCol(col);
      main.appendChild(th);
    }
    return main;
  }

  _createCol(colconfig) {
    let { field, title, sort, visible } = colconfig;
    if (!visible) return;
    let th = document.createElement("th");
    let sortIcon = document.createElement("span");
    UIUtils.setAttribute(th, DATA_ATTR_FIELD, field);
    UIUtils.setText(sortIcon, title);
    if (sort) {
      UIUtils.setAttribute(th, DATA_ATTR_SORT, sort);
      sortIcon.innerHTML += `<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17.25C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H11C10.5858 18.75 10.25 18.4142 10.25 18C10.25 17.5858 10.5858 17.25 11 17.25H14ZM16 13.25C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75H11C10.5858 14.75 10.25 14.4142 10.25 14C10.25 13.5858 10.5858 13.25 11 13.25H16ZM18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H11C10.5858 10.75 10.25 10.4142 10.25 10C10.25 9.58579 10.5858 9.25 11 9.25H18ZM21 5.25C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H11C10.5858 6.75 10.25 6.41421 10.25 6C10.25 5.58579 10.5858 5.25 11 5.25H21Z" fill="currentColor"/>
<path d="M4.24999 10.7617V15C4.24999 15.4142 4.58578 15.75 4.99999 15.75C5.4142 15.75 5.74999 15.4142 5.74999 15V10.7617C5.83248 10.875 5.9131 10.9879 5.9912 11.0967L5.9958 11.1031C6.1467 11.3133 6.30972 11.5404 6.43847 11.6855C6.71335 11.9954 7.18818 12.0239 7.49804 11.749C7.80761 11.4742 7.83604 11.0002 7.56151 10.6904C7.49513 10.6156 7.38199 10.4613 7.20995 10.2217L7.19283 10.1978C7.0366 9.98019 6.84876 9.71852 6.65526 9.46875C6.45751 9.2135 6.23286 8.94285 6.00487 8.73047C5.89083 8.62424 5.75714 8.51521 5.60937 8.42871C5.46887 8.34647 5.25683 8.25 4.99999 8.25C4.74316 8.25 4.53111 8.34647 4.39062 8.42871C4.24284 8.51521 4.10915 8.62424 3.99511 8.73047C3.76712 8.94285 3.54247 9.2135 3.34472 9.46875C3.14409 9.72771 2.94956 9.99947 2.79003 10.2217C2.61799 10.4613 2.50485 10.6156 2.43847 10.6904C2.16394 11.0002 2.19237 11.4742 2.50194 11.749C2.8118 12.0239 3.28663 11.9954 3.56151 11.6855C3.69026 11.5403 3.85328 11.3133 4.00418 11.1031L4.00878 11.0967C4.08689 10.9879 4.1675 10.875 4.24999 10.7617Z" fill="currentColor"/>
</svg>
`;
    }
    th.appendChild(sortIcon);
    return th;
  }

  //[內部控制]-全選所有Rows的Checkboxes
  _checkSelection(selectionType) {
    let cellElem = document.createElement("th");
    if (selectionType === "checkbox") {
      let checkbox = new Checkbox(cellElem, {
        theme: this._theme,
        checked: false,
        handlers: (checked) => {
          const rows = this.table.tableBody.querySelectorAll("tr[data-index]");
          rows.forEach((row) => {
            const checkbox = row.querySelector("input[type='checkbox']");
            checkbox.checked = checked;
            if (checked) {
              UIUtils.setAttribute(row, DATA_ATTR_ROWSELECTED);
            } else {
              delete row.dataset[DATA_ATTR_ROWSELECTED];
            }
            this.table.selectedRows[row.getAttribute("data-index")] = checked;
          });
          console.log(this.table);
        },
      });
      return checkbox;
    } else if (selectionType === "radio") {
      return;
    }
  }

  _updateCol(field, colSetting) {
    this.cols = this.cols.map((col) => {
      if (col.field === field) {
        return { ...col, ...colSetting };
      } else {
        return col;
      }
    });

    this._render();
    //!重新依據資料showRows
    this.table._showRows();
  }
}

//TableRow 表列
// class TableRow extends BaseComponent {
//   constructor({ data, index, selection = "checkbox", table }) {
//     const rowContainer = document.createElement("tr");
//     super(rowContainer, table._theme);
//     this.UItype = "TableRow";
//     this.data = data;
//     this.table = table;
//     this.selection = this._checkSelection(selection);
//     this.cells = this._setTableCells(this.data, table.config.cols);
//     this.index = index;
//     this._init();
//   }

//   _init() {
//     let fragment = document.createDocumentFragment();
//     if (this.selection) fragment.appendChild(this.selection.container);
//     for (let cell of this.cells) {
//       if (cell.config.visible) fragment.appendChild(cell.getElem());
//     }
//     this._elem.appendChild(fragment);
//     UIUtils.setAttribute(this._elem, DATA_ATTR_INDEX, this.index);
//     this._render();
//     this._bindEvent();
//   }

//   _render() {
//     let isChecked = this.selection.getChecked();
//     if (isChecked) {
//       UIUtils.setAttribute(this._elem, DATA_ATTR_ROWSELECTED);
//     } else {
//       delete this._elem.dataset[DATA_ATTR_ROWSELECTED];
//     }
//   }

//   _bindEvent() {
//     function checkEvent(e) {
//       let isChecked = this.selection.getChecked();
//       this.selection.setChecked(!isChecked);
//       //紀錄checked的row-index放入cache
//       this.table.selectedRows[this.index] = !isChecked;
//       //TODO 點擊時 執行設定好的on();
//       this._render();
//     }

//     if (this.selection)
//       this.onevent(this.getElem(), "click", checkEvent.bind(this));
//   }

//   _checkSelection(selectionType) {
//     let cellElem = document.createElement("td");
//     if (selectionType === "checkbox") {
//       let checkbox = new Checkbox(cellElem, {
//         checked: false,
//         theme: this._theme,
//       });
//       return checkbox;
//     } else if (selectionType === "radio") {
//       return;
//     }
//   }
//   _setTableCells(data, colConfig) {
//     let cells = colConfig.map((config) => {
//       const cellValue = data[config.field];
//       return new TableCell(cellValue || data, config);
//     });
//     return cells;
//   }
// }

//TableCell 資料格
// class TableCell extends BaseComponent {
//   constructor(dataValue, colConfig) {
//     const td = document.createElement("td");
//     super(td);
//     this.UItype = "TableCell";
//     this.dataValue = dataValue;
//     this.config = Object.assign({}, defaultColumnConfig, colConfig);
//     this._init();
//   }

//   _init() {
//     let { field, align = "left", template, fixed, visible } = this.config;
//     if (!visible) return;
//     let textContainer = document.createElement("span");
//     switch (align) {
//       case "center":
//         UIUtils.addClass(this._elem, ["text-center"]);
//         break;
//       case "right":
//         UIUtils.addClass(this._elem, ["text-right"]);
//         break;
//       default:
//         UIUtils.clearClass(this._elem);
//         break;
//     }
//     UIUtils.setAttribute(this._elem, DATA_ATTR_FIELD, field);
//     //TODO template function - 傳入自訂函式來建立內容
//     if (typeof (this.dataValue) === "string" || typeof (this.dataValue) === "number") {
//       UIUtils.setText(textContainer, this.dataValue);
//     }
//     this._elem.appendChild(textContainer);

//     if (template) {
//       template.bind(this, this.dataValue)();
//     }
//   }

//   _render() {
//   }
// }

//Pagination 分頁元件
//! 未來要獨自拆出檔案
const DATA_ATTR_CUR_PAGE = "currentPage";
const DATA_ATTR_PREV = "prev";
const DATA_ATTR_NEXT = "next";

var defaultPaginatioConfig = {
  jump: true, //直接跳轉到指定頁功能否開啟
  initCurrentPage: 1,
  pageSize: PAGE_LIMITS[1], //limits單頁顯示數量
  total: 0, //資料總數
  controlPage: false,//是否可以操作每頁顯示數量
};

class Pagination extends BaseComponent {
  constructor(config) {
    const componentContainer = document.createElement("div");
    UIUtils.addClass(componentContainer, ["pagination"]);

    super(componentContainer, config.theme = "var(--color-primary-500)");
    this.UItype = "Pagination";
    this._config = Object.assign(defaultPaginatioConfig, config);
    this.currentPage = config.currentPage || 1;
    this.total = Math.ceil(this.config.total / this.config.pageSize) || 0;
    this.pages = this._createPages(this.total, this.currentPage);
    this.handler = config.handler;
    this._init();
  }

  get config() {
    return this._config;
  }

  _init() {
    this._render();
    this._bindEvent();
  }

  _render() {
    this._elem.innerHTML = ``; //清空
    super.setTheme(this._theme);
    UIUtils.setProperty(this._elem, "--theme", this._theme);

    let pageFragment = document.createDocumentFragment();
    for (let i = 0; i < this.pages.length; i++) {
      let pageBtn = document.createElement("button");
      pageBtn.type = "button";
      let isCurrent = this.pages[i].current;
      if (isCurrent) UIUtils.setAttribute(pageBtn, DATA_ATTR_CUR_PAGE);
      UIUtils.addClass(pageBtn, ["page-item"]);
      switch (this.pages[i].type) {
        case "prev-page":
          UIUtils.setText(pageBtn, "<<");
          UIUtils.setAttribute(pageBtn, DATA_ATTR_PREV);
          break;
        case "next-page":
          UIUtils.setText(pageBtn, ">>");
          UIUtils.setAttribute(pageBtn, DATA_ATTR_NEXT);
          break;
        case "start-ellipsis":
          UIUtils.setText(pageBtn, "...");
          pageBtn.disabled = true;
          break;
        case "end-ellipsis":
          UIUtils.setText(pageBtn, "...");
          pageBtn.disabled = true;
          break;
        default:
          UIUtils.setText(pageBtn, this.pages[i].page);
          pageBtn.dataset.page = this.pages[i].page;
          break;
      }

      if (this.pages[i].page < 1 || this.pages[i].page > this.total) {
        this.pages[i].page = this.currentPage;
        pageBtn.disabled = true;
      }
      pageFragment.appendChild(pageBtn);
    }
    this._elem.appendChild(pageFragment);

    //跳轉至指定頁功能
    if (this.config.jump) this._createJumpCompo();
    if (this.config.controlPage) this._createPageControl();
  }

  _bindEvent() {
    function onClickHandler(event) {
      event.stopPropagation();
      if (!event.target.classList.contains("page-item")) return;
      let pageNum = Number(event.target.dataset.page);
      if (!pageNum) {
        pageNum = event.target.hasAttribute("data-prev")
          ? this.currentPage - 1
          : event.target.hasAttribute("data-next")
            ? this.currentPage + 1
            : this.currentPage;
      }

      this.goPage(pageNum);
      this.handler({ page: pageNum, size: this.config.pageSize });
    }
    super.onevent(this._elem, "click", onClickHandler.bind(this));
  }

  _createPages(totalPage, currentPage) {
    let pageList = [];
    let offset = this.config.pageSize; //要省略的數量
    let prevPageItem = {
      type: "prev-page",
      page: this.currentPage - 1,
      current: false,
    };
    let nextPageItem = {
      type: "next-page",
      page: this.currentPage + 1,
      current: false,
    };

    for (let i = 1; i <= totalPage; i++) {
      let type;
      if (
        i === 1 ||
        i === currentPage ||
        i === totalPage ||
        i === currentPage + 1 ||
        i === currentPage - 1
      ) {
        type = "page";
      } else if (i <= currentPage + offset) {
        type = "start-ellipsis";
      } else if (i >= currentPage + offset) {
        type = "end-ellipsis";
      }

      let pageItem = {
        type: type || "page",
        page: i,
        current: i === currentPage,
      };
      pageList.push(pageItem);
    }

    let showPageList = pageList.filter((item, i) => {
      const { type } = item;
      if (
        type === "start-ellipsis" &&
        pageList[i + 1].type === "start-ellipsis"
      ) {
        return false; //過濾掉不是最後的start-ellipsis
      }
      if (type === "end-ellipsis" && pageList[i + 1].type === "end-ellipsis") {
        return false; //過濾掉不是最後的end-ellipsis
      }
      if (
        type === "start-ellipsis" &&
        pageList[i + 1].type === "end-ellipsis"
      ) {
        return false; //過濾掉start-ellipsis接著end-ellipsis(只留start/end其中一種)
      }
      return true;
    });

    return [prevPageItem, ...showPageList, nextPageItem];
  }

  _createJumpCompo() {
    if (this.total <= 0) return;
    let jumpCompo = document.createElement("div");
    UIUtils.addClass(jumpCompo, ["pagination-jump"]);
    let pagesOption = [];
    for (let i = 1; i <= this.total; i++) {
      let opt = { value: i, text: i };
      if (i === this.currentPage) opt.selected = true;
      pagesOption.push(opt);
    }

    let jumpDropdown = new Dropdown(
      "jump-dropdown",
      pagesOption,
      {
        filter: true,
        filterHandler: function filtItem() {
          let inputValue = this.value;
          let ownli =
            this.parentNode.parentNode.querySelectorAll(".dropdown-item li");
          ownli.forEach((li) => {
            li.textContent.includes(inputValue)
              ? li.classList.remove("hidden")
              : li.classList.add("hidden");
          });
        },
      },
      function (e) {
        let pageNum = Number(e.target.value);
        this.goPage(pageNum);
        this.handler({ page: pageNum, size: this.config.pageSize });
      }.bind(this)
    );

    let jumpFragment = document.createDocumentFragment();

    jumpFragment.appendChild(document.createTextNode("前往第"));
    jumpFragment.appendChild(jumpDropdown.containerEl);
    jumpFragment.appendChild(document.createTextNode(`/${this.total} 頁`));

    jumpCompo.appendChild(jumpFragment);
    this._elem.appendChild(jumpCompo);
  }

  _createPageControl() {
    let pageController = document.createElement("div");
    UIUtils.addClass(pageController, ["pagination-jump"]);
    let pagesOption = [];
    for (let i = 0; i < PAGE_LIMITS.length; i++) {
      let opt = { value: PAGE_LIMITS[i], text: `${PAGE_LIMITS[i]}條` };
      if (PAGE_LIMITS[i] === this.config.pageSize) {
        opt.selected = true;
      };
      pagesOption.push(opt);
    }

    let tablepageDropdown = new Dropdown(
      "table-page-dropdown",
      pagesOption, null,
      function (e) {
        let pageSize = Number(e.target.value);
        this._config.pageSize = pageSize;
        this.renderPage(this._config.total);
        this.goPage(1);
        this.handler({ page: 1, size: pageSize });
      }.bind(this)
    );

    let pageFragment = document.createDocumentFragment();

    pageFragment.appendChild(document.createTextNode("每頁顯示"));
    pageFragment.appendChild(tablepageDropdown.containerEl);
    pageFragment.appendChild(document.createTextNode(` / 頁`));

    pageController.appendChild(pageFragment);
    this._elem.appendChild(pageController);
  }
  //[外部控制]-生成對應pages
  renderPage(totalPages) {
    this._config = { ...this.config, total: totalPages };
    this.total = Math.ceil(totalPages / this._config.pageSize);
    this.pages = this._createPages(this.total, this.currentPage);
    this._render();
  }

  //[外部控制]-設定指定頁面為當前頁
  setCurrentPage(page) {
    this.currentPage = page;
    this.pages = this._createPages(this.total, this.currentPage);
    this._config = { ...this.config, currentPage: page };
  }

  //前往指定頁
  goPage(page) {
    console.log(`go ${page} page`);
    if (page < 1 || page > this.total) return;
    this.setCurrentPage(page); //更新currentPage

    this._render();
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
    this.UItype = "Skeleton";
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
