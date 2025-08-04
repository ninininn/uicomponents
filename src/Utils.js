/**
 * 工具Functions
 */

export class UIUtils {
    static addClass(element, classes) {
        element.classList.add(...classes);
    }
    static removeClass(element, classes) {
        element.classList.remove(...classes);
    }
    static setText(element, text) {
        element.textContent = text;
    }
    static setAttribute(element, attributeName, attributeValue) {
        element.setAttribute(`data-${attributeName}`, attributeValue);
    }
    static setProperty(element, propertyName, propertyValue) {
        element.style.setProperty(propertyName, propertyValue);
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
    constructor(elem, theme) {
        this._elem = elem; //子類別instance的渲染DOM節點
        this._theme = theme;
        this._eventListeners = []; // record eventListeners
    }

    // 資料初始化
    _init() {
        this.render();
    }

    // DOM節點渲染
    render() { }

    // 新增監聽器
    onevent(target, event, handler) {
        //避免重複綁定
        let recordObj = { target, event, handler };
        let checkListeners = this._eventListeners.filter((listener) => {
            return listener.event === event && listener.target === target;
        });

        if (checkListeners.length === 0) {
            target.addEventListener(event, handler);
            this._eventListeners.push(recordObj);
        }
    }

    //移除指定監聽器
    offevent(target, event, handler) {
        this._eventListeners = this._eventListeners.filter((listener) => {
            const removeTarget =
                listener.target === target &&
                listener.event === event &&
                listener.handler === handler;

            if (removeTarget) {
                listener.target.removeEventListener(listener.event, listener.handler);
            }

            return !removeTarget; // 回傳沒有被移除監聽器的事件
        });
    }

    //清除狀態及監聽器
    destroy() {
        this._eventListeners.forEach(({ target, event, handler }) => {
            target.removeEventListener(event, handler);
        });
        this._eventListeners = [];
    }

    //提供可以取得實際渲染DOM節點的入口
    getElem() {
        return this._elem;
    }

    //取得childrenElem節點入口
    // getChild() {
    //     return this.
    // }

    setTheme(themeValue) {
        this._theme = themeValue;
        this.render();
    }
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

/**
 * checkDevice 判斷裝置尺寸 工具函式
 */

export function checkDevice() { }
