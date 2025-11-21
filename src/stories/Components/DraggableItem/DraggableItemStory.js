import { UIUtils, debounce } from "../../../Utils";
import { DraggableItem } from "./DraggableItem";
import "./DraggableItem.css";

export const createDraggableItem = ({
    group,
    name,
    pull,
    put,
    dataIdAttr,
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
        onEnd: function () {
            console.log(this.getSortingIndex());
            console.log(this.getChildSort());
            console.log(this.sort(this.getSortingIndex().reverse(), true));
        }
    };

    for (let i = 0; i < 6; i++) {
        const firstItem = document.createElement("div");
        const secondItem = document.createElement("div");

        firstItem.textContent = `item ${i}`;
        firstItem.className = 'draggable-item';
        firstItem.dataset.customValue = i;

        secondItem.textContent = `item ${i}`;
        secondItem.className = 'draggable-item';
        secondItem.dataset.customValue = i;

        firstDiv.appendChild(firstItem);
        secondDiv.appendChild(secondItem);

    }
    let div1_DragItem = new DraggableItem(firstDiv, initConfig);
    let div2_DragItem = new DraggableItem(secondDiv, { ...initConfig, direction: 'horizontal' });

    parent.appendChild(firstDiv);
    parent.appendChild(secondDiv);


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
