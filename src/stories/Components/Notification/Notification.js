import { Dismiss, Modal, Popover } from "flowbite";
import { BaseComponent, UIUtils } from "../../../Utils";

export class Notification extends BaseComponent {
  constructor(trigger, options, type) {
    //Base notification container
    let targetElem = document.createElement("div");
    targetElem.className = "notify-container";

    targetElem.innerHTML = `
      <div class="notify-header"></div>
      <div class="notify-content"></div>
      <div class="notify-actionbtns"></div>`;

    super(targetElem, options.theme || "light");
    this.UItype = "Notification";
    this.options = { ...this.config, ...options };
    this.notifyTrigger = trigger;
    //種類
    this.type = type;
    this._instance = this._defineType(this._elem, this.type);
    //confirm&cancle actions
    if (this.options.confirm) {
      this.confirm = this._confirmAndcancel(this.options.confirm, "confirm");
      this.confirmBtn = this._setBtns(this.confirm);
    }
    if (this.options.cancel) {
      this.cancel = this._confirmAndcancel(this.options.cancel, "cancel");
      this.cancelBtn = this._setBtns(this.cancel);
    }
    this._init();
  }

  get config() {
    return {
      type: "msg",                       //類型
      theme: "light",                    //主題色
      maxWidth: "auto",                 //最大尺寸
      area: ["auto", "auto"],            //尺寸
      msgContent: null,                  //主要文字內容
      customContent: null,               //自定義HTML內容
      msgTitle: null,                    //title文字
      classes: null,                     //自定義class
      handler: null,
      placement: "center-center",                //位置
      confirm: "確認",                //確認按鈕文字&callback
      cancel: "取消",                 //取消按鈕文字&callback
    };
  }

  _defineType(target, type) {
    switch (type) {
      case "toast":
        return new ToastMsg(target, this.notifyTrigger, this.options);
      case "modal":
        return new ModalMsg(target, this.options);
      case "popover":
        return new PopoverMsg(target, this.notifyTrigger, this.options);
      case "msg":
        return new DefaultMsg(target, this.notifyTrigger, this.options);
      default:
        console.error("必選一種頁面類型");
        break;
    }
  }

  _init() {
    //是否需要標題
    if (this.options.msgTitle && (this.options.msgTitle).toLowerCase() !== "false") {
      let header = this._elem.querySelector(".notify-header");
      let notifyTitle = document.createElement("h3");
      UIUtils.setText(notifyTitle, this.options.msgTitle);
      header.appendChild(notifyTitle);
    }

    //msgContent
    if (this.options.msgContent) {
      let contentDiv = this._elem.querySelector(".notify-content");
      UIUtils.setText(contentDiv, this.options.msgContent);
    }
    //是否有btnList要設定[預設會有一組]


    this._render();
    this._bindEvent();


    document.body.appendChild(this._elem);
  }

  //[內部控制]-渲染UI樣式
  _render() {
    //主題色
    let themeColor = this._theme === "dark" ? "#1e222789" : "#F3F4F6";
    let textColor = this._theme === "dark" ? "#F3F4F6" : "#1F2937";
    UIUtils.setProperty(this._elem, "--theme", themeColor);
    UIUtils.setProperty(this._elem, "--text", textColor);


    //尺寸設定
    UIUtils.setProperty(this._elem, "--maxWidth", this.options.maxWidth);
    UIUtils.setProperty(this._elem, "--w", this.options.area[0]);
    UIUtils.setProperty(this._elem, "--h", this.options.area[1]);
    UIUtils.addClass(this._elem, ["hidden"]);

  }
  //[內部控制]-綁定事件
  _bindEvent() {
    // if (!this.options.handlers) return;
    this.onevent(this.notifyTrigger, "click", this.show.bind(this));


    //confirm&cancel event
    if (!this.confirmBtn) return;
    this.onevent(this.confirmBtn, "click", this.hide.bind(this));
    if (!this.cancelBtn) return;
    this.onevent(this.cancelBtn, "click", this.hide.bind(this));
    // this.onevent(this.notifyTrigger, "click", this.options.handlers.bind(this.notifyTrigger));
  }

  //[內部控制]-設定確認與取消動作
  _confirmAndcancel(option, actionType) {
    let setting = Array.isArray(option) ? option : [option];
    let [btnTxt, handler] = setting;

    return { actionType: actionType, btnTxt: btnTxt, handler: handler };
  }

  //[內部控制]-設定確認及取消按鈕
  _setBtns(btnConfig) {
    let btnsblock = this._elem.querySelector(".notify-actionbtns");
    let btn = document.createElement("button");
    let btnClasses = ["btn", "btn-primary"];
    btnConfig.actionType !== "confirm" && btnClasses.push("outline-btn");
    UIUtils.addClass(btn, btnClasses);
    UIUtils.setText(btn, btnConfig.btnTxt);
    UIUtils.setAttribute(btn, `${btnConfig.actionType}btn`);
    btnsblock.appendChild(btn);
    return btn;
  }

  //[內部控制]-設定位置
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
        break;
    }
  }

  //[外部控制]-視窗顯示
  show() {
    this._setPosition(this.options.placement);
    this._instance.onShow();
  }

  //[外部控制]-視窗隱藏
  hide() {
    this._instance.onHide();
  }
}

//toast類型
//flowbite needed: target,trigger(為觸發miss的元素),options
// toast類型應該要由一個容器包覆所有toast-item，且item要堆疊出現
class ToastMsg extends Dismiss {
  constructor(target, trigger, options) {

    let { transition, duration, timing } = options;
    let dismissOptions = {
      transition: transition || "transition-opacity",
      duration: duration || 300,
      timing: timing || "ease-out"
    };
    super(target, target.querySelector("[data-cancelbtn]"), dismissOptions);

    this.msg = this._options.msgContent;
    this.confirmBtn = this._targetEl.querySelector("[data-confirmbtn]");
    this.cancelBtn = this._targetEl.querySelector("[data-cancelbtn]");
    this.bindHandler = this.onHide.bind(this);
    this._init();
  }

  //預設option設定
  get config() {
    return this._options;
  }

  _init() {
    UIUtils.setAttribute(this._targetEl, "notifytoast");
    // this.cancelBtn.forEach((btn) => {
    //   btn.addEventListener("click", this.bindHandler);
    // });

    // this.confirmBtn.addEventListener("click", this.bindHandler);

  }

  onShow() {
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
    let { backdrop, backdropClasses, closable } = options;
    let modaltOptions = {
      backdrop: backdrop,
      backdropClasses: "backdrop " + backdropClasses,
      closable: closable
    };
    super(target, modaltOptions);
    this.confirmBtn = this._targetEl.querySelector("[data-confirmbtn]");
    this.cancelBtn = this._targetEl.querySelector("[data-cancelbtn]");
    this.bindHandler = this.onHide.bind(this);
    this._init();
  }

  get config() {
    return this._options;
  }

  _init() {
    UIUtils.setAttribute(this._targetEl, "notifymodal");
    // this.confirmBtn.forEach((btn) => {
    //   btn.addEventListener("click", this.bindHandler);
    // });
    // this.cancelBtn.forEach((btn) => {
    //   btn.addEventListener("click", this.bindHandler);
    // });
  }
  onShow() {
    document.body.appendChild(this._targetEl);
    super.show();
    UIUtils.removeClass(this._targetEl, ["flex"]);//flowbite會自動加入flex，所以要移除
  }
  onHide() {
    super.hide();
  }
}

//Popover類型
//flowbite needed: target,trigger,options
class PopoverMsg extends Popover {
  constructor(target, trigger, options) {
    let { triggerType, offset } = options;
    let popoverOptions = {
      triggerType: triggerType,
      offset: offset
    };
    super(target, trigger, popoverOptions);
  }

  _init() {
    UIUtils.setAttribute(this._targetEl, "notifypopover");
  }
  get config() {
    return this._options;
  }

  onShow() {
    document.body.appendChild(this._targetEl);
    super.show();
  }

  onHide() {
    super.hide();
  }
}
//Alert類型
//target,trigger,options
class DefaultMsg {
  constructor(target, trigger, options) {
    let { countdown } = options;

    this._targetEl = target;
    this._options = { ...this.config, countdown: countdown };
    this.bindHandler = this.onHide.bind(this);
    this._init();
  }
  get config() {
    return {
      countdown: 1000
    };
  }
  _init() {
    this._render();
  }
  _render() {
    UIUtils.setAttribute(this._targetEl, "notifymsg");
  }
  onShow() {
    UIUtils.removeClass(this._targetEl, ["hidden", "opacity-0"]);
    UIUtils.addClass(this._targetEl, ["opacity-100"]);
    this._render();
    setTimeout(this.onHide.bind(this), 100);
  }
  onHide() {
    setTimeout(() => {
      UIUtils.removeClass(this._targetEl, ["opacity-100"]);
      UIUtils.addClass(this._targetEl, ["opacity-0"]);
    }, this._options.countdown);
  }
}


//掛到全域window上供外部使用
window.Notification = Notification;
