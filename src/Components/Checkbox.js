import {
    UIUtils,
    BaseComponent,
    defineArgs,
    bindState,
    compareNum,
} from "../Utils";

export default class Checkbox extends BaseComponent {
    constructor(...args) {
        const { element, options } = defineArgs(args, "input");
        const checkboxInput = document.createElement("input");


    }
}