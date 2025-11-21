import { BaseComponent, UIUtils, debounce, createContext, useContext } from "../../../Utils";
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';

export class DraggableItem extends BaseComponent {
  constructor(elem, config = {}) {
    super(elem, config.theme | 'var(--color-primary-200)');
    // const patchedEvents = this._wrapEvents(config);
    this.UItype = "DraggableItem";
    this.sortable = Sortable.create(this._elem, { ...this._config, ...config });
    this._dataMap = config.dataMap || {};
    this._init();
  }

  get _config() {
    return {
      sort: true,
      direction: 'horizontal',
      group: 'draggable-group',
      ghostClass: 'drag-indicator',// Class name for the drop placeholder (default sortable-ghost).
      dataIdAttr: 'data-custom-value',
      filter: '.ignore-dragging',
      chosenClass: "sortable-chosen",  // Class name for the chosen item
      dragClass: "sortable-drag",  // Class name for the dragging item
      ...this.sortable?.options
    };
  }

  //初始化
  //資料改變應在邏輯層進行，然後再呼叫 _render()
  _init() {
    this._render();
    this._bindEvent(this._config);
    console.log(this);
  }

  //樣式渲染(UI snpshot)把目前狀態→轉成畫面
  //根據目前的 state 產出畫面結構
  _render() {

  }

  //事件綁定
  _bindEvent(config) {
    const events = ['onMove', 'onSort', 'onStart', 'onEnd', 'onChoose', 'onFilter', 'onUnchoose', 'onAdd', 'onUpdate', 'onRemove', 'onClone', 'onChange'];
    events.forEach(type => {
      if (config[type]) {
        this.setHandler(type, (evt) => { config[type].call(this, evt); });
      }
    });

    this.setHandler('onEnd', () => {
      this._keys = this.getSortingIndex(); //取得最後排序
    });
  }


  setHandler(type, fn) {
    this.sortable.option(type, fn);
  }

  getChildSort() {
    return this._elem.children;
  }

  getSortingIndex() {
    return this.sortable.toArray();
  }

  getDataMap() {
    return this._keys.map(key => this._dataMap[key]);

  }
  sort(order, animation = true) {
    return this.sortable.sort(order, animation);
  }

}
