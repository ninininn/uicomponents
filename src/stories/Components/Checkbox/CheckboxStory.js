import { Checkbox } from "./Checkbox";

export const createCheckbox = ({ checked, classes, disabled, style, theme, title, checkImg,value,handlers }) => {
    let parent = document.createElement("div");
    parent.classList.add("max-w-50")
    let initOptions = {
        checked: checked,
        value: value,
        classes: classes,
        disabled: disabled,
        style: style,
        theme: theme,
        title: title,
        checkImg: checkImg,
        handlers:handlers
    };

    let checkbox_instance = new Checkbox(parent, initOptions);

    checkbox_instance.getElem().addEventListener("change",(e)=>{
        const payload = {
            checked: e.target.checked,
            value: e.target.value,
        };

        checkbox_instance.options.handlers?.(payload); // ✅ 只送一個物件
    })
    return checkbox_instance;
};
