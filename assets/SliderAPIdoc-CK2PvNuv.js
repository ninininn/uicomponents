import{u as r,j as e,M as d,T as c,P as i,C as t}from"./iframe-BsY5FQ7T.js";import"./preload-helper-DLLWEBaG.js";function l(n){const s={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{isTemplate:!0,title:"How to use Slider"}),`
`,e.jsx(c,{}),`
`,e.jsx(s.p,{children:"適用 : 圖層清單、透明度、數值選擇；可以搭配其他元件如 Checkbox 來使用"}),`
`,e.jsx(i,{}),`
`,e.jsx(s.h1,{id:"controls",children:"Controls"}),`
`,e.jsx(t,{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{id:"usage-api",children:"Usage API"}),`
`,e.jsxs(s.p,{children:["初始化 Slider 元件，帶入參數 ",e.jsx(s.code,{children:"parentDOM"})," 及 ",e.jsx(s.code,{children:"options"}),` 物件，並設定內部屬性。\r
(兩參數皆為可選值，若沒有帶入則會套用內部預設值)`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`new Slider(parentDOM, (options = {}));
`})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"parameters-參數設定",children:"parameters 參數設定"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx("span",{className:"sb-unstyled font-black",children:"parentDOM"}),`
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<!--  要放入的container -->\r
<div id="slider_1"></div>
`})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const sliderParent = document.getElementById("slider_1");\r
const sliderInstance = new Slider(sliderParent, {initValue: 79});
`})}),`
`,e.jsx("br",{}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx("span",{className:"sb-unstyled font-black",children:" options"}),`\r
`,e.jsx("span",{className:"sb-unstyled data-type",children:"object"}),e.jsx(s.br,{}),`
`,"各屬性傳入型別可參考上方 Control 說明，以下 option 設定值為內部預設值。"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`const sliderOptions = {\r
  min:1,\r
  max:100,\r
  initValue:0,\r
  step:1,\r
  range:false,\r
  theme:'var(--color-primary-500)',\r
  thumbImg:null,\r
  classes:['slider'],\r
  handler:null,\r
  disabled:false\r
}
`})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"properties-內部屬性",children:"properties 內部屬性"}),`
`,e.jsx("span",{class:"sb-unstyled data-type readonly",children:"Read-only"}),`
`,e.jsx("span",{className:"sb-unstyled",children:"可以操作的屬性皆須使用methods來更改"}),`
`]}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"options"}),e.jsx("td",{children:"該 Slider 元件的 options 參數設定"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"childrens"}),e.jsxs("td",{children:["指向該 Slider 元件的兩個子元件 [ ",e.jsx(s.code,{children:"Sliderbar"}),", ",e.jsx(s.code,{children:"SliderThumb"}),"] (禁止從外部更改子元件設定)"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"thumb"}),e.jsxs("td",{children:["指向 ",e.jsx(s.code,{children:"SliderThumb"})," 子元件"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"bar"}),e.jsxs("td",{children:["指向 ",e.jsx(s.code,{children:"SliderBar"})," 子元件"]})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"methods-方法",children:"methods 方法"}),`
`,e.jsx(s.p,{children:"提供外部控制方法調整內部屬性值"}),`
`]}),`
`,e.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:"descriptions"}),e.jsx("td",{children:"inherit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getElem()"})}),e.jsx("td",{children:"回傳該元件渲染的 DOM 節點元素"}),e.jsx("td",{children:e.jsx(s.code,{children:"BaseComponent"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getValue()"})}),e.jsx("td",{children:"回傳該元件的 slider 數值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setValue(val)"})}),e.jsxs("td",{children:["傳入要設定的 slider 數值，如果是 range-type 則傳入 ",e.jsx(s.code,{children:"[ startVal, endVal ]"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".changeTheme(HEXstring)"})}),e.jsx("td",{children:"更改主題色"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setDisabled(boolean)"})}),e.jsx("td",{children:"更改顯示/操作與否"})]})]})]})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".getElem()"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Returns"}),e.jsx(s.br,{}),`
`,"回傳主元件的DOM節點(HTMLElement) - ",e.jsx(s.code,{children:"<input/>"})]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`  let sliderElem = Slider.getElem(); // return an DOM HTMLElement
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".getValue()"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Returns"}),e.jsx(s.br,{}),`
`,"回傳該元件的 slider 數值，如果是range則會回傳一個陣列"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`  let value = Slider.getValue(); // 30
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".setValue(val)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Parameters"}),e.jsx(s.br,{}),`
`,"傳入數值更改value值，如果是range則傳入一陣列"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`  Slider.setValue(45);\r
console.log(Slider.getValue()); // 45
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".changeTheme(HEX)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Parameters"}),e.jsx(s.br,{}),`
`,"參數可以放入任一HEX色碼，用來改變主題色"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`  Slider.changeTheme("#878787");
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".setDisabled(boolean)"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Parameters"}),e.jsx(s.br,{}),`
`,"傳入boolean值更改disabled狀態"]}),`
`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`  Slider.setDisabled(true); //Slider will become disabled
`})})]})}function j(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{j as default};
