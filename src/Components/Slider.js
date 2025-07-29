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
    super(element);
    this.UItype = "Slider";
    this.options = { ...this._defaultOptions, ...options };

    //events
    this._draggingIndex = null;
    this.onMouseMove = this._onMouseMove.bind(this);
    this.onMouseUp = this._onMouseUp.bind(this);
    this.onMouseDown = this._onMouseDown.bind(this);
    // 檢查是否為雙向
    this._checkRange();

    // 設定state
    const [getValue, setValue, subscribe] = bindState(this.options.initValue);
    this.getValue = getValue;
    this.setValue = setValue; //避免傳入子元件造成data更新變亂(統一由父元件來控制)
    this.subscribe = subscribe; //傳遞下去子元件，讓子元件也能綁定該狀態

    // callback handlers
    if (this.options.handlers) {
      this.handlers = this.options.handlers;
    }

    // 初始化UI相關
    this.bar = new SliderBar(
      this.getValue(),
      this.subscribe,
      this.options.theme
    );
    if (this.options.range) {
      let v = this.getValue();
      this.thumb = [
        new SliderThumb(
          v[0],
          this.subscribe,
          this.options.thumbImg,
          this.options.theme,
          0
        ),
        new SliderThumb(
          v[1],
          this.subscribe,
          this.options.thumbImg,
          this.options.theme,
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
        this.subscribe,
        this.options.thumbImg,
        this.options.theme
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
    };
  }

  _init() {
    this.render();
    //加入children:
    for (let child of this.childrens) {
      this.getElem().appendChild(child);
    }
    this._bindEvents();
  }

  // 渲染
  render() {
    this._checkRange();
    UIUtils.addClass(this.getElem(), this.options.classes);
    this.options.range &&
      UIUtils.setAttribute("slider", this.getElem(), "range");
  }

  _onMouseDown(event, index) {
    event.preventDefault();

    this._draggingIndex = index;
    event.currentTarget.addEventListener("pointermove", this.onMouseMove);
    event.currentTarget.addEventListener("pointerup", this.onMouseUp);
  }

  _onMouseMove(event) {
    event.preventDefault();
    if (this._draggingIndex === null) return;
    const originVal = this.getValue();
    const rect = this.getElem().getBoundingClientRect();
    const percentage = ((event.clientX - rect.left) / rect.width) * 100;
    const moveSteps =
      Math.round(percentage / this.options.step) * this.options.step;
    const clamped = Math.min(this.options.max, Math.max(0, moveSteps));

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

  _onMouseUp(event) {
    this._draggingIndex = null;
    event.currentTarget.removeEventListener("pointermove", this.onMouseMove);
    event.currentTarget.removeEventListener("pointerup", this.onMouseUp);
  }
  _bindEvents() {
    //僅在init時綁定一次
    (this.options.range ? this.thumb : [this.thumb]).forEach((thumb, index) => {
      thumb.getElem().addEventListener("pointerdown", (e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        this._onMouseDown(e, index);
      });
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
}

class SliderThumb extends BaseComponent {
  constructor(value, subscribe, thumbImg = null, theme, index = 0) {
    const thumb = document.createElement("div");
    super(thumb);
    this._thumbIndex = index;
    this._thumbValue = Array.isArray(value) ? value[index] : [value];
    this._thumbImg = thumbImg;
    this.theme = theme;
    this._init();

    subscribe((value) => {
      value = Array.isArray(value) ? value[index] : value;
      this._setThumbValue(value);
    });
  }

  _init() {
    this.render();
  }

  render() {
    UIUtils.addClass(this.getElem(), ["slider-thumb"]);
    UIUtils.setProperty(this.getElem(), "--bgColor", this.theme);

    //是否有傳入客製圖標路徑
    if (this._thumbImg) {
      this.getElem().style.setProperty("--tmb-img", `url(${this._thumbImg})`);
      UIUtils.addClass(this.getElem(), ["custom-thumb"]);
    }
  }
  _setThumbValue(value) {
    this._thumbValue = value;
    let offset = 2; //圖標定位點偏移(%)
    this.getElem().style.left = `${value - offset}%`;
  }
}

class SliderBar extends BaseComponent {
  constructor(value, subscribe, theme) {
    const bar = document.createElement("div");
    const mask = document.createElement("span");
    mask.classList.add("mask");
    super(bar);
    this.mask = mask;
    this.theme = theme;
    this._barValue = value;
    this.startValue = value[0];
    this.options = { ...this.defaultOptions };
    this._init();
    subscribe((value) => {
      this.startValue = value[0] ?? value;
      value = Array.isArray(value) ? value[1] - value[0] : value;
      this._setBarValue(value);
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
    UIUtils.setProperty(this.mask, "--bgColor", this.theme);
  }

  _setBarValue(value) {
    this._barValue = value;
    this.mask.style.setProperty("--slider-width", `${value}%`);
    this.mask.style.setProperty("--start-point", `${this.startValue}%`);
  }
}

class Input extends BaseComponent {
  constructor(type) {}
}
