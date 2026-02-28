import { BasicInfoCard } from "./Cards";
import { Dropdown } from "../Dropdown/Dropdown";

export const createCards = ({ blockId, blockclass, label, value, customInner, title, cardSize, btn, text, handlers, btngroupClass, ...args }) => {
    const drop_component = new Dropdown("ex_drop", [
        { value: 1, text: "One" },
        { value: 2, text: "Two" },
        { value: 3, text: "Three" },
    ]);

    function clickHandler() {
        alert("查看更多 clicked!");
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
                btngroupClass: "mt-3"
            }
        ];
    let realpriceCard = new BasicInfoCard(title, infoList, cardSize);
    parent.appendChild(realpriceCard.cardContainer);
    console.log("realpriceCard:", realpriceCard);
    realpriceCard.updateLabel(label, "更新資料欄位內容A");
    const repeatUUID = crypto.randomUUID();
    realpriceCard.addBlocks([
        {
            blockId: "testa",
            label: "統計範圍內(橘框虛線)建物資料數量：",
            value: 1,
            btn: [
                { text: "btn01", class: ["btn-primary"] },
                { text: "btn01", class: ["btn-primary"] },
            ],
            btngroupClass: "a b c",
        },
        {
            blockId: "testb",
            label: "平均屋齡：",
            value: 2,
            blockclass: ["test-class"],
        },
        {
            label: ["最大值", "最小值"],
            value: [2, 3],
        },
        {
            blockclass: ["flex", "flex-col", "tips-container", "text-sm"],
            customInner: `<span>＊計算可能受到建築完成日未填寫影響，數據僅供參考</span><span>檢視屋齡分布可操作[交易安全]></span><a class="text-btn" href="javascript:overnav(555);">[建物屋齡模擬]</a>`,
        },
    ], { once: true, id: repeatUUID });
    realpriceCard.updateLabel("最大值", 10);
    return parent;
};
