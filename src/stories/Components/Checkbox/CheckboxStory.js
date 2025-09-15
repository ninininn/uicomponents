import { Checkbox, CheckboxGroup } from "./Checkbox";

export const createCheckbox = ({ checked, classes, disabled, style, name, theme, title, checkImg, value, handlers, checkboxGroup }) => {
    // let parent = document.createElement("div");
    // parent.classList.add("max-w-50");
    let initOptions = {
        checked: checked,
        value: value,
        name: name,
        classes: classes,
        disabled: disabled,
        style: style,
        theme: theme,
        title: title,
        checkImg: checkImg,
        handlers: handlers
    };
    let checkbox_instance = new Checkbox(initOptions);

    checkbox_instance.getElem().addEventListener("change", (e) => {
        const payload = {
            checked: e.target.checked,
            value: e.target.value,
        };

        checkbox_instance.options.handlers?.(payload);
        // 把checked 及 value一次顯示(僅storybook測試用)
    });

    if (checkboxGroup) {
        let group = new CheckboxGroup("test");
        //其他選項示意
        let checkbox_item2 = new Checkbox({
            checked: checked,
            name: "group2",
            classes: classes,
            disabled: disabled,
            style: style,
            theme: "#69bbe5",
            title: "群組勾選框A",
            checkImg: checkImg,
        });
        //其他選項示意
        let checkbox_item3 = new Checkbox({
            checked: checked,
            name: "group3",
            classes: classes,
            disabled: disabled,
            style: style,
            theme: "#c4729b",
            title: "群組勾選框B",
            checkImg: checkImg,
        });
        group.addCheckItems(checkbox_instance);
        group.addCheckItems(checkbox_item2);
        group.addCheckItems(checkbox_item3);
        return group;
    }

    return checkbox_instance;
};
