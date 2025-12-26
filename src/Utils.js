// import { signal, computed, effect } from '@preact/signals-core';

import { cache } from "react";

/**
 * 工具Functions
 */

export class UIUtils {
    static setStyle(element, property, styleValue) {
        element.style[property] = styleValue;
    }
    static addClass(element, classes) {
        element.classList.add(...classes);
    }
    static toggleClass(element, classes) {
        element.classList.toggle(...classes);
    }
    static removeClass(element, classes) {
        element.classList.remove(...classes);
    }
    //清除所有class(除了指定的以外)
    static clearClass(element, excludeClasses = []) {
        let newClassName = [];
        for (let cls of excludeClasses) {
            newClassName.push(cls);
        }
        element.className = newClassName.join(" ");
    }
    static setText(element, text) {
        element.textContent = text;
    }
    static setTextnode(element, text) {
        let textNode = document.createTextNode(text);
        element.appendChild(textNode);
    }
    static setAttribute(element, attributeName, attributeValue = "") {
        element.setAttribute(`data-${attributeName}`, attributeValue);
    }
    static removeAttribute(element, attributeName) {
        element.removeAttribute(attributeName);
    }
    static setProperty(element, propertyName, propertyValue) {
        element.style.setProperty(propertyName, propertyValue);
    }

    static setButtons(btnConfig) {
        let btn = document.createElement("button");
        let { classes = [], icon, text, handler } = btnConfig;
        if (icon) {
            switch (icon) {
                case "close":
                    classes.push("icon-btn");
                    btn.innerHTML = `<svg class="icon text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>`;
                    break;
                default:
                    classes.push("icon-text-btn");
                    let img = document.createElement("img");
                    UIUtils.addClass(img, ["icon"]);
                    img.src = `${icon}`;
                    btn.appendChild(img);
                    break;
            }
        }
        //設定按鈕文字
        if (text) UIUtils.setTextnode(btn, text);
        //設定按鈕其他相關
        UIUtils.addClass(btn, ["btn", ...classes]);
        btn.type = "button";

        if (handler) {
            btn.addEventListener("click", function (e) {
                handler.call(btn, e, btnConfig);
            });
        }

        return btn;
    }

    static setBtnGroup(btns, container) {
        let buttons = btns.map((btnConfig) => UIUtils.setButtons(btnConfig));
        if (container) {
            container.append(...buttons);
            return container;
        }
        return buttons;
    }

    static setPosition(element, position, excludeClasses = []) {
        UIUtils.clearClass(element, excludeClasses);
        switch (position) {
            case "right-top":
                UIUtils.addClass(element, ["right-[5rem]", "top-[2rem]"]);
                break;
            case "right-bottom":
                UIUtils.addClass(element, ["right-[5rem]", "bottom-[2rem]"]);
                break;
            case "left-top":
                UIUtils.addClass(element, ["left-[5rem]", "top-[2rem]"]);
                break;
            case "left-bottom":
                UIUtils.addClass(element, ["left-[5rem]", "bottom-[2rem]"]);
                break;
            case "center-top":
                UIUtils.addClass(element, [
                    "left-[50%]",
                    "top-[2rem]",
                    "-translate-x-[50%]",
                ]);
                break;
            case "center-bottom":
                UIUtils.addClass(element, [
                    "left-[50%]",
                    "bottom-[2rem]",
                    "-translate-x-[50%]",
                ]);
                break;
            case "center":
                //center
                UIUtils.addClass(element, [
                    "top-[50%]",
                    "left-[50%]",
                    "translate-[-50%]",
                ]);
                break;
            default:
                //自訂位置
                try {
                    let xposition = position[0];
                    let yposition = position[1];
                    UIUtils.addClass(element, [
                        `top-[${xposition}]`,
                        `left-[${yposition}]`,
                    ]);
                } catch (error) {
                    console.error(error);
                }
                break;
        }
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

export function defineContainer(container, type = null) {
    let result;
    //如果有指定tagType
    if (type) {
        //如果是DOM點
        if (container instanceof HTMLElement) {
            //但是type不符合條件
            if (container.nodeName !== type.toUpperCase()) {
                result = document.createElement(type);
                result.appendChild(container);
                return result;
            } else {
                result = container;
                return result;
            }
        } else if (
            document.querySelector(container) ||
            document.getElementById(container)
        ) {
            //如果不是DOM節點，但找的到querySelector/Id
            //檢查type
            if (container.nodeName !== type.toUpperCase()) {
                result = document.createElement(type);
                result.appendChild(container);
                return result;
            } else {
                result = container;
                return result;
            }
        } else {
            console.error("請放入有效的容器");
        }
    }
}

/**
 * 轉換id/class selector 尋找元素是否存在
 * @param {*} id
 * @returns
 */
export function findElem(selector) {
    if (!selector) console.error("請放入有效的容器元素");

    return document.querySelector(selector);
}

/**
 * 父類別
 * 共用原型方法
 */
export class BaseComponent {
    constructor(elem, theme) {
        this._elem = elem; //子類別instance的渲染DOM節點
        this._theme = theme || "light";
        this._eventListeners = []; // record eventListeners
    }

    get cache() {
        let initData = createCacheData(this.cacheKey, {});
        return initData;
    }

    // 資料初始化
    _init() {
        this.render();
    }

    // DOM節點渲染
    render() { }

    // 新增監聽器
    onevent(target, event, handler, options) {
        //避免重複綁定//但是.bind產生的fn還是會認為是不同的
        let recordObj = { target, event, handler };
        let checkListeners = this._eventListeners.filter((listener) => {
            return (
                listener.event === event &&
                listener.target === target &&
                listener.handler === handler
            );
        });

        if (checkListeners.length === 0) {
            target.addEventListener(event, handler, options);
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

    setTheme(themeValue) {
        this._theme = themeValue;
        this.render();
    }

    appendElem(elem) {
        this._elem.appendChild(elem);
        UIUtils.addClass(elem, ["opacity-0", "transition-all"]);

        setTimeout(() => {
            UIUtils.addClass(elem, ["opacity-100"]);
        }, 100);
    }
}

//快取設定
class componentCache {
    constructor(cacheKey, value) {
        this._key = cacheKey;
        this._value = value;
        this._getCache = this.cache();
    }

    get cache() {
        return;
    }

    get key() {
        return this._key;
    }

    get value() {
        return this._value;
    }
}

function createCacheData(cache_key, initValue) {
    let cache = new componentCache(cache_key, initValue);
    let set = function (value) {
        localStorage.setItem(cache_key, value);
    };

    let get = function () {
        let data = JSON.parse(localStorage.getItem(cache_key));
        if (!data) {
            localStorage.setItem(cache_key, {});
        }

        console.log(JSON.parse(localStorage.getItem(cache_key)));
        return JSON.parse(localStorage.getItem(cache_key));
    };

    let remove = function () {
        localStorage.removeItem(cache_key);
    };

    return { cache, set, get, remove };
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
 * Context 共享數據機制
 * 1. createContext 建立共享Context，紀錄數據
 * 2. useContext 使用共享數據
 */
window.CoreContexts = new Map();
export function createContext(provider, defaultContext) {
    window.CoreContexts.set(provider, defaultContext);
    return window.CoreContexts;
}

export function useContext(provider) {
    return window.CoreContexts.get(provider);
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

/**
 * HEX to RGB
 */
export function hexTorgb(hexString) {
    let match = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
    let R = Array.from(hexString.slice(1, 3));
    let G = Array.from(hexString.slice(3, 5));
    let B = Array.from(hexString.slice(5, 7));

    let toR = changeDigit(R);
    let toG = changeDigit(G);
    let toB = changeDigit(B);

    function changeDigit(item) {
        let digit = item.map((str, index) => {
            let isAlphabet = Object.keys(match).find(
                (key) => key === str.toUpperCase()
            );
            if (isAlphabet) {
                return match[isAlphabet];
            } else {
                return Number(str);
            }
        });
        return digit[0] * 16 + digit[1];
    }

    let hexDigit = [R, G, B].map((color) => {
        return color.toString(16).padStart(2, "0");
    });

    return `rgb(${toR},${toG},${toB})`;
}

/**
 * Debounce 節流
 * 一定時間內控制觸發次數
 */
export function debounce(callback, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
