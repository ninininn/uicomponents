import { Datepicker as FlowbiteDatepicker } from "flowbite";
const customLocales = {
  days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
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
  today: "今日",
  clear: "清除",
  titleFormat: "y MM",
};
export class Datepicker extends FlowbiteDatepicker {
  constructor(element, options) {
    super(element, options);

    //設定picker結構
    this._setCustomPicker();
    //初始化
    this._init();
  }
  _init() {
  }

  _setCustomPicker() {
    this._datepickerInstance.config = {
      ...this._datepickerInstance.config,
      language: "zh-TW",
      locale: customLocales,
    };
    this._datepickerInstance.picker.setOptions(this._datepickerInstance.config);
  }

  getDate() {
    let value = super.getDate();
    const ROCvalue = {
      year: value.getFullYear() - 1911,
      month: value.getMonth() + 1,
      day: value.getDay(),
      date: value.getDate(),
    };
    return ROCvalue;
  }

  setDate(fulldateValue) {
    this._datepickerEl.value = fulldateValue;
    // let value = fulldateValue.split("/");
    // let updateValue = new Date((Number(value[0]) + 1911).flat(value.splice(0, -2)).join("/"));
    // console.log(updateValue);
    super.setDate(fulldateValue);
  }
}