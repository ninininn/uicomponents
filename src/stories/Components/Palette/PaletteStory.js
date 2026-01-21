import { UIUtils, debounce } from "../../../Utils";
import { Palette } from "../../../Utils/Color";
import "./Palette.css";

export const createPalette = ({
    colorCounts, colorMode, alpha, style, tone, offset,
    handler,
}) => {
    let parent = document.createElement("div");
    parent.className = "flex";

    let initOptions = {
        colorCounts: colorCounts,
        colorMode: colorMode,
        alpha: alpha,
        style: style,
        tone: tone || null,
        offset: offset,
        handler: handler,
    };

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


    const randomPalette = Palette(initOptions);

    for (let i = 0; i < colorCounts; i++) {
        const palette = document.createElement("div");
        palette.style.width = '30px';
        palette.style.height = '30px';
        palette.style.backgroundColor = randomPalette[i];
        palette.style.borderLeft = '1px solid white';
        console.log(randomPalette[i]);
        parent.appendChild(palette);
    }
    return parent;
};

