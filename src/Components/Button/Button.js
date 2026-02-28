import { Dom, BaseComponent } from "../../Utils/Utils";

// custom btn components
// props:
// parentElement | btnType | settings
/**
 * @param {HTMLElement} parentNode - using querySelector/ getElementById
 * @param {string} btnType - button type
 * @param {object} settings - custom button settings
 */

export class Button extends BaseComponent {
  constructor(btnType, options) {
    const element = document.createElement("button");
    super(element);
    // this._elem = element;
    this.UItype = "Button";
    this.options = { ...this.defaultOptions, ...options };
    this.btnType = btnType;
    this.init(); // parent class's init()
  }

  // button 基本(預設)設定
  get defaultOptions() {
    return {
      type: "button",
      classes: ["btn"],
      text: "按鈕文字",
      events: [],
    };
  }

  init() {
    this.render();
    this.bindEvents();
  }
  // overwrite render()
  render() {
    Dom.addClass(this.getElem(), this.options.classes);
    Dom.setText(this.getElem(), this.options.text);
  }

  // overwrite bindEvents()
  bindEvents() {}
}
