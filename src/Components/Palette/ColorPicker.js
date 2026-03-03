import { BaseComponent, Dom, findElem } from "../../Utils/Utils";

import { Palette, ColorFormat, Color } from "../../Utils/Color";
import addSvg from "../../../public/add.svg";

var defaultPickerConfig = {
  limits: 5, //maxium color number stored in container
  defaults: [],
  mode: 'hex'
};

export class ColorPicker extends BaseComponent {
  constructor(options = {}) {
    const pickerContainer = document.createElement("div");

    Dom.addClass(pickerContainer, ["color-picker"]);

    super(pickerContainer);
    this.UItype = "ColorPicker";
    this._config = Object.assign({}, defaultPickerConfig, options);
    this.mode = this._config.mode;
    this.defaultColors = this._convertColorMode([...this._config.defaults], this.mode).slice(
      0,
      this._config.limits
    );
    this.colors = [...this.defaultColors];
    this._current = this.colors[0];
    this._picker = this._createPickerpanel();
    this._init();
    this._render();
    this._bindEvent();
  }

  get picker() {
    return this._picker;
  }

  get current() {
    return this._current;
  }

  _init() {
    //預設顏色顯示
    for (let color of this.defaultColors) {
      const colorDiv = document.createElement("div");
      Dom.addClass(colorDiv, ["color"]);
      colorDiv.style.backgroundColor = color;
      Dom.setAttribute(colorDiv, "colorpick", color);
      this.getElem().appendChild(colorDiv);
    }

    Dom.addClass(this._picker, ["picker"]);

    //加入新增顏色用的操作按鈕
    const addBtn = document.createElement("button");
    addBtn.type = "button";
    const addImg = document.createElement("img");
    addImg.src = addSvg;
    addBtn.append(addImg);
    Dom.addClass(addBtn, ["btn", "btn-sm", "btn-primary", "add-color-btn"]);
    this.getElem().appendChild(addBtn);
    this._addBtn = addBtn;

    this.getElem().appendChild(this._picker);
  }

  _bindEvent() {
    const colorTrack = this._picker.querySelector(".color-track canvas");
    const hueTrack = this._picker.querySelector(".hue-track");
    const alphaTrack = this._picker.querySelector(".alpha-track");
    const hueThumb = this._picker.querySelector(".hue-track .picker-btn");
    const alphaThumb = this._picker.querySelector(".alpha-track .picker-btn");
    const canvasThumb = this._picker.querySelector(".color-track .picker-btn");

    const syncCurrent = () => {
      let buffer;
      switch (this.mode) {
        case 'hsl':
          buffer = this.current;
          break;
        case 'rgb':
          buffer = ColorFormat.rgbTohsl(this.current);
          break;
        case 'hex':
          buffer = ColorFormat.hexTohsl(this.current);
          break;
      }
      const currentPicked = buffer
        .toLowerCase()
        .replace(/[hsl()/+]/g, "")
        .replace(/\s+/g, ",")
        .split(",").map(str => Number(str));
      // [hue, saturation, lightness, alpha = 1] = currentPicked;
      return currentPicked;
    };
    // if (this._addBtn)
    //   this.onevent(this._addBtn, "click", togglePicker.bind(this));

    //pointer-down
    // this.onevent(colorTrack, "pointerdown", (e) => {
    //   syncCurrent();
    //   colorTrack.setPointerCapture(e.pointerId);
    //   updateCurrentColor.call(this);
    //   e.preventDefault();
    // });

    const colorDivs = this.getElem().querySelectorAll(".color");
    colorDivs.forEach(div => {
      this.onevent(div, "click", (e) => {
        const colorPicked = e.target.dataset.colorpick;
        this._current = colorPicked;
        //點擊打開picker面板
        Dom.addClass(this._picker, ["visible"]);
        //傳入dataset.colorpick作為面板當前顏色
        Dom.setAttribute(this._picker, "currentpick", colorPicked);
        this._updatePanel();
      });

    });

    //pointer-move
    dragging.call(this, colorTrack, (e) => {
      let [hue, sat, lig, alp] = syncCurrent();
      const { left, top, width, height } = colorTrack.getBoundingClientRect();
      //! canvas上的分布是HSV，要轉成HSL
      let satHSV = clamp((e.clientX - left) / width);
      let brightness = clamp(1 - (e.clientY - top) / height);
      let saturation = Math.round(satHSV * 100);
      let lightness = Math.round(brightness * (1 - (satHSV / 2)) * 100);
      const updateColor = new Color(hue, saturation, lightness, alp);
      switch (this.mode) {
        case 'rgb':
          this._current = updateColor.toRgb();
          break;
        case 'hsl':
          this._current = updateColor.toHsl();
          break;
        case 'hex':
          this._current = updateColor.toHex();
          break;
      }
      updateCurrentColor.call(this);
    });
    dragging.call(this, hueTrack, (e) => {
      let [hue, saturation, lightness, alp] = syncCurrent();
      const { left, top, width, height } = hueTrack.getBoundingClientRect();
      hue = clamp((e.clientX - left) / width) * 360;
      const updateColor = new Color(hue, saturation, lightness, alp);
      switch (this.mode) {
        case 'rgb':
          this._current = updateColor.toRgb();
          break;
        case 'hsl':
          this._current = updateColor.toHsl();
          break;
        case 'hex':
          this._current = updateColor.toHex();
          break;
      }
      console.log("hue move:", hue);
      updateCurrentColor.call(this);
    });
    dragging.call(this, alphaTrack, (e) => {
      let [hue, saturation, lightness, alpha] = syncCurrent();
      const { left, top, width, height } = alphaTrack.getBoundingClientRect();
      alpha = clamp((e.clientX - left) / width);
      const updateColor = new Color(hue, saturation, lightness, alpha);
      switch (this.mode) {
        case 'rgb':
          this._current = updateColor.toRgb();
          break;
        case 'hsl':
          this._current = updateColor.toHsl();
          break;
        case 'hex':
          this._current = updateColor.toHex();
          break;
      }
      updateCurrentColor.call(this);
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
        updateCurrentColor.call(this);
      });
    }

    function togglePicker() {
      Dom.toggleClass(this._picker, ["visible"]);
    }
    function clamp(value, min = 0, max = 1) {
      return Math.min(max, Math.max(min, value));
    }

    function updateCurrentColor() {
      const [hue, saturation, lightness, alpha] = syncCurrent();
      const updateColor = new Color(
        Math.round(hue), saturation, lightness,
        Math.round(alpha * 100) / 100
      );
      switch (this.mode) {
        case 'rgb':
          this._current = updateColor.toRgb();
          break;
        case 'hex':
          this._current = updateColor.toHex();
          break;
        case 'hsl':
          this._current = updateColor.toHsl();
          break;
      }
      this._updatePanel();
      //! 如果是點現有顏色來更改，應該要改回去該Div
    }
  }

  _render() {
    this._updatePanel();
    if (this.colors.length > this._config.limits) {
      Dom.addClass(this._addBtn, ["hidden"]);
    }
  }

  _createPickerpanel() {
    const pickerContainer = document.createElement("div");
    const canvasContainer = document.createElement("div");
    const canvas = document.createElement("canvas");

    const trackContainer = document.createElement("div");
    const subTrackContainer = document.createElement("div");
    const currentColor = document.createElement("div");
    Dom.addClass(currentColor, ["current-picked-color"]);

    Dom.setAttribute(pickerContainer, "currentpick", this.current);
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
    pickerContainer.append(canvasContainer, trackContainer);
    Dom.addClass(canvasContainer, ["color-track"]);
    Dom.addClass(alphaTrack, ["alpha-track"]);
    Dom.addClass(hueTrack, ["hue-track"]);

    Dom.addClass(canvasThumb, ["picker-btn"]);
    Dom.addClass(hueThumb, ["picker-btn"]);
    Dom.addClass(alphaThumb, ["picker-btn"]);

    return pickerContainer;
  }

  _paintCanvas(canvasElem, hue) {
    const w = canvasElem.width;
    const h = canvasElem.height;
    const context = canvasElem.getContext("2d");

    // const [hue, sat, light] = fill
    //   .toLowerCase()
    //   .replace(/[hsl()/+]/g, "")
    //   .replace(/\s+/g, ",")
    //   .split(",");

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

  _updatePanel() {
    let color;
    switch (this.mode) {
      case 'rgb':
        color = ColorFormat.rgbTohsl(this.current);
        break;
      case 'hex':
        color = ColorFormat.hexTohsl(this.current);
        break;
      case 'hsl':
        color = this.current;
        break;
    }
    const [h, s, l, a = 1] = color
      .toLowerCase()
      .replace(/[hsl()/+]/g, "")
      .replace(/\s+/g, ",")
      .split(",");

    const colorTrack = this._picker.querySelector(".color-track canvas");
    const hueTrack = this._picker.querySelector(".hue-track");
    const alphaTrack = this._picker.querySelector(".alpha-track");
    const hueThumb = this._picker.querySelector(".hue-track .picker-btn");
    const alphaThumb = this._picker.querySelector(".alpha-track .picker-btn");
    const canvasThumb = this._picker.querySelector(".color-track .picker-btn");
    this._paintCanvas(colorTrack, h);
    Dom.setProperty(hueTrack, "--hue", h);
    Dom.setProperty(alphaTrack, "--hue", h);

    if ((h / 360) * hueTrack.offsetWidth >= hueTrack.offsetWidth) {
      hueThumb.style.right = "0px";
    } else {
      hueThumb.style.left = (h / 360) * hueTrack.offsetWidth + "px";
    }
    if (a * alphaTrack.offsetWidth >= alphaTrack.offsetWidth) {
      alphaThumb.style.right = '0px';
    } else {
      alphaThumb.style.left = a * alphaTrack.offsetWidth + "px";
    }
    Dom.setProperty(this._picker, "--picker-bg", this._convertColorMode(this.current, this.mode));
  }

  _convertColorMode(colorArr, mode = 'rgb') {
    const modeType = mode.toLowerCase();
    //go through每個color，依據各color色彩模式轉換:

    if (!Array.isArray(colorArr)) {
      colorArr = [colorArr];
    }
    let convertArr = colorArr.map((color) => {
      let originMode = ColorFormat.getColorMode(color);
      switch (originMode) {
        case 'hsl':
          switch (modeType) {
            case 'rgb':
              return ColorFormat.hslTorgb(color);
            case 'hsl':
              return color;
            case 'hex':
              return ColorFormat.hslTohex(color);
          }
          break;
        case 'hex':
          switch (modeType) {
            case 'rgb':
              return ColorFormat.hexTorgb(color);
            case 'hsl':
              return ColorFormat.hexTohsl(color);
            case 'hex':
              return color;
          }
          break;
        case 'rgb':
          switch (modeType) {
            case 'rgb':
              return color;
            case 'hsl':
              return ColorFormat.rgbTohsl(color);
            case 'hex':
              return ColorFormat.rgbTohex(color);
          }
          break;
      }
    });


    if (convertArr.length === 1) return convertArr[0];
    return convertArr;
  }
}
