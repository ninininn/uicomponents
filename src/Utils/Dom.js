import { defineTypeof } from './Utils';

//elem可以是selector|HTMLElement
export const Dom = {
    create: function (tag) {
        return document.createElement(tag);
    },
    setStyle: function (elem, prop, styleValue) {
        elem.style[prop] = styleValue;
    },
    addClass: function (elem, classes) {
        let targetClass = Array.isArray(classes) ? classes : [classes];
        elem.classList.add(...targetClass);
    },
    toggleClass: function (elem, classes) {
        let isMultiple = Array.isArray(classes);
        if (!isMultiple) {
            elem.classList.toggle(classes);
        } else {
            elem.classList.toggle(...classes);
        }
    },
    removeClass: function (elem, classes) {
        let isMultiple = Array.isArray(classes);
        if (!isMultiple) {
            elem.classList.remove(classes);
        } else {
            elem.classList.remove(...classes);
        }
    },
    clearClass: function (elem, excluded = []) {
        let newClassName = [];
        for (let cls of excluded) {
            newClassName.push(cls);
        }
        elem.className = newClassName.join(" ");
    },
    setText: function (elem, text) { elem.textContent = text; },
    setTextnode: function (elem, text) {
        let textNode = document.createTextNode(text);
        elem.appendChild(textNode);
    },
    setDataAttr: function (elem, attrName, attrValue = "") {
        elem.setAttribute(`data-${attrName}`, attrValue);
    },
    setAttr: function (elem, attrName, attrValue = "") {
        elem.setAttribute(attrName, attrValue);
    },
    removeAttr: function (elem, attrName) {
        elem.removeAttribute(attrName);
    },
    setProp: function (elem, propName, propValue) {
        elem.style.setProperty(propName, propValue);
    },
    setBtn: function (btnConfig) {
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
                    // classes.push("icon-text-btn");
                    let img = document.createElement("img");
                    Dom.addClass(img, ["icon"]);
                    img.src = `${icon}`;
                    btn.appendChild(img);
                    break;
            }
        }
        //設定按鈕文字
        if (text) Dom.setTextnode(btn, text);
        //設定按鈕其他相關
        Dom.addClass(btn, ["btn", ...classes]);
        btn.type = "button";

        if (handler) {
            btn.addEventListener("click", function (e) {
                handler.call(btn, e, btnConfig);
            });
        }

        return btn;
    },
    setBtnGroup: function (btnConfigs, container) {
        let buttons = btnConfigs.map((btnConfig) => Dom.setBtn(btnConfig));
        if (!container) return buttons;
        container.append(...buttons);
        return container;

    },
    setPosition: function (elem, position, excluded = []) {
        Dom.clearClass(elem, excluded);//clear classes first
        switch (position) {
            case "right-top":
                Dom.addClass(elem, ["right-[5rem]", "top-[2rem]"]);
                break;
            case "right-bottom":
                Dom.addClass(elem, ["right-[5rem]", "bottom-[2rem]"]);
                break;
            case "left-top":
                Dom.addClass(elem, ["left-[5rem]", "top-[2rem]"]);
                break;
            case "left-bottom":
                Dom.addClass(elem, ["left-[5rem]", "bottom-[2rem]"]);
                break;
            case "center-top":
                Dom.addClass(elem, [
                    "left-[50%]",
                    "top-[2rem]",
                    "-translate-x-[50%]",
                ]);
                break;
            case "center-bottom":
                Dom.addClass(elem, [
                    "left-[50%]",
                    "bottom-[2rem]",
                    "-translate-x-[50%]",
                ]);
                break;
            case "center":
                //center
                Dom.addClass(elem, [
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
                    Dom.addClass(elem, [
                        `top-[${xposition}]`,
                        `left-[${yposition}]`,
                    ]);
                } catch (error) {
                    console.error(error);
                }
                break;
        }
    },
};


/**
 * 確認元素是否存在
 * @param {string|HTMLElement} selector 
 */
export function findElem(selector) {
    if (selector instanceof HTMLElement) return selector;
    return document.querySelector(selector);

}


/**
 * 檢查container是否為指定類型的Dom節點
 * 如果不是正確的指定類型，建立指定類型的節點並append該container
 * 如果是指定類型的節點，則直接回傳該節點
 * @param {string|HTMLElement} container 
 * @param {string} type 
 */
export function checkContainer(container, type = null) {
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


/**
 * 判斷傳入參數是否為指定類型
 * @param {any[]} args
 * @param {string} tagName 預設的HTMLtag
 * @returns {{element:HTMLElement,options:Object}}
 */
export function defineArgs(args, tagName = "div") {
    let elem;
    let options = {};

    if (args[0] instanceof HTMLElement) {
        elem = args[0];
        options = args[1] || {};
    } else {
        elem = document.createElement(tagName);
        options = args[0] || {};
    }
    return { elem, options };
}
