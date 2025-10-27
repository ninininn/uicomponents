import{u as d,j as s,M as r,T as c,P as i,C as t}from"./iframe-CpbVZA0s.js";import"./preload-helper-DLLWEBaG.js";function l(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(r,{isTemplate:!0,title:"How to use Cards"}),`
`,s.jsx(c,{}),`
`,s.jsx(n.p,{children:"適用 : 資訊面板的資料呈現"}),`
`,s.jsx("div",{className:"sb-unstyled alert-msg",children:s.jsxs("span",{children:["卡片元件的呈現方式可能會有多種變化，這邊僅先以基礎",s.jsx(n.strong,{children:"資訊面板"}),"(BasicInfoCard)作為示意說明"]})}),`
`,s.jsx(i,{}),`
`,s.jsx(n.h1,{id:"controls",children:"Controls"}),`
`,s.jsx(n.p,{children:"卡片元件設定較為複雜，Controls區塊包含初始化時可設定的相關參數(title, cardSize)及資料設定之參數細節(infoList)。"}),`
`,s.jsx(t,{}),`
`,s.jsx(n.hr,{}),`
`,s.jsx(n.h1,{id:"usage-api",children:"Usage API"}),`
`,s.jsxs(n.p,{children:["初始化 BasicInfoCard 元件，帶入 ",s.jsx(n.code,{children:"title"}),"、",s.jsx(n.code,{children:"infoList"}),"及",s.jsx(n.code,{children:"cardSize"}),"參數。"]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:`new BasicInfoCard(title, infoList, cardSize = 1);
`})}),`
`,s.jsxs(n.blockquote,{children:[`
`,s.jsx(n.h3,{id:"parameters-參數設定",children:"parameters 參數設定"}),`
`]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsx("span",{className:"sb-unstyled font-black",children:"title"}),`
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"}),`
`,s.jsx(n.p,{children:"傳入卡片面版的標題文字"}),`
`,s.jsx("br",{}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsx("span",{className:"sb-unstyled font-black",children:"infoList"}),`
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"}),`
`,s.jsxs(n.p,{children:["各屬性的型別及說明可參考上方Controls區塊；每個",s.jsx(n.code,{children:"{}"}),"都是一個 row 區塊，排列組成完整資訊面板。"]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:`const infoList = [{\r
  blockId: "default", //區塊指定id\r
  blockclass: ["flex","gap-4"], //tailwindcss 樣式\r
  label: "", //資料標題文字\r
  value: "", //資料內容\r
  customInner: \`<div class="container"></div>\`, //直接放入innerHTML或是帶入其他HTMLElement的容器\r
  btn: [ //按鈕清單，每個{}視為一個btn資料\r
    {\r
      text:"", //按鈕文字\r
      class:[], //按鈕樣式(預設已經帶入.btn)\r
      handler:null //click事件函式\r
    }\r
  ],\r
  btngroupClass: "flex-col gap-[4px]",//按鈕群組樣式(string)\r
}];
`})}),`
`,s.jsx("br",{}),`
`,s.jsxs("div",{className:"sb-unstyled note-msg",children:[s.jsx("span",{children:"label 及 value 屬性傳入型別說明"}),s.jsxs("p",{children:["原則上一個",s.jsx(n.code,{children:"{}"}),"內的屬性會視為同一欄(row)，如果要在同一個row顯示多組資料，可以在",s.jsx(n.code,{children:"label"}),"及",s.jsx(n.code,{children:"value"}),"屬性帶入array型別的資料。(但上方control處先以單一資料呈現操作)"]}),s.jsxs("p",{children:["需要注意的是，如果",s.jsx(n.code,{children:"label"}),"傳入一陣列，那",s.jsx(n.code,{children:"value"}),"也需要傳入陣列，如果對應資料尚未知，可以先放入",s.jsx(n.code,{children:'" "'}),"作為替代；然而如果沒有帶入",s.jsx(n.code,{children:"value"}),"，但是有",s.jsx(n.code,{children:"customInner"}),"，則預設會直接把 label & customInner 視為同一組。"]}),s.jsx("br",{}),s.jsx("div",{className:"examples",children:s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsx("span",{className:"sb-unstyled examples-title",children:'label:"A", value:"B"'}),`
`]}),`
`]})}),s.jsx("div",{className:"examples",children:s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsx("span",{className:"sb-unstyled examples-title",children:'label:["A", "B"], value:["a", "b"]'}),`
`]}),`
`]})}),s.jsx("div",{className:"examples",children:s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsx("span",{className:"sb-unstyled examples-title",children:'label:["A", "B"], value:["a", " "]'}),`
`]}),`
`]})}),s.jsx("div",{className:"examples",children:s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsxs("span",{className:"sb-unstyled examples-title",children:['label:"A", customInner:',s.jsx(n.code,{children:"<div></div>"})]}),`
`]}),`
`]})})]}),`
`,s.jsx("br",{}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx("span",{className:"sb-unstyled font-black",children:"cardSize"}),`\r
`,s.jsx("span",{className:"sb-unstyled data-type num",children:"number"}),s.jsx(n.br,{}),`
`,"卡片尺寸大小，預設為1(最小)，也可以設定為2或3(全滿)的尺寸。"]}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsxs(n.blockquote,{children:[`
`,s.jsx(n.h3,{id:"properties-內部屬性",children:"properties 內部屬性"}),`
`,s.jsx("span",{className:"sb-unstyled data-type readonly",children:"Read-only"}),`
`,s.jsx("span",{className:"sb-unstyled",children:"可以操作的屬性皆須使用methods來更改"}),`
`]}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"}),s.jsx("td",{children:"inherit"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"Card"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(n.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]}),s.jsxs("td",{children:[s.jsx(n.code,{children:"Card"})," 類別"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"cardContainer"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"HTMLElement"}),s.jsxs("td",{children:["當前顯示的圖示，",s.jsx(n.code,{children:"style"}),"為toggle時才會出現"]}),s.jsxs("td",{children:[s.jsx(n.code,{children:"Card"})," 類別"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"title"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:"卡片標題(Header)"}),s.jsxs("td",{children:[s.jsx(n.code,{children:"Card"})," 類別"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"blocks"}),s.jsx("td",{children:"[]"}),s.jsx("td",{children:"array"}),s.jsx("td",{children:"記錄此卡片內所有內容區塊"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"infoList"}),s.jsx("td",{children:"[]"}),s.jsx("td",{children:"array"}),s.jsx("td",{children:"各區塊資料設定"})]})]})]})}),`
`,s.jsx("br",{}),`
`,s.jsxs(n.blockquote,{children:[`
`,s.jsx(n.h3,{id:"methods-方法",children:"methods 方法"}),`
`,s.jsx(n.p,{children:"提供外部控制方法調整內部屬性值"}),`
`]}),`
`,s.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(n.code,{children:".addBlocks(addInfo, options = {})"})}),s.jsx("td",{children:"新增項目or欄位"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(n.code,{children:".clearBlocks()"})}),s.jsx("td",{children:"清空dataContent"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(n.code,{children:".deleteBlock(label)"})}),s.jsx("td",{children:"刪除單一欄位UI&對應資料"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(n.code,{children:".toggleBlock(groupId)"})}),s.jsx("td",{children:"切換區塊visible"})]})]})]})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:".addBlocks(addInfo, options)"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Parameters"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx("span",{className:"sb-unstyled font-black",children:"addInfo"}),`\r
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"}),s.jsx(n.br,{}),`
`,"要加入的資訊區塊設定，等同於 ",s.jsx(n.code,{children:"infoList"})," 參數設定"]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx("span",{className:"sb-unstyled font-black",children:"options"}),`\r
`,s.jsx("span",{className:"sb-unstyled data-type",children:"object"}),s.jsx(n.br,{}),`
`,"onceSetting，是否只新增一次，其他時候則用替換方式取代原內容。"]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:s.jsx(n.code,{children:"once"})})," 是否只新增一次"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:s.jsx(n.code,{children:"id"})})," 當once設定為true時，必須給定id作為groupId"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:`  BasicInfoCard.addBlocks(buildno, { once: true, id:"buildno_1" });
`})}),`
`,s.jsx("br",{}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:".clearBlocks()"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:s.jsx(n.strong,{children:"清空dataContent(僅清空blocks節點，資料仍留存)"})}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:` BasicInfoCard.clearBlocks(); 
`})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:".deleteBlock(label)"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"Parameters"}),s.jsx(n.br,{}),`
`,`傳入欄位文字來刪除單一欄位UI&對應資料\r
`,s.jsx("span",{className:"sb-unstyled alert-msg",children:"須注意是針對單一欄位來做刪除(要有label)!"})]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:` BasicInfoCard.deleteBlock("資料欄位A"); 
`})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:".toggleBlock()"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"parameters"}),s.jsx(n.br,{}),`
`,"可以切換同一個card內的group(有點類似tab)；使用",s.jsx(n.code,{children:"addBlock({once})"}),"後會綁定內部屬性",s.jsx(n.code,{children:"_groupId"}),"，可以用來切換"]}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:`BasicInfoCard.toggleBlock("buildno_1");
`})}),`
`,s.jsx(n.hr,{}),`
`,s.jsx(n.h1,{id:"inherits",children:"Inherits"}),`
`,s.jsxs("div",{className:"sb-unstyled alert-msg",children:["做為",s.jsx(n.code,{children:"Card"}),"類別的子類別之一，繼承其相關屬性；但資料部分則涉及 ",s.jsx(n.code,{children:"Info"})," 類別，詳細請見個別說明。"]}),`
`,s.jsxs(n.blockquote,{children:[`
`,s.jsx(n.h3,{id:"card-類別",children:"Card 類別"}),`
`]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsx(n.h4,{id:"parameters-參數設定-1",children:"parameters 參數設定"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsxs(n.p,{children:[s.jsx("span",{className:"sb-unstyled font-black",children:"title"}),`\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"}),s.jsx(n.br,{}),`
`,"卡片標題名稱(Header部分)"]}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsx("span",{className:"sb-unstyled font-black",children:"cardSize"}),`
`,s.jsx("span",{className:"sb-unstyled data-type num",children:"number"}),`
`,s.jsx(n.p,{children:"卡片尺寸設定，由小到大分別為1、2、3"}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsx(n.h4,{id:"properties-內部屬性-1",children:"properties 內部屬性"}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"UItype"}),s.jsx("td",{children:"Card"}),s.jsx("td",{children:"string"}),s.jsxs("td",{children:["繼承自",s.jsx(n.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"cardContainer"}),s.jsxs("td",{children:[s.jsx(n.code,{children:"<ul/>"}),"標籤元素"]}),s.jsx("td",{children:"HTMLElement"}),s.jsx("td",{children:"卡片元素節點"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"title"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"string"}),s.jsx("td",{children:"卡片標題(Header)"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"minimize"}),s.jsx("td",{children:"false"}),s.jsx("td",{children:"boolean"}),s.jsx("td",{children:"是否為縮小狀態"})]})]})]})}),`
`]}),`
`]}),`
`,s.jsx("br",{}),`
`,s.jsxs(n.blockquote,{children:[`
`,s.jsx(n.h3,{id:"info-類別",children:"Info 類別"}),`
`,s.jsx("span",{className:"sb-unstyled alert-msg",children:"負責整併card資料欄位(不會直接操作到!)"}),`
`]}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-javascript",children:`  BasicInfoCard._infoStruct = new Info(infoArray);\r
  //此處的_infoStruct屬性禁止外部取用!
`})}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[`
`,s.jsx(n.h4,{id:"parameters-參數設定-2",children:"parameters 參數設定"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx("span",{className:"sb-unstyled font-black",children:"infoArray"}),`\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"array"}),s.jsx(n.br,{}),`
`,s.jsx(n.code,{children:"BasicInfoCard"}),"傳入的資料設定陣列(infolist)"]}),`
`]}),`
`,s.jsx("br",{}),`
`]}),`
`,s.jsxs(n.li,{children:[`
`,s.jsx(n.h4,{id:"properties-內部屬性-2",children:"properties 內部屬性"}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"property"}),s.jsx("td",{children:"default"}),s.jsx("td",{children:"type"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"originInfos"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"object"}),s.jsx("td",{children:"包裝原始傳入的infoList設定"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"rowNum"}),s.jsx("td",{children:"0"}),s.jsx("td",{children:"number"}),s.jsx("td",{children:"紀錄資料區塊數量"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"font-bold",children:"rows"}),s.jsx("td",{children:"[]"}),s.jsx("td",{children:"array"}),s.jsx("td",{children:"儲存整理後的各區塊資料物件"})]})]})]})}),`
`]}),`
`]})]})}function h(e={}){const{wrapper:n}={...d(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(l,{...e})}):l(e)}export{h as default};
