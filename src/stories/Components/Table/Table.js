import {
  BaseComponent,
  Dom,
  findElem, defineTypeof, dataSorter
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
  tools: ["group", "exports", "print", "search"],
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
  maxWidth: undefined,
  minWidth: undefined
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
    this._cache = dataArr?.map((data, i) => Object.assign({}, { index: i + 1, data: data }));
    this._data = this._cache ? JSON.parse(JSON.stringify(this._cache)) : [];
    this.dataCounts = this.data?.length || 0;

    this._createPagination(); //建立對應分頁元件
    this._init();
  }

  set cache(value) {
    this._cache = value.map((data, i) => Object.assign({}, { index: i + 1, data: data }));
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

    this._render();
    this._bindEvent();
  }

  //樣式渲染(UI snpshot)把目前狀態→轉成畫面
  //根據目前的 state 產出畫面結構
  async _render() {
    if (this.dataCounts === 0) {
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
          this.cache = data;
          this.setData(this._cache);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
        this.skeleton.hide();
        // this.showError();
      }
    } else if (this.dataCounts > 0) {
      this._pagination.renderPage(this.dataCounts); //更新pagination資料數量
      // this.selectedRows = {};
      this._showRows();//渲染部分TableRow
    } else {
      this._showEmpty();
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
    this.callbacks = [];

    //檢查該row是否已經在cache內
    this.onevent(
      this.tableBody,
      "click",
      function (e) {
        e.stopPropagation();
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
        this.restoreUIstate();

        const targetData = this.getRowData(targetRowIndex).data;
        this.callbacks.forEach(fn => fn.call(targetData));

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
        case 'search':
          const searchGroup = document.createElement("div");
          Dom.addClass(searchGroup, ["table-search"]);
          const searchInput = document.createElement("input");
          searchInput.type = 'text';

          btn = Dom.setButtons({
            classes: ["btn-sm", "outline-btn", "relative"],
            icon: './search.svg',
            handler: (e) => {
              e.stopImmediatePropagation();
              if (e.target === btn) {
                console.log(searchInput.value, this);
                this.searchInFilter(searchInput.value);
              }
            }
          });
          searchGroup.append(searchInput);
          toolBar.appendChild(searchGroup);
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
    if (rule === 'none') {
      this._data = [...this._cache];
    } else {
      //TODO 判斷rule資料型別，如果是function則作為sortFunc使用
      this._data = dataSorter({ key: field, rule: rule, data: this.data });
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
    // console.log("showRow's pageData:", pageData);
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
  //[外部控制]-指定點擊row觸發的函式
  on(callbackFn) {
    this.callbacks.push(callbackFn);
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

  //[外部控制]-取得指定列資料
  getRowData(index) {
    return this.data.filter((row) => row.index === index)[0];
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

  //[外部控制]-關鍵字過濾
  searchInFilter(keyWord) {
    if (keyWord === '') { this.setData(this._cache); return; };
    const searchedData = this.getFiltedRows((rowData) => {
      if (Object.values(rowData).join("").includes(keyWord)) {
        return rowData;
      }
    });

    this.setData(searchedData);
  }

  //[外部控制]-取得指定過濾條件DataRow
  getFiltedRows(fn) {
    let filtedDataRow = this._cache.filter(obj => fn(obj.data));
    return filtedDataRow;
  }

  //[外部控制]-直接放入資料
  setData(dataArr) {
    // this._cache = dataArr.map((data, i) => Object.assign({}, { index: i + 1, data: data }));
    this._data = dataArr ? JSON.parse(JSON.stringify(dataArr)) : [];
    this.dataCounts = this.data.length;
    this._pagination.renderPage(this.dataCounts); //更新pagination資料數量


    this._showRows();//渲染部分TableRow
    this._render();

    return this;
  }

  //[外部控制]-勾選指定列
  setSelected(index) {
    this.selectedRows[index] = true;
    this.restoreUIstate();
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
        // this.restoreUIstate();
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
    const selectedKeys = Object.keys(this.selectedRows);
    selectedKeys.forEach(key => this.selectedRows[key] = false);
    this.restoreUIstate();
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
    let { align, field, title, sort, visible, resize, print, maxWidth, minWidth } = colconfig;
    if (!visible) return;

    let th = document.createElement("th");
    let sortIcon = document.createElement("span");
    Dom.setAttribute(th, DATA_ATTR_FIELD, field);
    Dom.setText(th, title);
    switch (align) {
      case 'right':
        Dom.addClass(th, ["text-right"]);
        break;
      case 'center':
        Dom.addClass(th, ["text-center"]);
        break;
      default:
        Dom.addClass(th, ["text-left"]);
        break;

    }
    if (maxWidth) th.style.maxWidth = `${maxWidth}px`;
    if (minWidth) th.style.minWidth = `${minWidth}px`;
    if (sort) {
      if (defineTypeof(sort, 'func')) {
        Dom.setAttribute(th, DATA_ATTR_SORT, 'custom'); //初始沒有排序
        th.setAttribute("aria-sort", "none");//for accessibility
      } else {
        const sortAttr = defineTypeof(sort, 'boolean') ? 'none' : sort;
        Dom.setAttribute(th, DATA_ATTR_SORT, sortAttr);
        th.setAttribute("aria-sort", sortAttr);
        sortIcon.innerHTML += `<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 17.25C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H11C10.5858 18.75 10.25 18.4142 10.25 18C10.25 17.5858 10.5858 17.25 11 17.25H14ZM16 13.25C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75H11C10.5858 14.75 10.25 14.4142 10.25 14C10.25 13.5858 10.5858 13.25 11 13.25H16ZM18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H11C10.5858 10.75 10.25 10.4142 10.25 10C10.25 9.58579 10.5858 9.25 11 9.25H18ZM21 5.25C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H11C10.5858 6.75 10.25 6.41421 10.25 6C10.25 5.58579 10.5858 5.25 11 5.25H21Z" fill="currentColor"/>
<path d="M4.24999 10.7617V15C4.24999 15.4142 4.58578 15.75 4.99999 15.75C5.4142 15.75 5.74999 15.4142 5.74999 15V10.7617C5.83248 10.875 5.9131 10.9879 5.9912 11.0967L5.9958 11.1031C6.1467 11.3133 6.30972 11.5404 6.43847 11.6855C6.71335 11.9954 7.18818 12.0239 7.49804 11.749C7.80761 11.4742 7.83604 11.0002 7.56151 10.6904C7.49513 10.6156 7.38199 10.4613 7.20995 10.2217L7.19283 10.1978C7.0366 9.98019 6.84876 9.71852 6.65526 9.46875C6.45751 9.2135 6.23286 8.94285 6.00487 8.73047C5.89083 8.62424 5.75714 8.51521 5.60937 8.42871C5.46887 8.34647 5.25683 8.25 4.99999 8.25C4.74316 8.25 4.53111 8.34647 4.39062 8.42871C4.24284 8.51521 4.10915 8.62424 3.99511 8.73047C3.76712 8.94285 3.54247 9.2135 3.34472 9.46875C3.14409 9.72771 2.94956 9.99947 2.79003 10.2217C2.61799 10.4613 2.50485 10.6156 2.43847 10.6904C2.16394 11.0002 2.19237 11.4742 2.50194 11.749C2.8118 12.0239 3.28663 11.9954 3.56151 11.6855C3.69026 11.5403 3.85328 11.3133 4.00418 11.1031L4.00878 11.0967C4.08689 10.9879 4.1675 10.875 4.24999 10.7617Z" fill="currentColor"/>
</svg>
`;
        th.appendChild(sortIcon);
      };

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

    // th.appendChild(td);

    //add sorting handler
    function setSortCursor(e) {
      e.stopPropagation();
      const otherTh = this.getElem().querySelectorAll("th");
      otherTh.forEach(th => {
        if (th !== e.currentTarget && th.dataset) {
          Dom.setAttribute(th, DATA_ATTR_SORT, "none");
          th.setAttribute("aria-sort", "none");
        }
      });
      const field = e.currentTarget.dataset.field;
      const sort = e.currentTarget.dataset.sort;
      if (!sort) return;

      let ariaSort = e.currentTarget.getAttribute("aria-sort");
      let tableSortWith, updateSort;
      switch (sort) {
        case "ascending":
          updateSort = 'descending';
          break;
        case "descending":
          updateSort = 'none';
          break;
        case "custom":
          updateSort = 'custom';
          tableSortWith = this.cols.find((col) => col.field === field).sort;
          break;
        default:
          updateSort = 'ascending';
          break;
      }
      Dom.setAttribute(e.currentTarget, DATA_ATTR_SORT, updateSort);//set to the toggle one.
      e.currentTarget.setAttribute("aria-sort", updateSort);
      this.table._rowSort(field, updateSort);
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