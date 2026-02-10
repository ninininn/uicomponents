import{u as r,j as e,M as t}from"./iframe-BURo3Kbc.js";import"./preload-helper-DLLWEBaG.js";function l(n){const s={blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:[e.jsx(t,{title:"Configure your project"}),`# 工具函式
提供多種共用functions，方便在各種情境使用。`]}),`
`,e.jsx(s.h3,{id:"dom-類別",children:"Dom 類別"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"共同控制DOM UI樣式的工具函式"}),`
`]}),`
`,e.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".addClass(element, classes)"})}),e.jsx("td",{children:"在指定DOM節點上加入指定classes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".removeClass(element, classes)"})}),e.jsx("td",{children:"在指定DOM節點上移除指定classes"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".clearClass(element, excludeClasses)"})}),e.jsx("td",{children:"移除指定節點上的所有classes(除了指定excludeClasses)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setText(element, text)"})}),e.jsx("td",{children:"設定指定DOM節點的textContent"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setAttribute(element, attributeName, attributeValue)"})}),e.jsxs("td",{children:["設定指定DOM節點的自訂",e.jsx(s.code,{children:"data-"}),"屬性"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setProperty(element, propertyName, propertyValue)"})}),e.jsx("td",{children:"設定指定DOM節點的自訂css-property屬性"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".setButtons(btnConfig)"})}),e.jsx("td",{children:"建立自訂btn樣式"})]})]})]})}),`
`,e.jsxs(s.p,{children:[e.jsx("span",{className:"sb-unstyled methods",children:".addClass(element, classes)"}),`-
`,e.jsx(s.strong,{children:"Parameters"})," - ",e.jsxs(s.strong,{children:["element",e.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),"- ",e.jsxs(s.strong,{children:[`classes
`,e.jsx("span",{className:"text-red-600",children:"*"})]}),` 要加入的 classes
`,e.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`,e.jsx(s.p,{children:"在指定DOM節點上加入指定classes"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`Dom.addClass(this._elem, ["container", "absolute"]);
`})}),`
`,e.jsxs(s.p,{children:[e.jsx("span",{className:"sb-unstyled methods",children:".removeClass(element, classes)"}),`-
`,e.jsx(s.strong,{children:"Parameters"})," - ",e.jsxs(s.strong,{children:["element",e.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),"- ",e.jsxs(s.strong,{children:[`classes
`,e.jsx("span",{className:"text-red-600",children:"*"})]}),` 要移除的 classes
`,e.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`,e.jsx(s.p,{children:"在指定DOM節點上移除指定classes"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`Dom.removeClass(this._elem, ["container", "absolute"]);
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:e.jsx(s.p,{children:".clearClass(element, excludeClasses)"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Parameters"})," - ",e.jsxs(s.strong,{children:["element",e.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),`-
`,e.jsx(s.strong,{children:"excludeClasses"}),` 除外classes
`,e.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`,e.jsx(s.p,{children:"移除指定節點上的所有classes(除了指定excludeClasses)"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`Dom.clearClass(this._elem, ["name_id"]);
`})}),`
`,e.jsxs(s.p,{children:[e.jsx("span",{className:"sb-unstyled methods",children:".setText(element, text)"}),`-
`,e.jsx(s.strong,{children:"Parameters"})," - ",e.jsxs(s.strong,{children:["element",e.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),"- ",e.jsxs(s.strong,{children:[`text
`,e.jsx("span",{className:"text-red-600",children:"*"})]}),` 文字內容
`,e.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`,e.jsx(s.p,{children:"設定指定DOM節點的textContent內容"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`Dom.setText(this._elem, "測試文字");
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:e.jsx(s.p,{children:".setAttribute(element, attributeName, attributeValue)"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Parameters"})," - ",e.jsxs(s.strong,{children:["element",e.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),`-
`,e.jsxs(s.strong,{children:["attributeName",e.jsx("span",{className:"text-red-600",children:"*"})]}),` 屬性名稱
`,e.jsx("span",{className:"sb-unstyled data-type str",children:"string"}),"- ",e.jsxs(s.strong,{children:[`attributeValue
`,e.jsx("span",{className:"text-red-600",children:"*"})]}),` 要設定的值
`,e.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`,e.jsxs(s.p,{children:["設定指定DOM節點的自訂",e.jsx(s.code,{children:"data-"}),"屬性"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`Dom.setAttribute(this._elem, "initialize", "true");
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:e.jsx(s.p,{children:".setProperty(element, propertyName, propertyValue)"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Parameters"})," - ",e.jsxs(s.strong,{children:["element",e.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),`-
`,e.jsxs(s.strong,{children:["propertyName",e.jsx("span",{className:"text-red-600",children:"*"})]}),` CSS propertyName
`,e.jsx("span",{className:"sb-unstyled data-type str",children:"string"}),"- ",e.jsxs(s.strong,{children:[`propertyValue
`,e.jsx("span",{className:"text-red-600",children:"*"})]}),` 要設定的值
`,e.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"設定指定DOM節點的自訂css-property屬性"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`Dom.setProperty(this._elem, "--theme", "#878787");
`})}),`
`,e.jsx(s.h3,{id:"其他類別",children:"其他類別"}),`
`,e.jsxs(s.p,{children:[e.jsx("span",{className:"sb-unstyled methods",children:"function compareNum(arrayNum)"}),`-
`,e.jsx(s.strong,{children:"Parameters"})," - ",e.jsxs(s.strong,{children:["arrayNum",e.jsx("span",{className:"text-red-600",children:"*"})]}),` 數組
`,e.jsx("span",{className:"sb-unstyled data-type arr",children:"array"}),"- ",e.jsx(s.strong,{children:"Returns"}),`
回傳已排序的數組參數`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`let sortNumArr = compareNum([15, 13]); //[13, 15]
`})}),`
`,e.jsxs(s.p,{children:[e.jsx("span",{className:"sb-unstyled methods",children:"function checkDevice()"}),"- ",e.jsx(s.strong,{children:"Returns"}),`
判斷裝置尺寸`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`// other opereations...
checkDevice();
`})}),`
`,e.jsx(s.h3,{id:"色彩相關",children:"色彩相關"}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:"function Palette(config)"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["隨機產生一組/單一色碼，色碼模式可以是 hsl | rgb | hex ",e.jsx(s.code,{children:"Color.js"})]}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"Parameters"})}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsxs(s.strong,{children:["config",e.jsx("span",{className:"text-red-600",children:"*"})]})," 色彩設定 ",e.jsx("span",{className:"sb-unstyled data-type obj",children:"object"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-javascript",children:`  const paletteConfig = {
    colorCounts: 1, //顏色數量
    alpha: 1, //透明度
    colorMode: 'hsl', //色碼模式
    style: 'random', //隨機(random)、相近色(same)、對比色(contrast)
    tone: 'red', //指定色系(red,yellow,green,cyan,blue,purple)
    offset: 20 //偏移
  }
`})}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Returns"}),e.jsx(s.br,{}),`
`,"回傳一組(或一個)指定模式色碼(預設為HSL)"]}),`
`]}),`
`]}),`
`,e.jsxs(s.p,{children:[e.jsx("span",{className:"sb-unstyled methods",children:"ColorFormat"}),`> 顏色相關轉換函式
`,e.jsx(s.code,{children:"Color.js"})]}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".hexTorgb(hexString, opacity)"})}),e.jsx("td",{children:"HEX色碼(#FFFFFAAA)轉為RGB(rgb(R,G,B))"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".rgbTohsl(rgbStr, opacity)"})}),e.jsx("td",{children:"RGB轉換為HSL(hsl(h deg, s, l))"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".hslTorgb({(h, s, l, a)})"})}),e.jsx("td",{children:"HSL轉換為RGB"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".rgbTohex(rgbStr, opacity)"})}),e.jsx("td",{children:"RGB轉換為HEX"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".hslTohex({(h, s, l, a)})"})}),e.jsx("td",{children:"HSL轉換為HEX"})]})]})]})}),`
`,e.jsxs(s.p,{children:[e.jsx("span",{className:"sb-unstyled methods",children:"ColorHelper"}),`> 顏色相關輔助函式
`,e.jsx(s.code,{children:"Color.js"})]}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".getRandomNum(min, max)"})}),e.jsx("td",{children:"隨機取得一個在指定區間min~max的數字"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".randomDigit()"})}),e.jsx("td",{children:"隨機取得一個16進制數字"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".randomHexColor()"})}),e.jsx("td",{children:"隨機取得一個HEX色碼"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".tohexDigits(strDigit)"})}),e.jsx("td",{children:"將一個十進制數字轉換為十六進制"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(s.code,{children:".circular_distance(a,b)"})}),e.jsx("td",{children:"以圓形計算兩值之間差值(ex.359-1=2)"})]})]})]})})]})}function a(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}export{a as default};
