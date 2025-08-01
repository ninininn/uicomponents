import {
    UIUtils,
    BaseComponent,
    defineArgs,
    bindState,
    compareNum,
} from "../Utils";

export class Checkbox extends BaseComponent {
    constructor(...args) {
        const { element, options } = defineArgs(args, "input");
        const defaultTheme = options.disabled
            ? "var(--color-gray-500)"
            : options.theme || "var(--color-yellow-500)";
        super(element, defaultTheme);
        this.UItype = "Checkbox";
        this.options = { ...this._defaultOptions, ...options };
        this.defaultTheme = options.theme || defaultTheme;
        this.container = this._createContainer(this.options.style || "default");

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
            value: "", //初始checked預設值
            checked: true,
            theme: "var(--color-yellow-500)", //預設顏色
            checkImg: null, //check圖標
            container: null,//容器
            classes: ["checkbox"],
            disabled: false,
        };
    }

    // 元件初始化
    _init() {
        this.render();
        // this.setDisabled(this.disabled);
        // this._bindEvents();
    }

    // 元件渲染
    render() {
        this._elem.type = "checkbox";
        this._elem.title = this.options.title;
        this._elem.checked = this.options.checked;
        UIUtils.addClass(this.getElem(), this.options.classes);

        //1. 判斷是否有標題文字
        if (this.options.title && this.options.title !== "") {

        }
        //2. 判斷樣式
        //3. 判斷是否設定為禁止操作
        if (!this.disabled) {
            UIUtils.removeClass(this.getElem(), ["disabled"]);
        } else {
            UIUtils.addClass(this.getElem(), ["disabled"]);
        }

        this._bindEvents();
    }

    _createContainer(style) {
        let label = document.createElement("label");
        UIUtils.setAttribute(this.UItype, this.getElem(), style);
        switch (style) {
            case "switch":
                UIUtils.addClass(label, ["label"]);
                label.appendChild(this.getElem());
                break;
            case "toggle":
                break;
            case "filled":
                label.textContent = this.options.title;
                break;
            case "tag":
                //label classes:input-label,input-tag-group
                UIUtils.addClass(label, ["input-label", "input-tag-group"]);
                UIUtils.addClass(this.getElem(), ["tag-input"]);
                label.textContent = this.options.title;
                label.appendChild(this.getElem());
                break;
            default:
                label.textContent = this.options.title;
                break;
        }
        return label;
    }
    //一般checkboxgroup
    _createCheckboxGroup() {

    }

    //toggle樣式
    //如果是toggle樣式，就要把<input>綁定container
    _createToggleGroup() {

    }

    _onChange() {
        this.options.checked = this.getElem().checked;
        if (this.handlers) {
            this.handlers(!this.options.checked);
        }
        // this.relateElem.setDisabled(this.options.checked);
        this.render();
    }

    _bindEvents() {
        this.onevent(this.getElem(), "change", this.onChange);
    }
}
