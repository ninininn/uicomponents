import{u as r,j as s,M as t}from"./iframe-DX9Xje3U.js";import"./preload-helper-DLLWEBaG.js";function l(n){const e={blockquote:"blockquote",br:"br",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.p,{children:[s.jsx(t,{title:"Configure your project"}),`# 工具函式\r
提供多種共用functions，方便在各種情境使用。`]}),`
`,s.jsx(e.h3,{id:"dom-類別",children:"Dom 類別"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"共同控制DOM UI樣式的工具函式"}),`
`]}),`
`,s.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".addClass(element, classes)"})}),s.jsx("td",{children:"在指定DOM節點上加入指定classes"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".removeClass(element, classes)"})}),s.jsx("td",{children:"在指定DOM節點上移除指定classes"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".clearClass(element, excludeClasses)"})}),s.jsx("td",{children:"移除指定節點上的所有classes(除了指定excludeClasses)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setText(element, text)"})}),s.jsx("td",{children:"設定指定DOM節點的textContent"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setAttribute(element, attributeName, attributeValue)"})}),s.jsxs("td",{children:["設定指定DOM節點的自訂",s.jsx(e.code,{children:"data-"}),"屬性"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setProperty(element, propertyName, propertyValue)"})}),s.jsx("td",{children:"設定指定DOM節點的自訂css-property屬性"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setButtons(btnConfig)"})}),s.jsx("td",{children:"建立自訂btn樣式"})]})]})]})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".addClass(element, classes)"})," 在指定DOM節點上加入指定classes"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`classes\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要加入的 classes\r
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.addClass(this._elem, ["container", "absolute"]);
`})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".removeClass(element, classes)"})," 在指定DOM節點上移除指定classes"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`classes\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要移除的 classes\r
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.removeClass(this._elem, ["container", "absolute"]);
`})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".clearClass(element, excludeClasses)"})," 移除指定節點上的所有classes(除了指定excludeClasses)"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"excludeClasses"}),` 除外classes\r
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.clearClass(this._elem, ["name_id"]);
`})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".setText(element, text)"})," 設定指定DOM節點的textContent內容"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`text\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 文字內容\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.setText(this._elem, "測試文字");
`})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:`.setAttribute(element, attributeName, attributeValue)\r
`})," 設定指定DOM節點的自訂",s.jsx(e.code,{children:"data-"}),"屬性"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["attributeName",s.jsx("span",{className:"text-red-600",children:"*"})]}),` 屬性名稱\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"}),"- ",s.jsxs(e.strong,{children:[`attributeValue\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要設定的值\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.setAttribute(this._elem, "initialize", "true");
`})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".setProperty(element, propertyName, propertyValue)"})," 設定指定DOM節點的自訂css-property屬性"]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["element",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["propertyName",s.jsx("span",{className:"text-red-600",children:"*"})]}),` CSS propertyName\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"}),"- ",s.jsxs(e.strong,{children:[`propertyValue\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要設定的值\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.setProperty(this._elem, "--theme", "#878787");
`})}),`
`,s.jsx(e.h3,{id:"其他類別",children:"其他類別"}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:"function clamp(value, min = 0, max = 1)"}),`\r
檢視數值是否在目標區間`]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["value",s.jsx("span",{className:"text-red-600",children:"*"})]}),` 目標值\r
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"number"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"min"}),` 區間最小值\r
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"number"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"max"}),` 區間最大值\r
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"number"})]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Returns"}),s.jsx(e.br,{}),`
`,"如果目標值在 min, max 區間則回傳該目標值；小於 min 則回傳 min、大於 max 則回傳 max"]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`let clampNum = clamp(0.56); //0.56\r
let clampNum2 = clamp(1.5,0,1); //1
`})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:"function checkDevice()"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Returns"}),`\r
判斷裝置尺寸`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`// other opereations...\r
checkDevice();
`})}),`
`,s.jsx(e.h3,{id:"色彩相關",children:"色彩相關"}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:"function Palette(config)"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:["隨機產生一組/單一色碼，色碼模式可以是 hsl | rgb | hex ",s.jsx(e.code,{children:"Color.js"})]}),`
`]}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:"ColorFormat"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:["顏色相關轉換函式 ",s.jsx(e.code,{children:"Color.js"})]}),`
`]}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".hexTorgb(hexString, opacity)"})}),s.jsx("td",{children:"HEX色碼(#FFFFFAAA)轉為RGB(rgb(R,G,B))"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".rgbTohsl(rgbStr, opacity)"})}),s.jsx("td",{children:"RGB轉換為HSL(hsl(h deg, s, l))"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".hslTorgb({(h, s, l, a)})"})}),s.jsx("td",{children:"HSL轉換為RGB"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".rgbTohex(rgbStr, opacity)"})}),s.jsx("td",{children:"RGB轉換為HEX"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".hslTohex({(h, s, l, a)})"})}),s.jsx("td",{children:"HSL轉換為HEX"})]})]})]})}),`
`,s.jsx("span",{className:"sb-unstyled methods",children:"ColorHelper"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsxs(e.p,{children:["顏色相關輔助函式 ",s.jsx(e.code,{children:"Color.js"})]}),`
`]}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".getRandomNum(min, max)"})}),s.jsx("td",{children:"隨機取得一個在指定區間min~max的數字"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".randomDigit()"})}),s.jsx("td",{children:"隨機取得一個16進制數字"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".randomHexColor()"})}),s.jsx("td",{children:"隨機取得一個HEX色碼"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".tohexDigits(strDigit)"})}),s.jsx("td",{children:"將一個十進制數字轉換為十六進制"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".circular_distance(a,b)"})}),s.jsx("td",{children:"以圓形計算兩值之間差值(ex.359-1=2)"})]})]})]})})]})}function a(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(l,{...n})}):l(n)}export{a as default};
