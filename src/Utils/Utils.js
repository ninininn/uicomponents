
/**
 * 工具Functions
 */
// export class Dom {
//     static setStyle(element, property, styleValue) {
//         element.style[property] = styleValue;
//     }
//     static addClass(element, classes) {
//         element.classList.add(...classes);
//     }
//     static toggleClass(element, classes) {
//         element.classList.toggle(...classes);
//     }
//     static removeClass(element, classes) {
//         element.classList.remove(...classes);
//     }
//     //清除所有class(除了指定的以外)
//     static clearClass(element, excludeClasses = []) {
//         let newClassName = [];
//         for (let cls of excludeClasses) {
//             newClassName.push(cls);
//         }
//         element.className = newClassName.join(" ");
//     }
//     static setText(element, text) {
//         element.textContent = text;
//     }
//     static setTextnode(element, text) {
//         let textNode = document.createTextNode(text);
//         element.appendChild(textNode);
//     }
//     static setAttribute(element, attributeName, attributeValue = "") {
//         element.setAttribute(`data-${attributeName}`, attributeValue);
//     }
//     static removeAttribute(element, attributeName) {
//         element.removeAttribute(attributeName);
//     }
//     static setProperty(element, propertyName, propertyValue) {
//         element.style.setProperty(propertyName, propertyValue);
//     }

//     static setButtons(btnConfig) {
//         let btn = document.createElement("button");
//         let { classes = [], icon, text, handler } = btnConfig;
//         if (icon) {
//             switch (icon) {
//                 case "close":
//                     classes.push("icon-btn");
//                     btn.innerHTML = `<svg class="icon text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
//                     height="24" fill="none" viewBox="0 0 24 24">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                     d="M6 18 17.94 6M18 18 6.06 6" />
//                     </svg>`;
//                     break;
//                 default:
//                     // classes.push("icon-text-btn");
//                     let img = document.createElement("img");
//                     Dom.addClass(img, ["icon"]);
//                     img.src = `${icon}`;
//                     btn.appendChild(img);
//                     break;
//             }
//         }
//         //設定按鈕文字
//         if (text) Dom.setTextnode(btn, text);
//         //設定按鈕其他相關
//         Dom.addClass(btn, ["btn", ...classes]);
//         btn.type = "button";

//         if (handler) {
//             btn.addEventListener("click", function (e) {
//                 handler.call(btn, e, btnConfig);
//             });
//         }

//         return btn;
//     }

//     static setBtnGroup(btns, container) {
//         let buttons = btns.map((btnConfig) => Dom.setBtn(btnConfig));
//         if (container) {
//             container.append(...buttons);
//             return container;
//         }
//         return buttons;
//     }

//     static setPosition(element, position, excludeClasses = []) {
//         Dom.clearClass(element, excludeClasses);
//         switch (position) {
//             case "right-top":
//                 Dom.addClass(element, ["right-[5rem]", "top-[2rem]"]);
//                 break;
//             case "right-bottom":
//                 Dom.addClass(element, ["right-[5rem]", "bottom-[2rem]"]);
//                 break;
//             case "left-top":
//                 Dom.addClass(element, ["left-[5rem]", "top-[2rem]"]);
//                 break;
//             case "left-bottom":
//                 Dom.addClass(element, ["left-[5rem]", "bottom-[2rem]"]);
//                 break;
//             case "center-top":
//                 Dom.addClass(element, [
//                     "left-[50%]",
//                     "top-[2rem]",
//                     "-translate-x-[50%]",
//                 ]);
//                 break;
//             case "center-bottom":
//                 Dom.addClass(element, [
//                     "left-[50%]",
//                     "bottom-[2rem]",
//                     "-translate-x-[50%]",
//                 ]);
//                 break;
//             case "center":
//                 //center
//                 Dom.addClass(element, [
//                     "top-[50%]",
//                     "left-[50%]",
//                     "translate-[-50%]",
//                 ]);
//                 break;
//             default:
//                 //自訂位置
//                 try {
//                     let xposition = position[0];
//                     let yposition = position[1];
//                     Dom.addClass(element, [
//                         `top-[${xposition}]`,
//                         `left-[${yposition}]`,
//                     ]);
//                 } catch (error) {
//                     console.error(error);
//                 }
//                 break;
//         }
//     }
// }


/**
 * 轉換id/class selector 尋找元素是否存在
 * @param {*} id
 * @returns DOMs
 */
export function findElem(selector) {
    if (!selector) console.error("請放入有效的容器元素");

    return document.querySelector(selector);
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
    //如果是直接傳入DOM節點
    if (container instanceof HTMLElement) return checkNodeName(container, type);

    //如果傳入的container是selector str
    let validElem = document.querySelector(container) || document.getElementById(container);

    if (validElem) return checkNodeName(container, type);

    return document.createElement("div");

    function checkNodeName(elem, nodeType) {
        if (elem.nodeName !== nodeType.toUpperCase()) {
            let container = document.createElement(nodeType);
            container.appendChild(elem);
            return container;
        }
        return elem;
    };
}
// export function defineContainer(container, type = null) {
//     let result;
//     //如果有指定tagType
//     if (type) {
//         //如果是DOM點
//         if (container instanceof HTMLElement) {
//             //但是type不符合條件
//             if (container.nodeName !== type.toUpperCase()) {
//                 result = document.createElement(type);
//                 result.appendChild(container);
//                 return result;
//             } else {
//                 result = container;
//                 return result;
//             }
//         } else if (
//             document.querySelector(container) ||
//             document.getElementById(container)
//         ) {
//             //如果不是DOM節點，但找的到querySelector/Id
//             //檢查type
//             if (container.nodeName !== type.toUpperCase()) {
//                 result = document.createElement(type);
//                 result.appendChild(container);
//                 return result;
//             } else {
//                 result = container;
//                 return result;
//             }
//         } else {
//             console.error("請放入有效的容器");
//         }
//     }
// }



/**
 * 父類別
 * 共用原型方法
 */
// export class BaseComponent {
//     constructor(elem, theme) {
//         this._elem = elem; //子類別instance的渲染DOM節點
//         this._theme = theme || "light";
//         this._eventListeners = []; // record eventListeners
//     }

//     // 資料初始化
//     _init() {
//         this.render();
//     }

//     // DOM節點渲染
//     render() { }

//     // 新增監聽器
//     onevent(target, event, handler, options) {
//         //避免重複綁定//但是.bind產生的fn還是會認為是不同的
//         let recordObj = { target, event, handler };
//         let checkListeners = this._eventListeners.filter((listener) => {
//             return (
//                 listener.event === event &&
//                 listener.target === target &&
//                 listener.handler === handler
//             );
//         });

//         if (checkListeners.length === 0) {
//             target.addEventListener(event, handler, options);
//             this._eventListeners.push(recordObj);
//         }
//     }

//     //移除指定監聽器
//     offevent(target, event, handler) {
//         this._eventListeners = this._eventListeners.filter((listener) => {
//             const removeTarget =
//                 listener.target === target &&
//                 listener.event === event &&
//                 listener.handler === handler;

//             if (removeTarget) {
//                 listener.target.removeEventListener(listener.event, listener.handler);
//             }

//             return !removeTarget; // 回傳沒有被移除監聽器的事件
//         });
//     }

//     //清除狀態及監聽器
//     destroy() {
//         this._eventListeners.forEach(({ target, event, handler }) => {
//             target.removeEventListener(event, handler);
//         });
//         this._eventListeners = [];
//     }

//     //提供可以取得實際渲染DOM節點的入口
//     getElem() {
//         return this._elem;
//     }

//     setTheme(themeValue) {
//         this._theme = themeValue;
//         this.render();
//     }

//     appendElem(elem) {
//         this._elem.appendChild(elem);
//         Dom.addClass(elem, ["opacity-0", "transition-all"]);

//         setTimeout(() => {
//             Dom.addClass(elem, ["opacity-100"]);
//         }, 100);
//     }
// }
/**
 * 判斷變數型別用
 * @param {*} variable 
 * @param {string} type 
 * @returns boolean
 */
const DATA_TYPES_FLAGS = {
    STRING: '[object String]',
    ARRAY: '[object Array]',
    OBJECT: '[object Object]',
    FUNC: '[object Function]',
    NUM: '[object Number]',
    UNDEFINED: '[object Undefined]',
    NULL: '[object Null]',
    SYMBOL: '[object Symbol]',
    DATE: '[object Date]',
    BOOLEAN: '[object Boolean]',
};
export function defineTypeof(variable, type) {
    const type_flag = type.toUpperCase() in DATA_TYPES_FLAGS ? DATA_TYPES_FLAGS[type.toUpperCase()] : null;
    return Object.prototype.toString.call(variable) === type_flag;
}

/**
 * 綜合排序
 * @param {string} key 指定排序的key
 * @param {string} sortRule 升序/降序/無排序
 */
function defaultCompare(a, b) {
    const va = Number(a);
    const vb = Number(b);
    // num|num
    if (!isNaN(va) && !isNaN(vb)) return va - vb;

    // !num|!num
    if (isNaN(va) && isNaN(vb)) return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
    return 0;

}
export function dataSorter({ key, rule, data }) {
    const isDesc = rule === 'none' ? 0 : rule === 'descending' ? -1 : 1;
    const clone = data ? JSON.parse(JSON.stringify(data)) : [];

    clone.sort(function comparator(a, b) {
        const result = defaultCompare(a.data[key], b.data[key]);
        if (result !== 0) return result * isDesc;
        return result;
    });
    return clone;
};

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
 * clamp 檢視數值是否在目標區間
 * @param {value} - number
 * @param {min} - number
 * @param {max} - number
 */
export function clamp(value, min = 0, max = 1) {
    value = Number(value);
    if (!Number.isFinite(value)) return min;
    return Math.min(max, Math.max(min, value));
}

/**
 * checkDevice 判斷裝置尺寸
 */

function checkDevice() {
    const device = navigator.userAgent;
    const size = window.matchMedia("(max-width: 768px)").matches ? "mobile" : "desktop";

    return { device, size };
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

/**
 * 隨機生成一組UUID
 * @returns 
 */
export function setUUID() {
    return crypto.randomUUID();
}

/**
 * 比較物件內容是否完全相等
 * @param {*} objA 
 * @param {*} objB 
 */
export function ObjectWithsameVal(objA, objB) {

}
/**
 * 定位浮動元素，自動偵測視窗邊界並翻轉方向
 * 手機版（< 768px）直接置中於螢幕
 * @param {HTMLElement} floatElem - 要定位的浮動元素（需為 position:fixed）
 * @param {HTMLElement} anchor - 觸發的錨點元素
 */
export function positionFloat(floatElem, anchor) {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        // 手機版：一次性設定，top/left 用百分比置中
        floatElem.style.top = '50%';
        floatElem.style.left = '50%';
        floatElem.style.transform = 'translate(-50%, -50%)';
        return;
    }

    const anchorRect = anchor.getBoundingClientRect();
    const fw = floatElem.offsetWidth;
    const fh = floatElem.offsetHeight;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const gap = 8;

    // 預設：anchor 下方，左對齊
    let x = anchorRect.left;
    let y = anchorRect.bottom + gap;

    // 超出右邊界 → 靠右對齊 anchor
    if (x + fw > vw) x = anchorRect.right - fw;

    // 超出下邊界 → anchor 上方
    if (y + fh > vh) y = anchorRect.top - fh - gap;

    // 桌機版：只改 transform，不碰 top/left，避免 layout reflow
    floatElem.style.top = '0';
    floatElem.style.left = '0';
    floatElem.style.transform = `translate(${x}px, ${y}px)`;
}

/**
 * 點擊指定元素外部時觸發 callback
 * @param {HTMLElement} target - 監聽範圍的目標元素
 * @param {Function} callback - 點擊外部時執行的callback
 * @returns {Function} - 呼叫後可移除此監聽器
 */
export function onClickOutside(target, callback) {
    function handler(e) {
        if (!target.contains(e.target)) {
            callback(e);
        }
    }
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
}



/**
 * shared object
 * 包裝共用函式，方便未來import元件模組
 */
export const tools = {
    checkDevice: checkDevice,
    clamp: clamp,
    defineTypeof: defineTypeof,
};