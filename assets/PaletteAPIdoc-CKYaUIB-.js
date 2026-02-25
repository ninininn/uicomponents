import{u as r,j as e,M as l,T as d,P as c,C as i}from"./iframe--i4Q7PXz.js";import"./preload-helper-DLLWEBaG.js";function t(n){const s={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{isTemplate:!0,title:"How to use Palette"}),`
`,e.jsx(d,{}),`
`,e.jsxs(s.p,{children:["調色盤功能(此處先以",e.jsx(s.code,{children:"Palette()"}),"函式使用說明)，後續可能制作成元件?"]}),`
`,e.jsx(c,{}),`
`,e.jsx(s.h1,{id:"controls",children:"Controls"}),`
`,e.jsx(s.p,{children:"生成單色或一組指定樣式(random/contrast/same)的色碼。"}),`
`,e.jsx(i,{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{id:"usage-api",children:"Usage API"}),`
`,e.jsxs(s.p,{children:["直接使用",e.jsx(s.code,{children:"Palette()"}),"函式，並帶入",e.jsx(s.code,{children:"config"}),"設定參數。"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`let palette = Palette(config);
`})}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.h3,{id:"parameters-參數設定",children:"parameters 參數設定"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx("span",{className:"sb-unstyled font-black",children:"config"}),`\r
`,e.jsx("span",{className:"sb-unstyled data-type",children:"object"}),e.jsx(s.br,{}),`
`,"各屬性的型別及說明可參考上方",e.jsx(s.strong,{children:"Controls區塊"}),"。",`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`  const initConfig = {\r
    colorCounts: 1,                              //需要的色碼數量\r
    colorMode: "hsl",                            //色彩模式(hsl/rgb/hex)\r
    alpha: 1,                                   //透明度\r
    style: "random",                            //樣式\r
    tone:null,                                  //指定色系\r
    saturationFixed: false,                     //是否固定飽和度\r
    lightnessFixed: false,                      //是否固定明度\r
    offset: 10,                                 //偏移量(暫時先不要用)\r
  };
`})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx("div",{className:"sb-unstyled table-container",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"}),e.jsx("td",{children:"options"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"colorCounts"}),e.jsx("td",{className:"text-center",children:"1"}),e.jsx("td",{className:"text-center",children:"number"}),e.jsx("td",{children:"需要的色碼數量"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"colorMode"}),e.jsx("td",{className:"text-center",children:"hsl"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsx("td",{children:"色彩模式"}),e.jsx("td",{children:"hsl | rgb | hex"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"alpha"}),e.jsx("td",{className:"text-center",children:"1"}),e.jsx("td",{className:"text-center",children:"number"}),e.jsx("td",{children:"透明度(0~1)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"style"}),e.jsx("td",{className:"text-center",children:"random"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsx("td",{children:"色彩樣式"}),e.jsx("td",{children:"random(隨機) | same(同色系) | contrast(對比色系)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"tone"}),e.jsx("td",{className:"text-center",children:"-"}),e.jsx("td",{className:"text-center",children:"string"}),e.jsx("td",{children:"指定色系"}),e.jsx("td",{children:"red | yellow | green | cyan | blue | purple"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"saturationFixed"}),e.jsx("td",{className:"text-center",children:"false"}),e.jsx("td",{className:"text-center",children:"boolean | number"}),e.jsx("td",{children:"是否統一飽和度"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold text-center",children:"lightnessFixed"}),e.jsx("td",{className:"text-center",children:"false"}),e.jsx("td",{className:"text-center",children:"boolean | number"}),e.jsx("td",{children:"是否統一明度"})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{id:"colorformat方法",children:"ColorFormat方法"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"顏色格式切換相關方法"}),`
`]}),`
`,e.jsx(s.p,{children:"各模式標準表示方式如下:"}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"模式"}),e.jsx("td",{children:"表示範例"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"RGB"}),e.jsx("td",{children:"rgb(rr,gg,bb,aa)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"HSL"}),e.jsx("td",{children:"hsl(h s l / a)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"HEX"}),e.jsx("td",{children:"#RRGGBBFF"})]})]})]})}),`
`,e.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".hexTorgb(hexString)"})}),e.jsx("td",{children:"HEX->RGB"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".rgbTohsl(rgbString)"})}),e.jsx("td",{children:"RGB->HSL"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".hslTorgb(hslString)"})}),e.jsx("td",{children:"HSL->RGB"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".rgbTohex(rgbString)"})}),e.jsx("td",{children:"RGB->HEX"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".hslTohex(hslString)"})}),e.jsx("td",{children:"HSL->HEX"})]})]})]})})]})}function a(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{a as default};
