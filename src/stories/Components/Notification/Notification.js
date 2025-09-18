import { Dismiss, Modal, Popover } from "flowbite";
import { BaseComponent, UIUtils } from "../../../Utils";

export class Notification extends BaseComponent {
  constructor(trigger, options, type) {
    //Base notification container
    let targetElem = document.createElement("div");
    targetElem.className = "notify-container";

    super(targetElem, options.theme || "light");
    this.UItype = "Notification";
    this.options = { ...this.config, ...options, type: type };
    this.triggerEl = trigger;
    //種類
    this.type = this.options.type;
    this._instance = this._defineType(this._elem, this.type);
    //confirm&cancle actions
    if (this.options.confirm) {
      this.confirm = this.options.confirm;
    }
    if (this.options.cancel) {
      this.cancel = this.options.cancel;
    }
    this._init();
  }

  get config() {
    return {
      type: "msg",          //視窗類型
      area: ["auto", "auto"], //尺寸
      msgContent: null,       //主要文字內容
      customContent: null,    //自定義HTML內容
      msgTitle: null,         //title文字
      classes: null,          //自定義class
      handler: null,          //callback when trigger
      placement: "right-bottom", //位置
      theme: "light",
    };
  }

  _defineType(target, type) {
    switch (type) {
      case "toast":
        return new ToastMsg(target, this.options);
      case "modal":
        return new ModalMsg(target, this.options);
      case "popover":
        return new PopoverMsg(target, this.triggerEl, this.options);
      case "msg":
        return new DefaultMsg(target, this.triggerEl, this.options);
      default:
        console.error("必選一種頁面類型");
        break;
    }
  }

  _confirmSetting;
  _init() {
    this._render();
    this._bindEvent();
    this._confirmAndcancel();
  }

  //渲染UI樣式
  _render() {
    let themeColor = this._theme === "dark" ? "#1e222778" : "#F3F4F6";
    let textColor = this._theme === "dark" ? "#F3F4F6" : "#1F2937";
    UIUtils.setProperty(this._elem, "--theme", themeColor);
    UIUtils.setProperty(this._elem, "--text", textColor);
  }
  _bindEvent() {
    // if (!this.options.handlers) return;
    this.onevent(this.triggerEl, "click", this.show.bind(this));
    this.onevent(this._instance.confirmBtn, "click", this.hide.bind(this));
    this.onevent(this._instance.cancelBtn, "click", this.hide.bind(this));
    // this.onevent(this.triggerEl, "click", this.options.handlers.bind(this.triggerEl));
  }
  _confirmAndcancel() {
    let confirm = Array.isArray(this.confirm) ? this.confirm : [this.confirm];
    let cancel = Array.isArray(this.cancel) ? this.cancel : [this.cancel];
    let [confirmBtnTxt, confirmAction] = confirm;
    let [cancelBtnTxt, cancelAction] = cancel;
    if (this._instance.confirmBtn) {
      UIUtils.setText(this._instance.confirmBtn, confirmBtnTxt);
    }
    if (this._instance.cancelBtn) {
      UIUtils.setText(this._instance.cancelBtn, cancelBtnTxt);
    }

  }

  _setPosition(position) {
    UIUtils.clearClass(this._elem, ["notify-container", ...this.options.classes]);
    switch (position) {
      case "right-top":
        UIUtils.addClass(this._elem, ["right-[5rem]", "top-[2rem]"]);
        break;
      case "right-bottom":
        UIUtils.addClass(this._elem, ["right-[5rem]", "bottom-[2rem]"]);
        break;
      case "left-top":
        UIUtils.addClass(this._elem, ["left-[5rem]", "top-[2rem]"]);
        break;
      case "left-bottom":
        UIUtils.addClass(this._elem, ["left-[5rem]", "bottom-[2rem]"]);
        break;
      case "center-top":
        UIUtils.addClass(this._elem, ["left-[50%]", "top-[2rem]", "-translate-x-[50%]"]);
        break;
      case "center-bottom":
        UIUtils.addClass(this._elem, ["left-[50%]", "bottom-[2rem]", "-translate-x-[50%]"]);
        break;
      case "center":
        //center
        UIUtils.addClass(this._elem, ["top-[50%]", "left-[50%]", "translate-[-50%_-50%]"]);
        break;
      default:
        console.error("請設定其他位置");
        break;
    }
  }
  show() {
    this._setPosition(this.options.placement);
    this._instance.onShow();
  }
  hide() {
    this._instance.onHide();
  }
}

//toast類型
//flowbite needed: target,trigger(為觸發miss的元素),options
// toast類型應該要由一個容器包覆所有toast-item，且item要堆疊出現
class ToastMsg extends Dismiss {
  constructor(target, options) {
    super(target, target.querySelector("[data-dismissbtn]"), options);
    target.classList.add("alert", "dismiss-alert");
    target.innerHTML = `
    <h3 class="text-lg font-medium">${options.msgTitle}</h3>
    <div class="mt-2 mb-4 text-sm">
      ${options.msgContent}
    </div>
    <div class="flex">
    <button type="button" class="btn btn-secondary" data-dismissbtn aria-label="Close">
    <svg class="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
    </svg>
    View more
    </button>
    <button type="button" class="btn btn-primary" data-confirmbtn >
    ${options.miss}
      </button>
    </div>
    `;
    this._options = { ...this._options, ...this.config };
    this.msg = this._options.msgContent;
    this.confirmBtn = this._targetEl.querySelector("[data-confirmbtn]");
    this.cancelBtn = this._targetEl.querySelector("[data-dismissbtn]");
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
    };
  }

  _init() {
    // this.cancelBtn.forEach((btn) => {
    //   btn.addEventListener("click", this.bindHandler);
    // });

    this.confirmBtn.addEventListener("click", this.bindHandler);

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
//toast類型獨有子元件
class ToastItem {
  constructor() {

  }
}
//Modal類型
//flowbite needed: target,options
class ModalMsg extends Modal {
  constructor(target, options) {
    super(target, options);
    target.innerHTML = `
    <h3 class="text-lg font-medium">${options.msgTitle}</h3>
    <div class="mt-2 mb-4 text-sm">
      ${options.msgContent}
    </div>
    <div class="flex">
      <button type="button" class="btn btn-secondary" data-confirmbtn>
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
    this.confirmBtn = this._targetEl.querySelector("[data-confirmbtn]");
    this.cancelBtn = this._targetEl.querySelector("[data-dismissbtn]");
    this.bindHandler = this.onHide.bind(this);
    this._init();
  }

  get config() {
    return {
      placement: "center-center",
      backdrop: "static",//static/dynamic
      backdropClasses: "bg-gray-500/50",
      closable: false,
    };
  }

  _init() {
    this.confirmBtn.forEach((btn) => {
      btn.addEventListener("click", this.bindHandler);
    });
    this.cancelBtn.forEach((btn) => {
      btn.addEventListener("click", this.bindHandler);
    });
  }
  onShow() {
    document.body.appendChild(this._targetEl);
    super.show();
  }
  onHide() {
    super.hide();
  }
}

//Popover類型
//flowbite needed: target,trigger,options
class PopoverMsg extends Popover {
  constructor(target, trigger, options) {
    super();
  }

  get config() {
    return {
      placement: "top",
      triggerType: "hover",//static/dynamic
      offset: 2,//Set the offset distance between the popover and the trigger element.
    };
  }
}
//Alert類型
//target,trigger,options
class DefaultMsg {
  constructor(target, trigger, options) {
    target.innerHTML = `
    <div class="mt-2 mb-4 text-sm">
      ${options.msgContent}
    </div>`;
    this._targetEl = target;
    this._options = options;
    this.bindHandler = this.onHide.bind(this);
    this._init();
  }
  _init() {
    this._render();
  }
  _render() {
  }
  onShow() {
    document.body.appendChild(this._targetEl);
    this._targetEl.classList.remove("hidden");
    this._targetEl.classList.remove("opacity-0");
    this._targetEl.classList.add("opacity-100");
    this._render();
    setTimeout(this.onHide.bind(this), 1500);
  }
  onHide() {
    this._targetEl.classList.add("opacity-0");
    setTimeout(() => {
      document.body.removeChild(this._targetEl);
    }, 1000);
  }
}


//掛到全域window上供外部使用
window.Notification = Notification;
