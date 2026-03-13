import { Dom } from '../Utils/Dom';
import { EventManager } from '../Utils/Events';
export class BaseComponent {
    constructor(elem, theme) {
        this._elem = elem;
        this._theme = theme;
        this._events = [];
    }

    getElem() { return this._elem; } //看要不要統一用getter:get elem(){retrun this._elem}

    setTheme(themeVal) {
        this._theme = themeVal;
        this.render();
    }

    appendinMotion(elem, time = 100) {
        this._elem.appendChild(elem);
        Dom.addClass(elem, ['opacity-0', 'transition-all']);

        setTimeout(() => {
            Dom.addClass(elem, 'opacity-100');
        }, time);
    }
}