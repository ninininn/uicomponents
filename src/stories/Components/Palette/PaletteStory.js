import { Dom, BaseComponent } from "../../../Utils/Utils";
import { ColorPicker } from "./ColorPicker";
import { Palette } from "../../../Utils/Color";
import "./Palette.css";

export const createPalette = ({
    colorCounts, colorMode, alpha, style, tone, offset, saturationFixed, lightnessFixed, saturation, lightness
}) => {
    let parent = document.createElement("div");
    parent.className = "flex";

    let initOptions = {
        colorCounts: colorCounts,
        colorMode: colorMode,
        alpha: alpha,
        style: style,
        tone: tone || 'red',
        offset: offset,
        saturationFixed: saturationFixed ? saturation : saturationFixed,
        lightnessFixed: lightnessFixed ? lightness : lightnessFixed,
        // handler: handler,
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
        // palette.style.borderLeft = '1px solid white';
        parent.appendChild(palette);
    }
    var defaultPickerConfig = {
        limits: 5,//maxium color number stored in container
        defaults: [...randomPalette.slice(0, 3)],
    };


    const picker = new ColorPicker(defaultPickerConfig);
    console.log(picker);
    parent.appendChild(picker.getElem());
    return parent;
};

