import{u as r,j as s,M as t}from"./iframe-DOtvq2Ys.js";import"./preload-helper-DLLWEBaG.js";function l(n){const e={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(t,{title:"Configure your project"}),`
`,s.jsx(e.h1,{id:"工具函式",children:"工具函式"}),`
`,s.jsx(e.p,{children:"提供多種共用functions，方便在各種情境使用。"}),`
`,s.jsx(e.h3,{id:"uiutils-類別",children:"UIUtils 類別"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"共同控制DOM UI樣式的工具函式"}),`
`]}),`
`,s.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".addClass(element, classes)"})}),s.jsx("td",{children:"在指定DOM節點上加入指定classes"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".removeClass(element, classes)"})}),s.jsx("td",{children:"在指定DOM節點上移除指定classes"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".clearClass(element, excludeClasses)"})}),s.jsx("td",{children:"移除指定節點上的所有classes(除了指定excludeClasses)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setText(element, text)"})}),s.jsx("td",{children:"設定指定DOM節點的textContent"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setAttribute(element, attributeName, attributeValue)"})}),s.jsxs("td",{children:["設定指定DOM節點的自訂",s.jsx(e.code,{children:"data-"}),"屬性"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setProperty(element, propertyName, propertyValue)"})}),s.jsx("td",{children:"設定指定DOM節點的自訂css-property屬性"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setButtons(btnConfig)"})}),s.jsx("td",{children:"建立自訂btn樣式"})]})]})]})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:".addClass(element, classes)"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["classes",s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要加入的 classes
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.p,{children:"在指定DOM節點上加入指定classes"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:` UIUtils.addClass(this._elem,["container","absolute"]); 
`})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:".removeClass(element, classes)"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["classes",s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要移除的 classes
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.p,{children:"在指定DOM節點上移除指定classes"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:` UIUtils.removeClass(this._elem,["container","absolute"]); 
`})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:".clearClass(element, excludeClasses)"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"excludeClasses"}),` 除外classes
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.p,{children:"移除指定節點上的所有classes(除了指定excludeClasses)"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:` UIUtils.clearClass(this._elem,["name_id"]); 
`})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:".setText(element, text)"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["text",s.jsx("span",{className:"text-red-600",children:"*"})]}),` 文字內容
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.p,{children:"設定指定DOM節點的textContent內容"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:` UIUtils.setText(this._elem,"測試文字"); 
`})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:".setAttribute(element, attributeName, attributeValue)"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["attributeName",s.jsx("span",{className:"text-red-600",children:"*"})]}),` 屬性名稱
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["attributeValue",s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要設定的值
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(e.p,{children:["設定指定DOM節點的自訂",s.jsx(e.code,{children:"data-"}),"屬性"]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:` UIUtils.setAttribute(this._elem,"initialize","true"); 
`})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:".setProperty(element, propertyName, propertyValue)"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["propertyName",s.jsx("span",{className:"text-red-600",children:"*"})]}),` CSS propertyName
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["propertyValue",s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要設定的值
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.p,{children:"設定指定DOM節點的自訂css-property屬性"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:` UIUtils.setProperty(this._elem,"--theme","#878787"); 
`})}),`
`,s.jsx(e.h3,{id:"其他類別",children:"其他類別"}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:"function compareNum(arrayNum)"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["arrayNum",s.jsx("span",{className:"text-red-600",children:"*"})]}),` 數組
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Returns"}),s.jsx(e.br,{}),`
`,"回傳已排序的數組參數"]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`  let sortNumArr = compareNum([15,13]); //[13, 15]
`})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:"function checkDevice()"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Returns"}),s.jsx(e.br,{}),`
`,"判斷裝置尺寸"]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`  // other opereations...
  checkDevice();
`})}),`
`,s.jsx(e.h3,{id:"色彩相關",children:"色彩相關"}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:"function Palette(config)"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:["隨機產生一組/單一色碼，色碼模式可以是 hsl | rgb | hex ",s.jsx(e.code,{children:"Color.js"})]}),`
`]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.strong,{children:"Parameters"})}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["config",s.jsx("span",{className:"text-red-600",children:"*"})]})," 色彩設定 ",s.jsx("span",{className:"sb-unstyled data-type obj",children:"object"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`  const paletteConfig = {
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
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.strong,{children:"Returns"}),s.jsx(e.br,{}),`
`,"回傳一組(或一個)指定模式色碼(預設為HSL)"]}),`
`]}),`
`]}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:"ColorFormat"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:["顏色相關轉換函式 ",s.jsx(e.code,{children:"Color.js"})]}),`
`]}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".hexTorgb(hexString, opacity)"})}),s.jsx("td",{children:"HEX色碼(#FFFFFAAA)轉為RGB(rgb(R,G,B))"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".rgbTohsl(rgbStr, opacity)"})}),s.jsx("td",{children:"RGB轉換為HSL(hsl(h deg, s, l))"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".hslTorgb({h,s,l,a})"})}),s.jsx("td",{children:"HSL轉換為RGB"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".rgbTohex(rgbStr, opacity)"})}),s.jsx("td",{children:"RGB轉換為HEX"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".hslTohex({h,s,l,a})"})}),s.jsx("td",{children:"HSL轉換為HEX"})]})]})]})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:"ColorHelper"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:["顏色相關輔助函式 ",s.jsx(e.code,{children:"Color.js"})]}),`
`]}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".getRandomNum(min, max)"})}),s.jsx("td",{children:"隨機取得一個在指定區間min~max的數字"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".randomDigit()"})}),s.jsx("td",{children:"隨機取得一個16進制數字"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".randomHexColor()"})}),s.jsx("td",{children:"隨機取得一個HEX色碼"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".tohexDigits(strDigit)"})}),s.jsx("td",{children:"將一個十進制數字轉換為十六進制"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".circular_distance(a,b)"})}),s.jsx("td",{children:"以圓形計算兩值之間差值(ex.359-1=2)"})]})]})]})})]})}function a(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(l,{...n})}):l(n)}export{a as default};
