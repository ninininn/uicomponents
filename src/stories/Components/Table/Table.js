import { BaseComponent, UIUtils, debounce, createContext, useContext } from "../../../Utils";
import { Checkbox } from "../Checkbox/Checkbox";
import { Dropdown } from "../Dropdown/Dropdown";

export class Table extends BaseComponent {
  constructor(options = {}, dataArr = []) {
    let tableContainer = document.createElement("div");
    const tableElem = document.createElement("table");
    super(tableContainer, options.theme || 'var(--color-primary-100)');
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

    this._createPagination();//建立對應分頁元件
    this._render();
    this._bindEvent();
  }

  //樣式渲染(UI snpshot)把目前狀態→轉成畫面
  //根據目前的 state 產出畫面結構
  _render() {
    super.setTheme(this.options.theme);
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
      theme: this._theme, currentPage: 1, pageSize: this.options.limits, total: this.dataCounts, handler: (page) => {
        console.log("handler page:", page);
        const start = (page - 1) * this.options.limits;
        const end = start + this.options.limits;
        this._renderRows(start, end);
      }
    });
  }
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
  constructor(data, index, selection = "checkbox", table) {
    const rowContainer = document.createElement("tr");
    super(rowContainer);
    this.UItype = "TableRow";
    this.data = data;
    this.selection = this._checkSelection(selection);
    this.cells = this._setTableCells(this.data, useContext(table));
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
  _setTableCells(data, colConfig) {
    let cells = Object.values(data).map((value, index) => {
      return new TableCell(value, colConfig[index]);
    });
    return cells;
  }
}

//TableCell 資料格
class TableCell extends BaseComponent {
  constructor(dataValue, colConfig) {
    const td = document.createElement("td");
    super(td);
    this.UItype = "TableCell";
    this.dataValue = dataValue;
    this.config = colConfig;
    this._init();
  }

  _init() {
    this._render();
  }
  _render() {
    let { field, align = "left" } = this.config;
    switch (align) {
      case "center":
        UIUtils.addClass(this._elem, ["text-center"]);
        break;
      case "right":
        UIUtils.addClass(this._elem, ["text-right"]);
        break;
      default:
        UIUtils.clearClass(this._elem);
        break;
    }
    UIUtils.setAttribute(this._elem, "field", field);
    UIUtils.setText(this._elem, this.dataValue);

  }
}

//Pagination 分頁元件
//! 未來要獨自拆出檔案
class Pagination extends BaseComponent {
  constructor(config) {
    const componentContainer = document.createElement("div");
    UIUtils.addClass(componentContainer, ["pagination"]);

    super(componentContainer, config.theme || 'var(--color-primary-500)');
    this.UItype = "Pagination";
    this._config = config;
    this.currentPage = config.currentPage || 1;
    this.total = Math.ceil(this._config.total / this._config.pageSize);
    this.pages = this._createPages(this.total, this.currentPage);
    this.handler = config.handler;
    this._init();
  }

  get config() {
    return {
      jump: true,//直接跳轉到指定頁功能否開啟
      initCurrentPage: 1,
      pageSize: 20,//limits單頁顯示數量
      total: null,//資料總數
      ...this._config
    };
  }

  set config(value) {
    this._config = { ...this.config, ...value };
  }

  _init() {
    this._render();
    this._bindEvent();
  }

  _render() {
    console.log(this);
    this._elem.innerHTML = ``;//清空
    super.setTheme(this._theme);
    UIUtils.setProperty(this._elem, "--theme", this._theme);

    let pageFragment = document.createDocumentFragment();
    for (let i = 0; i < this.pages.length; i++) {
      let pageBtn = document.createElement("button");
      pageBtn.type = 'button';
      let isCurrent = this.pages[i].current;
      if (isCurrent) UIUtils.setAttribute(pageBtn, "currentPage");
      UIUtils.addClass(pageBtn, ["page-item"]);
      switch (this.pages[i].type) {
        case 'prev-page':
          UIUtils.setText(pageBtn, '<<');
          UIUtils.setAttribute(pageBtn, 'prev');
          break;
        case 'next-page':
          UIUtils.setText(pageBtn, '>>');
          UIUtils.setAttribute(pageBtn, 'next');
          break;
        case 'start-ellipsis':
          UIUtils.setText(pageBtn, '...');
          pageBtn.disabled = true;
          break;
        case 'end-ellipsis':
          UIUtils.setText(pageBtn, '...');
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
  }

  _bindEvent() {
    function onClickHandler(event) {
      event.stopPropagation();
      if (!event.target.classList.contains("page-item")) return;
      let pageNum = Number(event.target.dataset.page);
      if (!pageNum) {
        pageNum = event.target.hasAttribute("data-prev") ? this.currentPage - 1 : event.target.hasAttribute("data-next") ? this.currentPage + 1 : this.currentPage;
      }

      this.goPage(pageNum);
      this.handler(pageNum);
    }
    super.onevent(this._elem, "click", onClickHandler.bind(this));
  }

  _createPages(totalPage, currentPage) {
    let pageList = [];
    let offset = this._config.pageSize; //要省略的數量
    let prevPageItem = { type: 'prev-page', page: this.currentPage - 1, current: false };
    let nextPageItem = { type: 'next-page', page: this.currentPage + 1, current: false };

    for (let i = 1; i <= totalPage; i++) {
      let type;
      if (i === 1 || i === currentPage || i === totalPage || i === currentPage + 1 || i === currentPage - 1) {
        type = 'page';
      } else if (i <= currentPage + offset) {
        type = 'start-ellipsis';
      } else if (i >= currentPage + offset) {
        type = 'end-ellipsis';
      }

      let pageItem = { type: type || 'page', page: i, current: i === currentPage };
      pageList.push(pageItem);
    }

    console.log(pageList);
    let showPageList = pageList.filter((item, i) => {
      const { type } = item;
      if (type === 'start-ellipsis' && pageList[i + 1].type === 'start-ellipsis') {
        return false;//過濾掉不是最後的start-ellipsis
      }
      if (type === 'end-ellipsis' && pageList[i + 1].type === 'end-ellipsis') {
        return false;//過濾掉不是最後的end-ellipsis
      }
      if (type === 'start-ellipsis' && pageList[i + 1].type === 'end-ellipsis') {
        return false;//過濾掉start-ellipsis接著end-ellipsis(只留start/end其中一種)
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

    let jumpDropdown = new Dropdown("jump-dropdown", pagesOption, {
      filter: true, filterHandler: function filtItem() {
        let inputValue = this.value;
        let ownli = this.parentNode.parentNode.querySelectorAll(".dropdown-item li");
        ownli.forEach((li) => {
          li.textContent.includes(inputValue)
            ? li.classList.remove("hidden")
            : li.classList.add("hidden");
        });
      }
    }, function (e) {
      let pageNum = Number(e.target.value);
      this.goPage(pageNum);
      this.handler(pageNum);
    }.bind(this));
    console.log(jumpDropdown);


    let jumpFragment = document.createDocumentFragment();

    jumpFragment.appendChild(document.createTextNode('前往第'));
    jumpFragment.appendChild(jumpDropdown.containerEl);
    jumpFragment.appendChild(document.createTextNode('頁'));

    jumpCompo.appendChild(jumpFragment);
    this._elem.appendChild(jumpCompo);
  }
  //[外部控制]-生成對應pages
  renderPage(totalPages) {
    this._config = { ...this._config, total: totalPages };
    this.total = Math.ceil(totalPages / this._config.pageSize);
    this.pages = this._createPages(this.total, this.currentPage);
    this._render();
  }

  //[外部控制]-設定指定頁面為當前頁
  setCurrentPage(page) {
    this.currentPage = page;
    this.pages = this._createPages(this.total, this.currentPage);
  }


  //前往指定頁
  goPage(page) {
    console.log(`go ${page} page`);
    if (page < 1 || page > this.total) return;
    this.setCurrentPage(page);//更新currentPage

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
