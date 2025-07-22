import { UIUtils } from '../Utils';

// custom dropdown components
// props:
// 
/**
 * @param {HTMLElement} parentNode - using querySelector/ getElementById
 * @param {string} btnType - button type
 * @param {object} settings - custom button settings
 */

export class Dropdown {
    constructor(parentNode, btnType, options) {
        const element = document.createElement('div');
        this.parentNode = parentNode;
        this.btnType = btnType;
        this.init();// parent class's init()
    }

    // dropdown 基本(預設)設定
    get defaultOptions() {
        return {
            type: 'dropdown',
            classes: ["dropdown"],
            selectOptions: ['選項01', '選項02']
        };
    }

    // overwrite render()
    render() {
        UIUtils.addClass(this.element, this.options.classes);
        this.element.appendChild(this.createOptionsChild());
        this.parentNode.appendChild(this.element);
    }

    createOptionsChild() {
        let container = document.createElement("div");
        UIUtils.addClass(container, ['options-container']);
        for (let i = 0; i < this.options.selectOptions.length; i++) {
            let option = document.createElement('span');
            UIUtils.addClass(option, ['option-item']);
            UIUtils.setText(option, this.options.selectOptions[i]);
            container.appendChild(option);
        }
        return container;
    }
}
