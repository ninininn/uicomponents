import { UIUtils, debounce } from "../../../Utils";
import { DraggableItem } from "./DraggableItem";
import "./DraggableItem.css";

export const createDraggableItem = ({
    id,
    name,
    limits,
    selection,
    container,
    cols,
    tools,
    classes,
    complete,
    error,
    handler,
}) => {
    let parent = document.createElement("div");
    parent.className = "mx-auto flex gap-5";

    let firstDiv = document.createElement("div");
    let secondDiv = document.createElement("div");

    firstDiv.className = 'draggable-group gap-2 p-3 border border-primary-500 rounded-sm';
    secondDiv.className = 'draggable-group gap-2 p-3 border border-secondary-500 rounded-sm';


    let initConfig = {
        onEnd: function () {
            console.log(this.getSortingIndex());
            console.log(this.getChildSort());
            ;
        }
    };

    for (let i = 0; i < 6; i++) {
        const firstItem = document.createElement("div");
        const secondItem = document.createElement("div");

        firstItem.textContent = `item ${i}`;
        firstItem.className = 'draggable-item';
        firstItem.setAttribute('data-index', i);

        secondItem.textContent = `item ${i}`;
        secondItem.className = 'draggable-item';
        // secondItem.setAttribute('data-index', i);
        secondItem.dataset.customValue = `value${i}`;

        firstDiv.appendChild(firstItem);
        secondDiv.appendChild(secondItem);

    }
    let div1_DragItem = new DraggableItem(firstDiv, initConfig);
    let div2_DragItem = new DraggableItem(secondDiv, initConfig);

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
