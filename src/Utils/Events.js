export class EventManager{
    constructor(){
        this._ac = new AbortController();
        this._targets = new WeakMap();
    }

    on(target,event,handler,options={}){
        const capture = Boolean(options.capture);
        const key = `${event}:${capture}`;

        let evtMap =this._targets.get(target);

    }
}


//Observable Patterns
class Observable{
    constructor(initVal){
        this.subscribers = new Set();
    }

    subscribe(fn){
        this.subscribers.add(fn);
        retrun ()=>this.subscribers.delete(fn);
    }

    update(val){
        this.subscribers.forEach((fn)=>fn(val));
    }
}


let subscribers = null;
//Signals
class Signal{
    constructor(initVal){
        this.subscriptions = new Set();
        this._val = initVal;
    }

    get value(){
        return this._val
    }

    set value(updateVal){
        this._val = updateVal;
    }
}
//Effects

function effect(fn){
    subscribers = fn;
    fn();
    subscriber = null;
}