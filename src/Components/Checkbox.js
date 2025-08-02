import {
  UIUtils,
  BaseComponent,
  defineArgs,
  bindState,
  compareNum,
} from "../Utils";

export class Checkbox extends BaseComponent {
  constructor(...args) {
    //1. 判斷初始化節點
    //如果不是 <input> 或 <label> 則視為容器
    const { element, options } = defineArgs(args, "input");

    let inputElem = null,
      label = null,
      container = null;

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

    // this.container = this._createLabelGroup(this.options.style || "default");

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
      value: "",
      checked: true,
      theme: "var(--color-yellow-500)", //預設顏色
      checkImg: null, //check圖標
      container: null, //容器
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
    this._elem.type = "checkbox";
    this._elem.title = this.options.title;
    this._elem.checked = this.options.checked;
    UIUtils.addClass(this._elem, this.options.classes);

    //2. 判斷是否有標題文字
    if (this.options.title && this.options.title !== "") {
    }
    //3. 判斷樣式
    switch (this.options.style) {
      case "switch":
        UIUtils.addClass(this.label, ["label"]);
        break;
      case "toggle":
        break;
      case "filled":
        this.label.textContent = this.options?.title;
        break;
      case "tag":
        //label classes:input-label,input-tag-group
        UIUtils.addClass(this.label, ["input-label", "input-tag-group"]);
        UIUtils.addClass(this._elem, ["tag-input"]);
        this.label.textContent = this.options.title;
        break;
      default:
        this.label.textContent = this.options?.title;
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
  _createLabelGroup(label, style) {
    let labelElem = label || document.createElement("label");
    const checkboxStyle = style || "default";
    UIUtils.setAttribute(this._elem, "checkstyle", checkboxStyle);
    labelElem.appendChild(this._elem);
    return labelElem;
  }

  //內部控制-容器設定
  //如果初始化時傳入不是<label>或<input>節點，就把該節點視為container
  _createContainerGroup(outterContainer, labelgroup) {
    let containergroup = outterContainer || labelgroup;
    outterContainer && containergroup.appendChild(labelgroup);
    return containergroup;
  }

  //外部控制-取得checked狀態
  getValue() {
    return this.options.checked;
  }
  //外部控制-設定checked狀態
  setValue(checked) {
    this.options.checked = checked;
    this._elem.checked = checked;

    this.handlers(!checked);
    this.render();
  }
  _onChange() {
    console.log("this._onChange");
    this.options.checked = this._elem.checked;
    if (this.handlers) {
      this.handlers(!this.options.checked);
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
