import{u as l,j as s,M as r,T as t,P as c,C as i}from"./iframe-1IdOgZ-D.js";import"./preload-helper-DLLWEBaG.js";function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{isTemplate:!0,title:"How to use Notification"}),`
`,s.jsx(t,{}),`
`,s.jsx(e.p,{children:"適用 : 基本跳出視窗及通知，分為四種類型(toast、modal、popover及msg)。"}),`
`,s.jsx(c,{}),`
`,s.jsx(e.h1,{id:"controls",children:"Controls"}),`
`,s.jsxs(e.p,{children:["由於 Notification 元件的使用方式較特殊，是以呼叫的方法來決定類型，提供操作的",s.jsx(e.code,{children:"type"}),"請視為實際使用場景要呼叫的方法；而 Method's parameter 則是呼叫時可以控制的設定，其餘內部屬性請參考 ",s.jsx(e.strong,{children:"properties 內部屬性"}),"區塊。"]}),`
`,s.jsx(i,{}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h1,{id:"usage-api",children:"Usage API"}),`
`,s.jsxs(e.p,{children:["初始化 Notification 元件，帶入 ",s.jsx(e.code,{children:"trigger"}),"參數，並於呼叫方法時帶入",s.jsx(e.code,{children:"options"}),"參數。"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`  let notify = new Notification(trigger); //先綁定觸發元素並初始化Notification\r
  //...其他操作...\r
\r
  //要操作時再呼叫對應樣式方法\r
  notify.modal(options)
`})}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.h3,{id:"parameters-參數設定",children:"parameters 參數設定"}),`
`]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx("span",{className:"sb-unstyled font-black",children:"trigger"}),`
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),`
`,s.jsx(e.p,{children:"傳入HTMLElement作為觸發元素，控制Notification出現與否。"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-html",children:`<!-- 基本靜態結構 -->\r
<label class="label input-label">\r
  <input type="checkbox" class="checkbox" />\r
  文字內容\r
</label>
`})}),`
`,s.jsx("br",{}),`
`]}),`
`]}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.h3,{id:"properties-內部屬性",children:"properties 內部屬性"}),`
`,s.jsx("span",{className:"sb-unstyled data-type readonly",children:"Read-only"}),`
`,s.jsx("span",{className:"sb-unstyled",children:"可以操作的屬性皆須使用methods來更改"}),`
`]}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"}),s.jsx("td",{children:"Inherits"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"Notification"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(e.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]}),s.jsxs("td",{children:[s.jsx(e.code,{children:"BaseComponent"})," 類別"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"theme"}),s.jsx("td",{children:"light"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:"主題色系，light/dark兩色系可切換"}),s.jsxs("td",{children:[s.jsx(e.code,{children:"BaseComponent"})," 類別"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"options"}),s.jsxs("td",{children:["parameter",s.jsx(e.code,{children:"options"})]}),s.jsx("td",{children:"object"}),s.jsx("td",{children:"相關設定值"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"type"}),s.jsx("td",{children:"msg"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:"通知視窗種類"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"notifyTrigger"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"HTMLElement"}),s.jsx("td",{children:"觸發元素"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"confrim"}),s.jsx("td",{children:"確定"}),s.jsx("td",{children:"array | string"}),s.jsx("td",{colSpan:"2",children:"指定確認按鈕文字及觸發後的callback函式，如果單純只需要設定文字可以只傳入string"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"cancel"}),s.jsx("td",{children:"取消"}),s.jsx("td",{children:"array | string"}),s.jsx("td",{colSpan:"2",children:"指定取消/返回按鈕文字及觸發後的callback函式，如果單純只需要設定文字可以只傳入string"})]})]})]})}),`
`,s.jsx("br",{}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.h3,{id:"methods-方法",children:"methods 方法"}),`
`,s.jsx(e.p,{children:"提供外部控制方法調整內部屬性值"}),`
`]}),`
`,s.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".toast(options)"})}),s.jsx("td",{children:"呼叫一個taost類型通知視窗"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".modal(options)"})}),s.jsx("td",{children:"呼叫一個modal類型通知視窗"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".popover(options)"})}),s.jsx("td",{children:"呼叫一個popover類型通知視窗"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".msg(options)"})}),s.jsx("td",{children:"呼叫一般msg類型通知視窗"})]})]})]})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods mr-2",children:".toast(options)"}),`\r
`,s.jsx("span",{className:"sb-unstyled methods mr-2",children:".modal(options)"}),`\r
`,s.jsx("span",{className:"sb-unstyled methods mr-2",children:".popover(options)"}),`\r
`,s.jsx("span",{className:"sb-unstyled methods mr-2",children:".msg(options)"}),`\r
呼叫對應樣式方法`]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"parameter"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled font-black",children:"options"}),`\r
`,s.jsx("span",{className:"sb-unstyled data-type",children:"object"}),s.jsx(e.br,{}),`
`,"各屬性的型別及說明可參考上方",s.jsx(e.strong,{children:"Controls區塊"})]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`  const options = {\r
    type: "msg",                       //類型\r
    theme: "light",                    //主題色\r
    maxWidth: "auto",                  //最大尺寸\r
    area: ["auto", "auto"],            //尺寸\r
    msgContent: null,                  //主要文字內容\r
    customContent: null,               //自定義HTML內容\r
    msgTitle: null,                    //title文字\r
    classes: null,                     //自定義class\r
    handler:null,\r
    placement:"center",                //位置\r
    confirm:["確認", function(){}],    //確認按鈕文字&callback\r
    cancel:["取消", function(){}],     //取消按鈕文字&callback\r
  };
`})}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx("span",{className:"sb-unstyled font-black",children:"通知視窗類型說明，分為四種表現: "}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"#ToastMsg",children:s.jsx(e.strong,{children:"toast"})}),s.jsx(e.br,{}),`
`,"讓使用者知道/提醒目前操作或是狀態，一般表現為在視窗某位置(通常為四個角落)跳出，並持續一段時間後消失。",`
`,s.jsxs("div",{className:"sb-unstyled note-msg my-3",children:[s.jsx("span",{children:"toast類型特色"}),s.jsx("p",{children:"toast應該要由一個主容器包覆所有toast-item，且item要依照順序堆疊出現(FIFO)"})]}),`
`,s.jsx("br",{}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"#ModalMsg",children:s.jsx(e.strong,{children:"modal"})}),s.jsx(e.br,{}),`
`,"適合需要中斷使用者操作的情況，用於提供關鍵資訊或要求做出決定。對話框在出現時會禁用其他功能，並一直保留在屏幕上，直到確認、關閉或採取所需的操作(背景遮罩為不可關閉的設定)。",`
`,s.jsxs("div",{className:"sb-unstyled note-msg my-3",children:[s.jsx("span",{children:"Page、Modal比較"}),s.jsx("p",{children:"Modal為必須中斷使用者操作的UI類型，而Page(inherit Flowbite Drawer)則是不強制中斷(可以設定是否出現遮罩)；但兩者都可以設定使用者關閉行為:是否點擊任一處關閉。"})]}),`
`,s.jsx("br",{}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"#PopoverMsg",children:s.jsx(e.strong,{children:"popover"})}),s.jsx(e.br,{}),`
`,"視覺呈現類似tooltip，不同的是可以控制觸發行為。"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"#DefaultMsg",children:s.jsx(e.strong,{children:"msg"})}),s.jsx(e.br,{}),`
`,"簡單提示訊息，會在指定時間(預設5秒)後自動消失。"]}),`
`]}),`
`,s.jsx("br",{}),`
`]}),`
`]}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h1,{id:"子類別",children:"子類別"}),`
`,s.jsx("div",{className:"sb-unstyled alert-msg",children:"不會直接操作，僅列出參考用"}),`
`,s.jsx("br",{}),`
`,s.jsx("h3",{id:"ToastMsg",children:"ToastMsg 類別"}),`
`,s.jsxs("span",{className:"sb-unstyled data-type inherits",children:["Inherits flowbite ",s.jsx("a",{href:"https://flowbite.com/docs/components/toast/",className:"linkout",children:"Dismiss"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"properties 屬性"})}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"CheckboxGroup"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(e.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"groupContainer"}),s.jsxs("td",{children:[s.jsx(e.code,{children:"<ul/>"}),"標籤元素"]}),s.jsx("td",{children:"HTMLElement"}),s.jsx("td",{children:"容器元素節點"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"groupName"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:"此元件群組名稱"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"items"}),s.jsx("td",{children:"[]"}),s.jsx("td",{children:"array"}),s.jsx("td",{children:s.jsx(e.p,{children:"儲存所有子元件(Checkbox)"})})]})]})]})}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.hr,{}),`
`,s.jsx("h3",{id:"ModalMsg",children:"ModalMsg 類別"}),`
`,s.jsxs("span",{className:"sb-unstyled data-type inherits",children:["Inherits flowbite ",s.jsx("a",{href:"https://flowbite.com/docs/components/modal/",className:"linkout",children:"Modal"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"properties 屬性"})}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"CheckboxGroup"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(e.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"groupContainer"}),s.jsxs("td",{children:[s.jsx(e.code,{children:"<ul/>"}),"標籤元素"]}),s.jsx("td",{children:"HTMLElement"}),s.jsx("td",{children:"容器元素節點"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"groupName"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:"此元件群組名稱"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"items"}),s.jsx("td",{children:"[]"}),s.jsx("td",{children:"array"}),s.jsx("td",{children:s.jsx(e.p,{children:"儲存所有子元件(Checkbox)"})})]})]})]})}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.hr,{}),`
`,s.jsx("h3",{id:"PopoverMsg",children:"PopoverMsg 類別"}),`
`,s.jsxs("span",{className:"sb-unstyled data-type inherits",children:["Inherits flowbite ",s.jsx("a",{href:"https://flowbite.com/docs/components/popover/",className:"linkout",children:"Popover"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"properties 屬性"})}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"CheckboxGroup"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(e.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"groupContainer"}),s.jsxs("td",{children:[s.jsx(e.code,{children:"<ul/>"}),"標籤元素"]}),s.jsx("td",{children:"HTMLElement"}),s.jsx("td",{children:"容器元素節點"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"groupName"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:"此元件群組名稱"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"items"}),s.jsx("td",{children:"[]"}),s.jsx("td",{children:"array"}),s.jsx("td",{children:s.jsx(e.p,{children:"儲存所有子元件(Checkbox)"})})]})]})]})}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.hr,{}),`
`,s.jsx("h3",{id:"DefaultMsg",children:"DefaultMsg 類別"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"properties 屬性"})}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"CheckboxGroup"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(e.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"groupContainer"}),s.jsxs("td",{children:[s.jsx(e.code,{children:"<ul/>"}),"標籤元素"]}),s.jsx("td",{children:"HTMLElement"}),s.jsx("td",{children:"容器元素節點"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"groupName"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:"此元件群組名稱"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"items"}),s.jsx("td",{children:"[]"}),s.jsx("td",{children:"array"}),s.jsx("td",{children:s.jsx(e.p,{children:"儲存所有子元件(Checkbox)"})})]})]})]})}),`
`]}),`
`]})]})}function x(n={}){const{wrapper:e}={...l(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(d,{...n})}):d(n)}export{x as default};
