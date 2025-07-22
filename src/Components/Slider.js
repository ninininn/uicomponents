import { UIUtils, BaseComponent, defineArgs } from '../Utils';

// custom Slider components
// props:
//
/**
 * @param {existElem} existNode - using querySelector/ getElementById
 * @param {string} btnType - button type
 * @param {object} settings - custom button settings
 */

export class Slider extends BaseComponent {
    constructor(...args) {
        const { element, options } = defineArgs(args, 'div');
        super(element);
        this.UItype = 'Slider';
        this.options = { ...this.defaultOptions, ...options };
        this.value = this.options.value;
        this.childrens = [new SliderThumb(this.value).getElem(), new SliderBar(this.value).getElem()];
        this.init();
    }

    // 基本(預設)設定
    get defaultOptions() {
        return {
            classes: ["slider"],
            variant: 'single',
            value: 0,
            step: 5,
            max: 100,
            events: [],
        };
    }

    init() {
        this.render();
        this.bindEvents();
        //加入children:
        for (let child of this.childrens) {
            this.getElem().appendChild(child);
        }
    }

    render() {
        UIUtils.addClass(this.getElem(), this.options.classes);
        UIUtils.setAttribute(this.UItype, this.getElem(), this.options.text);
    }

    setSliderValue(customValue) {
        this.options.value = customValue;
    }
}


export class SliderThumb extends BaseComponent {
    constructor(value) {
        const thumb = document.createElement("div");
        super(thumb);
        this.options = { ...this.defaultOptions };
        this._value = value;
        this.init();
    }

    get defaultOptions() {
        return {
            classes: ["w-5", "h-5", "bg-yellow-500", "rounded-full", "absolute", "top-[50%]", "translate-y-[-50%]"]
        };
    }

    init() {
        this.render();
    }
    render() {
        UIUtils.addClass(this.getElem(), this.options.classes);
    }
    getThumbValue() {
        return this._value;
    }

    bindEvent() {

    }
}

export class SliderBar extends BaseComponent {
    constructor(value) {
        const bar = document.createElement("div");
        const mask = document.createElement("span");
        mask.classList.add("mask");
        super(bar);
        this.mask = mask;
        this._value = value;
        this.options = { ...this.defaultOptions };
        this.init();
    }

    get defaultOptions() {
        return {
            classes: ["w-80", "h-2", "bg-gray-300", "rounded-full", "my-auto", "overflow-hidden"],
        };
    }

    init() {
        this.render();
        this.getElem().appendChild(this.mask);
        this.mask.style.setProperty("--slider-width", `${this._value}%`);
    }
    render() {
        UIUtils.addClass(this.getElem(), this.options.classes);
    }
    getBarValue() {
        return this._value;
    }
}