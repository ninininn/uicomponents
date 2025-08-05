import {
  UIUtils,
  BaseComponent,
  defineArgs,
  bindState,
  compareNum,
} from "../Utils";

// custom Slider components
// props:
//
/**
 * @param {existElem} existNode - using querySelector/ getElementById
 * @param {string} btnType - button type
 * @param {object} settings - custom button settings
 */

export class Slider extends BaseComponent {
  constructor(...args) {
    const { element, options } = defineArgs(args, "div");
    const defaultTheme = options.disabled
      ? "var(--color-gray-500)"
      : options.theme || "var(--color-yellow-500)";
    super(element, defaultTheme);
    this.UItype = "Slider";
    this.options = { ...this._defaultOptions, ...options };
    this.disabled = this.options.disabled;
    this.defaultTheme = options.theme || defaultTheme;
    //events
    this._draggingIndex = null;
    this.onPointerMove = this._onPointerMove.bind(this);
    this.onPointerUp = this._onPointerUp.bind(this);
    // this.onPointerDown = this._onPointerDown.bind(this);
    // 檢查是否為雙向
    this._checkRange();

    // 設定value state
    const [getValue, setValue, subscribeValue] = bindState(
      this.options.initValue
    );
    this.getValue = getValue;
    this.setValue = setValue; //避免傳入子元件造成data更新變亂(統一由父元件來控制)
    this.subscribeValue = subscribeValue; //傳遞下去子元件，讓子元件也能綁定該狀態

    const [getTheme, setTheme, subscribeTheme] = bindState(defaultTheme);
    this.getTheme = getTheme;
    this.setTheme = setTheme;
    this.subscribeTheme = subscribeTheme;

    // callback handlers
    if (this.options.handlers) {
      this.handlers = this.options.handlers;
    }

    // 初始化UI相關
    this.bar = new SliderBar(
      this.getValue(),
      this.subscribeValue,
      this._theme,
      this.subscribeTheme
    );
    if (this.options.range) {
      let v = this.getValue();
      this.thumb = [
        new SliderThumb(
          v[0],
          this.subscribeValue,
          this.options.thumbImg,
          this._theme,
          this.subscribeTheme,
          0
        ),
        new SliderThumb(
          v[1],
          this.subscribeValue,
          this.options.thumbImg,
          this._theme,
          this.subscribeTheme,
          1
        ),
      ];
      this.childrens = [
        ...this.thumb.map((t) => t.getElem()),
        this.bar.getElem(),
      ];
    } else {
      this.thumb = new SliderThumb(
        this.getValue(),
        this.subscribeValue,
        this.options.thumbImg,
        this._theme,
        this.subscribeTheme
      );
      this.childrens = [this.thumb.getElem(), this.bar.getElem()];
    }

    this._init();
  }

  // 封裝基本(預設)設定
  get _defaultOptions() {
    return {
      min: 0, //最小值
      max: 100, //最大值
      initValue: 0, //初始預設值
      step: 1, //間隔
      input: false, //是否顯示輸入框
      range: false, //範圍功能
      theme: "var(--color-yellow-500)", //預設顏色
      thumbImg: null, //thumb圖標
      classes: ["slider"],
      handlers: null,
      disabled: false,
    };
  }

  // 元件初始化
  _init() {
    this.render();
    //加入children:
    for (let child of this.childrens) {
      this.getElem().appendChild(child);
    }
    this._bindEvents();
    this.setDisabled(this.disabled);
  }

  // 元件渲染
  //-update-負責視覺更新/DOM 樣式更新，移除事件部分function
  render() {
    //1. 判斷是否為雙向
    this._checkRange();
    UIUtils.addClass(this.getElem(), this.options.classes);
    this.options.range &&
      UIUtils.setAttribute(this.getElem(), "slider", "range");

    //2. 判斷操作與否(僅操作DOM相關動作)
    if (this.disabled) {
      UIUtils.addClass(this.getElem(), ["disabled"]);
    } else {
      UIUtils.removeClass(this.getElem(), ["disabled"]);
    }
  }

  // 外部控制-更改顏色
  changeTheme(value) {
    this.setTheme(value);
    super.setTheme(value);
  }

  // 外部控制-操作與否
  setDisabled(isDisabled) {
    this.disabled = isDisabled;
    this.changeTheme(
      this.disabled ? "var(--color-gray-500)" : this.defaultTheme
    );
    this._updateState();
    this.render();
  }

  //內部控制方法
  _onPointerDown(event, index) {
    event.preventDefault();
    this._draggingIndex = index;
    this.onevent(event.currentTarget, "pointermove", this.onPointerMove);
    this.onevent(event.currentTarget, "pointerup", this.onPointerUp);
  }

  _onPointerMove(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (this._draggingIndex === null) return;
    const originVal = this.getValue();
    const rect = this.getElem().getBoundingClientRect();
    const percentage = ((event.clientX - rect.left) / rect.width) * 100;
    const moveSteps =
      Math.round(percentage / this.options.step) * this.options.step;
    let clamped = Math.min(this.options.max, Math.max(0, moveSteps));

    //最小值設定
    if (clamped < this.options.min) {
      clamped = this.options.min;
    }

    if (this.options.range) {
      const newVal = [...originVal];
      newVal[this._draggingIndex] = clamped;
      if (newVal[0] > newVal[1]) newVal.reverse();
      this.setValue(newVal);
    } else {
      this.setValue(clamped);
    }
    if (this.handlers) {
      this.handlers(this.getValue());
    }
  }
  _onPointerUp(event) {
    this.draggingIndex = null;
    this.offevent(event.currentTarget, "pointermove", this.onPointerMove);
    this.offevent(event.currentTarget, "pointerup", this.onPointerUp);
  }

  _bindEvents() {
    (this.options.range ? this.thumb : [this.thumb]).forEach((thumb, index) => {
      const handler = (e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        // this=Slider{}
        this._onPointerDown(e, index);
      };
      this.onevent(thumb.getElem(), "pointerdown", handler);
    });
  }

  _checkRange() {
    const { initValue, range, min, max } = this.options;
    if (range) {
      this.options.initValue = Array.isArray(initValue)
        ? initValue
        : [initValue, max];
    } else {
      // 防呆(range是false但傳入陣列)
      this.options.initValue = Array.isArray(initValue)
        ? initValue[0]
        : initValue;
    }
  }

  //狀態更新後(ex.disabled)的邏輯更新相關
  _updateState() {
    //1. disabled更新要切換監聽器綁定
    if (this.disabled) {
      super.destroy(); //clear all pointer listener
      UIUtils.addClass(this.getElem(), ["disabled"]);
    } else {
      this._bindEvents();
      UIUtils.removeClass(this.getElem(), ["disabled"]);
    }
  }
}

class SliderThumb extends BaseComponent {
  constructor(
    value,
    subscribeValue,
    thumbImg = null,
    theme,
    subscribeTheme,
    index = 0
  ) {
    const thumb = document.createElement("div");
    super(thumb, theme);
    this._thumbIndex = index;
    this._thumbValue = Array.isArray(value) ? value[index] : [value];
    this._thumbImg = thumbImg;
    this._init();

    subscribeValue((value) => {
      value = Array.isArray(value) ? value[index] : value;
      this._setThumbValue(value);
    });
    subscribeTheme((theme) => {
      super.setTheme(theme);
    });
  }

  _init() {
    this.render();
  }

  render() {
    UIUtils.addClass(this.getElem(), ["slider-thumb"]);
    UIUtils.setProperty(this.getElem(), "--bgColor", this._theme);

    //是否有傳入客製圖標路徑
    if (this._thumbImg) {
      this.getElem().style.setProperty("--tmb-img", `url(${this._thumbImg})`);
      UIUtils.addClass(this.getElem(), ["custom-thumb"]);
    }

    // super.setTheme();
  }
  _setThumbValue(value) {
    this._thumbValue = value;
    let offset = 2; //圖標定位點偏移(%)
    this.getElem().style.left = `${value - offset}%`;
  }
}

class SliderBar extends BaseComponent {
  constructor(value, subscribeValue, theme, subscribeTheme) {
    const bar = document.createElement("div");
    const mask = document.createElement("span");
    mask.classList.add("mask");
    super(bar, theme);
    this.mask = mask;
    this._barValue = value;
    this.startValue = value[0];
    this.options = { ...this.defaultOptions };
    this._init();
    subscribeValue((value) => {
      this.startValue = value[0] ?? value;
      value = Array.isArray(value) ? value[1] - value[0] : value;
      this._setBarValue(value);
    });

    subscribeTheme((theme) => {
      super.setTheme(theme);
    });
  }

  get defaultOptions() {
    return {
      classes: [
        "w-90",
        "h-1.5",
        "bg-gray-300",
        "rounded-full",
        "my-auto",
        "overflow-hidden",
        "cursor-grab",
      ],
    };
  }

  _init() {
    this.render();
    this.getElem().appendChild(this.mask);
  }
  render() {
    UIUtils.addClass(this.getElem(), this.options.classes);
    UIUtils.setProperty(this.mask, "--bgColor", this._theme);
    // super.setTheme();
  }

  _setBarValue(value) {
    this._barValue = value;
    this.mask.style.setProperty("--slider-width", `${value}%`);
    this.mask.style.setProperty("--start-point", `${this.startValue}%`);
  }
}

// 未來擴充成完整input元件
export class Input extends BaseComponent {
  constructor(...args) {
    const { element, options } = defineArgs(args, "div");
    const input = document.createElement("input");
    element.appendChild(input);
    super(input);
    this.UItype = "Input";
    this.options = { ...this._defaultOptions, ...options };

    this._elem.type = this.options.type;
    this._elem.placeholder = this.options.placeholder;

    // number-type input
    if (this.options.type === "number") {
      this.min = this.options.min;
      this.max = this.options.max;
      this.step = this.options.step;
    }

    this.children = [this._elem.querySelector("input")];
    this._init();
  }

  // 封裝基本(預設)設定
  get _defaultOptions() {
    return {
      type: "text", //input類
      placeholder: "預設文字",
      initValue: 0, //初始預設值
      position: "top", //位置
      theme: "var(--color-yellow-500)", //預設顏色
      icon: null, //是否使用icon
      iconPosition: "start", //icon位置
      classes: ["input"],
      handlers: null,
    };
  }

  _init() {
    this.render();
  }

  render() {
    UIUtils.addClass(this.getElem(), this.options.classes);
  }
}
