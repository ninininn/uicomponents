import { BaseComponent, Dom, findElem } from "../../Utils/Utils";

import { Palette, ColorFormat, Color } from "../../Utils/Color";
import addSvg from "../../../public/add.svg";

var defaultPickerConfig = {
  limits: 5, //maxium color number stored in container
  defaults: [],
};

export class ColorPicker extends BaseComponent {
  constructor(options = {}) {
    const pickerContainer = document.createElement("div");

    Dom.addClass(pickerContainer, ["color-picker"]);

    super(pickerContainer);
    this._config = Object.assign({}, defaultPickerConfig, options);
    this.defaultColors = [...this._config.defaults].slice(
      0,
      this._config.limits
    );
    this.colors = [...this.defaultColors];
    this.current = this.colors[0];
    this._picker = this._createPickerpanel();
    this._init();
    this._bindEvent();
  }

  get picker() {
    return this._picker;
  }

  get _picked() {
    return ColorFormat.rgbTohsl(this.current);
  }

  _init() {
    //預設顏色顯示
    for (let color of this.defaultColors) {
      const colorDiv = document.createElement("div");
      Dom.addClass(colorDiv, ["color"]);
      colorDiv.style.backgroundColor = color;
      Dom.setAttribute(colorDiv, "colorpick", color);
      this.onevent(colorDiv, "click", (e) => {
        const colorPicked = e.target.dataset.colorpick;
        //點擊打開picker面板
        Dom.addClass(this._picker, ["visible"]);
        //傳入dataset.colorpick作為面板當前顏色
        Dom.setAttribute(this._picker, "currentpick", colorPicked);
        this._paintCanvas(
          this._picker.querySelector("canvas"),
          ColorFormat.rgbTohsl(colorPicked)
        );
        Dom.setProperty(
          this._picker,
          "--picker-bg",
          ColorFormat.rgbTohsl(colorPicked)
        );
        Dom.setProperty(
          this._picker.querySelector(".hue-track"),
          "--hue",
          ColorFormat.rgbTohsl(colorPicked)
            .toLowerCase()
            .replace(/[hsl()/+]/g, "")
            .replace(/\s+/g, ",")
            .split(",")[0]
        );
      });
      this.getElem().appendChild(colorDiv);
    }

    Dom.addClass(this._picker, ["picker"]);

    //新增顏色的操作按鈕
    const addBtn = document.createElement("button");
    addBtn.type = "button";
    const addImg = document.createElement("img");
    addImg.src = addSvg;
    addBtn.append(addImg);
    Dom.addClass(addBtn, ["btn", "btn-sm", "btn-primary", "add-color-btn"]);
    this.getElem().appendChild(addBtn);
    this._addBtn = addBtn;

    const hueThumb = this._picker.querySelector(".hue-track .picker-btn");
    const alphaThumb = this._picker.querySelector(".alpha-track .picker-btn");
    const canvasThumb = this._picker.querySelector(".color-track .picker-btn");

    this.getElem().appendChild(this._picker);
    this._render();
  }

  _bindEvent() {
    const colorTrack = this._picker.querySelector(".color-track");
    const hueTrack = this._picker.querySelector(".hue-track");
    const alphaTrack = this._picker.querySelector(".alpha-track");
    const hueThumb = this._picker.querySelector(".hue-track .picker-btn");
    const alphaThumb = this._picker.querySelector(".alpha-track .picker-btn");
    const canvasThumb = this._picker.querySelector(".color-track .picker-btn");

    let saturation = 1,
      lightness = 1,
      hue = 0,
      alpha = 1;

    if (this._addBtn)
      this.onevent(this._addBtn, "click", togglePicker.bind(this));

    //pointer-down
    this.onevent(colorTrack, "pointerdown", (e) => {
      colorTrack.setPointerCapture(e.pointerId);
      update.call(this);
      e.preventDefault();
    });

    this.onevent(hueTrack, "pointerdown", (e) => {
      hueTrack.setPointerCapture(e.pointerId);
      update.call(this);
      e.preventDefault();
    });
    this.onevent(alphaTrack, "pointerdown", (e) => {
      alphaTrack.setPointerCapture(e.pointerId);
      update.call(this);
      e.preventDefault();
    });

    //pointer-move
    this.onevent(colorTrack, "pointermove", (e) => {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      saturation = clamp((e.clientX - left) / width);
      lightness = clamp(1 - (e.clientY - top) / height);
    });
    this.onevent(hueTrack, "pointermove", (e) => {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      hue = clamp((e.clientX - left) / width) * 360;
    });
    this.onevent(alphaTrack, "pointermove", (e) => {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      alpha = clamp((e.clientX - left) / width);
    });

    //pointer-up
    this.onevent(colorTrack, "pointerup", (e) => {
      update.call(this);
    });
    this.onevent(hueTrack, "pointerup", (e) => {
      update.call(this);
    });
    this.onevent(alphaTrack, "pointerup", (e) => {
      update.call(this);
    });

    function togglePicker() {
      Dom.toggleClass(this._picker, ["visible"]);
    }
    function clamp(value, min = 0, max = 1) {
      return Math.min(max, Math.max(min, value));
    }
    function update() {
      console.log(saturation, lightness, hue, alpha);
      const hslStr = `hsl(${Math.round(hue)},${Math.round(saturation * 100)},${Math.round(lightness * 100)})`;
      this.current = ColorFormat.hslTorgb(hslStr);
      console.log("update", this);
      this._paintCanvas(colorTrack.querySelector("canvas"), hslStr);
      Dom.setProperty(hueThumb, "--hue", hue);
      hueThumb.style.left = (hue / 360) * hueTrack.offsetWidth + "px";
      Dom.setProperty(this._picker, "--picker-bg", this.current);
    }
  }

  _render() {
    if (this.colors.length > this._config.limits) {
      Dom.addClass(this._addBtn, ["hidden"]);
    }
  }
  _createPickerpanel() {
    const pickerContainer = document.createElement("div");
    const canvasContainer = document.createElement("div");
    const canvas = document.createElement("canvas");

    const trackContainer = document.createElement("div");
    const currentColor = document.createElement("div");
    Dom.addClass(currentColor, ["current-picked-color"]);

    Dom.setAttribute(pickerContainer, "currentpick", this._picked);
    this._paintCanvas(canvas, this._picked);
    const canvasThumb = document.createElement("button");
    const hueThumb = document.createElement("button");
    const alphaThumb = document.createElement("button");
    const alphaTrack = document.createElement("div");
    const hueTrack = document.createElement("div");
    canvasContainer.append(canvas, canvasThumb);
    alphaTrack.append(alphaThumb);
    hueTrack.append(hueThumb);
    trackContainer.append(currentColor, hueTrack, alphaTrack);
    pickerContainer.append(canvasContainer, trackContainer);
    Dom.addClass(canvasContainer, ["color-track"]);
    Dom.addClass(alphaTrack, ["alpha-track"]);
    Dom.addClass(hueTrack, ["hue-track"]);

    Dom.addClass(canvasThumb, ["picker-btn"]);
    Dom.addClass(hueThumb, ["picker-btn"]);
    Dom.addClass(alphaThumb, ["picker-btn"]);

    return pickerContainer;
  }

  _paintCanvas(canvasElem, fill) {
    const w = canvasElem.width;
    const h = canvasElem.height;
    const context = canvasElem.getContext("2d");
    // Base hue fill
    context.fillStyle = `hsl(${
      fill
        .toLowerCase()
        .replace(/[hsl()/+]/g, "")
        .replace(/\s+/g, ",")
        .split(",")[0]
    },100%,50%)`;

    console.log(fill);
    context.fillRect(0, 0, w, h);
    // White → transparent (left to right)
    const whiteGrad = context.createLinearGradient(0, 0, w, 0);
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

  _update() {}
}
