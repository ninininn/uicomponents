import { Notification } from "./Notification";

export const createNotification = ({ type, area, msgContent, customContent, msgTitle, classes, handlers }) => {
    let parent = document.createElement("div");
    parent.className = "mx-auto";
    let trigger = document.createElement("button");
    trigger.className = "btn btn-primary";
    trigger.textContent = "Toggle Notification";
    // parent.classList.add("max-w-50");
    parent.appendChild(trigger);
    let initOptions = {
        type: type,        //類型
        area: area || ["auto", "auto"], //尺寸
        msgContent: msgContent,         //主要文字內容
        customContent: customContent,         //自定義HTML內容
        msgTitle: msgTitle,         //title文字
        classes: classes,         //自定義class
    };
    let notification_instance = new Notification(trigger, initOptions, type);
    // notification_instance.show();
    // layerpage_instance.getElem().addEventListener("change", (e) => {
    //     const payload = {
    //         checked: e.target.checked,
    //         value: e.target.value,
    //     };

    //     layerpage_instance.options.handlers?.(payload);
    //     // 把checked 及 value一次顯示(僅storybook測試用)
    // });

    console.log("notification_instance:", notification_instance);
    return parent;
};
