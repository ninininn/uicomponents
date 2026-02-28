import { Dom, debounce } from "../../../Utils/Utils";
import { Tabs } from "./Tabs";
import { Checkbox } from "../Checkbox/Checkbox";
import "./Tabs.css";
import "../Checkbox/Checkbox.css";
import "../Dropdown/Dropdown.css";

export const createTabs = ({
    orientation,
    placement,
    theme,
    title,
    content,
    active,
    handler,
}) => {
    let parent = document.createElement("div");
    parent.className = "mx-auto grid place-items-center";

    const TABS_EX = [
        { title: 'Tab 1', content: 'Content 1' },
        { title: title, content: content, active: active },
        { title: 'Tab 3', content: 'Content 3' }
    ];
    let initOptions = {
        orientation: orientation,
        placement: placement,
        theme: theme
    };

    const tabInstance = new Tabs(initOptions, TABS_EX);
    parent.appendChild(tabInstance.getElem());
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

    return parent;
};


//自動更新UI範例
// const state = {};

// Object.defineProperties(state, {
//     name: {
//         get: function () { return this._name; },
//         set: function (value) {
//             this._name = value;
//             render(this);
//         }
//     }
// });