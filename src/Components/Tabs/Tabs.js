import "./Tabs.css";
import { defineTypeof } from "../../Utils/Utils";
import { Dom, findElem } from "../../Utils/Dom";
import { BaseComponent } from "../BaseCompo";

var defaultTabsConfig = {
  orientation: 'vertical',//horizontal,vertical
  placement: 'top',//start,end,top,bottom
  varient: '',
  theme: 'var(--color-theme-primary)'
};

export class Tabs extends BaseComponent {
  constructor(config, tabs) {
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('tabs');
    tabsContainer.setAttribute("role", "tablist");
    tabsContainer.setAttribute("tabindex", "0 ");
    super(tabsContainer, config.theme);
    this.UItype = "Tabs";
    this._config = Object.assign({}, defaultTabsConfig, config);
    this.tablist = tabs.map((tab, index) => new TabItem(tab, index));
    this.panel = new Panel(tabs.reduce((acc, cur) => {
      let result = cur.content;
      return acc.concat(result);
    }, []));
    this.activeTabIndex = this._checkActive(tabs);
    this._createTabs();
    this._bindEvent();
    console.log(this);
  }

  _checkActive(tabs) {
    let activeIndex = tabs.findIndex((tab) => tab.active);
    return activeIndex < 0 ? 1 : ++activeIndex;
  }
  _createTabs() {
    Dom.setProp(this.el, '--theme', this._theme);
    const isVertical = this._config.orientation === 'vertical';
    const isFront = this._config.placement === 'start' || this._config.placement === 'top';

    if (!isVertical) {//水平樣式時
      this.el.classList.add("flex");
      if (!isFront) {
        this.el.classList.add("flex-row-reverse");
      }
    } else {
      if (!isFront) {
        this.el.classList.add("flex-col-reverse");
      } else {
        this.el.classList.add("flex-col");
      }
    }

    this.setActiveTab(this.activeTabIndex);

    this.el.setAttribute("aria-orientation", this._config.orientation);
    const tablist = document.createElement("div");
    tablist.classList.add("tab-list");
    tablist.append(...this.tablist.map(tab => tab.el));
    this.el.append(tablist, this.panel.el);
  }

  _bindEvent() {
    function switchPanel(e) {
      const target = e.target;
      if (target.role === 'tab') {
        const activeIndex = target.dataset.tabindex;
        this.setActiveTab(activeIndex);
      }
    }
    this.el.addEventListener("click", switchPanel.bind(this));
  }

  setActiveTab(index) {
    this.activeTabIndex = index;

    this.tablist.forEach((tab) => {
      const isSelected = tab.tabIndex == index;
      tab.activeState = isSelected;
      if (isSelected) {
        tab.el.dataset.tabselected = "";
        tab.el.setAttribute("aria-selected", "true");
      } else {
        delete tab.el.dataset.tabselected;
        tab.el.setAttribute("aria-selected", "false");
      }
    });

    this.panel.panels.forEach((panel) => {
      const panelIndex = panel.dataset.panelindex;
      if (index == panelIndex) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");

      }
    });
  }
}

class TabItem extends BaseComponent {
  constructor({ title, content, active }, index) {
    const tab = document.createElement("button");
    super(tab);
    this.UItype = "tab-item";
    this.tabTitle = title;
    this.tabIndex = ++index;
    this.panel = content;
    this.activeState = active;
    this._createTab();
  }

  _createTab() {
    const tab = this.el;
    const tabTitle = document.createElement("div");
    tab.classList.add("tab-item");
    tab.setAttribute("role", "tab");
    tabTitle.textContent = this.tabTitle;
    tabTitle.classList.add("pointer-events-none");
    tab.appendChild(tabTitle);
    tab.setAttribute("data-tabindex", this.tabIndex);

    if (this.activeState) {
      tab.setAttribute("aria-selected", "true");
      tab.setAttribute("data-tabSelected", "");
    }
    return tab;
  }
}

class Panel extends BaseComponent {
  constructor(contentsArr) {
    const panelContainer = document.createElement("div");
    super(panelContainer);
    this.panels = contentsArr.map((content, index) => {
      let panel = document.createElement('div');
      panel.classList.add("panel");
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("data-panelindex", ++index);
      if (content instanceof HTMLElement) {
        panel.appendChild(content);
      } else {
        panel.textContent = content;
      }
      return panel;
    });
    this.contents = contentsArr;
    this._createPanel();
  }
  _createPanel() {
    let panelContainer = this.el;
    panelContainer.classList.add("panel-container");
    panelContainer.append(...this.panels);
    return panelContainer;
  }
}