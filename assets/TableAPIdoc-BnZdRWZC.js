import{u as l,j as e,M as r,T as t,P as c,C as i}from"./iframe-aqnIh44O.js";import"./preload-helper-DLLWEBaG.js";function d(n){const s={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{isTemplate:!0,title:"How to use Table"}),`
`,e.jsx(t,{}),`
`,e.jsx(s.p,{children:"常見表格資料表，可以載入資料並更新Table畫面"}),`
`,e.jsx(c,{}),`
`,e.jsx(s.h1,{id:"controls",children:"Controls"}),`
`,e.jsxs(s.p,{children:["Table 元件由多個子元件所組成，但其餘子元件之設定在使用時都不會直接操作到，所以僅示意",e.jsx(s.code,{children:"config"}),"參數。"]}),`
`,e.jsx(i,{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{id:"usage-api",children:"Usage API"}),`
`,e.jsxs(s.p,{children:["使用",e.jsx(s.code,{children:"new"}),"關鍵字初始化一個",e.jsx(s.code,{children:"Table"}),"元件，並帶入",e.jsx(s.code,{children:"config"}),"設定參數。"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`  let table = new Table(config);
`})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"parameters-參數設定",children:"parameters 參數設定"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx("span",{className:"sb-unstyled font-black",children:"options"}),`\r
`,e.jsx("span",{className:"sb-unstyled data-type",children:"object"}),e.jsx(s.br,{}),`
`,"各屬性的型別及說明可參考上方",e.jsx(s.strong,{children:"Controls區塊"}),"，各類別的私有屬性則可以參考",e.jsx(s.strong,{children:"子類別"}),"區塊的各個說明，此處僅列出共同設定的屬性。",`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const initOptions = {\r
  id: id,                 //title文字\r
  name: name,             //自定義class\r
  limits: limits,\r
  elem: parent,           //elem\r
  cols: cols,\r
  tools: tools,\r
  selection: selection,   //是否開啟勾選列\r
  classes: classes,       //自定義class\r
  complete: complete,     //確認按鈕文字&動作\r
  error: error,           //取消按鈕文字&動作\r
  handler: handler,       //單純綁定在觸發元素上，如果是選擇完才要進行的動作，可以放在btn.handler內\r
};
`})}),`
`,e.jsx("br",{}),`
`]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"prototype-properties-原型屬性",children:"prototype properties 原型屬性"}),`
`]}),`
`,e.jsx("div",{className:"sb-unstyled table-container",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"UItype"}),e.jsx("td",{children:"Table"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"id"}),e.jsx("td",{children:e.jsx(s.code,{children:"-"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Table ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"_tableRows"}),e.jsx("td",{children:"[]"}),e.jsx("td",{children:"array"}),e.jsxs("td",{children:["多個",e.jsx(s.code,{children:"TableRow"}),"元件"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"_tableHeader"}),e.jsx("td",{children:e.jsx(s.code,{children:"TableHeader"})}),e.jsx("td",{children:"Object"}),e.jsx("td",{children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"TableHeader"}),"元件"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"tableBody"}),e.jsx("td",{children:e.jsx(s.code,{children:"<tbody>"})}),e.jsx("td",{children:e.jsx(s.code,{children:"HTMLElement"})}),e.jsxs("td",{children:[e.jsx(s.code,{children:"<tbody>"}),"主體DOM"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"table"}),e.jsx("td",{children:e.jsx(s.code,{children:"<table>"})}),e.jsx("td",{children:"HTMLElement"}),e.jsxs("td",{children:[e.jsx(s.code,{children:"<table>"})," 元素"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"data"}),e.jsx("td",{children:e.jsx(s.code,{children:"-"})}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"呼叫API後取回的資料陣列"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"dataCounts"}),e.jsx("td",{children:"0"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"資料總筆數"})]})]})]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"methods-控制方法",children:"methods 控制方法"}),`
`]}),`
`,e.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".toast(options)"})}),e.jsx("td",{children:"呼叫一個toast類型通知視窗"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".modal(options)"})}),e.jsx("td",{children:"呼叫一個modal類型通知視窗"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".popover(options)"})}),e.jsx("td",{children:"呼叫一個popover類型通知視窗"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".msg(options)"})}),e.jsx("td",{children:"呼叫一般msg類型通知視窗"})]})]})]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{id:"pagination-元件",children:"Pagination 元件"}),`
`,e.jsx("div",{className:"sb-unstyled alert-msg",children:"只負責建構UI資料基礎，相關對應行為由子類別內部負責。"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"properties 屬性"})}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"}),e.jsx("td",{children:"inherits"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"UItype"}),e.jsx("td",{children:"BaseMsg"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]}),e.jsx("td",{children:e.jsx(s.code,{children:"BaseComponent"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"theme"}),e.jsx("td",{children:"light"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"主題設定，分為light/daark兩色系"}),e.jsx("td",{children:e.jsx(s.code,{children:"BaseComponent"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"options"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"object"}),e.jsxs("td",{children:["相關設定內容，由Notification的",e.jsx(s.code,{children:"options"}),"參數傳入"]})]})]})]})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{id:"子元件",children:"子元件"}),`
`,e.jsx("div",{className:"sb-unstyled alert-msg",children:"不會直接操作，僅列出參考用"}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx("h3",{id:"TableHeader",children:"TableHeader"}),`
`,e.jsx("h3",{id:"TableCell",children:"TableCell"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"properties 屬性"})}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"UItype"}),e.jsx("td",{children:"TableCell"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"modal"}),e.jsxs("td",{children:["flowbite ",e.jsx(s.code,{children:"Modal"}),"物件"]}),e.jsx("td",{children:"object"}),e.jsx("td",{children:e.jsxs("span",{className:"sb-unstyled data-type inherits",children:["related to flowbite ",e.jsx("a",{href:"https://flowbite.com/docs/components/modal/",className:"linkout",children:"Modal"})]})})]})]})]})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"options 參數可設定的私有屬性"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"backdrop"})," 遮罩類型，可分為static|dynamic，是否可以點擊螢幕任一處關閉"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"backdropClasses"})," 遮罩classes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"closable"})," 是否可以點擊鍵盤",e.jsx(s.code,{children:"esc"}),"鍵關閉modal"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx("h3",{id:"TableRow",children:"TableRow"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"properties 屬性"})}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"UItype"}),e.jsx("td",{children:"TableRow"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"popover"}),e.jsxs("td",{children:["flowbite ",e.jsx(s.code,{children:"Popover"}),"物件"]}),e.jsx("td",{children:"object"}),e.jsx("td",{children:e.jsxs("span",{className:"sb-unstyled data-type inherits",children:["related to flowbite ",e.jsx("a",{href:"https://flowbite.com/docs/components/popover/",className:"linkout",children:"Popover"})]})})]})]})]})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"options 參數可設定的私有屬性"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"triggerType"})," 觸發動作類型，可以選擇hover|click|none"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"offset"})," 距離triggerElem的距離"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx("h3",{id:"TableColumn",children:"TableColumn"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"properties 屬性"})}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"UItype"}),e.jsx("td",{children:"TableColumn"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]})})]})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"options 參數可設定的私有屬性"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"countdown"})," 倒數消失毫秒數(ms)"]}),`
`]}),`
`]}),`
`]})]})}function x(n={}){const{wrapper:s}={...l(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{x as default};
