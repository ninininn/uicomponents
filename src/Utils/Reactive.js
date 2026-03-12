
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

function createSignal(initials) {
    const node = new Node(type = 'signal', initials);
    //Read
    const get = () => {
        track(node);
        return node.value;
    };

    //update
    const set = (next) => {
        const nextVal = typeof next === 'function' ? next(node.value) : next;
        const isEqual = Object.is(node.value, nextVal);
        if (isEqual) return;
        node.value = nextVal;

        for (const sub of node.subs) {
            if (sub.type === 'effect') weakMapRegistry.get(sub)?.schedule();
        }
    };


    //手動把某個 Observer 掛到某個 signal 上，回傳取消訂閱
    const subscribe = (observerNode) => {
        if (observerNode.type === 'signal') {
            throw new Error('A signal cannot subscribr to another node');
        }
        bind(observerNode, node);
        return () => unBind(observerNode, node);

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
        this.type = type;//'signal' | 'compute' | 'effect'

        switch (this.type) {
            case 'compute':
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


//型別
//EffectInstanceLike{schedule()}
//EffectCarrier{[EffectSlot]?: EffectInstanceLike}
//EffectRegistry{
// get(EffectCarrierNode),set(EffectCarrierNode),delete(EffectCarrierNode)
//}
// const EffectSlot = Symbol("EffectSlot");

// class EffectCarrier {
//     constructor() {
//         [EffectSlot] = EffectInstanceLike;
//     }
// }

// //if([EffectSlot]) will has schedule() method
// const SymbolRegistry = {
//     get(EffectCarrierNode) {
//         return EffectCarrierNode[EffectSlot];
//     },
//     set(EffectCarrierNode, inst) {
//         Object.defineProperty(EffectCarrierNode, EffectSlot, {
//             value: inst,
//             enumerable: false,
//             configurable: true
//         });
//     },
//     delete(EffectCarrierNode) {
//         Reflect.deleteProperty(EffectCarrierNode, EffectSlot);
//     }
// };

const mapTable = new WeakMap();
const weakMapRegistry = {
    get: (EffectCarrierNode) => mapTable.get(EffectCarrierNode),
    set: (EffectCarrierNode, inst) => mapTable.set(EffectCarrierNode, inst),
    delete: (EffectCarrierNode) => mapTable.delete(EffectCarrierNode)
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
function schedule(inst) {
    if (inst.disposed) return;
    pending.add(inst);
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

//activeEffect型別: EffectInstance | null
let activeEffect = null;
function onCleanup(cb) {
    if (activeEffect) activeEffect.cleanups.push(cb);
}

class EffectInstance {
    #fn;
    constructor(fn) {
        this.node = new Node('effect');
        this.cleanups = [];
        this.disposed = false;
        this.#fn = fn;
        weakMapRegistry.set(this.node, this); // 只碰 Registry
    }

    run() {
        if (this.disposed) return;

        // 1) 清理上次
        drainCleanups(this.cleanups);

        // 2) 解除舊依賴
        for (const dep of [...this.node.deps]) unlink(this.node, dep);

        // 3) 追蹤上下文執行，收集新依賴；支援回傳 cleanup
        activeEffect = this;
        try {
            const ret = withObserver(this.node, this.#fn);
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

function createEffect(fn) {
    const inst = new EffectInstance(fn);
    inst.run(); // 先跑一次收集依賴
    return () => inst.dispose();
}
