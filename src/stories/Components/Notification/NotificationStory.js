import { UIUtils, debounce } from "../../../Utils";
import { Notification } from "./Notification";
import "./Notification.css";

export const createNotification = ({ type, area, theme, maxWidth, msgContent, icon, customContent, msgTitle, classes, placement, confirm, cancel, btnList, handler, backdrop, backdropClasses, closable, triggerType, offset, countdown, style }) => {
    let parent = document.createElement("div");
    parent.className = "mx-auto grid place-items-center";
    let trigger = document.createElement("button");
    trigger.className = "btn btn-primary";
    trigger.textContent = "Show Notification";

    parent.appendChild(trigger);

    let initOptions = {
        type: type,        //類型
        theme: theme,
        maxWidth: maxWidth,
        icon: icon,
        area: area || ["auto", "auto"], //尺寸
        msgContent: msgContent,         //主要文字內容
        customContent: customContent,         //自定義HTML內容
        msgTitle: msgTitle,         //title文字
        classes: classes,         //自定義class
        placement: placement,         //自定義class
        confirm: confirm,           //確認按鈕文字&動作
        cancel: cancel,         //取消按鈕文字&動作
        handler: handler,      //單純綁定在觸發元素上，如果是選擇完才要進行的動作，可以放在btn.handler內
        btnList: btnList,
    };
    switch (type) {
        case "modal":
            initOptions.backdrop = backdrop;
            initOptions.backdropClasses = backdropClasses;
            initOptions.closable = closable;
            console.log(initOptions.btnList);
            break;
        case "toast":
            initOptions.style = style;
            break;
        case "popover":
            initOptions.triggerType = triggerType;
            initOptions.offset = offset;
            break;
        case "msg":
            initOptions.countdown = countdown;
            break;
    }
    // let notification_instance = new Notification(trigger, initOptions, type);

    // notification_instance.show();
    // layerpage_instance.getElem().addEventListener("change", (e) => {
    //     const payload = {
    //         checked: e.target.checked,
    //         value: e.target.value,
    //     };

    //     layerpage_instance.options.handlers?.(payload);
    //     // 把checked 及 value一次顯示(僅storybook測試用)
    // });
    trigger.addEventListener("click", () => {
        switch (type) {
            case "modal":
                Notification.modal(trigger, initOptions);
                break;
            case "toast":
                Notification.toast(trigger, initOptions);

                break;
            case "popover":
                Notification.popover(trigger, initOptions);
                break;
            case "msg":
                Notification.msg(trigger, initOptions);
                break;
        }
    });
    return parent;
};
