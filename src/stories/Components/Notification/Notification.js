import { Dismiss, Modal, Popover } from "flowbite";
import { BaseComponent, UIUtils } from "../../../Utils";


export class Notification {
  //使用對應類型呼叫方法
  static toast(trigger, options = {}) {
    let toastManager = new ToastMsg(trigger, options);
    return toastManager.pushItem(options);
  }
  static modal(trigger, options = {}) {
    let targetEl = Notification._createTargetContainer();
    return new ModalMsg(targetEl, options);
  }
  static popover(trigger, options = {}) {
    let targetEl = Notification._createTargetContainer();
    return new PopoverMsg(targetEl, trigger, options);
  }
  static msg(trigger, options = {}) {
    let targetEl = Notification._createTargetContainer();
    return new DefaultMsg(targetEl, options);
  }

  //建立容器
  static _createTargetContainer() {
    let targetElem = document.createElement("div");
    targetElem.className = "notify-container";

    targetElem.innerHTML = `
      <div class="notify-header"></div>
      <div class="notify-content"></div>
      <div class="notify-actionbtns"></div>`;
    return targetElem;
  }
}


//config 內容相關&UI設定
class BaseMsg extends BaseComponent {
  constructor(target, options = {}) {
    super(target, options.theme || "light");
    this.options = { ...this.config, ...options };
    this._init();
  }

  get config() {
    return {
      type: "modal",        //類型
      theme: "light",
      maxWidth: null,
      area: ["auto", "auto"], //尺寸
      msgContent: null,         //主要文字內容
      customContent: null,         //自定義HTML內容
      msgTitle: "通知",         //title文字
      classes: [],         //自定義class
      placement: "center",         //自定義class
      confirm: "確認",           //確認按鈕文字&動作
      cancel: "取消",         //取消按鈕文字&動作
      handler: null,      //單純綁定在觸發元素上，如果是選擇完才要進行的動作，可以放在btn.handler內
      btnList: [],
    };
  }

  _init() {
    // header
    let { msgTitle, msgContent, customContent, btnList, confirm, cancel } = this.options;
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
      if (customContent instanceof HTMLElement) {
        contentDiv.appendChild(customContent);
      }
      else {
        contentDiv.innerHTML += customContent;
      }
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

    if (this.options.type !== "toast") {
      this._setPosition(this.options.placement);
    }
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
    UIUtils.setPosition(this._elem, position, ["notify-container", ...this.options.classes]);
  }
  // BaseMsg 不負責行為，只是 UI 的基礎
}

//toast類型
//flowbite needed: target,trigger(為觸發miss的元素),options
// toast類型應該要由一個容器包覆所有toast-item，且item要堆疊出現

//單一toast訊息->Dismiss相關
class ToastItem extends BaseComponent {
  constructor(trigger, options) {
    let { transition, duration, timing } = options;
    let dismissOptions = {
      transition: transition || "transition-opacity",
      duration: duration || 300,
      timing: timing || "ease-out"
    };
    let itemContainer = Notification._createTargetContainer();
    super(itemContainer, options.theme || "light");
    this._base = new BaseMsg(this._elem, options);
    this.dismiss = new Dismiss(this._elem, this._base.cancelBtn, dismissOptions);
    this._init();
  }

  _init() {

    this._bindEvent();
  }

  _bindEvent() {
    // this.onevent(this._base.cancelBtn, "click", this.onHide);
    this.clearItem();
  }

  onHide() {
    this.dismiss.hide();
  }
  clearItem() {
    setTimeout(() => {
      this._elem.remove();
    }, 5000);
  }
}
// toast類型，為容器&負責管理ToastItem
class ToastMsg {
  constructor(trigger, options) {
    // if (ToastMsg.instance) return ToastMsg.instance;

    // 如果 trigger 已經綁定過，直接返回同一個 instance
    if (trigger.dataset.toastInit) {
      return ToastMsg.instances[trigger.dataset.toastInit];
    }


    this.options = options;
    this.trigger = trigger;
    this.toastItems = [];//所有子訊息
    this._init();

    this.id = `toast-${Date.now()}`;
    trigger.dataset.toastInit = this.id;
    ToastMsg.instances[this.id] = this;
  }

  static instances = {};//建立過的ToastMsg

  _init() {
    this.toastContainer = document.createElement("div");
    UIUtils.addClass(this.toastContainer, ["toast-container"]);
    UIUtils.setPosition(this.toastContainer, this.options.placement, ["toast-container"]);
    document.body.appendChild(this.toastContainer);
  }

  _bindEvent() {
    this.onevent(this.trigger, "click", this.pushItem);
    this.clearItem();
  }

  pushItem() {
    let toastItem = new ToastItem(this.trigger, this.options);
    this.toastItems.push(toastItem);
    this.toastContainer.appendChild(toastItem._elem);
  }

  clearItem() {
    setTimeout(() => {
      this.toastItems.shift();
    }, 3000);
  }
}


//Modal類型
//flowbite needed: target,options
class ModalMsg extends BaseComponent {
  constructor(target, options) {
    let { backdrop, backdropClasses, closable } = options;
    let modalOptions = {
      backdrop: backdrop || "static",
      backdropClasses: "backdrop " + backdropClasses,
      closable: closable || false
    };
    super(target, options.theme);
    this._base = new BaseMsg(target, options);
    this.modal = new Modal(target, modalOptions);
    this._init();
  }

  _init() {
    document.body.appendChild(this._elem);
    this.onShow();
    this._bindEvent();
    UIUtils.setAttribute(this._elem, "notifymodal");
  }
  onShow() {
    this.modal.show();
    UIUtils.removeClass(this._elem, ["flex"]);//flowbite會自動加入flex，所以要移除
  }
  onHide() {
    this.modal.hide();
  }
  _bindEvent() {
    let { handler } = this._base.confirm;

    if (!this._base.confirmBtn) return;
    this.onevent(this._base.confirmBtn, "click", this.onHide.bind(this));
    if (handler) {
      this.onevent(this._base.confirmBtn, "click", handler.bind(this));
    }
    if (!this._base.cancelBtn) return;
    this.onevent(this._base.cancelBtn, "click", this.onHide.bind(this));
  }
}

//Popover類型
//flowbite needed: target,trigger,options
class PopoverMsg extends BaseComponent {
  constructor(target, trigger, options) {
    let { triggerType, offset } = options;
    let popoverOptions = {
      triggerType: triggerType || "click",
      offset: offset || 10
    };
    super(target, options.theme || "light");
    this._options = { ...options, ...popoverOptions };
    this._base = new BaseMsg(target, options);
    this.popover = new Popover(target, trigger, popoverOptions);
    this.bindHandler = this.onHide.bind(this);
    this._init();
  }

  _init() {
    document.body.appendChild(this._elem);
    UIUtils.setAttribute(this._elem, "notifypopover");
    this.onShow();
    this._bindEvent();
  }
  get config() {
    return this._options;
  }

  onShow() {
    this.popover.show();
  }

  onHide() {
    this.popover.hide();
  }
  _bindEvent() {
    let { handler } = this._base.confirm;

    if (!this._base.confirmBtn) return;
    this.onevent(this._base.confirmBtn, "click", this.onHide.bind(this));
    if (handler) {
      this.onevent(this._base.confirmBtn, "click", handler.bind(this));
    }
    if (!this._base.cancelBtn) return;
    this.onevent(this._base.cancelBtn, "click", this.onHide.bind(this));
  }
}
//Alert類型
//target,trigger,options
class DefaultMsg extends BaseComponent {
  constructor(target, options) {
    let { countdown } = options;
    super(target, options.theme || "light");
    this._options = { ...this.config, countdown: countdown };
    this._base = new BaseMsg(target, options);
    this.bindHandler = this.onHide.bind(this);
    this._init();
  }
  get config() {
    return {
      countdown: 1000
    };
  }
  _init() {
    document.body.appendChild(this._elem);
    this._render();
    this.onShow();
  }
  _render() {
    UIUtils.setAttribute(this._elem, "notifymsg");
  }
  onShow() {
    UIUtils.removeClass(this._elem, ["hidden", "opacity-0"]);
    UIUtils.addClass(this._elem, ["opacity-100"]);
    this._render();
    setTimeout(this.onHide.bind(this), 100);
  }
  onHide() {
    setTimeout(() => {
      UIUtils.removeClass(this._elem, ["opacity-100"]);
      UIUtils.addClass(this._elem, ["opacity-0"]);
    }, this._options.countdown);
  }
}


//掛到全域window上供外部使用
window.Notification = Notification;
