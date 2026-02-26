import {
  BaseComponent,
  Dom,
  findElem, defineTypeof
} from "../../../Utils/Utils";

import { Checkbox } from "../Checkbox/Checkbox";
import { Dropdown } from "../Dropdown/Dropdown";
import { Notification } from '../Notification/Notification';

//Pagination 分頁元件
const PAGE_LIMITS = [10, 20, 25, 50, 100, 1000];
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

export class Pagination extends BaseComponent {
  constructor(config) {
    const componentContainer = document.createElement("div");
    Dom.addClass(componentContainer, ["pagination"]);

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
    Dom.setProperty(this._elem, "--theme", this._theme);

    let pageFragment = document.createDocumentFragment();
    for (let i = 0; i < this.pages.length; i++) {
      let pageBtn = document.createElement("button");
      pageBtn.type = "button";
      let isCurrent = this.pages[i].current;
      if (isCurrent) Dom.setAttribute(pageBtn, DATA_ATTR_CUR_PAGE);
      Dom.addClass(pageBtn, ["page-item"]);
      switch (this.pages[i].type) {
        case "prev-page":
          Dom.setText(pageBtn, "<<");
          Dom.setAttribute(pageBtn, DATA_ATTR_PREV);
          break;
        case "next-page":
          Dom.setText(pageBtn, ">>");
          Dom.setAttribute(pageBtn, DATA_ATTR_NEXT);
          break;
        case "start-ellipsis":
          Dom.setText(pageBtn, "...");
          pageBtn.disabled = true;
          break;
        case "end-ellipsis":
          Dom.setText(pageBtn, "...");
          pageBtn.disabled = true;
          break;
        default:
          Dom.setText(pageBtn, this.pages[i].page);
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
    Dom.addClass(jumpCompo, ["pagination-jump"]);
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
    Dom.addClass(pageController, ["pagination-jump"]);
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
    if (page < 1 || page > this.total) return;
    this.setCurrentPage(page); //更新currentPage

    this._render();
  }
}