import { Dismiss } from "flowbite";
import { Modal } from "flowbite";
import { Tooltip } from "flowbite";
export class LayerPage {
  constructor(trigger, options) {
    this.options = { ...this.config, ...options };
    //layerPage種類
    this._instance = this._defineType(this.options.type);
    this.triggerEl = trigger;
  }

  get config() {
    return {
      type: "toast",        //類型
      area: ["auto", "auto"], //尺寸
      msgContent: null,         //主要文字內容
      customContent: null,         //自定義HTML內容
      msgTitle: null,         //title文字
      classes: null,         //自定義class
    };
  }

  _init() {

  }

  _defineType(type) {
    switch (type) {
      case "toast":
        return new ToastMsg(this.triggerEl, this.options);
      case "dialog":
        return new ModalMsg(this.triggerEl, this.options);
      case "tooltip":
        return new TooltipMsg(this.triggerEl, this.options);
      default:
        console.error("必選一種頁面類型");
        break;
    }
  }
}

//toast類型
class ToastMsg extends Dismiss {
  constructor(trigger, options) {
    let targetTemp = document.createElement("div");
    targetTemp.id = "alert-content";
    targetTemp.className = "alert dismiss-alert";
    targetTemp.innerHTML = `
    <h3 class="text-lg font-medium">alert 標題文字</h3>
    <div class="mt-2 mb-4 text-sm">
      ${options?.msgContent}
    </div>
    <div class="flex">
    <button type="button" class="btn btn-secondary">
    <svg class="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
    </svg>
    View more
    </button>
    <button type="button" class="btn btn-primary" data-dismissbtn aria-label="Close">
    Dismiss
      </button>
    </div>
    `;
    super(targetTemp, trigger, options);
    this._options = { ...this._options, ...this.config };
    this.msg = options?.msgContent;
    this.missBtn = this._targetEl.querySelectorAll("[data-dismissbtn]");
    this.bindHandler = this.onHide.bind(this);
    this._init();
  }

  //預設option設定
  get config() {
    return {
      transition: "transition-opacity",
      duration: "ease-out",
      timing: 300,
      yes: "我了解了",
      miss: "dismiss",
    };
  }

  _init() {
    this.missBtn.forEach((btn) => {
      btn.addEventListener("click", this.bindHandler);
    });
    console.log(this._targetEl);
  }

  onShow() {
    document.body.appendChild(this._targetEl);
  }

  onHide() {
    super.hide();
    document.body.removeChild(this._targetEl);
  }

  updateOnHide(fn) {
    super.updateOnHide(fn);
  }
}

//Modal類型
class ModalMsg extends Modal {

}

//Tooltip類型
class TooltipMsg extends Tooltip {

}


//掛到全域window上供外部使用
window.LayerPage = LayerPage;
