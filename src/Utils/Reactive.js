/**
 * Reactive雙向綁定機制
 * @param {*} initialState 
 * @returns 
 */
export function Reactive(initialState) {
    return new Proxy(initialState, {
        get(target, prop) {
            const resultVal = Reflect.get(target, prop);
            return resultVal;
        },
        set(target, prop, value) {
            const resultVal = Reflect.set(target, prop, value);
            //dependents update UI，值有改變就要更新依賴鏈
            return resultVal;
        }
    });
}