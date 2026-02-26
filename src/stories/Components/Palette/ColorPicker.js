import {
  BaseComponent,
  Dom,
  findElem,
} from "../../../Utils/Utils";

import { Palette } from "../../../Utils/Color";
import addSvg from '../../../../public/add.svg';

var defaultPickerConfig = {
  limits: 5,//maxium color number stored in container
  defaults: []
};

export class ColorPicker extends BaseComponent {
  constructor(options = {}) {
    const pickerContainer = document.createElement("div");

    Dom.addClass(pickerContainer, ["color-picker"]);

    super(pickerContainer);
    this._config = Object.assign({}, defaultPickerConfig, options);
    this.customColors = [];
    this.defaultColors = [...this._config.defaults];
    this._picker = this._createCanvas();
    this._init();
    this._bindEvent();
  }

  get picker() {
    return this._picker;
  }
  _init() {
    for (let color of this.defaultColors) {
      const colorDiv = document.createElement("div");
      Dom.addClass(colorDiv, ["color"]);
      colorDiv.style.backgroundColor = color;
      Dom.setAttribute(colorDiv, 'colorpick', color);
      this.getElem().appendChild(colorDiv);
    }

    const addBtn = document.createElement("button");
    addBtn.type = "button";
    const addImg = document.createElement("img");
    addImg.src = addSvg;
    addBtn.append(addImg);
    Dom.addClass(addBtn, ["btn", "btn-sm", "btn-primary", "add-color-btn"]);
    this.getElem().appendChild(addBtn);
    this._addBtn = addBtn;

    Dom.addClass(this._picker, ["picker"]);

    this.getElem().appendChild(this._picker);
  }

  _bindEvent() {
    const hueThumb = this._picker.querySelector(".hue-track .picker-btn");
    const alphaThumb = this._picker.querySelector(".alpha-track .picker-btn");
    const canvasThumb = this._picker.querySelector(".color-track .picker-btn");

    let startX, startY, endX, endY;
    this.onevent(this._addBtn, "click", togglePicker.bind(this));
    this.onevent(canvasThumb, "pointerdown", (e) => {
      console.log("pointer down");
      e.preventDefault();
      canvasThumb.setPointerCapture(1);
      startX = e.clientX;
      startY = e.clientY;
    });
    this.onevent(this._picker, "pointermove", (e) => {
      endX = e.clientX;
      endY = e.clientY;
    });
    this.onevent(canvasThumb, "pointerup", (e) => {
      e.preventDefault();
      checkPickerPosition();
    });
    this.onevent(hueThumb, "pointerdown", () => { console.log("pointerdown!"); });
    this.onevent(alphaThumb, "pointerdown", () => { console.log("pointerdown!"); });

    function togglePicker() {
      Dom.toggleClass(this._picker, ["visible"]);
    }

    function checkPickerPosition() {
      console.log(endY);
      canvasThumb.style.left = `${endX}px`;
      canvasThumb.style.top = `${endY}px`;
      console.log(canvasThumb);
    }
  }

  _createCanvas() {
    const pickerContainer = document.createElement("div");
    const canvasContainer = document.createElement("div");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const w = canvas.width;
    const h = canvas.height;

    // 第一層：左上灰 → 右上紅
    const topGradient = context.createLinearGradient(0, 0, w, 0);
    topGradient.addColorStop(0, "#d9d9d9");
    topGradient.addColorStop(1, "#d23b1e");

    context.fillStyle = topGradient;
    context.fillRect(0, 0, w, h);

    // 第二層：往下變黑
    const darkGradient = context.createLinearGradient(0, 0, 0, h);
    darkGradient.addColorStop(0, "rgba(0,0,0,0)");
    darkGradient.addColorStop(1, "rgba(0,0,0,1)");

    context.fillStyle = darkGradient;
    context.fillRect(0, 0, w, h);
    const canvasThumb = document.createElement("button");
    const hueThumb = document.createElement("button");
    const alphaThumb = document.createElement("button");
    const alphaTrack = document.createElement("div");
    const hueTrack = document.createElement("div");
    canvasContainer.append(canvas, canvasThumb);
    alphaTrack.append(alphaThumb);
    hueTrack.append(hueThumb);
    pickerContainer.append(canvasContainer, hueTrack, alphaTrack);
    Dom.addClass(canvasContainer, ["color-track"]);
    Dom.addClass(alphaTrack, ["alpha-track"]);
    Dom.addClass(hueTrack, ["hue-track"]);


    Dom.addClass(canvasThumb, ["picker-btn"]);
    Dom.addClass(hueThumb, ["picker-btn"]);
    Dom.addClass(alphaThumb, ["picker-btn"]);

    return pickerContainer;
  }
}
