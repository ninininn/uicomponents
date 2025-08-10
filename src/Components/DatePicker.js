import { Datepicker as FlowbiteDatepicker } from "flowbite";
const customLocales = {
  days: ["日", "一", "二", "三", "四", "五", "六"],
  daysShort: ["日", "一", "二", "三", "四", "五", "六"],
  daysMin: ["日", "一", "二", "三", "四", "五", "六"],
  months: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  monthsShort: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ],
  today: "Today",
  clear: "Clear",
  titleFormat: "y MM",
};
export class Datepicker extends FlowbiteDatepicker {
  constructor(element, options) {
    super(element, options);
    console.log("this.constructor.prototype:", this.constructor.prototype);
    this._init();
  }
  _init() {
    // super.setOptions();
    console.log(this._datepickerInstance.config);
    this._datepickerInstance.config = {
      ...this._datepickerInstance.config,
      language: "zh-TW",
      locale: customLocales,
    };
    this._datepickerInstance.picker.setOptions(this._datepickerInstance.config);
  }
}

export class Calendar {
  constructor(...args) {}
}
