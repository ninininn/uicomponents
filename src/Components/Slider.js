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
        this.options = { ...this._defaultOptions, ...options };

        // 檢查是否為雙向
        this._checkRange();

        // 設定state
        const [getValue, setValue, subscribe] = bindState(this.options.initValue);
        this.getValue = getValue;
        this.setValue = setValue;//避免傳入子元件造成data更新變亂(統一由父元件來控制)
        this.subscribe = subscribe;//傳遞下去子元件，讓子元件也能綁定該狀態

        // 初始化UI相關
        this.bar = new SliderBar(this.getValue(), this.subscribe);
        if (this.options.range) {
            this.thumb = [
                new SliderThumb(this.getValue()[0], this.subscribe, this.options.thumbImg, 0),
                new SliderThumb(this.getValue()[1], this.subscribe, this.options.thumbImg, 1),
            ];
            this.childrens = [
                ...this.thumb.map(t => t.getElem()),
                this.bar.getElem()
            ];
        } else {
            this.thumb = new SliderThumb(this.getValue(), this.subscribe, this.options.thumbImg);
            this.childrens = [this.thumb.getElem(), this.bar.getElem()];
        }
        // if (this.options.range) {
        //     //子元件 - thumb + bar
        //     this.bar = new SliderBar(this.getValue(), this.subscribe);

        //     let sliderValue = this.getValue();
        //     this.thumb = [new SliderThumb(sliderValue[0], this.subscribe, this.options.thumbImg), new SliderThumb(sliderValue[1], this.subscribe, this.options.thumbImg)];
        //     this.childrens = [...this.thumb.map(elem => elem.getElem()),
        //     this.bar.getElem()];
        // } else {
        //     this.thumb = new SliderThumb(this.getValue()[0], this.subscribe, this.options.thumbImg);
        //     this.childrens = [this.thumb.getElem(),
        //     this.bar.getElem()];
        // }
        this._init();
    }

    // 封裝基本(預設)設定
    get _defaultOptions() {
        return {
            min: 0,             //最小值
            max: 100,           //最大值
            initValue: 0,       //初始預設值
            step: 1,            //間隔
            input: false,       //是否顯示輸入框
            range: false,       //範圍功能
            theme: "#878787",   //顏色
            thumbImg: null,     //thumb圖標
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
        this._checkRange();
        UIUtils.addClass(this.getElem(), this.options.classes);
    }

    _bindEvents() {
        //僅在init時綁定一次
        const sliderElem = this.getElem();
        let isDragging = false;

        (this.options.range ? this.thumb : [this.thumb]).forEach((thumb, index) => {
            thumb.getElem().addEventListener('mousedown', (e) => {
                e.preventDefault(); // 避免選取文字
                isDragging = true;
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            });
        });
        const onMouseMove = (e) => {
            if (!isDragging) return;

            const sliderRect = sliderElem.getBoundingClientRect();
            const percentage = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
            const moveSteps = Math.round(percentage / this.options.step) * this.options.step;
            const clamped = Math.min(95, Math.max(0, moveSteps));
            //95的部分可以改為設定其他數值->決定最大值位置(可能因置換圖片或是thumb尺寸有改來調整)
            // return clamped;
            this.setValue(clamped);
        };

        const onMouseUp = (e) => {
            isDragging = false;
            e.target.removeEventListener('mousemove', onMouseMove);
            e.target.removeEventListener('mouseup', onMouseUp);
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
        const { initValue, range, min, max } = this.options;
        if (range) {
            this.options.initValue = Array.isArray(initValue) ? initValue : [initValue, max];
        } else {
            // 防呆(range是false但傳入陣列)
            this.options.initValue = Array.isArray(initValue) ? initValue[0] : initValue;
        }
    }
}

class SliderThumb extends BaseComponent {
    constructor(value, subscribe, thumbImg = null) {
        const thumb = document.createElement("div");
        super(thumb);
        this._thumbValue = value;
        this._thumbImg = thumbImg;
        this._init();

        subscribe(value => {
            this._setThumbValue(value);
        });
    }

    _init() {
        this.render();
    }

    render() {
        UIUtils.addClass(this.getElem(), ["slider-thumb"]);

        //是否有傳入客製圖標路徑
        if (this._thumbImg) {
            this.getElem().style.setProperty('--tmb-img', `url(${this._thumbImg})`);
            UIUtils.addClass(this.getElem(), ["custom-thumb"]);
        }
    }
    _setThumbValue(value) {
        this._thumbValue = value;
        this.getElem().style.left = `${value}%`;
    }
}

class SliderBar extends BaseComponent {
    constructor(value, subscribe) {
        const bar = document.createElement("div");
        const mask = document.createElement("span");
        mask.classList.add("mask");
        super(bar);
        this.mask = mask;
        this._barValue = value;
        this.options = { ...this.defaultOptions };
        this._init();
        subscribe(value => {
            this._setBarValue(value);
        });
    }

    get defaultOptions() {
        return {
            classes: ["w-90", "h-1.5", "bg-gray-300", "rounded-full", "my-auto", "overflow-hidden", "cursor-grab"],
        };
    }

    _init() {
        this.render();
        this.getElem().appendChild(this.mask);
    }
    render() {
        UIUtils.addClass(this.getElem(), this.options.classes);
    }

    _setBarValue(value) {
        this._barValue = value;
        this.mask.style.setProperty("--slider-width", `${value}%`);
    }
}

class Input extends BaseComponent {
    constructor(type,) {

    }
}