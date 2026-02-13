import {
  BaseComponent,
  Dom,
  findElem, defineTypeof
} from "../../../Utils/Utils";

import { Checkbox } from "../Checkbox/Checkbox";
import { Pagination } from '../Pagination/Pagination';
import { Printer } from '../../../Utils/Printer';
import { Exporter } from '../../../Utils/Exporter';
import { Reactive } from '../../../Utils/Reactive';

const DATA_ATTR_INDEX = "index";
const DATA_ATTR_ROWSELECTED = "rowselected";
const DATA_ATTR_FIELD = "field";
const DATA_ATTR_SORT = "sort";
const PAGE_LIMITS = [10, 20, 25, 50, 100, 1000];

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
  print: true,
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
    this._config = Object.assign({}, defaultTableConfig, options);
    this.table = tableElem;
    this.tableBody = document.createElement("tbody");
    this.tableHeader = new TableHeader(this);
    let colsCount = this.config.cols.length;
    this.skeleton = new Skeleton({
      type: "table",
      colNum: this.config.selection ? colsCount + 1 : colsCount,
    });

    this._data = dataArr?.map((data, i) => Object.assign({}, { index: i + 1, data: data }));
    this.dataCounts = this.data?.length || 0;

    this._createPagination(); //建立對應分頁元件
    this._init();
  }

  get config() {
    return this._config;
  }

  get data() {
    return this._data;
  }

  async pullData(url) {
    let data = await fetch(url);
    return data;
  }


  //初始化
  //資料改變應在邏輯層進行，然後再呼叫 _render()
  _init() {
    this.table.appendChild(this.tableHeader.getElem());
    //建立工具列
    if (this.config.tools) {
      this._createToolBar(this.config.tools);
    }
    this.selectedRows = {};
    this._render();
    this._bindEvent();
  }

  //樣式渲染(UI snpshot)把目前狀態→轉成畫面
  //根據目前的 state 產出畫面結構
  async _render() {
    super.setTheme(this.config.theme);
    Dom.setProperty(this._elem, "--theme", this._theme);

    //組裝
    this.table.id = this.id;

    this.table.appendChild(this.tableBody);

    //class設定
    Dom.addClass(this.table, ["table"]);
    Dom.addClass(this._elem, this.config.classes);

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


    if (this.data?.length === 0) {
      this._showEmpty();
    }
    if (!this.data && this.config.url) {
      //渲染完成前顯示skeleton;
      this.tableBody.appendChild(this.skeleton.getElem());
      this.skeleton.show();
      try {
        const res = await this.pullData(this.config.url);
        const data = await res.json();
        this.skeleton.hide();

        if (!data || data.length === 0) {
          this._showEmpty();
        } else {
          this.setData(data);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
        this.skeleton.hide();
        // this.showError();
      }
    }
    this.skeleton.hide();
  }

  //空資料
  _showEmpty() {
    this.tableBody.innerHTML = '';

    // Create empty state element
    const emptyRow = document.createElement('tr');
    const emptyCell = document.createElement('td');
    emptyCell.colSpan = this.config.cols?.length || 1;
    emptyCell.className = 'table-empty';
    emptyCell.textContent = this.config.emptyText || 'No data available';

    emptyRow.appendChild(emptyCell);
    this.tableBody.appendChild(emptyRow);
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
        // this.restoreUIstate();

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
          Dom.addClass(popover, ["tools-popover"]);
          popover.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            if (e.target.nodeName === 'INPUT') {
              Dom.toggleClass(popover, ["visible"]);
            }
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

          btn = Dom.setButtons({
            classes: ["btn-sm", "outline-btn", "relative"],
            icon: './filter.svg',
            handler: (e) => {
              e.stopImmediatePropagation();
              if (e.target === btn) {
                Dom.toggleClass(popover, ["visible"]);
              }
            }
          });
          toolBar.appendChild(popover);
          break;
        case 'exports':
          btnHandler = () => {
            const table = this;
            let rowData = table.data;
            if (table.getSelectedRows().length >= 1) {
              rowData = table.getSelectedRows();
            }
            const showCols = table.config.cols.filter(config => config.visible && config.print).map((config) => {
              return { name: config.title };
            });
            const exportData = {
              columns: showCols,
              rows: rowData.map((d) => {
                const item = table.config.cols.filter(config => config.visible && config.print).map((config) => {
                  return config.field;
                }).reduce((obj, key) => {
                  obj[key] = d.data[key];
                  return obj;
                }, {});
                return Object.values(item);
              })
            };

            const exportObj = {
              title: '測試用匯出',
              data: exportData,
              type: 'xslx',
              name: `table-${table.id}`
            };
            Exporter(exportObj);
          };
          btn = Dom.setButtons({ classes: ["btn-sm", "outline-btn"], icon: './export.svg', handler: btnHandler });
          break;
        case 'print':
          btnHandler = () => {
            const tableHeader = this.tableHeader.getElem().cloneNode(true);
            const selectedRows = this.getSelectedRows();
            const table = document.createElement("table");
            let rowFragment = document.createDocumentFragment();
            let printData = this.data;
            //如果有選取rows->印勾選列，沒有任何選取rows=>印全表
            if (selectedRows.length >= 1) {
              printData = selectedRows;
            }
            const showColumns = this.config.cols.filter((config) => config.print !== false && config.visible !== false);
            printData.forEach((row) => {
              const tr = this._createRow(row, row.index, showColumns, true);
              rowFragment.appendChild(tr);
            });
            table.append(tableHeader, rowFragment);
            Printer(table, selectedRows, "table");
          };
          btn = Dom.setButtons({ classes: ["btn-sm", "outline-btn"], icon: './print.svg', handler: btnHandler });
          break;
        default:
          toolBar.appendChild(Dom.setButtons(feature));
          break;
      }
      toolBar.appendChild(btn);
    }
    Dom.addClass(toolBar, ["table-tools"]);
    this.tools = toolBar;
  }

  //建立TableRow
  _createRow(data, index, colConfig, printMode = false) {
    const tr = document.createElement("tr");
    Dom.setAttribute(tr, DATA_ATTR_INDEX, index);

    if (!printMode) {
      if (this.config.selection === 'checkbox') {
        const td = document.createElement("td");
        const checkbox = new Checkbox(td, {
          checked: false,
          theme: this._theme,
        });
        tr.appendChild(checkbox.container);
      }
    }

    colConfig.forEach(config => {
      const td = this._createCell(data, config);
      tr.appendChild(td);
    });

    return tr;
  }

  //建立TableCell
  _createCell(data, config) {
    let { field, align = "left", template, fixed } = config;
    const td = document.createElement("td");
    let textContainer = document.createElement("span");
    switch (align) {
      case "center":
        Dom.addClass(td, ["text-center"]);
        break;
      case "right":
        Dom.addClass(td, ["text-right"]);
        break;
      default:
        Dom.clearClass(td);
        break;
    }

    Dom.setAttribute(td, DATA_ATTR_FIELD, field);
    //TODO template function - 傳入自訂函式來建立內容

    if (data?.data[field]) {
      Dom.setText(textContainer, data.data[field]);
      td.appendChild(textContainer);
    }

    if (template) {
      let transData = data.data[field] || this.data[data.index - 1];
      template.call({ _elem: td }, transData);
    }

    return td;
  }


  //依據欄位排序設定排序
  _rowSort(field, rule) {
    //TODO 判斷rule資料型別，如果是function則作為sortFunc使用
    if (defineTypeof(rule, 'func')) {
      this.data.sort(rule).reverse();
    } else {
      switch (rule) {
        case 'asc'://小到大 升冪
          this.data.sort((x, y) => x.data[field] - y.data[field]);
          break;
        case 'dec'://大到小 降冪
          this.data.sort((x, y) => y.data[field] - x.data[field]);
          break;
        default:
          this.data.sort();
          break;
      }
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
    console.log("showRow's pageData:", pageData);
    let rowFragment = document.createDocumentFragment();

    pageData.forEach((dataObj, i) => {
      //TODO 是否可以轉換table-index、DATA_ATTR_INDEX?依據當前頁切換之類的...?
      const index = ((this.getCurrentPage() - 1) * this.config.limits) + i + 1;
      const tr = this._createRow(dataObj, dataObj.index, colConfig);
      rowFragment.appendChild(tr);
    });

    this.tableBody.innerHTML = ``;
    this.tableBody.appendChild(rowFragment);
    this.restoreUIstate();
    this._elem.scrollTop = 0;
  }

  restoreUIstate() {
    console.log(this);
    const isfullSelected = this.checkPageSelected();
    this.tableHeader.selection.setChecked(isfullSelected);
    const rows = this.tableBody.querySelectorAll("tr[data-index]");
    rows.forEach(row => {
      const index = parseInt(row.dataset.index);
      const isChecked = this.selectedRows[index] || false;

      const checkbox = row.querySelector('input[type="checkbox"]');

      if (checkbox) checkbox.checked = isChecked;
      if (isChecked) {
        Dom.setAttribute(row, DATA_ATTR_ROWSELECTED);
      } else {
        delete row.dataset[DATA_ATTR_ROWSELECTED];
      }
    });

  }


  //[外部控制]-設定表格尺寸
  //!如果超過max-width,max-height則直接用max-width/height
  setSize(width, height = "auto") {
    Dom.setStyle(this._elem, "width", `${width}px`);
    Dom.setStyle(this._elem, "height", `${height}px`);
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
      if (checkedIndex.includes((index + 1).toString())) { return data.data; }
    });
    return selectedData;
  }

  //[外部控制]-取得指定過濾條件DataRow
  getFiltedRows(fn) {
    let filtedDataRow = this._data.filter(fn);
    return filtedDataRow;
  }

  //[外部控制]-直接放入資料
  setData(dataArr) {
    this._data = dataArr.map((data, i) => Object.assign({}, { index: i + 1, data: data }));;
    this.dataCounts = this.data.length;
    this._pagination.renderPage(this.dataCounts); //更新pagination資料數量


    this._showRows();//渲染部分TableRow
    this._render();

    return this;
  }

  //[外部控制]-全選全頁
  selectedFullPage(pageNum, selected = true) {
    const pageData = this.getCurrentData(pageNum);
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
      handler: ({ size }) => {
        this.config.limits = size;
        this.restoreUIstate();
        this._showRows();
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
    //檢查當頁全部rows是否全選(有在SelectedRows記錄內)
    const selectedRows = this.selectedRows;
    const rows = Array.from(this.tableBody.querySelectorAll("tr[data-index]"));
    const isfullSelected = rows.every((row) => row.dataset[DATA_ATTR_INDEX] in selectedRows && selectedRows[row.dataset[DATA_ATTR_INDEX]] === true);
    return isfullSelected;
  }

  //清除所有選取狀態
  clearSelected() {
    let totalPages = this._pagination.total;
    for (let i = 1; i <= totalPages; i++) {
      this.selectedFullPage(i, false);
      this.restoreUIstate();
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
      Dom.setAttribute(th, "print", "print");
      th.appendChild(this.selection.getElem());
      this._elem.querySelector("tr").appendChild(th);
    }
    this._elem.querySelector("tr").appendChild(this._createHead());
    // this._bindEvent();
  }

  _bindEvent() {
    function setSortCursor(e) {
      e.stopPropagation();
      let sort = e.currentTarget.dataset.sort;
      if (sort) {
        let ariaSort = e.currentTarget.getAttribute("aria-sort");
        let tableSortWith, updateSort;
        switch (sort) {
          case "asc":
            updateSort = 'desc';
            tableSortWith = "desc";
            break;
          case "desc":
            updateSort = 'asc';
            tableSortWith = "asc";
            break;
          case "custom":
            updateSort = 'custom';
            tableSortWith = this.cols.find((col) => col.field === e.currentTarget.dataset.field).sort;
            break;
        }
        this.table._rowSort(e.currentTarget.dataset.field, tableSortWith);
        Dom.setAttribute(e.currentTarget, DATA_ATTR_SORT, updateSort);//set to the toggle one.
        e.currentTarget.setAttribute("aria-sort", `${ariaSort === 'ascending' ? 'descending' : 'ascending'}`);//for accessibility
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
    let { field, title, sort, visible, resize, print } = colconfig;
    if (!visible) return;

    let th = document.createElement("th");
    let sortIcon = document.createElement("span");
    Dom.setAttribute(th, DATA_ATTR_FIELD, field);
    Dom.setText(sortIcon, title);
    if (sort) {
      if (defineTypeof(sort, 'func')) {
        Dom.setAttribute(th, DATA_ATTR_SORT, 'custom'); //初始沒有排序
        th.setAttribute("aria-sort", "none");//for accessibility
      } else {
        Dom.setAttribute(th, DATA_ATTR_SORT, sort);
        th.setAttribute("aria-sort", `${sort === 'asc' ? 'ascending' : 'descending'}`);//for accessibility
      }
      sortIcon.innerHTML += `<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 17.25C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H11C10.5858 18.75 10.25 18.4142 10.25 18C10.25 17.5858 10.5858 17.25 11 17.25H14ZM16 13.25C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75H11C10.5858 14.75 10.25 14.4142 10.25 14C10.25 13.5858 10.5858 13.25 11 13.25H16ZM18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H11C10.5858 10.75 10.25 10.4142 10.25 10C10.25 9.58579 10.5858 9.25 11 9.25H18ZM21 5.25C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H11C10.5858 6.75 10.25 6.41421 10.25 6C10.25 5.58579 10.5858 5.25 11 5.25H21Z" fill="currentColor"/>
<path d="M4.24999 10.7617V15C4.24999 15.4142 4.58578 15.75 4.99999 15.75C5.4142 15.75 5.74999 15.4142 5.74999 15V10.7617C5.83248 10.875 5.9131 10.9879 5.9912 11.0967L5.9958 11.1031C6.1467 11.3133 6.30972 11.5404 6.43847 11.6855C6.71335 11.9954 7.18818 12.0239 7.49804 11.749C7.80761 11.4742 7.83604 11.0002 7.56151 10.6904C7.49513 10.6156 7.38199 10.4613 7.20995 10.2217L7.19283 10.1978C7.0366 9.98019 6.84876 9.71852 6.65526 9.46875C6.45751 9.2135 6.23286 8.94285 6.00487 8.73047C5.89083 8.62424 5.75714 8.51521 5.60937 8.42871C5.46887 8.34647 5.25683 8.25 4.99999 8.25C4.74316 8.25 4.53111 8.34647 4.39062 8.42871C4.24284 8.51521 4.10915 8.62424 3.99511 8.73047C3.76712 8.94285 3.54247 9.2135 3.34472 9.46875C3.14409 9.72771 2.94956 9.99947 2.79003 10.2217C2.61799 10.4613 2.50485 10.6156 2.43847 10.6904C2.16394 11.0002 2.19237 11.4742 2.50194 11.749C2.8118 12.0239 3.28663 11.9954 3.56151 11.6855C3.69026 11.5403 3.85328 11.3133 4.00418 11.1031L4.00878 11.0967C4.08689 10.9879 4.1675 10.875 4.24999 10.7617Z" fill="currentColor"/>
</svg>
`;
      this.onevent(th, "click", setSortCursor.bind(this));
    }
    if (resize) {
      let resizer = document.createElement("div");
      Dom.addClass(resizer, ["table-resizer"]);
      resizer.style.height = `${this.table.getElem().offsetHeight}px`;
      th.appendChild(resizer);
    }
    if (!print) {
      Dom.setAttribute(th, "print", "print");
    }

    th.appendChild(sortIcon);

    //add sorting handler
    function setSortCursor(e) {
      e.stopPropagation();
      let sort = e.currentTarget.dataset.sort;
      if (sort) {
        let ariaSort = e.currentTarget.getAttribute("aria-sort");
        let tableSortWith, updateSort;
        switch (sort) {
          case "asc":
            updateSort = 'desc';
            tableSortWith = "desc";
            break;
          case "desc":
            updateSort = 'asc';
            tableSortWith = "asc";
            break;
          case "custom":
            updateSort = 'custom';
            tableSortWith = this.cols.find((col) => col.field === e.currentTarget.dataset.field).sort;
            break;
        }
        this.table._rowSort(e.currentTarget.dataset.field, tableSortWith);
        Dom.setAttribute(e.currentTarget, DATA_ATTR_SORT, updateSort);//set to the toggle one.
        e.currentTarget.setAttribute("aria-sort", `${ariaSort === 'ascending' ? 'descending' : 'ascending'}`);//for accessibility
      }
    }


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
          const currentPage = this.table.getCurrentPage();
          this.table.selectedFullPage(currentPage, checked);

          const rows = this.table.tableBody.querySelectorAll("tr[data-index]");
          rows.forEach((row) => {
            const checkbox = row.querySelector("input[type='checkbox']");
            checkbox.checked = checked;
            if (checked) {
              Dom.setAttribute(row, DATA_ATTR_ROWSELECTED);
            } else {
              delete row.dataset[DATA_ATTR_ROWSELECTED];
            }
          });
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
//     Dom.setAttribute(this._elem, DATA_ATTR_INDEX, this.index);
//     this._render();
//     this._bindEvent();
//   }

//   _render() {
//     let isChecked = this.selection.getChecked();
//     if (isChecked) {
//       Dom.setAttribute(this._elem, DATA_ATTR_ROWSELECTED);
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
//         Dom.addClass(this._elem, ["text-center"]);
//         break;
//       case "right":
//         Dom.addClass(this._elem, ["text-right"]);
//         break;
//       default:
//         Dom.clearClass(this._elem);
//         break;
//     }
//     Dom.setAttribute(this._elem, DATA_ATTR_FIELD, field);
//     //TODO template function - 傳入自訂函式來建立內容
//     if (typeof (this.dataValue) === "string" || typeof (this.dataValue) === "number") {
//       Dom.setText(textContainer, this.dataValue);
//     }
//     this._elem.appendChild(textContainer);

//     if (template) {
//       template.bind(this, this.dataValue)();
//     }
//   }

//   _render() {
//   }
// }


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
    Dom.addClass(this._elem, ["skeleton"]);
    this.defineType(this.options.type, this.options?.colNum);
  }

  defineType(type, colNum) {
    Dom.clearClass(this._elem, ["skeleton"]);
    switch (type) {
      case "table":
        Dom.addClass(this._elem, ["table-skeleton"]);
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
        Dom.addClass(this._elem, ["text-skeleton"]);
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
        Dom.addClass(this._elem, ["img-skeleton"]);
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
    Dom.removeClass(this._elem, ["hidden"]);
  }

  hide() {
    Dom.addClass(this._elem, ["hidden"]);
  }
}

//掛到全域window上供外部使用
window.Table = Table;




Object.defineProperty(Table, 'config', {
  get: function () {
    console.log("getter");
    return this._config;
  },
  set: function (value) {
    console.log("setter:", value);
    // this.render()
  }
});