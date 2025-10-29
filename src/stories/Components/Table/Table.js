import { BaseComponent, UIUtils, debounce } from "../../../Utils";

export class Table extends BaseComponent {

}


//config 內容相關&UI設定
// BaseMsg 不負責行為，只是 UI 的基礎
class BaseMsg extends BaseComponent {
  constructor(target, options = {}) {
    super(target, options.theme || "light");
    this.UIType = "BaseMsg";
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
      confirm: ["確認", null],           //確認按鈕文字&動作
      cancel: ["取消", null],         //取消按鈕文字&動作
      handler: null,      //單純綁定在觸發元素上，如果是選擇完才要進行的動作，可以放在btn.handler內
      btnList: [],
    };
  }

  _init() {
    // header
    let { type, msgTitle, icon, msgContent, customContent, btnList, confirm, cancel } = this.options;
    //icon
    if (icon) {
      let header = this._elem.querySelector(".notify-header");
      let msgIcon = document.createElement("img");
      msgIcon.src = `notify-icons/${icon}.svg`;
      header.appendChild(msgIcon);
    }
    //是否需要標題
    if (msgTitle && msgTitle.toLowerCase() !== "false") {

      let header = this._elem.querySelector(".notify-header");

      //直接傳入DOM元素
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
    //是否有btnList要設定[預設會有一組(confirm&cancel actions)]
    if (btnList) {
      let actionbtnDiv = this._elem.querySelector(".notify-actionbtns");
      for (let btnConfig of btnList) {
        let btn = UIUtils.setButtons(btnConfig);
        actionbtnDiv.appendChild(btn);
      }
    }

    //confirm&cancel actions
    if (confirm && type !== "toast") {
      this.confirm = this._confirmAndcancel(confirm, "confirm");
      this.confirmBtn = this._setBtns(this.confirm);
    }
    if (cancel && type !== "toast") {
      this.cancel = this._confirmAndcancel(cancel, "cancel");
      this.cancelBtn = this._setBtns(this.cancel);
    }
    this._render();
  }
  //[內部控制]-渲染UI樣式
  _render() {
    //TODO toast類型需要特別放(X)按鈕?
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

    if (this.options.type !== "toast" && this.options.type !== "popover") {
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
    const { btnTxt, handler } = btnConfig;
    let btnsblock = this._elem.querySelector(".notify-actionbtns");
    // let btn = document.createElement("button");
    let btnClasses = ["btn", "btn-primary"];
    btnConfig.actionType !== "confirm" && btnClasses.push("outline-btn");
    // UIUtils.addClass(btn, btnClasses);
    // UIUtils.setText(btn, btnConfig.btnTxt);
    let btn = UIUtils.setButtons(
      {
        classes: btnClasses,
        text: btnTxt,
        handler: handler
      }
    );
    UIUtils.setAttribute(btn, `${btnConfig.actionType}btn`);
    btnsblock.appendChild(btn);
    return btn;
  }

  //[內部控制]-設定位置
  _setPosition(position) {
    UIUtils.setPosition(this._elem, position, ["notify-container", ...this.options.classes]);
  }
}

//toast類型
//flowbite needed: target,trigger(為觸發miss的元素),options
// toast類型應該要由一個容器包覆所有toast-item，且item要堆疊出現

//單一toast訊息->Dismiss相關
//預設右上方會有(X)為dismiss用途
class ToastItem extends BaseComponent {
  constructor(options) {
    let { transition, duration, timing } = options;
    let dismissOptions = {
      transition: transition || "transition-opacity",
      duration: duration || 300,
      timing: timing || "ease-out"
    };
    let itemContainer = Notification._createTargetContainer();
    let dismissBtn = UIUtils.setButtons({ icon: "close", classes: ["text-btn"] });
    itemContainer.querySelector(".notify-header").appendChild(dismissBtn);
    super(itemContainer, options.theme || "light");

    //TODO options的btn要改成小的?
    this.UIType = "ToastItem";
    this.style = options.style || "accent";
    this._base = new BaseMsg(this._elem, options);
    this.dismiss = new Dismiss(this._elem, dismissBtn, dismissOptions);
    this._init();
  }

  _init() {
    //設定對應顏色
    if (this._base.options.icon) {
      UIUtils.setProperty(this._elem, "--style", `var(--${this._base.options.icon})`);
    } else {
      UIUtils.setProperty(this._elem, "--style", "var(--graystyle)");
    }
    switch (this.style) {
      case "bordered":
        UIUtils.setAttribute(this._elem, `toast-${this.style}`);
        break;
      case "accent":
        UIUtils.setAttribute(this._elem, `toast-${this.style}`);
        break;
    }
    // UIUtils.addClass(this._elem, ["animate-msgIn"]);

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
    async function clearDOM() {
      const delay = (ms) => {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      };

      await delay(5000);
      //先隱藏
      this.dismiss.hide();

      await delay(2000);
      //再移除
      this._elem.remove();
    }
    clearDOM.bind(this)();
  }
}
// toast類型，為容器&負責管理ToastItem
class ToastMsg {
  constructor(trigger, options) {

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
    // this._bindEvent();
    this.toastContainer = document.createElement("div");
    UIUtils.addClass(this.toastContainer, ["toast-container"]);
    UIUtils.setPosition(this.toastContainer, this.options.placement, ["toast-container"]);
    document.body.appendChild(this.toastContainer);

    //監聽子訊息DOM是否有移除
    const itemsObserver = new MutationObserver((mutations) => {
      if (mutations[0].removedNodes.length !== 0) {
        this.clearItem();
      }
    });
    itemsObserver.observe(this.toastContainer, { childList: true });
  }

  //BUG 沒有使用到(?)  
  _bindEvent() {
    if (this.options.handler) this.onevent(this.trigger, "click", this.options.handler);
    this.onevent(this.trigger, "click", debounce(this.pushItem, 400));
    this.clearItem();//由於toastItem會自己清除，這邊只需要移除toastItems裏的資料
  }

  pushItem() {
    let toastItem = new ToastItem(this.options);
    let fragment = document.createDocumentFragment();
    this.toastItems.push(toastItem);
    fragment.appendChild(toastItem._elem);
    this.toastContainer.appendChild(fragment);


    // this.toastContainer.appendChild(toastItem._elem);
  }

  clearItem() {
    this.toastItems.shift();
  }
}


//Modal類型
//flowbite needed: target,options
class ModalMsg extends BaseComponent {
  constructor(target, options) {
    let { backdrop, backdropClasses, closable } = options;
    let modalOptions = {
      backdrop: backdrop || "static",
      backdropClasses: "backdrop " + backdropClasses || "",
      closable: closable || false
    };
    super(target, options.theme);
    this.UIType = "ModalMsg";
    this._base = new BaseMsg(target, options);
    this.modal = new Modal(target, modalOptions);
    this._init();
  }

  _init() {
    this.appendElem(this._elem);
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
    //FIX 關閉每個modal應該也要destroy(保留一段時間後再刪除)
    setTimeout(() => {
      this._elem.remove();
    }, 3000);
  }

  _bindEvent() {
    // let { handler } = this._base.confirm;

    if (!this._base.confirmBtn) return;
    this.onevent(this._base.confirmBtn, "click", this.onHide.bind(this));
    // if (handler) {
    //   this.onevent(this._base.confirmBtn, "click", handler.bind(this));
    // }
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
    this.UIType = "PopoverMsg";
    this._options = { ...options, ...popoverOptions };
    this._base = new BaseMsg(target, options);
    this.popover = new Popover(target, trigger, popoverOptions);
    this._init();
  }

  _init() {
    this.appendElem(this._elem);
    UIUtils.setAttribute(this._elem, "notifypopover");
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
    this.UIType = "DefaultMsg";
    this._options = { ...this.config, countdown: countdown };
    this._base = new BaseMsg(target, options);
    this._init();
  }
  get config() {
    return {
      countdown: 1000
    };
  }
  _init() {
    this.appendElem(this._elem);
    UIUtils.setAttribute(this._elem, "notifymsg");
    this._bindEvent(this._options.countdown);
  }
  _bindEvent(countdown) {
    async function clearDOM() {
      const delay = (ms) => {
        return new Promise(resolve => {
          setTimeout(resolve, ms);
        });
      };

      await delay(countdown);
      //先隱藏
      UIUtils.addClass(this._elem, ["opacity-0"]);
      await delay(1000);
      //再移除
      this._elem.remove();
    }
    clearDOM.bind(this)();
  }
}


//掛到全域window上供外部使用
window.Notification = Notification;
