import {
    UIUtils,
    BaseComponent,
    defineArgs,
    bindState,
    compareNum,
} from "../Utils";

export class Checkbox extends BaseComponent {
    constructor(...args) {
        const { element, options } = defineArgs(args, "input");
        element.type = "checkbox";
        super(element, options.theme);
        this.UItype = "Checkbox";
        this.options = { ...this._defaultOptions, ...options };
        this.styles = this.options.style;
        this.container = this.options.container;


    }


    // 封裝基本(預設)設定
    get _defaultOptions() {
        return {
            value: false, //初始預設值
            style: "default", //樣式
            title: "文字", //對應文字
            theme: "var(--color-yellow-500)", //預設顏色
            checkImg: null, //thumb圖標
            classes: ["checkbox"],
            container: null,
        };
    }

}