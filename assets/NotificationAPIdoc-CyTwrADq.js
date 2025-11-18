import{u as l,j as s,M as r,T as t,P as c,C as i}from"./iframe-CmJM7uHB.js";import"./preload-helper-DLLWEBaG.js";function d(n){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{isTemplate:!0,title:"How to use Notification"}),`
`,s.jsx(t,{}),`
`,s.jsx(e.p,{children:"適用 : 基本跳出視窗及通知，分為四種類型(toast、modal、popover及msg)。"}),`
`,s.jsx(c,{}),`
`,s.jsx(e.h1,{id:"controls",children:"Controls"}),`
`,s.jsxs(e.p,{children:["由於 Notification 元件的使用方式較特殊，是以呼叫的方法來決定類型，提供操作的",s.jsx(e.code,{children:"type"}),"請視為實際使用場景要呼叫的方法；而 Method's parameter 則是呼叫時可以控制的設定，其餘內部屬性請參考 ",s.jsx(e.strong,{children:"properties 內部屬性"}),"區塊。"]}),`
`,s.jsx(i,{}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h1,{id:"usage-api",children:"Usage API"}),`
`,s.jsxs(e.p,{children:["Notification 元件和其他元件不同，不需要",s.jsx(e.code,{children:"new"}),"初始化，用法為直接呼叫對應類型的靜態方法，並帶入參數 ",s.jsx(e.code,{children:"trigger"}),"及",s.jsx(e.code,{children:"options"}),"即可。"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`  Notification.modal(trigger,options);\r
  //直接呼叫對應方法
`})}),`
`,s.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".toast(options)"})}),s.jsx("td",{children:"呼叫一個toast類型通知視窗"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".modal(options)"})}),s.jsx("td",{children:"呼叫一個modal類型通知視窗"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".popover(options)"})}),s.jsx("td",{children:"呼叫一個popover類型通知視窗"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".msg(options)"})}),s.jsx("td",{children:"呼叫一般msg類型通知視窗"})]})]})]})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx("span",{className:"sb-unstyled font-black",children:"通知視窗類型說明，分為四種表現: "}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"#ToastMsg",children:s.jsx(e.strong,{children:"toast"})}),s.jsx(e.br,{}),`
`,"讓使用者知道/提醒目前操作或是狀態，一般表現為在視窗某位置(通常為四個角落)跳出，並持續一段時間後消失。",`
`,s.jsxs("div",{className:"sb-unstyled note-msg my-3",children:[s.jsx("span",{children:"toast類型特色"}),s.jsx("p",{children:"toast應該要由一個主容器包覆所有toast-item，且item要依照順序堆疊出現(FIFO)"})]}),`
`,s.jsx("br",{}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"#ModalMsg",children:s.jsx(e.strong,{children:"modal"})}),s.jsx(e.br,{}),`
`,"適合需要中斷使用者操作的情況，用於提供關鍵資訊或要求做出決定。對話框在出現時會禁用其他功能，並一直保留在屏幕上，直到確認、關閉或採取所需的操作(背景遮罩為不可關閉的設定、且一定要做決定，所以沒有右上的關閉功能)。",`
`,s.jsxs("div",{className:"sb-unstyled note-msg my-3",children:[s.jsx("span",{children:"Page、Modal比較"}),s.jsx("p",{children:"Modal為必須中斷使用者操作的UI類型，而Page(inherit Flowbite Drawer)則是不強制中斷(可以設定是否出現遮罩)；但兩者都可以設定使用者關閉行為:是否點擊任一處關閉。"})]}),`
`,s.jsx("br",{}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"#PopoverMsg",children:s.jsx(e.strong,{children:"popover"})}),s.jsx(e.br,{}),`
`,"視覺呈現類似tooltip，不同的是可以控制觸發行為。"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.a,{href:"#DefaultMsg",children:s.jsx(e.strong,{children:"msg"})}),s.jsx(e.br,{}),`
`,"簡單提示訊息，會在指定時間(預設1秒)後自動消失。"]}),`
`]}),`
`,s.jsx("br",{}),`
`]}),`
`]}),`
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
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled font-black",children:"options"}),`\r
`,s.jsx("span",{className:"sb-unstyled data-type",children:"object"}),s.jsx(e.br,{}),`
`,"各屬性的型別及說明可參考上方",s.jsx(e.strong,{children:"Controls區塊"}),"，各類別的私有屬性則可以參考",s.jsx(e.strong,{children:"子類別"}),"區塊的各個說明，此處僅列出共同設定的屬性。"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`  const options = {\r
    type: "msg",                       //類型\r
    theme: "light",                    //主題色\r
    maxWidth: "auto",                  //最大尺寸\r
    area: ["auto", "auto"],            //尺寸\r
    icon:"notice",                     //icon圖標，用做主要分類\r
    msgContent: null,                  //主要文字內容\r
    customContent: null,               //自定義HTML內容\r
    msgTitle: null,                    //title文字\r
    classes: [],                       //自定義class\r
    placement:"center",                //位置\r
    confirm:["確認", function(){}],    //確認按鈕文字&callback\r
    cancel:["取消", function(){}],     //取消按鈕文字&callback\r
    handler:null,\r
  };
`})}),`
`,s.jsx("br",{}),`
`]}),`
`]}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h1,{id:"basemsg-類別",children:"BaseMsg 類別"}),`
`,s.jsx("div",{className:"sb-unstyled alert-msg",children:"只負責建構UI資料基礎，相關對應行為由子類別內部負責。"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"properties 屬性"})}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"}),s.jsx("td",{children:"inherits"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"BaseMsg"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(e.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]}),s.jsx("td",{children:s.jsx(e.code,{children:"BaseComponent"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"theme"}),s.jsx("td",{children:"light"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:"主題設定，分為light/daark兩色系"}),s.jsx("td",{children:s.jsx(e.code,{children:"BaseComponent"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"options"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"object"}),s.jsxs("td",{children:["相關設定內容，由Notification的",s.jsx(e.code,{children:"options"}),"參數傳入"]})]})]})]})}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h1,{id:"子類別",children:"子類別"}),`
`,s.jsx("div",{className:"sb-unstyled alert-msg",children:"不會直接操作，僅列出參考用"}),`
`,s.jsx("br",{}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:[s.jsx("span",{id:"ToastMsg",children:"ToastMsg 類別"}),s.jsx(e.br,{}),`
`,s.jsxs("span",{children:["作為容器並負責管理",s.jsx(e.code,{children:"ToastItem"})]})]}),`
`]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"properties 屬性"})}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"trigger"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"HTMLElement"}),s.jsx("td",{children:"觸發元素"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"toastContainer"}),s.jsx("td",{children:s.jsx(e.code,{children:"<div></div>"})}),s.jsx("td",{children:"HTMLElement"}),s.jsx("td",{children:"容器元素節點"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"options"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"object"}),s.jsxs("td",{children:["設定值，由參數",s.jsx(e.code,{children:"options"}),"傳入，並往下傳遞至",s.jsx(e.code,{children:"ToastItem"})]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"toastItems"}),s.jsx("td",{children:"[]"}),s.jsx("td",{children:"array"}),s.jsx("td",{children:s.jsx(e.p,{children:"儲存所有子訊息(ToastItem)"})})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"id"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:s.jsx(e.p,{children:"容器id，會用來儲存同一批子訊息"})})]})]})]})}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"options 參數可設定的私有屬性"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"style"})," toast樣式，可分為 bordered | accent | default"]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx("h3",{id:"ToastItem",children:"ToastItem 類別"}),`
`]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"properties 屬性"})}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"ToastItem"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(e.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"style"}),s.jsx("td",{children:"accent"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:"toast版型，可以選擇bordered|accent|default"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"dismiss"}),s.jsxs("td",{children:[s.jsx(e.code,{children:"Dissmiss"})," object"]}),s.jsx("td",{children:"object"}),s.jsx("td",{children:s.jsxs("span",{className:"sb-unstyled data-type inherits",children:["related to flowbite ",s.jsx("a",{href:"https://flowbite.com/docs/components/toast/",className:"linkout",children:"Dismiss"})]})})]})]})]})}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx("h3",{id:"ModalMsg",children:"ModalMsg 類別"}),`
`]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"properties 屬性"})}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"ModalMsg"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(e.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"modal"}),s.jsxs("td",{children:["flowbite ",s.jsx(e.code,{children:"Modal"}),"物件"]}),s.jsx("td",{children:"object"}),s.jsx("td",{children:s.jsxs("span",{className:"sb-unstyled data-type inherits",children:["related to flowbite ",s.jsx("a",{href:"https://flowbite.com/docs/components/modal/",className:"linkout",children:"Modal"})]})})]})]})]})}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"options 參數可設定的私有屬性"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"backdrop"})," 遮罩類型，可分為static|dynamic，是否可以點擊螢幕任一處關閉"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"backdropClasses"})," 遮罩classes"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"closable"})," 是否可以點擊鍵盤",s.jsx(e.code,{children:"esc"}),"鍵關閉modal"]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx("h3",{id:"PopoverMsg",children:"PopoverMsg 類別"}),`
`]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"properties 屬性"})}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"PopoverMsg"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(e.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"popover"}),s.jsxs("td",{children:["flowbite ",s.jsx(e.code,{children:"Popover"}),"物件"]}),s.jsx("td",{children:"object"}),s.jsx("td",{children:s.jsxs("span",{className:"sb-unstyled data-type inherits",children:["related to flowbite ",s.jsx("a",{href:"https://flowbite.com/docs/components/popover/",className:"linkout",children:"Popover"})]})})]})]})]})}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"options 參數可設定的私有屬性"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"triggerType"})," 觸發動作類型，可以選擇hover|click|none"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"offset"})," 距離triggerElem的距離"]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.hr,{}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx("h3",{id:"DefaultMsg",children:"DefaultMsg 類別"}),`
`]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"properties 屬性"})}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"DefaultMsg"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(e.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]})})]})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"options 參數可設定的私有屬性"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"countdown"})," 倒數消失毫秒數(ms)"]}),`
`]}),`
`]}),`
`]})]})}function x(n={}){const{wrapper:e}={...l(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(d,{...n})}):d(n)}export{x as default};
