import{u as d,j as e,M as c,T as r,P as t,C as i}from"./iframe-DNts8CDd.js";import"./preload-helper-DLLWEBaG.js";function l(n){const s={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{isTemplate:!0,title:"How to use Notification"}),`
`,e.jsx(r,{}),`
`,e.jsx(s.p,{children:"適用 : 基本跳出視窗及通知，分為四種類型(toast、modal、popover及alert)。"}),`
`,e.jsx(t,{}),`
`,e.jsx(s.h1,{id:"controls",children:"Controls"}),`
`,e.jsxs(s.p,{children:["這邊僅列出初始化時可以設定的 options.properties，內部屬性請參考",e.jsx(s.strong,{children:"properties屬性"}),"區塊"]}),`
`,e.jsx(i,{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{id:"usage-api",children:"Usage API"}),`
`,e.jsxs(s.p,{children:["初始化 Notification 元件，帶入 ",e.jsx(s.code,{children:"trigger"}),"、",e.jsx(s.code,{children:"options"})," 參數，並設定options屬性"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`new Notification(trigger, (options = {}));
`})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"parameters-參數設定",children:"parameters 參數設定"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx("span",{className:"sb-unstyled font-black",children:"trigger"}),`
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),`
`,e.jsx(s.p,{children:"傳入HTMLElement作為觸發元素，控制Layerpage出現與否。"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- 基本靜態結構 -->\r
<label class="label input-label">\r
  <input type="checkbox" class="checkbox" />\r
  文字內容\r
</label>
`})}),`
`,e.jsx("br",{}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx("span",{className:"sb-unstyled font-black",children:"options"}),`
`,e.jsx("span",{className:"sb-unstyled data-type",children:"object"}),`
`,e.jsx(s.p,{children:"各屬性的型別及說明可參考上方Controls區塊"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`  const options = {\r
    type: "toast",          //類型\r
    area: ["auto", "auto"], //尺寸\r
    msgContent: null,       //主要文字內容\r
    customContent: null,    //自定義HTML內容\r
    msgTitle: null,         //title文字\r
    classes: null,          //自定義class\r
  };
`})}),`
`,e.jsx("br",{}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx("span",{className:"sb-unstyled font-black",children:"type"}),`
`,e.jsx("span",{className:"sb-unstyled data-type str",children:"string"}),`
`,e.jsx(s.p,{children:"通知視窗類型，分為四種:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"toast"}),"(default)",e.jsx(s.br,{}),`
`,"讓使用者知道/提醒目前操作或是狀態，一般表現為在視窗某位置(通常為四個角落)跳出，並持續一段時間後消失。"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"modal"}),e.jsx(s.br,{}),`
`,"適合需要中斷使用者操作的情況，用於提供關鍵資訊或要求做出決定。對話框在出現時會禁用其他功能，並一直保留在屏幕上，直到確認、關閉或採取所需的操作。"]}),`
`,e.jsx(s.li,{children:e.jsx(s.strong,{children:"popover"})}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"alert"}),e.jsx(s.br,{}),`
`,"視覺表現為跳出一個中斷使用者操作的視窗，且此視窗內容為使用者「必須」知道的訊息內容，",e.jsx(s.strong,{children:"非必要請勿經常使用"})]}),`
`]}),`
`,e.jsx("br",{}),`
`]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"properties-內部屬性",children:"properties 內部屬性"}),`
`,e.jsx("span",{className:"sb-unstyled data-type readonly",children:"Read-only"}),`
`,e.jsx("span",{className:"sb-unstyled",children:"可以操作的屬性皆須使用methods來更改"}),`
`]}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"UItype"}),e.jsx("td",{children:"Checkbox"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"inputValue"}),e.jsx("td",{children:e.jsx(s.code,{children:"options.title"})}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:[e.jsx(s.code,{children:"<input/>"}),"的value值，如果沒有特別設定會預設為",e.jsx(s.code,{children:"options.title"}),"內容；當",e.jsx(s.code,{children:"style"}),"設定為switch時，則會自動判定",e.jsx(s.code,{children:"|"}),"前後的文字並做切換；其他樣式類型時則是切換",e.jsx(s.code,{children:'""'}),"及title內容"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"activeImg"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["當前顯示的圖示，",e.jsx(s.code,{children:"style"}),"為toggle時才會出現"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"container"}),e.jsxs("td",{children:[e.jsx(s.code,{children:"<label/>"}),"元素"]}),e.jsx("td",{children:"HTMLElement"}),e.jsx("td",{children:e.jsxs(s.p,{children:["容器節點，如果沒有特別指定就會是",e.jsx(s.code,{children:"<label/>"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"defaultTheme"}),e.jsx("td",{children:"--themeColor"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"初始主題色系"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"label"}),e.jsxs("td",{children:[e.jsx(s.code,{children:"<label/>"}),"元素"]}),e.jsx("td",{children:"HTMLElement"}),e.jsxs("td",{children:["記錄此元件的",e.jsx(s.code,{children:"<label/>"}),"節點"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"name"}),e.jsx("td",{children:"null"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["記錄此元件",e.jsx(s.code,{children:"<input/>"}),"標籤的name屬性"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"options"}),e.jsxs("td",{children:[e.jsx(s.code,{children:"options"}),"參數"]}),e.jsx("td",{children:"object"}),e.jsx("td",{children:"傳入的設定值，詳細屬性可以參考上方options參數說明處"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"originParent"}),e.jsx("td",{children:"null"}),e.jsx("td",{children:"HTMLElement"}),e.jsxs("td",{children:["如果初始化時帶入的",e.jsx(s.code,{children:"element"}),"節點有父元素，則預設為該元素；沒有的話就會是null"]})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"methods-方法",children:"methods 方法"}),`
`,e.jsx(s.p,{children:"提供外部控制方法調整內部屬性值"}),`
`]}),`
`,e.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:"descriptions"}),e.jsx("td",{children:"inherit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getElem()"})}),e.jsx("td",{children:"取得該元件渲染的DOM節點元素"}),e.jsx("td",{children:e.jsx(s.code,{children:"BaseComponent"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".changeTheme(HEXstring)"})}),e.jsx("td",{children:"更改主題色"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setDisabled(boolean)"})}),e.jsx("td",{children:"更改顯示/操作與否"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getValue()"})}),e.jsxs("td",{children:["回傳",e.jsx(s.code,{children:"<input/>"})," value值"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getChecked()"})}),e.jsxs("td",{children:["回傳",e.jsx(s.code,{children:"<input/>"})," checked值"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setValue(value)"})}),e.jsxs("td",{children:["傳入要設定",e.jsx(s.code,{children:"<input/>"})," value值"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setChecked(boolean)"})}),e.jsx("td",{children:"傳入要設定checked值"})]})]})]})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".getElem()"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Returns"}),e.jsx(s.br,{}),`
`,"回傳主元件的DOM節點(HTMLElement) - ",e.jsx(s.code,{children:"<input/>"})]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`Checkbox.getElem(); 
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".changeTheme(HEXstring)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Parameters"}),e.jsx(s.br,{}),`
`,"參數可以放入任一HEX色碼，用來改變主題色"]}),`
`]}),`
`,e.jsx("div",{className:"sb-unstyled alert-msg",children:"當disabled狀態為true時禁止修改(會跳出錯誤通知)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:` Checkbox.changeTheme("#8ecb28"); 
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".setDisabled(boolean)"}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".setValue(value)"}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".setChecked(boolean)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Parameters"}),e.jsx(s.br,{}),`
`,"傳入boolean值更改disabled、checked狀態；傳入任一值更改",e.jsx(s.code,{children:"<input/>"}),"的value值"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// ...init Checkbox\r
\r
Checkbox.setDisabled(false);\r
Checkbox.setValue(value);\r
Checkbox.setChecked(true);\r

`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".getValue()"}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".getChecked()"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Returns"}),e.jsx(s.br,{}),`
`,"分別回傳",e.jsx(s.code,{children:"<input/>"}),"的value及checked值"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`Checkbox.getValue(); //""\r
Checkbox.getChecked(); //true
`})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{id:"checkboxgroup",children:"CheckboxGroup"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"可以配合Checkbox元件做使用，需要先將要放入的checkbox初始化再放入"}),`
`]}),`
`,e.jsxs(s.p,{children:["初始化 CheckboxGroup 元件，帶入 ",e.jsx(s.code,{children:"name"}),"、",e.jsx(s.code,{children:"container"})," 參數"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`new CheckboxGroup(name, container);
`})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"parameters-參數設定-1",children:"parameters 參數設定"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx("span",{className:"sb-unstyled font-black",children:"name"}),`\r
`,e.jsx("span",{className:"sb-unstyled data-type str",children:"string"}),e.jsx(s.br,{}),`
`,"群組名稱"]}),`
`,e.jsx("br",{}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx("span",{className:"sb-unstyled font-black",children:"container"}),`
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),`
`,e.jsxs(s.p,{children:["傳入",e.jsx(s.code,{children:"<ul/>"}),"標籤元素節點，如果沒有傳入則會自動建立一個"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!-- 基本靜態結構 -->\r
<ul class="checkbox-group">\r
  <li class="item">\r
    <label>\r
      <input type="checkbox" class="checkbox" />\r
      文字內容\r
    </label>\r
  </li>\r
</ul>
`})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"properties-內部屬性-1",children:"properties 內部屬性"}),`
`,e.jsx("span",{className:"sb-unstyled data-type readonly",children:"Read-only"}),`
`,e.jsx("span",{className:"sb-unstyled",children:"可以操作的屬性皆須使用methods來更改"}),`
`]}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"UItype"}),e.jsx("td",{children:"CheckboxGroup"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"groupContainer"}),e.jsxs("td",{children:[e.jsx(s.code,{children:"<ul/>"}),"標籤元素"]}),e.jsx("td",{children:"HTMLElement"}),e.jsx("td",{children:"容器元素節點"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"groupName"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"此元件群組名稱"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"items"}),e.jsx("td",{children:"[]"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:e.jsx(s.p,{children:"儲存所有子元件(Checkbox)"})})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"methods-方法-1",children:"methods 方法"}),`
`,e.jsx(s.p,{children:"提供外部控制方法調整內部屬性值"}),`
`]}),`
`,e.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:"descriptions"}),e.jsx("td",{children:"inherit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getElem()"})}),e.jsx("td",{children:"取得該元件渲染的DOM節點元素"}),e.jsx("td",{children:e.jsx(s.code,{children:"BaseComponent"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getValue(name)"})}),e.jsxs("td",{children:["取得群組內對應name屬性的",e.jsx(s.code,{children:"<input/>"}),"value-pair 物件"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".addCheckItems(item)"})}),e.jsx("td",{children:"在群組內加入新的Checkbox元件"})]})]})]})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".getElem()"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Returns"}),e.jsx(s.br,{}),`
`,"回傳主元件的DOM節點(HTMLElement) - ",e.jsx(s.code,{children:"<ul/>"})]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`CheckboxGroup.getElem(); 
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".getValue(name)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Paramenters"}),e.jsx(s.br,{}),`
`,"可以單獨傳入指定 name attribute"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Returns"}),e.jsx(s.br,{}),`
`,"如果有傳入指定參數則會回傳一組對應",e.jsx(s.code,{children:"name"}),"的 name-value pair 物件，可以作為後續使用；沒有傳入參數則是回傳一個包含所有 checkbox instance 的 name-value pair 的陣列。"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`CheckboxGroup.getValue("test"); //{name: "test", value: ""}\r
CheckboxGroup.getValue(); //[{name: "test", value: ""},{name: "A", value: "A"}]
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".addCheckItems(item)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Paramenters"}),e.jsx(s.br,{}),`
`,"可以傳入一個或多個 Checkbox 元件，如果傳入多個元件則要以",e.jsx(s.strong,{children:"陣列"}),"形式傳入。"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`let child = new Checkbox(options);\r
CheckboxGroup.addCheckItems(child);
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`let child1 = new Checkbox(options);\r
let child2 = new Checkbox(options);\r
let child3 = new Checkbox(options);\r
\r
CheckboxGroup.addCheckItems([child1, child2, child3]);
`})})]})}function x(n={}){const{wrapper:s}={...d(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{x as default};
