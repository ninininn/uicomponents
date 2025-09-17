import { LayerPage } from "./Layerpage";

export const createLayerpage = ({ type }) => {
    let parent = document.createElement("div");
    // parent.classList.add("max-w-50");
    let initOptions = {
        type: "toast",        //類型
        area: ["auto", "auto"], //尺寸
        msgContent: null,         //主要文字內容
        customContent: null,         //自定義HTML內容
        msgTitle: null,         //title文字
        classes: null,         //自定義class
    };
    let layerpage_instance = new LayerPage(initOptions);

    layerpage_instance.getElem().addEventListener("change", (e) => {
        const payload = {
            checked: e.target.checked,
            value: e.target.value,
        };

        layerpage_instance.options.handlers?.(payload);
        // 把checked 及 value一次顯示(僅storybook測試用)
    });


    return parent;
};
