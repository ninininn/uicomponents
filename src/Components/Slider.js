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

        // State 綁定
        const [getValue, setValue, subscribe] = bindState(this.options.initValue);
        this.getValue = getValue;
        this.setValue = setValue;//避免傳入子元件造成data更新變亂(統一由父元件來控制)
        this.subscribe = subscribe;//傳遞下去子元件，讓子元件也能綁定該狀態


        //子元件 - thumb + bar
        this.thumb = new SliderThumb(this.getValue, this.subscribe);
        this.bar = new SliderBar(this.getValue, this.subscribe);
        this.childrens = [this.thumb.getElem(), this.bar.getElem()];
        this._init();
    }

    // 封裝基本(預設)設定
    get defaultOptions() {
        return {
            min: 0,             //最小值
            max: 100,           //最大值
            initValue: 0,       //初始預設值
            step: 1,            //間隔
            input: false,       //是否顯示輸入框
            range: false,       //範圍功能
            theme: "#878787",   //顏色
            classes: ["slider"],
        };
    }

    _init() {
        this.render();
        //加入children:
        for (let child of this.childrens) {
            this.getElem().appendChild(child);
        }
        this._bindEvents();
    }

    // 渲染
    render() {
        UIUtils.addClass(this.getElem(), this.options.classes);
    }

    _bindEvents() {
        //僅在init時綁定一次
        const sliderElem = this.getElem();
        let isDragging = false;

        const onMouseMove = (e) => {
            if (!isDragging) return;

            const sliderRect = sliderElem.getBoundingClientRect();
            const percentage = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
            const moveSteps = Math.round(percentage / this.options.step) * this.options.step;
            const clamped = Math.min(95, Math.max(0, moveSteps));
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

    _checkRange() {
        if (this.options.range) {
            console.log("range!");
        }
    }
}


export class SliderThumb extends BaseComponent {
    constructor(value, subscribe) {
        const thumb = document.createElement("div");
        super(thumb);
        this._thumbValue = value;
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
        this._thumbValue = value;
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
        this._barValue = value;
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
        this._barValue = value;
        this.mask.style.setProperty("--slider-width", `${value}%`);
    }
}