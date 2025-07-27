/**
 * 工具Functions
 */

export class UIUtils {
  static addClass(element, classes) {
    element.classList.add(...classes);
  }
  static setText(element, text) {
    element.textContent = text;
  }
  static setAttribute(UItype, element, attributeName) {
    element.setAttribute(`data-${UItype}`, attributeName);
  }
}

/**
 * 通用處理傳入參數判斷
 * @param {any[]} args
 * @param {string} tagName 預設的HTMLtag
 * @returns {{element:HTMLElement,options:Object}}
 * 支援使用方式:
 * new Component()
 * new Component({ options })
 * new Component(domElement, { options })
 */
export function defineArgs(args, tagName = "div") {
  let element;
  let options = {};

  if (args[0] instanceof HTMLElement) {
    element = args[0];
    options = args[1] || {};
  } else {
    element = document.createElement(tagName);
    options = args[0] || {};
  }
  return { element, options };
}

/**
 * 父類別
 * 共用原型方法
 */
export class BaseComponent {
  constructor(elem) {
    this._elem = elem; //子類別instance的渲染DOM節點
  }

  _init() {
    this.render();
  }

  render() {}

  // destroy component instance, includes listeners.
  destroy() {}

  //提供可以取得實際渲染DOM節點的入口
  getElem() {
    return this._elem;
  }

  //取得childrenElem節點入口
  // getChild() {
  //     return this.
  // }
}

/**
 * State 控制器
 * @param {any} initialValue
 * @returns {[fn,fn,fn]} - array within 3 functions
 * 回傳陣列裡依序為 :
 * 1. 取得 state 的 method
 * 2. 更新 state 並通知所有監聽者
 * 3. 讓某個函式可以在 state 變動時收到通知
 */
export function bindState(initState) {
  let state = initState;
  const relateListeners = new Set(); //用 set 避免重複加入同樣的監聽函式

  function getState() {
    return state;
  }

  function setState(newState) {
    state = newState;
    for (const listener of relateListeners) {
      listener(state); //把這個 state 傳給所有相關監聽者
    }
  }

  function subscribe(fn) {
    relateListeners.add(fn);
    fn(state); // 初始時先執行一次，取得初始 state
    return () => relateListeners.delete(fn); // 取消綁定避免監聽器疊加
  }

  return [getState, setState, subscribe];
}

/**
 * compare number 工具函式
 * @param {array} - number array
 */
export function compareNum(array) {
  return array[1] > array[0] ? array.reverse() : array;
}
