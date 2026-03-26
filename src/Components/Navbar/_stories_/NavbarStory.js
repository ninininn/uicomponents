import { NavBar } from "../NavBar";
// import { Checkbox } from "../../Checkbox/Checkbox";
import "../NavBar.css";
// import "../Checkbox/Checkbox.css";
// import "../Dropdown/Dropdown.css";

export const createNavBar = ({
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

  const NavBarInstance = new NavBar(initOptions);
  parent.appendChild(NavBarInstance.el);
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
