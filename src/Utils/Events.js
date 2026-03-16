export class EventManager{
    constructor(){
        this._ac = new AbortController();
        this._targets = new WeakMap();
    }


    // 回傳 cleanup fn（移除這個 handler）
    on(target,event,handler,options={}){
        const capture = Boolean(options.capture);
        const key = `${event}:${capture}`;

        let evtMap =this._targets.get(target);
if (!evtMap) {
            evtMap = new Map();
            this._targets.set(target, evtMap);
        }

        if (!evtMap.has(key)) {
            const handlers = new Set();
            const dispatcher = (e) => handlers.forEach(h => h(e));
            target.addEventListener(event, dispatcher, {
                signal: this._ac.signal,
                capture,
                passive: options.passive,           // ← passive 等 hint 在建立時套用
            });
            evtMap.set(key, { dispatcher, handlers, capture });
        }

        evtMap.get(key).handlers.add(handler);
        return () => this._off(target, event, handler, capture);
    }

    _off(target,event,handler,capture=false){
const key = `${event}:${capture}`;
        const eventsMap = this._targets.get(target);
        if (!eventsMap) return;
        const entry = eventsMap.get(key);
        if (!entry) return;

        entry.handlers.delete(handler);
        if (entry.handlers.size === 0) {
            target.removeEventListener(event, entry.dispatcher, { capture });
            eventsMap.delete(key);
        }
    }

    destroy(){
        this._ac.abort();//執行中止
        this._ac = new AbortController();//重新賦予新的控制器
    }
}
