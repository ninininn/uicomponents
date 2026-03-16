
/**
 * Reactive雙向綁定機制
 * @param {*} initialState 
 * @returns 
 */
let _dependentsMap = new Map();
let proxyMap = new Map();

export function Reactive(reactiveObj, effectfn) {
    const existProxy = proxyMap.get(reactiveObj);
    if (existProxy) {
        return existProxy;
    } else {
        proxyMap.set(reactiveObj, createBasicProxy(reactiveObj, effectfn));
        return proxyMap.get(reactiveObj);
    }
}


function createBasicProxy(initialState, effectfn) {
    return new Proxy(initialState, {
        get: function (target, prop) {
            const result = Reflect.get(target, prop);
            if (effectfn) {
                let currentSubscribers = _dependentsMap.get(prop);
                console.log(currentSubscribers);
                if (!currentSubscribers) currentSubscribers = [];
                if (effectfn in currentSubscribers) return;
                currentSubscribers.push(effectfn);
                _dependentsMap.set(prop, currentSubscribers);
            }
            console.log("_dependentsMap:", _dependentsMap);
            return result;
        },

        set: function (target, prop, value) {
            const result = Reflect.set(target, prop, value);
            const currentSubscribers = _dependentsMap.get(prop) || [];
            currentSubscribers.forEach(fn => fn());
            return result;
        }
    });
}

/**
 * Signal 響應式變動
 * Observer {Node} deps 依賴清單(我訂閱誰) 
 * Trackable {Node} subs 訂閱清單(誰訂閱我) = 自身有更新時要通知的對象
 */

export function createSignal(initials) {
    const node = new Node('signal', initials);
    //Read
    const get = () => {
        track(node);
        return node.value;
    };

    //update signal value
    const set = (next) => {
        const nextVal = typeof next === 'function' ? next(node.value) : next;
        const isEqual = Object.is(node.value, nextVal);
        if (isEqual) return;
        node.value = nextVal;

        for (const sub of node.subs) {
            if (sub.type === 'effect') weakMapRegistry.get(sub)?.schedule();
            if(sub.type==='computed') markStale(sub); //只標記，不重算
        }
    };


    //手動把某個 Observer 掛到某個 signal 上，回傳取消訂閱
    const subscribe = (observer) => {
        if (observer.type === 'signal') {
            throw new Error('A signal cannot subscribe to another node');
        }
        bind(observer, node);
        return () => unBind(observer, node);

    };

    return { get, set, subscribe };
}


let currentObserver = null;
/**
 * 追蹤工具：在「observer context」中讀取時自動建邊界（只建圖，不通知）
 * @param {*} observerNode 
 * @param {*} fn 
 * @returns 
 */
function withObserver(observerNode, fn) {
    const prev = currentObserver;
    currentObserver = observerNode;
    try {
        return fn();
    } finally {
        currentObserver = prev;
    }
}

//在「追蹤區塊」內讀到誰，就自動訂閱誰
function track(dependenceNode) {
    if (!currentObserver) return;// 非追蹤階段就只是一般讀取
    bind(currentObserver, dependenceNode); // 觀察者 -> 被觀察者
}

/**
 * 紀錄type(種類)、deps(依賴清單)、subs(訂閱清單)
 */
class Node {
    constructor(type, value) {
        this.type = type;//'signal' | 'computed' | 'effect'

        switch (this.type) {
            case 'computed':
                this.subs = new Set();
                this.deps = new Set();
                break;
            case 'signal':
                this.subs = new Set();
                break;
            case 'effect':
                this.deps = new Set();
                break;
        }
        // this.deps = new Set();//依賴清單(自身依賴的對象)(effect / computed）
        // this.subs = new Set();//訂閱清單(依賴自身的對象=對象's依賴清單會有自己)signal / computed）
        this.value = value;
        console.log("thisNode:", this);
    }
}

/**
 * bind 綁定
 * @param {Node} from 
 * @param {Node} to 
 */
function bind(from, to) {
    if (from.type === 'signal') {
        throw new Error('Signal nodes cannot depend on others');
    }
    from.deps.add(to);//把要依賴的對象(to)加入要綁定的對象(from)的依賴清單
    to.subs.add(from);//把要綁定的對象(from)加到被綁定對象(to)的訂閱清單
}


/**
 * unBink 取消綁定
 * @param {Node} from 
 * @param {Node} to 
 */
function unBind(from, to) {
    from.deps.delete(to);
    to.subs.delete(from);
}


const mapTable = new WeakMap();
const weakMapRegistry = {
    get: (effectNode) => mapTable.get(effectNode),
    set: (effectNode, effect) => mapTable.set(effectNode, effect),
    delete: (effectNode) => mapTable.delete(effectNode)
};

function drainCleanups(list, onError) {
    // LIFO：從尾到頭執行
    for (let i = list.length - 1; i >= 0; i--) {
        const cb = list[i];
        try {
            cb();
        } catch (e) {
            onError?.(e);
        }
    }
    list.length = 0;
}

// microtask 合併
const pending = new Set();
let scheduled = false;
function schedule(effect) {
    if (effect.disposed) return;
    pending.add(effect);
    if (!scheduled) {
        scheduled = true;
        queueMicrotask(() => {
            scheduled = false;
            const list = Array.from(pending);
            pending.clear();
            for (const ef of list) ef.run();
        });
    }
}

//activeEffect型別: Effect | null
let activeEffect = null;
function onCleanup(cb) {
    if (activeEffect) activeEffect.cleanups.push(cb);
}

class Effect {
    constructor(fn) {
        this.node = new Node('effect');
        this.cleanups = [];
        this.disposed = false;
        this._fn = fn;
        weakMapRegistry.set(this.node, this); //把這個effectNode記錄到registry
    }

    run() {
        if (this.disposed) return;

        // 1) 清理上次:run cleanups
        drainCleanups(this.cleanups);

        // 2) 解除舊依賴:unbind old deps
        for (const dep of [...this.node.deps]) unBind(this.node, dep);

        // 3) 先 unbind 舊依賴再用 withObserver 收集新依賴，避免訂閱集合不斷增長
        activeEffect = this;
        try {
            const ret = withObserver(this.node, this._fn);
            if (typeof ret === 'function') this.cleanups.push(ret);
        } finally {
            activeEffect = null;
        }
    }

    schedule() { schedule(this); }

    dispose() {
        if (this.disposed) return;
        this.disposed = true;

        drainCleanups(this.cleanups);
        for (const dep of [...this.node.deps]) unBind(this.node, dep);
        this.node.deps.clear();

        weakMapRegistry.delete(this.node); // 只碰 Registry
    }
}

/**
 * 在追蹤區塊執行 fn，自動收集依賴邊
 * @param {*} fn 
 */

export function createEffect(fn) {
    const effect = new Effect(fn);
    effect.run(); // Effect.run()，先跑一次收集依賴(透過withObserver())
    return () => effect.dispose();
}


/**Computed
 * 
 */

function markStale(node){
    if(node.type!=='computed') return;
    const compute = node;
    if(compute.stale) return;
    compute.stale = true;

    for(const sub of node.subs){
        if(sub.type==='computed'){
            markStale(sub);
        }else if(sub.type==='effect'){
            weakMapRegistry.get(sub)?.schedule();//把effect排入排程
        }
    }
}

export function computed(fn){
    const node = new Node('computed');
    node.value = undefined;
    node.stale = true;//第一次讀取要計入
    node.computing = false;

    function recompute(){
        if(node.computing) throw new Error('Cycle detected in Computed');
        node.computing = true;

        //解除舊的依賴
        for(const dep of [...node.deps]) unBind(node,dep);

        //重新綁定
        const next = withObserver(node,fn);
        if(!Object.is(node.value,next)){
            node.value = next;
        }
        node.stale = false;
        node.computing = false;
    }

    const get = ()=>{
        track(node);
        if(node.stale)recompute();
        return node.value;
    }

    const dispose = ()=>{
        //解除所有上下游關係
        for(const dep of [...node.deps]) unBind(node,dep);
        for(const sub of [...node.subs]) unBind(sub,node);
        node.deps.clear();
        node.subs.clear();

        node.stale = true;
    }

    return {get,dispose};
}