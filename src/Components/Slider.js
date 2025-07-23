import { UIUtils, BaseComponent, defineArgs, bindState } from '../Utils';

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

        // State 測試
        const [getValue, setValue, subscribe] = bindState(this.options.value);
        this.getValue = getValue();
        this.setValue = setValue;
        this.subscribe = subscribe;


        //子元件 - thumb + bar
        // 傳入 get/set/subscribe 給 child
        this.thumb = new SliderThumb(this.getValue, this.subscribe);
        this.bar = new SliderBar(this.getValue, this.subscribe);
        this.childrens = [this.thumb.getElem(), this.bar.getElem()];
        this.init();
    }

    // 封裝基本(預設)設定
    get defaultOptions() {
        return {
            classes: ["slider"],
            variant: 'single',
            value: 0,
            step: 5,
            max: 100,
        };
    }

    init() {
        this.render();
        //加入children:
        for (let child of this.childrens) {
            this.getElem().appendChild(child);
        }
        this.bindEvents();
    }

    render() {
        UIUtils.addClass(this.getElem(), this.options.classes);
        UIUtils.setAttribute(this.UItype, this.getElem(), this.options.text);
    }

    setSliderValue(customValue) {
        this.value = customValue;
    }

    bindEvents() {
        const sliderElem = this.getElem();
        let isDragging = false;

        const onMouseMove = (e) => {
            if (!isDragging) return;

            const sliderRect = sliderElem.getBoundingClientRect();
            const percentage = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
            const snapped = Math.round(percentage / this.options.step) * this.options.step;
            const clamped = Math.min(95, Math.max(0, snapped));
            //95的部分可以改為設定其他數值->決定最大值位置(可能因置換圖片或是thumb尺寸有改來調整)
            this.setValue(clamped);
        };

        const onMouseUp = () => {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        // 設定 mousedown（滑鼠按下）時開始拖曳
        this.thumb.getElem().addEventListener('mousedown', (e) => {
            e.preventDefault(); // 避免選取文字
            isDragging = true;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });
    }


}


export class SliderThumb extends BaseComponent {
    constructor(value, subscribe) {
        const thumb = document.createElement("div");
        super(thumb);
        this.options = { ...this.defaultOptions };
        this.init();

        subscribe(value => {
            this.setThumbValue(value);
        });
    }

    get defaultOptions() {
        return {
            classes: ["slider-thumb"]
        };
    }

    init() {
        this.render();
    }
    render() {
        UIUtils.addClass(this.getElem(), this.options.classes);
    }
    setThumbValue(value) {
        this.getElem().style.left = `${value}%`;
    }

    bindEvent() {

    }
}

export class SliderBar extends BaseComponent {
    constructor(value, subscribe) {
        const bar = document.createElement("div");
        const mask = document.createElement("span");
        mask.classList.add("mask");
        super(bar);
        this.mask = mask;
        this._value = value;
        this.options = { ...this.defaultOptions };
        this.init();
        subscribe(value => {
            this.setBarValue(value);
        });
    }

    get defaultOptions() {
        return {
            classes: ["w-90", "h-1.5", "bg-gray-300", "rounded-full", "my-auto", "overflow-hidden", "cursor-grab"],
        };
    }

    init() {
        this.render();
        this.getElem().appendChild(this.mask);
    }
    render() {
        UIUtils.addClass(this.getElem(), this.options.classes);
    }
    setBarValue(value) {
        this.mask.style.setProperty("--slider-width", `${value}%`);
    }
}