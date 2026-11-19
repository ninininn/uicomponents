import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,o as n}from"./blocks-gwT75y1v.js";import{s as r}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i,r as a}from"./react-DITjJg24.js";function o(e){let t={blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:[(0,c.jsx)(n,{title:`Utility Functions`}),`# 工具函式\r
提供多種共用functions，方便在各種情境使用。`]}),`
`,(0,c.jsx)(t.h1,{id:`dom`,children:`Dom`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`共同控制DOM UI樣式的工具函式`}),`
`]}),`
`,(0,c.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`Quick reference`}),`
`,(0,c.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,c.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{className:`text-center`,children:[(0,c.jsx)(`td`,{children:`methods`}),(0,c.jsx)(`td`,{children:`descriptions`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.create(tag)`})}),(0,c.jsx)(`td`,{children:`create指定標籤類型的HTMLElement`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.setStyle(el,styleProp,value)`})}),(0,c.jsx)(`td`,{children:`inline方式更改元素樣式`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.addClass(el, classes)`})}),(0,c.jsx)(`td`,{children:`在指定DOM節點上加入指定classes`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.toggleClass(el, classes)`})}),(0,c.jsx)(`td`,{children:`在指定DOM節點上移除指定classes`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.removeClass(el, classes)`})}),(0,c.jsx)(`td`,{children:`在指定DOM節點上移除指定classes`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.clearClass(el, excludeClasses)`})}),(0,c.jsx)(`td`,{children:`移除指定節點上的所有classes(除了指定excludeClasses)`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.setText(el, text)`})}),(0,c.jsx)(`td`,{children:`設定指定DOM節點的textContent`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.setTextnode(el, text)`})}),(0,c.jsx)(`td`,{children:`在指定DOM節點內加入文字節點`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.setDataAttr(el, attrName, value)`})}),(0,c.jsxs)(`td`,{children:[`設定指定DOM節點的自訂`,(0,c.jsx)(t.code,{children:`data-`}),`屬性`]})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.setAttr(el, attrName, value)`})}),(0,c.jsx)(`td`,{children:`設定指定DOM節點的自訂屬性`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.removeAttr(el, attrName)`})}),(0,c.jsx)(`td`,{children:`移除DOM節點的指定屬性`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.setProp(el, propName, value)`})}),(0,c.jsx)(`td`,{children:`設定指定DOM節點的自訂css-property屬性`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.setBtn(btnConfig)`})}),(0,c.jsx)(`td`,{children:`建立自訂btn`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.setBtnGroup(btnConfigs, container)`})}),(0,c.jsx)(`td`,{children:`建立自訂btn群組`})]})]})]})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`.addClass(el, classes)`}),` `,(0,c.jsx)(t.strong,{children:`在指定DOM節點上加入指定classes`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`el`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` DOM元素\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`classes\r
`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` 要加入的 classes\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type arr`,children:`array`})]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`Dom.addClass(this._elem, ["container", "absolute"]);
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`.removeClass(el, classes)`}),` `,(0,c.jsx)(t.strong,{children:`在指定DOM節點上移除指定classes`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`el`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` DOM元素`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`classes\r
`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` 要移除的 classes\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type arr`,children:`array`})]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`Dom.removeClass(this._elem, ["container", "absolute"]);
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`.clearClass(el, excludeClasses)`}),` `,(0,c.jsx)(t.strong,{children:`移除指定節點上的所有classes(除了指定excludeClasses)`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`el`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` DOM元素\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`excludeClasses`}),` 除外classes\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type arr`,children:`array`})]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`Dom.clearClass(this._elem, ["name_id"]);
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`.setText(el, text)`}),` `,(0,c.jsx)(t.strong,{children:`設定指定DOM節點的textContent內容`})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`.setTextnode(el, text)`}),` `,(0,c.jsx)(t.strong,{children:`在指定DOM節點內加入文字節點`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`el\r
`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` DOM元素\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`text\r
`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` 文字內容\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`string`})]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`Dom.setText(this._elem, "測試文字");\r
Dom.setTextnode(this._elem, "測試文字");
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`.setDataAttr(el, attrName, value)`}),` `,(0,c.jsxs)(t.strong,{children:[`設定指定DOM節點的自訂`,(0,c.jsx)(t.code,{children:`data-`}),`屬性`]})]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`.setAttr(el, attrName, value)`}),` `,(0,c.jsx)(t.strong,{children:`設定指定DOM節點的自訂屬性`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`el\r
`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` DOM元素\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`attrName`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` 屬性名稱\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`string`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`value\r
`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` 要設定的值\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`string`})]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`Dom.setDataAttr(this._elem, "initialize", "true");\r
Dom.setAttr(this._elem, "is-mobile");
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`.setProp(el, propName, value)`}),` `,(0,c.jsx)(t.strong,{children:`設定指定DOM節點的自訂css-property屬性`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`el\r
`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` DOM元素\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`propName`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` CSS propertyName\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`string`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`value\r
`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` 要設定的值\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`string`})]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`Dom.setProp(this._elem, "--theme", "#878787");
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h1,{id:`其他類別`,children:`其他類別`}),`
`,(0,c.jsx)(t.h3,{id:`clamp`,children:`clamp`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`clamp(value, min = 0, max = 1)`}),` `,(0,c.jsx)(t.strong,{children:`檢視數值是否在目標區間`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Parameters`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`value\r
`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` 目標值\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type num`,children:`number`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`min`}),` 區間最小值\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type num`,children:`number`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`max`}),` 區間最大值\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type num`,children:`number`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Returns`}),(0,c.jsx)(t.br,{}),`
`,`如果目標值在 min, max 區間則回傳該目標值；小於 min 則回傳 min、大於 max 則回傳 max`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`let clampNum = clamp(0.56); //0.56\r
let clampNum2 = clamp(1.5, 0, 1); //1
`})}),`
`,(0,c.jsx)(t.h3,{id:`checkdevice`,children:`checkDevice`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`checkDevice()`}),` `,(0,c.jsx)(t.strong,{children:`判斷裝置尺寸`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Returns`}),`  `,(0,c.jsx)(`span`,{className:`sb-unstyled data-type obj`,children:`object`}),(0,c.jsx)(t.br,{}),`
`,(0,c.jsx)(t.code,{children:`{ device, size }`})]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// other opereations...\r
checkDevice();
`})}),`
`,(0,c.jsx)(t.hr,{}),`
`,(0,c.jsx)(t.h1,{id:`色彩相關`,children:`色彩相關`}),`
`,(0,c.jsx)(t.h3,{id:`color-class`,children:`Color class`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`Color`}),` 以HSLA屬性分別儲存數值之物件類別 `,(0,c.jsx)(t.code,{children:`Color.js`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Properties`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`base`}),` `,(0,c.jsx)(`span`,{className:`sb-unstyled data-type object`,children:`object`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`h\r
`,(0,c.jsx)(`span`,{className:`text-red-600`,children:`*`})]}),` Hue\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type num`,children:`number`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`s`}),` Saturation\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type num`,children:`number`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`l`}),` Lightness\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type num`,children:`number`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`a`}),` Alpha\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type num`,children:`number`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`luminance`}),` 視覺亮度\r
`,(0,c.jsx)(`span`,{className:`sb-unstyled data-type num`,children:`number`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.toRgb()`}),` 回傳對應RGB模式色碼`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.toHex()`}),` 回傳對應HEX模式色碼`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`.toHsl()`}),` 回傳對應HSL模式色碼`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`palette`,children:`Palette`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`Palette(config)`}),` 隨機產生一組/單一色碼，色碼模式可以是 hsl | rgb | hex `,(0,c.jsx)(t.code,{children:`Color.js`})]}),`
`,(0,c.jsx)(t.h3,{id:`colorformat`,children:`ColorFormat`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`ColorFormat`}),` 顏色相關轉換函式 `,(0,c.jsx)(t.code,{children:`Color.js`})]}),`
`,(0,c.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,c.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{className:`text-center`,children:[(0,c.jsx)(`td`,{children:`methods`}),(0,c.jsx)(`td`,{children:`descriptions`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.isRgb(colorStr)`})}),(0,c.jsx)(`td`,{children:`判斷色碼是否為RGB(A)模式`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.isHsl(colorStr)`})}),(0,c.jsx)(`td`,{children:`判斷色碼是否為HSL模式`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.isHex(colorStr)`})}),(0,c.jsx)(`td`,{children:`判斷色碼是否為HEX模式`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.withAlpha(colorStr)`})}),(0,c.jsx)(`td`,{children:`判斷色碼是否帶有透明度`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.getColorMode(colorStr)`})}),(0,c.jsx)(`td`,{children:`判斷色碼模式`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.hexTorgb(hexString)`})}),(0,c.jsx)(`td`,{children:`HEX色碼(#FFFFFAAA)轉為RGB(rgb(R,G,B))`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.rgbTohsl(rgbString)`})}),(0,c.jsx)(`td`,{children:`RGB轉換為HSL(hsl(h s l))`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.hslTorgb(hslString)`})}),(0,c.jsx)(`td`,{children:`HSL轉換為RGB`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.rgbTohex(rgbString)`})}),(0,c.jsx)(`td`,{children:`RGB轉換為HEX`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.hslTohex(hslString)`})}),(0,c.jsx)(`td`,{children:`HSL轉換為HEX`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.hexTohsl(hexString)`})}),(0,c.jsx)(`td`,{children:`HEX轉換為HSL`})]})]})]})}),`
`,(0,c.jsx)(t.h3,{id:`colorhelper`,children:`ColorHelper`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(`span`,{className:`sb-unstyled methods`,children:`ColorHelper`}),` 顏色相關輔助函式 `,(0,c.jsx)(t.code,{children:`Color.js`})]}),`
`,(0,c.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,c.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{className:`text-center`,children:[(0,c.jsx)(`td`,{children:`methods`}),(0,c.jsx)(`td`,{children:`descriptions`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.getRandomNum(min, max)`})}),(0,c.jsx)(`td`,{children:`隨機取得一個在指定區間min~max的數字`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.randomDigit()`})}),(0,c.jsx)(`td`,{children:`隨機取得一個16進制數字`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.randomHexColor()`})}),(0,c.jsx)(`td`,{children:`隨機取得一個HEX色碼`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.tohexDigits(strDigit)`})}),(0,c.jsx)(`td`,{children:`將一個十進制數字轉換為十六進制`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{children:(0,c.jsx)(t.code,{children:`.circular_distance(a,b)`})}),(0,c.jsx)(`td`,{children:`以圓形計算兩值之間差值(ex.359-1=2)`})]})]})]})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};