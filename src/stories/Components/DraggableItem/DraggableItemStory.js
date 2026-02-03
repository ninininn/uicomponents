import { Dom, debounce } from "../../../Utils";
import { DraggableItem } from "./DraggableItem";
import "./DraggableItem.css";

export const createDraggableItem = ({
    group,
    name,
    pull,
    put,
    dataIdAttr,
    dataList,
    direction,
    sort,
    delay,
    animation,
    easing,
    ghostClass,
    chosenClass,
    dragClass,
    handler,
}) => {
    let parent = document.createElement("div");
    parent.className = "mx-auto flex gap-5";

    let firstDiv = document.createElement("div");
    let secondDiv = document.createElement("div");
    let resultDiv = document.createElement("div");
    resultDiv.innerHTML = `<div>第一個data-drag值:<span id="resultDrag"></span></div><div>第一個順序:<span id="resultSpan"></span></div>`;

    firstDiv.className = 'draggable-group flex-col gap-2 p-3 border border-primary-500 rounded-sm';
    secondDiv.className = 'draggable-group flex-col gap-2 p-3 border border-secondary-500 rounded-sm';

    let initConfig = {
        group: group,
        dataIdAttr: dataIdAttr,
        sort: sort,
        ghostClass: ghostClass,
        chosenClass: chosenClass,
        dragClass: dragClass,
        delay: delay,
        animation: animation,
        easing: easing,
        direction: direction,
        onEnd: function (evt) {
            let result = this.getDataMap(this.getSortingIndex(0));
            document.getElementById("resultDrag").textContent = this.getSortingIndex(0);
            document.getElementById("resultSpan").textContent = result;
        }
    };

    for (let i = 0; i < 4; i++) {
        const firstItem = document.createElement("div");
        const secondItem = document.createElement("div");

        firstItem.textContent = `item ${i}`;
        firstItem.className = 'draggable-item';
        // firstItem.dataset.drag = i;

        secondItem.textContent = `item ${i}`;
        secondItem.className = 'draggable-item';
        // secondItem.dataset.drag = i;

        firstDiv.appendChild(firstItem);
        secondDiv.appendChild(secondItem);

    }
    let div1_DragItem = new DraggableItem(firstDiv, initConfig);
    let div2_DragItem = new DraggableItem(secondDiv, initConfig);

    parent.appendChild(firstDiv);
    parent.appendChild(secondDiv);
    parent.appendChild(resultDiv);

    //fake data
    async function fetchData(url) {
        let data = await fetch(url);
        return data;
    }

    fetchData("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
            //模擬資料載入
            Array.from(div1_DragItem.getChildSort()).forEach((el, index) => el.dataset.drag = index);
            Array.from(div2_DragItem.getChildSort()).forEach((el, index) => el.dataset.drag = index);
            div1_DragItem.setDataMap(json[0]);
            div2_DragItem.setDataMap(json[0]);
        });;

    // let notification_instance = new Notification(trigger, initOptions, type);

    // notification_instance.show();
    // layerpage_instance.getElem().addEventListener("change", (e) => {
    //     const payload = {
    //         checked: e.target.checked,
    //         value: e.target.value,
    //     };

    //     layerpage_instance.options.handlers?.(payload);
    //     // 把checked 及 value一次顯示(僅storybook測試用)
    // });

    return parent;
};
