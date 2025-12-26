import { UIUtils, debounce } from "../../../Utils";
import { Table, Skeleton } from "./Table";
import { Checkbox } from "../Checkbox/Checkbox";
import "./Table.css";
import "../Checkbox/Checkbox.css";
import "../Dropdown/Dropdown.css";

export const createTable = ({
    id,
    name,
    limits,
    selection,
    container,
    cols,
    tools,
    groupTool,
    exportsTool,
    printTool,
    theme,
    classes,
    complete,
    error,
    handler,
}) => {
    let parent = document.createElement("div");
    parent.className = "mx-auto grid place-items-center";
    let trigger = document.createElement("button");
    trigger.className = "btn btn-secondary mb-3";
    trigger.textContent = "create Table";
    let clear = document.createElement("button");
    clear.className = "btn btn-danger outline-btn mb-3";
    clear.textContent = "clear Selected";

    let tableTarget = document.createElement("div");
    tableTarget.className = "table-test-target";


    parent.appendChild(trigger);
    parent.appendChild(tableTarget);
    parent.appendChild(clear);
    let toolFeature = [groupTool = 'group', exportsTool = 'exports', printTool = 'print'];

    let initOptions = {
        id: id,                 //tableId
        name: name,             //自定義table名稱
        limits: limits,         //單頁顯示筆數限制
        container: container || '.table-test-target',      //container容器(table本身就有一個table-container)
        cols: cols,              //欄位設定
        tools: tools ? [...toolFeature] : false,           //是否顯示工具列
        selection: selection,   //是否開啟勾選列
        theme: theme,
        classes: classes,       //自定義class
        complete: complete,     //渲染完成後要執行的fn
        error: error,           //渲染失敗執行的fn
        handler: handler,       //渲染時執行的fn(非同步)
        url: "https://jsonplaceholder.typicode.com/comments",
        controlPage: true,
    };

    //fake data
    async function fetchData(url) {
        let data = await fetch(url);
        return data;
    }

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
    trigger.addEventListener("click", () => {
        let table_instance = new Table(initOptions);
        console.log("table_instance:", table_instance);

        clear.addEventListener("click", () => {
            table_instance.clearSelected();
        });
    });


    return parent;
};
