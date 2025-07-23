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
export function defineArgs(args, tagName = 'div') {
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
        this._elem = elem;//子類別instance的渲染DOM節點
    }


    init() {
        this.render();
    }

    render() {

    }

    // destroy component instance, includes listeners.
    destroy() {

    }

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
 * 1. 取值method
 * 2. 更改值的方法 method
 * 3. 
 */
export function bindState(initialValue) {
    let value = initialValue;
    const listeners = new Set(); //監聽器記錄列表

    function get() {
        return value;
    }

    function set(newValue) {
        value = newValue;
        for (const listener of listeners) {
            listener(value);
        }
    }

    function subscribe(fn) {
        listeners.add(fn);
        fn(value); // 初始推送一次
        return () => listeners.delete(fn); // 取消綁定
    }

    return [get, set, subscribe];
}
