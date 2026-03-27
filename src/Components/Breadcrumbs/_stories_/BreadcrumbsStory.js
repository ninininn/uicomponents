import { Breadcrumbs } from "../Breadcrumbs";
// import { Checkbox } from "../../Checkbox/Checkbox";
import "../Breadcrumbs.css";
// import "../Checkbox/Checkbox.css";
// import "../Dropdown/Dropdown.css";

export const createBreadcrumbs = ({
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

    let initOptions = {
        orientation: orientation,
        placement: placement,
        theme: theme,
    };

    const BreadcrumbsInstance = new Breadcrumbs(initOptions);
    parent.appendChild(BreadcrumbsInstance.el);
    // let notification_instance = new Notification(trigger, initOptions, type);

    // notification_instance.show();
    // layerpage_instance.el.addEventListener("change", (e) => {
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
