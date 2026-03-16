// import { BaseComponent, Dom, clamp, onClickOutside, positionFloat } from "../../Utils/Utils";
import { clamp, positionFloat } from "../../Utils/Utils";
import {Dom} from '../../Utils/Dom';
import {BaseComponent} from '../BaseCompo';

import { ColorFormat, Color } from "../../Utils/Color";
import addSvg from "../../../public/add.svg";

var defaultPickerConfig = {
  limits: 5, //maxium color number stored in container
  defaults: ["#878787", "#474747"],
  mode: "hex",
};

export class ColorPicker extends BaseComponent {
  constructor(options = {}) {
    const pickerContainer = document.createElement("div");

    Dom.addClass(pickerContainer, ["color-picker"]);

    super(pickerContainer);
    this.UItype = "ColorPicker";
    this._config = Object.assign({}, defaultPickerConfig, options);
    this.mode = this._config.mode;
    this.defaultColors = this._convertColorMode(
      this._config.defaults,
      this.mode
    ).slice(0, this._config.limits);
    this.colors =
      this._config.limits === 1
        ? [this.defaultColors]
        : [...this.defaultColors];
    this._current = this.getColorClass(this.colors[0]);
    this._picker = this._createPickerpanel();
    this._trigger = undefined;
    this._init();
    this._render();
    this._bindEvent();
  }

  get picker() {
    return this._picker;
  }

  set current(value) {
    this._current = this.getColorClass(value);
  }

  get current() {
    switch (this.mode) {
      case "rgb":
        return this._current.toRgb();
      case "hsl":
        return this._current.toHsl();
      case "hex":
        return this._current.toHex();
    }
  }

  //回傳Color類別物件
  getColorClass(value) {
    //value會是色碼，要先轉成hsl帶入Color
    const colorStr = this._convertColorMode(value, "hsl")[0];
    const nums = (colorStr.match(/[\d.]+/g) || []).map(Number);
    const [hue, saturation, lightness, alpha = 1] = nums;
    return new Color(hue, saturation, lightness, alpha);
  }

  _init() {
    this._theme = 'var(--color-primary-500)';
    Dom.setProperty(this.getElem(), "--theme", this._theme);
    //預設顏色顯示
    for (let color of this.defaultColors) {
      const colorDiv = document.createElement("div");
      Dom.addClass(colorDiv, ["color"]);
      // colorDiv.style.backgroundColor = color;
      Dom.setAttribute(colorDiv, "colorpick", color);
      this.getElem().appendChild(colorDiv);
    }

    Dom.addClass(this._picker, ["picker"]);

    //加入新增顏色用的操作按鈕
    const addBtn = Dom.setButtons({
      classes: ["btn", "btn-sm", "btn-primary", "add-color-btn"],
      icon: addSvg,
      handler: () => {
        this._trigger = this._addBtn;
        const panelComfirmBtn = this._picker.querySelector(
          " button:not(.picker-btn)"
        );
        Dom.setText(panelComfirmBtn, "新增顏色");
        positionFloat(this._picker, this._addBtn);
        Dom.addClass(this._picker, ["visible"]);

        switch (this.mode) {
          case "rgb":
            this.current = "rgb(255, 255, 255)";
            break;
          case "hsl":
            this.current = "hsl(0 0 100)";
            break;
          case "hex":
            this.current = "#FFFFFF";
            break;
        }

        this._updatePanel();
      },
    });
    this.getElem().appendChild(addBtn);
    this._addBtn = addBtn;

    this.getElem().appendChild(this._picker);
  }

  _bindEvent() {
    const colorTrack = this._picker.querySelector(".color-track canvas");
    const hueTrack = this._picker.querySelector(".hue-track");
    const alphaTrack = this._picker.querySelector(".alpha-track");

    this.onevent(this.getElem(), "click", (e) => {
      e.stopPropagation();
      if (e.target.classList.contains("color")) {
        this._trigger = e.target;
        const colorPicked = e.target.dataset.colorpick;
        const panelComfirmBtn = this._picker.querySelector(
          " button:not(.picker-btn)"
        );
        this.current = colorPicked;

        if (this._config.limits > 1) {
          const colors = this.getElem().querySelectorAll(".color");
          colors.forEach((color) => {
            if (color === this._trigger) {
              Dom.addClass(color, ["main-color"]);
            } else {
              Dom.removeClass(color, ["main-color"]);
            }
          });
        }

        //點擊打開picker面板
        positionFloat(this._picker, e.target);
        Dom.addClass(this._picker, ["visible"]);
        Dom.setText(panelComfirmBtn, "更改顏色");
        //傳入dataset.colorpick作為面板當前顏色
        Dom.setAttribute(this._picker, "currentpick", colorPicked);
        this._updatePanel();
      }
    });

    //pointer-move
    dragging.call(this, colorTrack, (e) => {
      //取得當前_current Color物件
      let { h, a } = this.syncColorBase();
      const { left, top, width, height } = colorTrack.getBoundingClientRect();
      //! canvas上的分布是HSV，要轉成HSL
      let satHSV = clamp((e.clientX - left) / width);
      let v = clamp(1 - (e.clientY - top) / height);
      let l = v * (1 - satHSV / 2);
      let satHSL = 0;
      if (l !== 0 && l !== 1) {
        satHSL = (v - l) / Math.min(l, 1 - l);
      }
      let lightness = Math.round(l * 100);
      let saturation = Math.round(satHSL * 100);

      this._current = new Color(h, saturation, lightness, a);
      this._updatePanel();
    });
    dragging.call(this, hueTrack, (e) => {
      let { s, l, a } = this.syncColorBase();
      const { left, width } = hueTrack.getBoundingClientRect();
      let hue = clamp((e.clientX - left) / width) * 360;
      this._current = new Color(hue, s, l, a);
      this._updatePanel();
    });
    dragging.call(this, alphaTrack, (e) => {
      let { h, s, l } = this.syncColorBase();
      const { left, width } = alphaTrack.getBoundingClientRect();
      let alpha = clamp((e.clientX - left) / width);
      this._current = new Color(h, s, l, alpha);
      this._updatePanel();
    });

    super.onClickOutside(this.getElem(), () => {
      Dom.removeClass(this._picker, ["visible"]);
    });

    function dragging(target, onMove) {
      let active = false;
      this.onevent(target, "pointerdown", (e) => {
        active = true;
        target.setPointerCapture(e.pointerId);
        onMove(e);
        e.preventDefault();
      });
      this.onevent(target, "pointermove", (e) => {
        if (!active) return;
        onMove(e);
      });
      this.onevent(target, "pointerup", (e) => {
        if (!active) return;
        active = false;
        this._updatePanel();
      });
    }
  }

  _render() {
    //!render不用更新pickerPanel，因為也還沒確定顏色
    if (this.colors.length >= this._config.limits) {
      Dom.addClass(this._addBtn, ["hidden"]);
    }

    //mainColor加上放大效果，其餘不變
    if (this._config.limits > 1) {
      const colors = this.getElem().querySelectorAll(".color");
      colors.forEach((color) => {
        if (color.dataset.colorpick === this.current) {
          Dom.addClass(color, ["main-color"]);
        } else {
          Dom.removeClass(color, ["main-color"]);
        }
      });
    }
  }

  //[內部控制]-建立pickerPanel
  _createPickerpanel() {
    const pickerContainer = document.createElement("div");
    const canvasContainer = document.createElement("div");
    const canvas = document.createElement("canvas");

    const confirmBtn = Dom.setButtons({
      classes: ["btn", "btn-primary"],
      text: "更改顏色",
      handler: () => {
        //回傳當前顏色
        //trigger為(+)，加入ColorCiv
        if (this._trigger === this._addBtn) {
          this.colors.push(this.current);
          const newColor = document.createElement("div");
          Dom.addClass(newColor, ["color"]);
          newColor.dataset.colorpick = this.current;
          // newColor.style.backgroundColor = this.current;
          //加上main-color class
          Dom.addClass(newColor, ["main-color"]);
          this._addBtn.insertAdjacentElement("beforebegin", newColor);
        } else {
          //更新該colorDiv的值
          //this.colors array也要更新
          const triggerIndex = Array.from(
            this.getElem().querySelectorAll(".color")
          ).indexOf(this._trigger);
          this.colors[triggerIndex] = this.current;
          this._trigger.dataset.colorpick = this.current;
          // this._trigger.style.backgroundColor = this.current;
        }

        this._config.handler?.call(this, this.current);
        Dom.removeClass(this._picker, ["visible"]);
        this._render();
        this._updatePanel();
      },
    });
    const trackContainer = document.createElement("div");
    const subTrackContainer = document.createElement("div");
    const currentColor = document.createElement("div");
    Dom.addClass(currentColor, ["current-picked-color"]);

    Dom.setAttribute(pickerContainer, "currentpick", this.colors[0]);
    this._paintCanvas(canvas, 0);
    const canvasThumb = document.createElement("button");
    const hueThumb = document.createElement("button");
    const alphaThumb = document.createElement("button");
    const alphaTrack = document.createElement("div");
    const hueTrack = document.createElement("div");
    canvasContainer.append(canvas, canvasThumb);
    alphaTrack.append(alphaThumb);
    hueTrack.append(hueThumb);
    subTrackContainer.append(hueTrack, alphaTrack);
    trackContainer.append(currentColor, subTrackContainer);
    pickerContainer.append(canvasContainer, trackContainer, confirmBtn);
    Dom.addClass(canvasContainer, ["color-track"]);
    Dom.addClass(alphaTrack, ["alpha-track"]);
    Dom.addClass(hueTrack, ["hue-track"]);

    Dom.addClass(canvasThumb, ["picker-btn"]);
    Dom.addClass(hueThumb, ["picker-btn"]);
    Dom.addClass(alphaThumb, ["picker-btn"]);

    return pickerContainer;
  }

  //[內部控制]-更新canvas底色
  _paintCanvas(canvasElem, hue) {
    const w = canvasElem.width;
    const h = canvasElem.height;
    const context = canvasElem.getContext("2d");

    // Base hue fill
    context.fillStyle = `hsl(${hue},100%,50%)`;

    context.fillRect(0, 0, w, h);
    // White → transparent (left to right)
    const whiteGrad = context.createLinearGradient(0, 0, w, h);
    whiteGrad.addColorStop(0, "rgba(255,255,255,1)");
    whiteGrad.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = whiteGrad;
    context.fillRect(0, 0, w, h);
    // Black → transparent (bottom to top)
    const blackGrad = context.createLinearGradient(0, h, 0, 0);
    blackGrad.addColorStop(0, "rgba(0,0,0,1)");
    blackGrad.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = blackGrad;
    context.fillRect(0, 0, w, h);
  }

  //[內部控制]-更新pickerPanel內部顏色位置
  _updatePanel() {
    const { h, s, l, a } = this.syncColorBase();

    const colorTrack = this._picker.querySelector(".color-track canvas");
    const hueTrack = this._picker.querySelector(".hue-track");
    const alphaTrack = this._picker.querySelector(".alpha-track");
    const hueThumb = this._picker.querySelector(".hue-track .picker-btn");
    const alphaThumb = this._picker.querySelector(".alpha-track .picker-btn");
    const canvasThumb = this._picker.querySelector(".color-track .picker-btn");
    this._paintCanvas(colorTrack, h);//如果hue沒變就不用重繪?
    Dom.setProperty(hueTrack, "--hue", h);
    Dom.setProperty(alphaTrack, "--hue", h);

    //update Canvas-thumb position
    let vHSV = (l / 100) + (s / 100) * Math.min(l / 100, 1 - l / 100);
    const satHSV = vHSV === 0 ? 0 : 2 * (1 - (l / 100) / vHSV);
    const ctrackW = colorTrack.clientWidth;
    const ctrackH = colorTrack.clientHeight;
    const cthumbW = canvasThumb.offsetWidth;
    const cthumbH = canvasThumb.offsetHeight;

    const cx = clamp(satHSV * ctrackW - cthumbW / 2, 0, ctrackW - cthumbW);
    const cy = clamp((1 - vHSV) * ctrackH - cthumbH / 2, 0, ctrackH - cthumbH);

    canvasThumb.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;

    //update Hue-thumb position
    const hueW = hueTrack.clientWidth;
    const hueX = (h / 360) * hueW;
    const htrackW = hueTrack.clientWidth;
    const hthumbW = hueThumb.offsetWidth;
    const hx = clamp((h / 360) * htrackW - hthumbW / 2, 0, htrackW - hthumbW);
    hueThumb.style.transform = `translate3d(${hx}px, 0, 0)`;

    //update Alpha-thumb position
    const atrackW = alphaTrack.clientWidth;
    const athumbW = alphaThumb.offsetWidth;
    const ax = clamp(a * atrackW - athumbW / 2, 0, atrackW - athumbW);
    alphaThumb.style.transform = `translate3d(${ax}px, 0, 0)`;

    // Dom.setProperty(this._picker, "--picker-bg", this._convertColorMode(this.current, this.mode));
    Dom.setAttribute(
      this._picker,
      "currentpick",
      this._convertColorMode(this.current, this.mode)
    );
  }

  //[內部控制]-依據colorMode轉換色彩模式
  _convertColorMode(colorArr, mode = "rgb") {
    const modeType = mode.toLowerCase();
    //go through每個color，依據各color色彩模式轉換:

    if (!Array.isArray(colorArr)) {
      colorArr = [colorArr];
    }
    let convertArr = colorArr.map((color) => {
      let originMode = ColorFormat.getColorMode(color);
      switch (originMode) {
        case "hsl":
          switch (modeType) {
            case "rgb":
              return ColorFormat.hslTorgb(color);
            case "hsl":
              return color;
            case "hex":
              return ColorFormat.hslTohex(color);
          }
          break;
        case "hex":
          switch (modeType) {
            case "rgb":
              return ColorFormat.hexTorgb(color);
            case "hsl":
              return ColorFormat.hexTohsl(color);
            case "hex":
              return color;
          }
          break;
        case "rgb":
          switch (modeType) {
            case "rgb":
              return color;
            case "hsl":
              return ColorFormat.rgbTohsl(color);
            case "hex":
              return ColorFormat.rgbTohex(color);
          }
          break;
      }
    });

    return convertArr;
  }

  //[外部控制]-取得當前色
  getColor() {
    switch (this.mode) {
      case "rgb":
        return this.current.toRgb();
      case "hex":
        return this.current.toHex();
      case "hsl":
        return this.current.toHsl();
    }
  }

  //[外部控制]-設定主色
  setMain(color) {
    this.current = this._convertColorMode(color, this.mode);
    this._updatePanel();
  }

  //[外部控制]-取得最新current並轉為hsl
  syncColorBase() {
    return this._current.base;
  }

  //[外部控制]-回復初始值
  //(如果新增多個顏色則移除新加的顏色)
  reset() {
    this.colors = [...this.defaultColors];
    this.current = this.colors[0];

    this.getElem().querySelectorAll(".color").forEach((el, index) => {
      if (!this.colors[index]) el.remove();
      el.dataset.colorpick = this.colors[index];
    });
    this._updatePanel();
  }
  //[外部控制]-重新設置(更新)預設值
  updateDefaults(update) {
    this.defaultColors = this._convertColorMode(
      update,
      this.mode
    ).slice(0, this._config.limits);
  }
}

//掛到全域window上供外部使用
window.ColorPicker = ColorPicker;
