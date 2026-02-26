import { effect } from "@preact/signals-core";

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