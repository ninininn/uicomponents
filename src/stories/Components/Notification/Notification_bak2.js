import { Dismiss, Modal, Popover } from "flowbite";
import { BaseComponent, UIUtils } from "../../../Utils";


export class Notification extends BaseComponent {
  static toast(trigger,options={}){
    let targetEl = this._createTargetContainer();
    return new ToastMsg(targetEl,options)
  }
  static modal(trigger,options={}){
    let targetEl = this._createTargetContainer();
    return new ModalMsg(targetEl,options)
  }
  static popover(trigger,options={}){
    let targetEl = this._createTargetContainer();
    return new PopoverMsg(targetEl,options)
  }
  static msg(trigger,options={}){
    let targetEl = this._createTargetContainer();
    return new DefaultMsg(targetEl,options)
  }


  constructor(trigger) {
    //Base notification container
    let targetElem = document.createElement("div");
    targetElem.className = "notify-container";

    targetElem.innerHTML = `
      <div class="notify-header"></div>
      <div class="notify-content"></div>
      <div class="notify-actionbtns"></div>`;

    super(targetElem);
    this.UItype = "Notification";
    // this.options = { ...this.config, ...options };
    this.notifyTrigger = trigger;
    //種類
    // this.type = type;
    // this._instance = this._defineType(this._elem, this.type);
  }

  get config() {
    return {
      type: "msg",                      //類型
      theme: "light",                   //主題色
      maxWidth: "auto",                 //最大尺寸
      area: ["auto", "auto"],           //尺寸
      msgContent: null,                 //主要文字內容
      customContent: null,              //自定義HTML內容
      msgTitle: null,                   //title文字
      classes: [],                      //自定義class
      handler: null,                    //單純綁定在觸發元素上，如果是選擇完才要進行的動作，可以放在btn.handler內
      placement: "center-center",       //位置
      confirm: "確認",                  //確認按鈕文字&callback
      cancel: "取消",                   //取消按鈕文字&callback
      btnList: []
    };
  }
  //使用對應類型呼叫方法
  toast(setting) {
    this.options = { ...this.config, ...setting };
    this._instance = this._defineType(this._elem, "toast");
    if (!this.initialize) this._init();
    // this._show();
  }
  popover(setting) {
    this.options = { ...this.config, ...setting };
    this._instance = this._defineType(this._elem, "popover");
    if (!this.initialize) this._init();
    // this._show();
  }
  modal(setting) {
    this.options = { ...this.config, ...setting };
    this._instance = this._defineType(this._elem, "modal");
    if (!this.initialize) this._init();
    this._show();
  }
  msg(setting) {
    this.options = { ...this.config, ...setting };
    this._instance = this._defineType(this._elem, "msg");
    if (!this.initialize) this._init();
    this._show();
  }

  _createTargetContainer(){
    let targetElem = document.createElement("div");
    targetElem.className = "notify-container";

    targetElem.innerHTML = `
      <div class="notify-header"></div>
      <div class="notify-content"></div>
      <div class="notify-actionbtns"></div>`;
    return targetElem;
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
    this.initialize = true;
    let { msgTitle, msgContent, customContent, btnList, confirm, cancel } = this.options;
    if (this.type === "toast") return;
    //是否需要標題
    if (msgTitle && (msgTitle).toLowerCase() !== "false") {
      let header = this._elem.querySelector(".notify-header");
      let notifyTitle = document.createElement("h3");
      UIUtils.setText(notifyTitle, msgTitle);
      header.appendChild(notifyTitle);
    }

    //msgContent
    if (msgContent) {
      let contentDiv = this._elem.querySelector(".notify-content");
      UIUtils.setText(contentDiv, msgContent);
    }
    //是否有自製內容innerHTML
    if (customContent) {
      let contentDiv = this._elem.querySelector(".notify-content");
      contentDiv.innerHTML += customContent;
    }
    //是否有btnList要設定[預設會有一組]
    if (btnList) {
      let actionbtnDiv = this._elem.querySelector(".notify-actionbtns");
      for (let btnConfig of btnList) {
        let btn = UIUtils.setButtons(btnConfig);
        actionbtnDiv.appendChild(btn);
      }
    }

    //confirm&cancel actions
    if (confirm) {
      this.confirm = this._confirmAndcancel(confirm, "confirm");
      this.confirmBtn = this._setBtns(this.confirm);
    }
    if (cancel) {
      this.cancel = this._confirmAndcancel(cancel, "cancel");
      this.cancelBtn = this._setBtns(this.cancel);
    }
    this._render();
    document.body.appendChild(this._elem);
    this._bindEvent();
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
    // UIUtils.addClass(this._elem, ["hidden"]);
  }

  //[內部控制]-綁定事件
  _bindEvent() {
    // if (!this.options.handlers) return;
    // this.onevent(this.notifyTrigger, "click", this._show.bind(this));


    //confirm&cancel event
    if (!this.confirmBtn) return;
    this.onevent(this.confirmBtn, "click", this.hide.bind(this));
    if (this.confirm.handler) {
      this.onevent(this.confirmBtn, "click", this.confirm.handler.bind(this));
      // this.confirmBtn.addEventListener("click", this.confirm.handler.bind(this));
    }
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
        UIUtils.addClass(this._elem, ["top-[50%]", "left-[50%]", "translate-[-50%]"]);
        break;
      default:
        break;
    }
  }

  //[內部控制]-視窗顯示
  _show() {
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
class ToastMsg {
  constructor(target, trigger, options) {
    let { transition, duration, timing } = options;
    let dismissOptions = {
      transition: transition || "transition-opacity",
      duration: duration || 300,
      timing: timing || "ease-out"
    };

    this._options = options;
    this.msgContainer = target;
    this._trigger = trigger;
    this.toastItems = [];
    this._init();
  }

  //預設option設定
  get config() {
    return {
      transition: "transition-opacity",
      duration: 300,
      timing: "ease-out"
    };
  }

  _init() {
    UIUtils.setAttribute(this.msgContainer, "notifytoast");
    this._bindEvent();
  }

  _bindEvent() {
    this._trigger.addEventListener("click", () => {
      //塞新的toastitem進來，文字為options.content
      let newToast = new ToastItem();
      this.toastItems = [...this.toastItems, newToast];
    });
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
class ToastItem extends Dismiss {
  constructor(target, trigger, options) {

    let { transition, duration, timing } = options;
    let dismissOptions = {
      transition: transition || "transition-opacity",
      duration: duration || 300,
      timing: timing || "ease-out"
    };
    super(target, target.querySelector("[data-cancelbtn]"), dismissOptions);

    this.msg = this._options.msgContent;
    this.bindHandler = this.onHide.bind(this);
    this._init();
  }

  //預設option設定
  get config() {
    return this._options;
  }

  _init() {
    UIUtils.setAttribute(this._targetEl, "notifytoast");
    // garbage collection...
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
//Modal類型
//flowbite needed: target,options
class ModalMsg extends Modal {
  constructor(target, options) {
    let { backdrop, backdropClasses, closable } = options;
    let modaltOptions = {
      backdrop: backdrop || "static",
      backdropClasses: "backdrop " + backdropClasses,
      closable: closable || false
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
