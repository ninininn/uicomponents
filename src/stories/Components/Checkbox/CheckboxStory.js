import { Checkbox } from "./Checkbox";

export const createCheckbox = ({ checked, classes, disabled, style, theme, title, checkImg,value }) => {
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
        checkImg: checkImg
    };
    console.log(new Checkbox(parent, initOptions));

    return new Checkbox(parent, initOptions);
};
