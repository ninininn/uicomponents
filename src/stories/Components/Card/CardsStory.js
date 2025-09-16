import { BasicInfoCard } from "./Cards";
import { Dropdown } from "../Dropdown/Dropdown";

export const createCards = ({ blockId, blockclass, label, value, customInner, title, cardSize, btn, text, handlers, btngroupClass, ...args }) => {
    const drop_component = new Dropdown("ex_drop",[
        { value: 1, text: "One" },
        { value: 2, text: "Two" },
        { value: 3, text: "Three" },
    ]);

    function clickHandler(){
        alert("查看更多 clicked!")
    }
    
    let parent = document.createElement("div");
    parent.className = "grid grid-cols-3";
    btn = [{ text: text, class: args.class, handlers: handlers }];
    let infoList =
        [
            {
                blockId: blockId,
                blockclass: [...blockclass],
                label: [label, "price: "],
                value: [value, "$1,000"],
                customInner: customInner,
                btn: btn,
                btngroupClass: btngroupClass,
            },
            {
                blockclass: ["mt-3"],
                label: "配合其他元件作為customInner :",
                customInner: drop_component.containerEl,
            },
            {
                btn: [{ text: "查看更多", class: ["btn-primary"], handler: clickHandler }],
                btngroupClass:"mt-3"
            }
        ];
    let realpriceCard = new BasicInfoCard(title, infoList, cardSize);
    parent.appendChild(realpriceCard.cardContainer);
    return parent;
};
