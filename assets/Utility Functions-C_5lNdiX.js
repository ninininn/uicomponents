import{u as r,j as s,M as d}from"./iframe-UhzdqN6V.js";import"./preload-helper-DLLWEBaG.js";function l(n){const e={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.p,{children:[s.jsx(d,{title:"Utility Functions"}),`# 工具函式\r
提供多種共用functions，方便在各種情境使用。`]}),`
`,s.jsx(e.h1,{id:"dom",children:"Dom"}),`
`,s.jsxs(e.blockquote,{children:[`
`,s.jsx(e.p,{children:"共同控制DOM UI樣式的工具函式"}),`
`]}),`
`,s.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".create(tag)"})}),s.jsx("td",{children:"create指定標籤類型的HTMLElement"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setStyle(el,styleProp,value)"})}),s.jsx("td",{children:"inline方式更改元素樣式"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".addClass(el, classes)"})}),s.jsx("td",{children:"在指定DOM節點上加入指定classes"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".toggleClass(el, classes)"})}),s.jsx("td",{children:"在指定DOM節點上移除指定classes"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".removeClass(el, classes)"})}),s.jsx("td",{children:"在指定DOM節點上移除指定classes"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".clearClass(el, excludeClasses)"})}),s.jsx("td",{children:"移除指定節點上的所有classes(除了指定excludeClasses)"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setText(el, text)"})}),s.jsx("td",{children:"設定指定DOM節點的textContent"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setTextnode(el, text)"})}),s.jsx("td",{children:"在指定DOM節點內加入文字節點"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setDataAttr(el, attrName, value)"})}),s.jsxs("td",{children:["設定指定DOM節點的自訂",s.jsx(e.code,{children:"data-"}),"屬性"]})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setAttr(el, attrName, value)"})}),s.jsx("td",{children:"設定指定DOM節點的自訂屬性"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".removeAttr(el, attrName)"})}),s.jsx("td",{children:"移除DOM節點的指定屬性"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setProp(el, propName, value)"})}),s.jsx("td",{children:"設定指定DOM節點的自訂css-property屬性"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setBtn(btnConfig)"})}),s.jsx("td",{children:"建立自訂btn"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".setBtnGroup(btnConfigs, container)"})}),s.jsx("td",{children:"建立自訂btn群組"})]})]})]})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".addClass(el, classes)"})," ",s.jsx(e.strong,{children:"在指定DOM節點上加入指定classes"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["el",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`classes\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要加入的 classes\r
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.addClass(this._elem, ["container", "absolute"]);
`})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".removeClass(el, classes)"})," ",s.jsx(e.strong,{children:"在指定DOM節點上移除指定classes"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["el",s.jsx("span",{className:"text-red-600",children:"*"})]})," DOM元素",s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`classes\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要移除的 classes\r
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.removeClass(this._elem, ["container", "absolute"]);
`})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".clearClass(el, excludeClasses)"})," ",s.jsx(e.strong,{children:"移除指定節點上的所有classes(除了指定excludeClasses)"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["el",s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"excludeClasses"}),` 除外classes\r
`,s.jsx("span",{className:"sb-unstyled data-type arr",children:"array"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.clearClass(this._elem, ["name_id"]);
`})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".setText(el, text)"})," ",s.jsx(e.strong,{children:"設定指定DOM節點的textContent內容"})]}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".setTextnode(el, text)"})," ",s.jsx(e.strong,{children:"在指定DOM節點內加入文字節點"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`el\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`text\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 文字內容\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.setText(this._elem, "測試文字");\r
Dom.setTextnode(this._elem, "測試文字");
`})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".setDataAttr(el, attrName, value)"})," ",s.jsxs(e.strong,{children:["設定指定DOM節點的自訂",s.jsx(e.code,{children:"data-"}),"屬性"]})]}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".setAttr(el, attrName, value)"})," ",s.jsx(e.strong,{children:"設定指定DOM節點的自訂屬性"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`el\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["attrName",s.jsx("span",{className:"text-red-600",children:"*"})]}),` 屬性名稱\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`value\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要設定的值\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.setDataAttr(this._elem, "initialize", "true");\r
Dom.setAttr(this._elem, "is-mobile");
`})}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:".setProp(el, propName, value)"})," ",s.jsx(e.strong,{children:"設定指定DOM節點的自訂css-property屬性"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`el\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` DOM元素\r
`,s.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:["propName",s.jsx("span",{className:"text-red-600",children:"*"})]}),` CSS propertyName\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`value\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 要設定的值\r
`,s.jsx("span",{className:"sb-unstyled data-type str",children:"string"})]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`Dom.setProp(this._elem, "--theme", "#878787");
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h1,{id:"其他類別",children:"其他類別"}),`
`,s.jsx(e.h3,{id:"clamp",children:"clamp"}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:"clamp(value, min = 0, max = 1)"})," ",s.jsx(e.strong,{children:"檢視數值是否在目標區間"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Parameters"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`value\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` 目標值\r
`,s.jsx("span",{className:"sb-unstyled data-type num",children:"number"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"min"}),` 區間最小值\r
`,s.jsx("span",{className:"sb-unstyled data-type num",children:"number"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"max"}),` 區間最大值\r
`,s.jsx("span",{className:"sb-unstyled data-type num",children:"number"})]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Returns"}),s.jsx(e.br,{}),`
`,"如果目標值在 min, max 區間則回傳該目標值；小於 min 則回傳 min、大於 max 則回傳 max"]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`let clampNum = clamp(0.56); //0.56\r
let clampNum2 = clamp(1.5, 0, 1); //1
`})}),`
`,s.jsx(e.h3,{id:"checkdevice",children:"checkDevice"}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:"checkDevice()"})," ",s.jsx(e.strong,{children:"判斷裝置尺寸"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Returns"}),"  ",s.jsx("span",{className:"sb-unstyled data-type obj",children:"object"}),s.jsx(e.br,{}),`
`,s.jsx(e.code,{children:"{ device, size }"})]}),`
`]}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-javascript",children:`// other opereations...\r
checkDevice();
`})}),`
`,s.jsx(e.hr,{}),`
`,s.jsx(e.h1,{id:"色彩相關",children:"色彩相關"}),`
`,s.jsx(e.h3,{id:"color-class",children:"Color class"}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:"Color"})," 以HSLA屬性分別儲存數值之物件類別 ",s.jsx(e.code,{children:"Color.js"})]}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Properties"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"base"})," ",s.jsx("span",{className:"sb-unstyled data-type object",children:"object"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsxs(e.strong,{children:[`h\r
`,s.jsx("span",{className:"text-red-600",children:"*"})]}),` Hue\r
`,s.jsx("span",{className:"sb-unstyled data-type num",children:"number"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"s"}),` Saturation\r
`,s.jsx("span",{className:"sb-unstyled data-type num",children:"number"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"l"}),` Lightness\r
`,s.jsx("span",{className:"sb-unstyled data-type num",children:"number"})]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"a"}),` Alpha\r
`,s.jsx("span",{className:"sb-unstyled data-type num",children:"number"})]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"luminance"}),` 視覺亮度\r
`,s.jsx("span",{className:"sb-unstyled data-type num",children:"number"})]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:"Methods"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:".toRgb()"})," 回傳對應RGB模式色碼"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:".toHex()"})," 回傳對應HEX模式色碼"]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.strong,{children:".toHsl()"})," 回傳對應HSL模式色碼"]}),`
`]}),`
`]}),`
`]}),`
`,s.jsx(e.h3,{id:"palette",children:"Palette"}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:"Palette(config)"})," 隨機產生一組/單一色碼，色碼模式可以是 hsl | rgb | hex ",s.jsx(e.code,{children:"Color.js"})]}),`
`,s.jsx(e.h3,{id:"colorformat",children:"ColorFormat"}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:"ColorFormat"})," 顏色相關轉換函式 ",s.jsx(e.code,{children:"Color.js"})]}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".isRgb(colorStr)"})}),s.jsx("td",{children:"判斷色碼是否為RGB(A)模式"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".isHsl(colorStr)"})}),s.jsx("td",{children:"判斷色碼是否為HSL模式"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".isHex(colorStr)"})}),s.jsx("td",{children:"判斷色碼是否為HEX模式"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".withAlpha(colorStr)"})}),s.jsx("td",{children:"判斷色碼是否帶有透明度"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".getColorMode(colorStr)"})}),s.jsx("td",{children:"判斷色碼模式"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".hexTorgb(hexString)"})}),s.jsx("td",{children:"HEX色碼(#FFFFFAAA)轉為RGB(rgb(R,G,B))"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".rgbTohsl(rgbString)"})}),s.jsx("td",{children:"RGB轉換為HSL(hsl(h s l))"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".hslTorgb(hslString)"})}),s.jsx("td",{children:"HSL轉換為RGB"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".rgbTohex(rgbString)"})}),s.jsx("td",{children:"RGB轉換為HEX"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".hslTohex(hslString)"})}),s.jsx("td",{children:"HSL轉換為HEX"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".hexTohsl(hexString)"})}),s.jsx("td",{children:"HEX轉換為HSL"})]})]})]})}),`
`,s.jsx(e.h3,{id:"colorhelper",children:"ColorHelper"}),`
`,s.jsxs(e.p,{children:[s.jsx("span",{className:"sb-unstyled methods",children:"ColorHelper"})," 顏色相關輔助函式 ",s.jsx(e.code,{children:"Color.js"})]}),`
`,s.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:s.jsxs("table",{className:"sb-unstyled table-content",children:[s.jsx("thead",{children:s.jsxs("tr",{className:"text-center",children:[s.jsx("td",{children:"methods"}),s.jsx("td",{children:"descriptions"})]})}),s.jsxs("tbody",{children:[s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".getRandomNum(min, max)"})}),s.jsx("td",{children:"隨機取得一個在指定區間min~max的數字"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".randomDigit()"})}),s.jsx("td",{children:"隨機取得一個16進制數字"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".randomHexColor()"})}),s.jsx("td",{children:"隨機取得一個HEX色碼"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".tohexDigits(strDigit)"})}),s.jsx("td",{children:"將一個十進制數字轉換為十六進制"})]}),s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx(e.code,{children:".circular_distance(a,b)"})}),s.jsx("td",{children:"以圓形計算兩值之間差值(ex.359-1=2)"})]})]})]})})]})}function i(n={}){const{wrapper:e}={...r(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(l,{...n})}):l(n)}export{i as default};
