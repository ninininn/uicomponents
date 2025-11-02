import { UIUtils, debounce } from "../../../Utils";
import { Table } from "./Table";
import { Checkbox } from "../Checkbox/Checkbox";
import "./Table.css";
import "../Checkbox/Checkbox.css";

export const createTable = ({
  id,
  name,
  limits,
  selection,
  maxWidth,
  elem,
  cols,
  customContent,
  tools,
  classes,
  complete,
  error,
  handler,
}) => {
  let parent = document.createElement("div");
  parent.className = "mx-auto grid place-items-center";
  let trigger = document.createElement("button");
  trigger.className = "btn btn-primary";
  trigger.textContent = "create Table";

  parent.appendChild(trigger);

  let initOptions = {
    id: id, //title文字
    name: name, //自定義class
    limits: limits,
    elem: parent,
    cols: cols,
    selection: selection, //是否開啟勾選列
    maxWidth: maxWidth,
    customContent: customContent, //自定義HTML內容or其他元件
    classes: classes, //自定義class
    complete: complete, //確認按鈕文字&動作
    error: error, //取消按鈕文字&動作
    handler: handler, //單純綁定在觸發元素上，如果是選擇完才要進行的動作，可以放在btn.handler內
  };

  //fake data
  async function fetchData(url) {
    let data = await fetch(url)
      .then((response) => response.json())
      .then((json) => {
        let table_instance = new Table(initOptions, json);
        console.log("table_instance:", table_instance);
      });
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
    fetchData("https://jsonplaceholder.typicode.com/todos");
  });
  return parent;
};
