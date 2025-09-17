import { Dismiss, Modal, Popover } from "flowbite";
import { BaseComponent } from "../../../Utils";

export class Notification extends BaseComponent {
  constructor(trigger, options, type) {
    //Base notification container
    let targetElem = document.createElement("div");
    targetElem.className = "notify-container";

    super(targetElem);
    this.UItype = "Notification";
    this.options = { ...this.config, ...options, type: type };
    this.triggerEl = trigger;
    //種類
    this.type = this.options.type;
    this._instance = this._defineType(this._elem, this.type);
    this._init();
  }

  get config() {
    return {
      type: "toast",          //視窗類型
      area: ["auto", "auto"], //尺寸
      msgContent: null,       //主要文字內容
      customContent: null,    //自定義HTML內容
      msgTitle: null,         //title文字
      classes: null,          //自定義class
      handler: null,          //callback when trigger
      position: "right-bottom", //位置
    };
  }

  _defineType(target, type) {
    switch (type) {
      case "toast":
        return new ToastMsg(target, this.triggerEl, this.options);
      case "modal":
        return new ModalMsg(this.triggerEl, this.options);
      case "popover":
        return new PopoverMsg(target, this.triggerEl, this.options);
      case "alert":
        return new AlertMsg(target, this.triggerEl, this.options);
      default:
        console.error("必選一種頁面類型");
        break;
    }
  }

  _init() {
    this._bindEvent();
  }

  _bindEvent() {
    // if (!this.options.handlers) return;
    this.onevent(this.triggerEl, "click", this.show.bind(this));
    // this.onevent(this.triggerEl, "click", this.options.handlers.bind(this.triggerEl));
  }

  show() {
    this._instance.onShow();
  }
}

//toast類型
//flowbite needed: target,trigger,options
class ToastMsg extends Dismiss {
  constructor(target, trigger, options) {
    super(target, target.querySelector("[data-dismissbtn]"), options);
    target.id = "alert-content";
    target.classList.add("alert", "dismiss-alert");
    target.innerHTML = `
    <h3 class="text-lg font-medium">${options.msgTitle}</h3>
    <div class="mt-2 mb-4 text-sm">
      ${options.msgContent}
    </div>
    <div class="flex">
    <button type="button" class="btn btn-secondary">
    <svg class="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
    </svg>
    View more
    </button>
    <button type="button" class="btn btn-primary" data-dismissbtn aria-label="Close">
    ${options.miss}
      </button>
    </div>
    `;
    this._options = { ...this._options, ...this.config };
    this.msg = this._options.msgContent;
    this.missBtn = this._targetEl.querySelectorAll("[data-dismissbtn]");
    this.bindHandler = this.onHide.bind(this);
    this._init();
  }

  //預設option設定
  get config() {
    return {
      //flowbite
      transition: "transition-opacity",
      duration: "ease-out",
      timing: 300,

      //custom
      yes: "我了解了",
      miss: "dismiss",
    };
  }

  _init() {
    this.missBtn.forEach((btn) => {
      btn.addEventListener("click", this.bindHandler);
    });
  }

  onShow() {
    document.body.appendChild(this._targetEl);
    this._targetEl.classList.remove("hidden");
    this._targetEl.classList.remove("opacity-0");
    this._targetEl.classList.add("opacity-100");
  }

  onHide() {
    super.hide();
    // document.body.removeChild(this._targetEl);
  }

  updateOnHide(fn) {
    super.updateOnHide(fn);
  }
}

//Modal類型
//flowbite needed: target,options
class ModalMsg extends Modal {
  constructor(trigger, options) {
    super();
  }

  get config() {
    return {

    };
  }
}

//Popover類型
//flowbite needed: target,trigger,options
class PopoverMsg extends Popover {
  constructor(target, trigger, options){
    super();
  }
}
//Alert類型
//target,trigger,options
class AlertMsg {
  constructor(target, trigger, options){

  }
}


//掛到全域window上供外部使用
window.Notification = Notification;
