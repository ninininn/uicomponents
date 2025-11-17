import{u as t,j as e,M as l,T as r,P as c,C as i}from"./iframe-yN89SlnH.js";import"./preload-helper-DLLWEBaG.js";function d(n){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{isTemplate:!0,title:"How to use Table"}),`
`,e.jsx(r,{}),`
`,e.jsxs(s.p,{children:["常見表格資料表，可以載入資料並更新Table畫面",e.jsx(s.br,{}),`
`,"(此頁面測試用API來源 : ",e.jsx(s.a,{href:"https://jsonplaceholder.typicode.com/todos",rel:"nofollow",children:"公開API (https://jsonplaceholder.typicode.com/todos)"}),")"]}),`
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
`,e.jsxs(s.li,{children:[e.jsx("span",{className:"sb-unstyled font-black",children:"config"}),`\r
`,e.jsx("span",{className:"sb-unstyled data-type",children:"object"}),e.jsx(s.br,{}),`
`,"各屬性的型別及說明可參考上方",e.jsx(s.strong,{children:"Controls區塊"}),"，各類別的私有屬性則可以參考",e.jsx(s.strong,{children:"子類別"}),"區塊的各個說明，此處僅列出共同設定的屬性。",`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`  const initConfig = {\r
    id: id,                 //tableId\r
    name: name,             //自定義table名稱\r
    limits: limits,         //單頁顯示筆數限制\r
    container: parent,      //要放入的DOM元素(容器)\r
    cols:cols,              //欄位設定\r
    tools: tools,           //是否顯示工具列\r
    selection: selection,   //是否開啟勾選列\r
    classes: classes,       //自定義class\r
    complete: complete,     //渲染完成後要執行的fn\r
    error: error,           //渲染失敗執行的fn\r
    handler: handler,       //渲染時執行的fn(非同步)\r
  };
`})}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx("span",{className:"sb-unstyled font-black",children:"column configuration"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const cols = [\r
  {field:'id', title:'ID', sort:true, fixed:true},\r
  {field:'name', title:'名稱', sort:false, fixed:false},\r
  {field:'count', title:'數量', sort:true, fixed:false},\r
];
`})}),`
`,e.jsx("br",{}),`
`,"每個 column ",e.jsx("span",{className:"sb-unstyled data-type",children:"object"})," 都可以設定以下屬性 :",`
`,e.jsx("div",{className:"sb-unstyled table-container",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"field"}),e.jsx("td",{className:"text-center",children:"-"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsx("td",{children:"欄位屬性/特徵"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"title"}),e.jsx("td",{className:"text-center",children:"-"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsx("td",{children:"欄位文字"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"sort"}),e.jsx("td",{className:"text-center",children:"true"}),e.jsx("td",{className:"text-center",children:"boolean"}),e.jsx("td",{children:"是否有排序功能"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"fixed"}),e.jsx("td",{className:"text-center",children:"false"}),e.jsx("td",{className:"text-center",children:"boolean"}),e.jsx("td",{children:"是否固定該欄"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"align"}),e.jsx("td",{className:"text-center",children:"left"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsx("td",{children:"欄位對齊位置，可選 left / center / right"})]})]})]})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"prototype-properties-原型屬性",children:"prototype properties 原型屬性"}),`
`]}),`
`,e.jsx("div",{className:"sb-unstyled table-container",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"UItype"}),e.jsx("td",{children:"Table"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"id"}),e.jsx("td",{children:e.jsx(s.code,{children:"-"})}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"Table ID"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"_tableRows"}),e.jsx("td",{children:"[]"}),e.jsx("td",{children:"array"}),e.jsxs("td",{children:["多個",e.jsx(s.code,{children:"TableRow"}),"元件"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"_tableHeader"}),e.jsx("td",{children:e.jsx(s.code,{children:"TableHeader"})}),e.jsx("td",{children:"Object"}),e.jsx("td",{children:e.jsxs(s.p,{children:[e.jsx(s.code,{children:"TableHeader"}),"元件"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"tableBody"}),e.jsx("td",{children:e.jsx(s.code,{children:"<tbody>"})}),e.jsx("td",{children:e.jsx(s.code,{children:"HTMLElement"})}),e.jsxs("td",{children:[e.jsx(s.code,{children:"<tbody>"}),"主體DOM"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"table"}),e.jsx("td",{children:e.jsx(s.code,{children:"<table>"})}),e.jsx("td",{children:"HTMLElement"}),e.jsxs("td",{children:[e.jsx(s.code,{children:"<table>"})," 元素"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"data"}),e.jsx("td",{children:"[]"}),e.jsx("td",{children:"array"}),e.jsx("td",{children:"呼叫API後取回的資料陣列"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"dataCounts"}),e.jsx("td",{children:"0"}),e.jsx("td",{children:"number"}),e.jsx("td",{children:"資料總筆數"})]})]})]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"methods-控制方法",children:"methods 控制方法"}),`
`]}),`
`,e.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setSelected(rowIndex)"})}),e.jsx("td",{children:"設定預設勾選列"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setData(dataArr)"})}),e.jsx("td",{children:"放入資料重新渲染"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setSize(width,height)"})}),e.jsx("td",{children:"設定表格尺寸"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".reload()"})}),e.jsx("td",{children:"重新呼叫API抓資料"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".updateRow(index,data)"})}),e.jsx("td",{children:"更新指定列資料"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getTableData()"})}),e.jsx("td",{children:"取得表格所有資料"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getSelected()"})}),e.jsx("td",{children:"取得表格內所有選取的Row"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".exportTable()"})}),e.jsx("td",{children:"匯出成csv文件/pdf?"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getElem()"})}),e.jsx("td",{children:"取得table DOM節點"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setTheme()"})}),e.jsx("td",{children:"設定主題色"})]})]})]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{id:"pagination-元件",children:"Pagination 元件"}),`
`,e.jsx("div",{className:"sb-unstyled alert-msg",children:"只負責建構UI資料基礎，相關對應行為由子類別內部負責。"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"properties 屬性"})}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"}),e.jsx("td",{children:"inherits"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"UItype"}),e.jsx("td",{children:"Pagination"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]}),e.jsx("td",{children:e.jsx(s.code,{children:"BaseComponent"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"theme"}),e.jsx("td",{children:"light"}),e.jsx("td",{children:"string"}),e.jsx("td",{children:"主題設定，分為light/daark兩色系"}),e.jsx("td",{children:e.jsx(s.code,{children:"BaseComponent"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"options"}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"object"}),e.jsxs("td",{children:["相關設定內容，由Notification的",e.jsx(s.code,{children:"options"}),"參數傳入"]})]})]})]})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{id:"子元件",children:"子元件"}),`
`,e.jsx("div",{className:"sb-unstyled alert-msg",children:"不會直接操作，僅列出參考用"}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx("h3",{id:"TableHeader",children:"TableHeader"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"properties 屬性"}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"UItype"}),e.jsx("td",{className:"text-center",children:"TableHeader"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"cols"}),e.jsx("td",{className:"text-center",children:"-"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsx("td",{children:"各欄位設定陣列(= cols 傳入參數)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"selection"}),e.jsx("td",{className:"text-center",children:"checkbox"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsx("td",{children:"勾選功能，可用 checkbox / radio，其餘視為靜態 table"})]})]})]})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx("h3",{id:"TableRow",children:"TableRow"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"properties 屬性"})}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"UItype"}),e.jsx("td",{className:"text-center",children:"TableRow"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"popover"}),e.jsxs("td",{className:"text-center",children:["flowbite ",e.jsx(s.code,{children:"Popover"}),"物件"]}),e.jsx("td",{className:"text-center",children:"object"}),e.jsx("td",{children:e.jsxs("span",{className:"sb-unstyled data-type inherits",children:["related to flowbite ",e.jsx("a",{href:"https://flowbite.com/docs/components/popover/",className:"linkout",children:"Popover"})]})})]})]})]})}),`
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
`,e.jsx("br",{}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx("h3",{id:"TableCell",children:"TableCell"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"properties 屬性"})}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"UItype"}),e.jsx("td",{className:"text-center",children:"TableCell"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(s.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"dataValue"}),e.jsx("td",{className:"text-center",children:"-"}),e.jsx("td",{className:"text-center",children:"string/number"}),e.jsx("td",{children:"資料格的資料內容"})]})]})]})}),`
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
`]})]})}function a(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(d,{...n})}):d(n)}export{a as default};
