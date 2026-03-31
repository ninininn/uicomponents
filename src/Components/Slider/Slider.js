// import {
//   Dom,
//   BaseComponent,
//   defineArgs,
//   bindState,
// } from "../../Utils/Utils";

import "./Slider.css";
import { Dom, defineArgs } from '../../Utils/Dom';
import { BaseComponent } from '../BaseCompo';
import { createSignal, createEffect } from '../../Utils/Reactive';

var sliderDefaultConfig = {
  min: 0, //最小值
  max: 100, //最大值
  initValue: 0, //初始預設值
  step: 1, //間隔
  input: false, //是否顯示輸入框
  range: false, //範圍功能
  theme: "var(--color-primary-500)", //預設顏色
  thumbImg: null, //thumb圖標
  classes: ["slider"],
  handlers: null,
  disabled: false,
};

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
      : options.theme || "var(--color-primary-500)";
    super(element, defaultTheme);
    this.UItype = "Slider";
    this.options = Object.assign({}, sliderDefaultConfig, options);
    this.disabled = this.options.disabled;
    this.defaultTheme = options.theme || defaultTheme;
    //events
    this._draggingIndex = null;
    // 檢查是否為雙向
    this._checkRange();

    // 設定value state
    const [getValue, setValue] = createSignal(this.options.initValue);
    this.getValue = getValue;
    this.setValue = setValue;

    const [getTheme, setTheme] = createSignal(defaultTheme);
    this.getTheme = getTheme;
    this.setTheme = setTheme;

    // callback handlers
    if (this.options.handlers) {
      this.handlers = this.options.handlers;
    }

    // 初始化UI相關
    this.bar = new SliderBar(getValue, getTheme);
    if (this.options.range) {
      this.thumb = [
        new SliderThumb(getValue, getTheme, this.options.thumbImg, 0),
        new SliderThumb(getValue, getTheme, this.options.thumbImg, 1),
      ];
      this.childrens = [
        ...this.thumb.map((t) => t.el),
        this.bar.el,
      ];
    } else {
      this.thumb = new SliderThumb(getValue, getTheme, this.options.thumbImg);
      this.childrens = [this.thumb.el, this.bar.el];
    }

    this._init();
  }

  // 元件初始化
  _init() {
    this.render();
    //加入children:
    for (let child of this.childrens) {
      this.el.appendChild(child);
    }
    this._bindEvents();
    this.setDisabled(this.disabled);
  }

  // 元件渲染
  //-update-負責視覺更新/DOM 樣式更新，移除事件部分function
  render() {
    //1. 判斷是否為雙向
    this._checkRange();
    Dom.addClass(this.el, this.options.classes);
    this.options.range &&
      Dom.setDataAttr(this.el, "slider", "range");

    //2. 判斷操作與否(僅操作DOM相關動作)
    if (this.disabled) {
      Dom.addClass(this.el, ["disabled"]);
    } else {
      Dom.removeClass(this.el, ["disabled"]);
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
      this.disabled ? "var(--color-gray-500)" : this.defaultTheme,
    );
    this._updateDisabled();
  }

  //內部控制方法
  _onPointerMove = (event) => {
    event.preventDefault();
    if (this._draggingIndex === null) return;
    this._setPointValue(event);
  };

  _onPointerUp = () => {
    this._draggingIndex = null;
    this.offevent(this._removePointerMove);
    this.offevent(this._removePointerUp);
  };

  _onPointerDown(event, index) {
    event.preventDefault();
    this._draggingIndex = index;
    this._removePointerMove = this.onevent(event.currentTarget, "pointermove", this._onPointerMove);
    this._removePointerUp = this.onevent(event.currentTarget, "pointerup", this._onPointerUp);
  }

  _bindEvents() {
    (this.options.range ? this.thumb : [this.thumb]).forEach((thumb, index) => {
      const handler = (e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        // this=Slider{}
        this._onPointerDown(e, index);
      };
      this.onevent(thumb.el, "pointerdown", handler);
    });
    this.onevent(
      this.bar.el,
      "pointerdown",
      (e) => this._setPointValue(e),
    );
  }

  _setPointValue(event) {
    const originVal = this.getValue();
    const rect = this.el.getBoundingClientRect();
    const percentage = ((event.clientX - rect.left) / rect.width) * 100;
    const moveSteps =
      Math.round(percentage / this.options.step) * this.options.step;
    let clamped = Math.min(this.options.max, Math.max(0, moveSteps));
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
  _updateDisabled() {
    //1. disabled更新要切換監聽器綁定
    if (this.disabled) {
      super.destroy(); //clear all pointer listener
      Dom.addClass(this.el, ["disabled"]);
    } else {
      this._bindEvents();
      Dom.removeClass(this.el, ["disabled"]);
    }
  }
}

class SliderThumb extends BaseComponent {
  constructor(getValue, getTheme, thumbImg = null, index = 0) {
    const thumb = document.createElement("div");
    super(thumb, getTheme());
    this._thumbIndex = index;
    this._thumbImg = thumbImg;
    this._init();

    createEffect(() => {
      const value = getValue();
      this._setThumbValue(Array.isArray(value) ? value[index] : value);
    });
    createEffect(() => {
      super.setTheme(getTheme());
    });
  }

  _init() {
    this.render();
  }

  render() {
    Dom.addClass(this.el, ["slider-thumb"]);
    Dom.setProp(this.el, "--bgColor", this._theme);

    //是否有傳入客製圖標路徑
    if (this._thumbImg) {
      Dom.setProp(this.el, "--tmb-img", `url(${this._thumbImg})`);
      Dom.addClass(this.el, ["custom-thumb"]);
    }
  }
  _setThumbValue(value) {
    this._thumbValue = value;
    let offset = 5; //圖標定位點偏移(%)
    this.el.style.left = `${value - offset}%`;
  }
}

class SliderBar extends BaseComponent {
  constructor(getValue, getTheme) {
    const bar = document.createElement("div");
    const mask = document.createElement("span");
    mask.classList.add("mask");
    super(bar, getTheme());
    this.mask = mask;
    this.options = { ...this.defaultOptions };
    this._init();

    createEffect(() => {
      const value = getValue();
      this.startValue = Array.isArray(value) ? value[0] : value;
      this._setBarValue(Array.isArray(value) ? value[1] - value[0] : value);
    });
    createEffect(() => {
      super.setTheme(getTheme());
    });
  }

  get defaultOptions() {
    return {
      classes: ["slider-bar"],
    };
  }

  _init() {
    this.render();
    this.el.appendChild(this.mask);
  }
  render() {
    Dom.addClass(this.el, this.options.classes);
    Dom.setProp(this.mask, "--bgColor", this._theme);
  }

  _setBarValue(value) {
    this._barValue = value;
    Dom.setProp(this.mask, "--slider-width", `${value}%`);
    Dom.setProp(this.mask, "--start-point", `${this.startValue}%`);
    // this.mask.style.setProperty("--slider-width", `${value}%`);
    // this.mask.style.setProperty("--start-point", `${this.startValue}%`);
  }
}
