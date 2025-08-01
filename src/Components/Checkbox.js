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
    const { element, options } = defineArgs(args, "input");
    const defaultTheme = options.disabled
      ? "var(--color-gray-500)"
      : options.theme || "var(--color-yellow-500)";

    super(element, defaultTheme);
    this.UItype = "Checkbox";
    this.options = { ...this._defaultOptions, ...options };
    this.defaultTheme = options.theme || defaultTheme;

    //待新增
    // new Checkbox建立時，一樣要可以用傳入DOM節點的方式啟用，但因為結構比較特別
    // (有 < label > 跟 < input >，但主要元件是以 < input > 來記錄)，所以會需要判斷

    //  - a.傳入節點是 < label > 則儲存為container，新增 < input > 並插入
    //  - b.傳入節點是 < input > 則跟Slider一樣，綁在該節點，然後把外層的 < label > 存為container;

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
    // this._bindEvents();
  }

  // 元件渲染
  render() {
    this._elem.type = "checkbox";
    this._elem.title = this.options.title;
    this._elem.checked = this.options.checked;
    UIUtils.addClass(this._elem, this.options.classes);

    //1. 判斷初始化節點(如果有傳入)

    //待新增
    // new Checkbox建立時，一樣要可以用傳入DOM節點的方式啟用，但因為結構比較特別
    // (有 < label > 跟 < input >，但主要元件是以 < input > 來記錄)，所以會需要判斷

    //  - a.傳入節點是 < label > 則儲存為container，新增 < input > 並插入
    //  - b.傳入節點是 < input > 則跟Slider一樣，綁在該節點，然後把外層的 < label > 存為container;

    //2. 判斷是否有標題文字
    if (this.options.title && this.options.title !== "") {
    }
    //3. 判斷樣式
    //4. 判斷是否設定為禁止操作
    if (!this.disabled) {
      UIUtils.removeClass(this._elem, ["disabled"]);
    } else {
      UIUtils.addClass(this._elem, ["disabled"]);
    }

    //5. 綁定事件
    this._bindEvents();
  }

  _createContainer(style) {
    let label = document.createElement("label");
    UIUtils.setAttribute(this.UItype, this._elem, style);
    switch (style) {
      case "switch":
        UIUtils.addClass(label, ["label"]);
        label.appendChild(this._elem);
        break;
      case "toggle":
        break;
      case "filled":
        label.textContent = this.options.title;
        break;
      case "tag":
        //label classes:input-label,input-tag-group
        UIUtils.addClass(label, ["input-label", "input-tag-group"]);
        UIUtils.addClass(this._elem, ["tag-input"]);
        label.textContent = this.options.title;
        label.appendChild(this._elem);
        break;
      default:
        label.textContent = this.options.title;
        break;
    }
    return label;
  }
  //一般checkboxgroup
  _createCheckboxGroup() {}

  //toggle樣式
  //如果是toggle樣式，就要把<input>綁定container
  _createToggleGroup() {}

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
