import { Dom } from '../Utils/Dom';
import { EventManager } from '../Utils/Events';
export class BaseComponent {
    constructor(elem, theme) {
        this._elem = elem;
        this._theme = theme;
        this._em = new EventManager();
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


    onevent(target,event,handler,options){
        return this._em.on(target,event,handler,options);
    }

    offevent(cleanup){
        cleanup?.();
    }

    destroy(){
        this._em.destroy();
    }


    onClickOutSide(target,callback){
        return this.onEvent(document,'click',(e)=>{
            if(!target.contains(e.target) callback(e));
        })
    }
}