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
    theme,
    classes,
    complete,
    error,
    handler,
}) => {
    let parent = document.createElement("div");
    parent.className = "mx-auto grid place-items-center";
    let trigger = document.createElement("button");
    trigger.className = "btn btn-primary mb-3";
    trigger.textContent = "create Table";

    let tableTarget = document.createElement("div");


    parent.appendChild(trigger);
    parent.appendChild(tableTarget);

    let initOptions = {
        id: id,                 //tableId
        name: name,             //自定義table名稱
        limits: limits,         //單頁顯示筆數限制
        container: tableTarget,      //container容器(table本身就有一個table-container)
        cols: cols,              //欄位設定
        tools: tools,           //是否顯示工具列
        selection: selection,   //是否開啟勾選列
        theme: theme,
        classes: classes,       //自定義class
        complete: complete,     //渲染完成後要執行的fn
        error: error,           //渲染失敗執行的fn
        handler: handler,       //渲染時執行的fn(非同步)
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
        fetchData("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                //模擬資料載入
                setTimeout(() => {
                    table_instance.setData(json);
                    console.log("table_instance:", table_instance);
                }, 5000);

            });;
    });
    return parent;
};
