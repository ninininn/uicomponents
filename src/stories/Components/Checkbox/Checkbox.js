import {
    UIUtils,
    BaseComponent,
    defineArgs,
    bindState,
    compareNum,
} from "../../../Utils";

export class Checkbox extends BaseComponent {
    constructor(...args) {
        //1. 判斷初始化節點
        //如果不是 <input> 或 <label> 則視為容器
        const { element, options } = defineArgs(args, "input");

        let inputElem = null,
            label = null,
            container = null,
            originParent = null;

        originParent = element.parentNode;

        switch (element?.nodeName) {
            case "INPUT":
                inputElem = element;
                break;
            case "LABEL":
                label = element;
                // 從 <label> 裡找 input，如果沒有就建立一個 input
                inputElem =
                    label.querySelector("input") || document.createElement("input");
                break;
            default:
                container = element;
                // 從容器找 input，如果沒有就建立一個 input
                inputElem =
                    container.querySelector("input") || document.createElement("input");
                break;
        }

        const defaultTheme = options.disabled
            ? "var(--color-gray-500)"
            : options.theme || "var(--color-yellow-500)";

        // 把 inputElem 傳入作為 this._elem
        super(inputElem, defaultTheme);
        this.UItype = "Checkbox";
        this.options = { ...this._defaultOptions, ...options };
        this.defaultTheme = options.theme || defaultTheme;
        this.label = this._createLabelGroup(label, this.options?.style);
        this.container = this._createContainerGroup(container, this.label);

        //0805
        this.originParent = originParent;
        if (originParent) {
            originParent.appendChild(this.container);
        }

        //當前Img
        this.activeImg = this._toggleImg(this.options.style, this.options.checked);
        // callback handlers
        if (this.options.handlers) {
            this.handlers = this.options.handlers;
        }
        //event
        this.onChange = this._onChange.bind(this);
        this._init();
    }

    // 封裝基本(預設)設定
    get _defaultOptions() {
        return {
            style: "default", //樣式
            title: "", //文字
            value: "", //<input/>的value attribute
            checked: true,
            theme: "var(--color-yellow-500)", //預設顏色
            checkImg: null, //check圖標
            classes: ["checkbox"],
            disabled: false,
        };
    }

    // 元件初始化
    _init() {
        this.render();
        // this.setDisabled(this.disabled);
        this._bindEvents();
    }

    // 元件渲染
    render() {
        //1. <input/> attribute settings
        this._elem.type = "checkbox";
        this._elem.title = this.options.title;
        this._elem.checked = this.options.checked;
        this._elem.value = this.options.value;
        UIUtils.addClass(this._elem, this.options.classes);
        UIUtils.setAttribute(
            this._elem,
            "checkstyle",
            this.options.style || "default",
        );
        // 2. theme設定
        UIUtils.setProperty(this.label, "--themeColor", this._theme);
        //3. 判斷樣式
        switch (this.options.style) {
            case "switch":
                UIUtils.addClass(this.label, ["label"]);
                break;
            case "toggle":
                UIUtils.setProperty(
                    this.label,
                    "--toggle-img",
                    `url(${this.activeImg})`,
                );
                break;
            case "filled":
                break;
            case "tag":
                //label classes:input-label,input-tag-group
                UIUtils.addClass(this.label, ["input-label", "input-tag-group"]);
                UIUtils.addClass(this._elem, ["tag-input"]);
                break;
            default:
                break;
        }
        //4. 判斷是否設定為禁止操作
        if (!this.disabled) {
            UIUtils.removeClass(this._elem, ["disabled"]);
        } else {
            UIUtils.addClass(this._elem, ["disabled"]);
        }
    }

    // 內部控制用
    // 建立完整結構
    // include "title"
    _createLabelGroup(label, style) {
        let labelElem = label || document.createElement("label");
        const checkboxStyle = style || "default";
        labelElem.appendChild(this._elem);
        // 如果有title文字(style=switch/toggle時一律不加)：
        if (this.options.title && !["switch", "toggle"].includes(checkboxStyle)) {
            let titlenode = document.createTextNode(this.options.title);
            labelElem.appendChild(titlenode);
        }
        return labelElem;
    }

    //內部控制-容器設定
    //如果初始化時傳入不是<label>或<input>節點，就把該節點視為container
    _createContainerGroup(outterContainer, labelgroup) {
        if (outterContainer) {
            outterContainer.appendChild(labelgroup);
            return outterContainer;
        }
        return labelgroup;
    }
    //內部控制-設定Img
    _toggleImg(style, checkedState) {
        if (style !== "toggle") return;

        let state = checkedState ? 0 : 1;
        return this.options.checkImg[state];
    }

    //外部控制-取得checked狀態
    getChecked() {
        return this.options.checked;
    }
    //外部控制-設定checked狀態
    setChecked(checked) {
        this.options.checked = checked;
        this._elem.checked = checked;

        //如果是toggle樣式，要切換checkImg
        if (this.options.style === "toggle") {
            this.activeImg = this._toggleImg("toggle", this.options.checked);
        }
        // this.handlers(checked);
        this.render();
    }
    //外部控制-取得value狀態
    getValue() {
        return this.options.value;
    }
    //外部控制-設定value狀態
    setValue(value) {
        this.options.value = value;
        this._elem.value = value;
        this.render();
    }
    // 外部控制-更改顏色
    changeTheme(value) {
        // if (this.disabled) {
        //   console.error("請將disabled設定為false");
        //   return;
        // }
        super.setTheme(value);
        this.render();
    }
    // Event-relate
    _onChange(e) {
        console.log("checkbox this._onChange");
        this.options.checked = e.target.checked;
        // this.options.checked = this._elem.checked;
        if (this.handlers) {
            this.handlers(this.options.checked);
        }

        //如果是toggle樣式，要切換checkImg
        if (this.options.style === "toggle") {
            this.activeImg = this._toggleImg("toggle", this.options.checked);
        }
        // this.relateElem.setDisabled(this.options.checked);
        this.render();
    }

    _bindEvents() {
        this.onevent(this._elem, "change", this.onChange);
    }
}

/**
 * define ElementType
 */
