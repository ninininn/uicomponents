import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,o as n,r,s as i,u as a}from"./blocks-gwT75y1v.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import"./Checkbox-CWL6azu-.js";import{n as l,r as u,t as d}from"./Checkbox-B15Xe4zI.js";var f;function p(){return(p=e((()=>{u(),f=({checked:e,classes:t,disabled:n,style:r,name:i,theme:a,title:o,checkImg:s,value:c,handlers:u,checkboxGroup:f})=>{let p=new d({checked:e,value:c,name:i,classes:t,disabled:n,style:r,theme:a,title:o,checkImg:s,handlers:u});if(p.el.addEventListener(`change`,e=>{let t={checked:e.target.checked,value:e.target.value};p.options.handlers?.(t)}),f){let i=new l(`test`),a=new d({checked:e,name:`group2`,classes:t,disabled:n,style:r,theme:`#69bbe5`,title:`群組勾選框A`,checkImg:s}),o=new d({checked:e,name:`group3`,classes:t,disabled:!0,style:r,theme:`#c4729b`,title:`群組勾選框B`,checkImg:s});return i.addCheckItems([p,a,o]),i}return p}})))()}function m(e){let t={blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{isTemplate:!0,title:`How to use Checkbox`}),`
`,(0,g.jsx)(a,{}),`
`,(0,g.jsx)(t.p,{children:`適用 : 勾選框；可以配合其他元件使用綁定屬性值`}),`
`,(0,g.jsx)(i,{}),`
`,(0,g.jsx)(t.h1,{id:`controls`,children:`Controls`}),`
`,(0,g.jsxs)(t.p,{children:[`這邊僅列出初始化時可以設定的 options.properties，內部屬性請參考`,(0,g.jsx)(t.strong,{children:`properties屬性`}),`區塊；`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`checkboxGroup`}),`的control僅為了示意群組樣式，相關元件設定請參考`,(0,g.jsx)(t.strong,{children:`CheckboxGroup`}),`區塊說明。`]}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h1,{id:`usage-api`,children:`Usage API`}),`
`,(0,g.jsxs)(t.p,{children:[`初始化 Checkbox 元件，帶入 `,(0,g.jsx)(t.code,{children:`element`}),`、`,(0,g.jsx)(t.code,{children:`options`}),` 參數，並設定options屬性`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`new Checkbox(element, (options = {}));
`})}),`
`,(0,g.jsxs)(t.blockquote,{children:[`
`,(0,g.jsx)(t.h3,{id:`parameters-參數設定`,children:`parameters 參數設定`}),`
`]}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsx)(`span`,{className:`sb-unstyled font-black`,children:`element`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`}),`
`,(0,g.jsxs)(t.p,{children:[`可以傳入`,(0,g.jsx)(t.code,{children:`<label/>`}),`或`,(0,g.jsx)(t.code,{children:`<input/>`}),`兩種標籤元素節點，如果傳入的節點標籤種類不是這兩種，則會直接視為容器元素(container)，並自動補上對應結構。`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-html`,children:`<!-- 基本靜態結構 -->
<label class="label input-label">
  <input type="checkbox" class="checkbox" />
  文字內容
</label>
`})}),`
`,(0,g.jsx)(`br`,{}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsx)(`span`,{className:`sb-unstyled font-black`,children:`options`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),`
`,(0,g.jsx)(t.p,{children:`各屬性的型別及說明可參考上方Controls區塊`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`const options = {
  style: "default", //樣式
  title: "一般勾選框", //文字
  value: "", //<input/>的value attribute
  checked: true,
  theme: "var(--color-blue-500)", //預設顏色
  checkImg: ["../../../../public/eye.svg", "../../../../public/eye-off.svg"], //check圖標
  classes: ["checkbox"],
  disabled: false,
  handlers: null,
};
`})}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsxs)(`div`,{className:`sb-unstyled note-msg`,children:[(0,g.jsx)(`span`,{children:`title及value判斷說明 : `}),(0,g.jsxs)(`p`,{children:[`title屬性作為文字標籤、而value屬性則是作為`,(0,g.jsx)(t.code,{children:`input.value`}),`。`]}),(0,g.jsxs)(`p`,{children:[`如果value沒有特別設定，則預設會以title作為value值；在切換checked狀態時，當樣式類型為`,(0,g.jsx)(t.strong,{children:`default`}),`/`,(0,g.jsx)(t.strong,{children:`tag`}),`，value會在設定值及""之間做切換；當樣式類型為`,(0,g.jsx)(t.strong,{children:`switch`}),`時，value及title可以設定的值則會以|作為切換狀態區分。(見下方example說明)`]}),(0,g.jsx)(`div`,{className:`examples`,children:(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(`span`,{className:`sb-unstyled examples-title`,children:`style:"default", title:"一般勾選", value:""`}),(0,g.jsx)(t.br,{}),`
`,`checked: `,(0,g.jsx)(t.code,{children:`{value:"一般勾選"}`}),(0,g.jsx)(t.br,{}),`
`,`unchecked: `,(0,g.jsx)(t.code,{children:`{value:""}`})]}),`
`]})}),(0,g.jsx)(`div`,{className:`examples`,children:(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(`span`,{className:`sb-unstyled examples-title`,children:`style:"switch", title:"A|B", value:"C|D"`}),(0,g.jsx)(t.br,{}),`
`,`checked: `,(0,g.jsx)(t.code,{children:`{title:"A", value:"C"}`}),(0,g.jsx)(t.br,{}),`
`,`unchecked: `,(0,g.jsx)(t.code,{children:`{title:"B", value:"D"}`})]}),`
`]})}),(0,g.jsx)(`div`,{className:`examples`,children:(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(`span`,{className:`sb-unstyled examples-title`,children:`style:"switch", title:"A|B", value:""`}),(0,g.jsx)(t.br,{}),`
`,`checked: `,(0,g.jsx)(t.code,{children:`{title:"A", value:"A"}`}),(0,g.jsx)(t.br,{}),`
`,`unchecked: `,(0,g.jsx)(t.code,{children:`{title:"B", value:"B"}`})]}),`
`]})})]}),`
`,(0,g.jsx)(`br`,{}),`
`]}),`
`]}),`
`,(0,g.jsxs)(t.blockquote,{children:[`
`,(0,g.jsx)(t.h3,{id:`properties-內部屬性`,children:`properties 內部屬性`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled data-type readonly`,children:`Read-only`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled`,children:`可以操作的屬性皆須使用methods來更改`}),`
`]}),`
`,(0,g.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,g.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{className:`text-center`,children:[(0,g.jsx)(`td`,{children:`property`}),(0,g.jsx)(`td`,{children:`default`}),(0,g.jsx)(`td`,{children:`type`}),(0,g.jsx)(`td`,{children:`descriptions`})]})}),(0,g.jsxs)(`tbody`,{children:[(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,g.jsx)(`td`,{children:`Checkbox`}),(0,g.jsx)(`td`,{children:`string`}),(0,g.jsxs)(`td`,{children:[`繼承自`,(0,g.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`inputValue`}),(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`options.title`})}),(0,g.jsx)(`td`,{children:`string`}),(0,g.jsxs)(`td`,{children:[(0,g.jsx)(t.code,{children:`<input/>`}),`的value值，如果沒有特別設定會預設為`,(0,g.jsx)(t.code,{children:`options.title`}),`內容；當`,(0,g.jsx)(t.code,{children:`style`}),`設定為switch時，則會自動判定`,(0,g.jsx)(t.code,{children:`|`}),`前後的文字並做切換；其他樣式類型時則是切換`,(0,g.jsx)(t.code,{children:`""`}),`及title內容`]})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`activeImg`}),(0,g.jsx)(`td`,{children:`-`}),(0,g.jsx)(`td`,{children:`string`}),(0,g.jsxs)(`td`,{children:[`當前顯示的圖示，`,(0,g.jsx)(t.code,{children:`style`}),`為toggle時才會出現`]})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`container`}),(0,g.jsxs)(`td`,{children:[(0,g.jsx)(t.code,{children:`<label/>`}),`元素`]}),(0,g.jsx)(`td`,{children:`HTMLElement`}),(0,g.jsx)(`td`,{children:(0,g.jsxs)(t.p,{children:[`容器節點，如果沒有特別指定就會是`,(0,g.jsx)(t.code,{children:`<label/>`})]})})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`defaultTheme`}),(0,g.jsx)(`td`,{children:`--themeColor`}),(0,g.jsx)(`td`,{children:`string`}),(0,g.jsx)(`td`,{children:`初始主題色系`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`label`}),(0,g.jsxs)(`td`,{children:[(0,g.jsx)(t.code,{children:`<label/>`}),`元素`]}),(0,g.jsx)(`td`,{children:`HTMLElement`}),(0,g.jsxs)(`td`,{children:[`記錄此元件的`,(0,g.jsx)(t.code,{children:`<label/>`}),`節點`]})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`name`}),(0,g.jsx)(`td`,{children:`null`}),(0,g.jsx)(`td`,{children:`string`}),(0,g.jsxs)(`td`,{children:[`記錄此元件`,(0,g.jsx)(t.code,{children:`<input/>`}),`標籤的name屬性`]})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`options`}),(0,g.jsxs)(`td`,{children:[(0,g.jsx)(t.code,{children:`options`}),`參數`]}),(0,g.jsx)(`td`,{children:`object`}),(0,g.jsx)(`td`,{children:`傳入的設定值，詳細屬性可以參考上方options參數說明處`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`originParent`}),(0,g.jsx)(`td`,{children:`null`}),(0,g.jsx)(`td`,{children:`HTMLElement`}),(0,g.jsxs)(`td`,{children:[`如果初始化時帶入的`,(0,g.jsx)(t.code,{children:`element`}),`節點有父元素，則預設為該元素；沒有的話就會是null`]})]})]})]})}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsxs)(t.blockquote,{children:[`
`,(0,g.jsx)(t.h3,{id:`methods-方法`,children:`methods 方法`}),`
`,(0,g.jsx)(t.p,{children:`提供外部控制方法調整內部屬性值`}),`
`]}),`
`,(0,g.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`Quick reference`}),`
`,(0,g.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,g.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{className:`text-center`,children:[(0,g.jsx)(`td`,{children:`methods`}),(0,g.jsx)(`td`,{children:`descriptions`}),(0,g.jsx)(`td`,{children:`inherit`})]})}),(0,g.jsxs)(`tbody`,{children:[(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`.el`})}),(0,g.jsx)(`td`,{children:`取得該元件渲染的DOM節點元素`}),(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`BaseComponent`})})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`.changeTheme(HEXstring)`})}),(0,g.jsx)(`td`,{children:`更改主題色`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`.setDisabled(boolean)`})}),(0,g.jsx)(`td`,{children:`更改顯示/操作與否`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`.getValue()`})}),(0,g.jsxs)(`td`,{children:[`回傳`,(0,g.jsx)(t.code,{children:`<input/>`}),` value值`]})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`.getChecked()`})}),(0,g.jsxs)(`td`,{children:[`回傳`,(0,g.jsx)(t.code,{children:`<input/>`}),` checked值`]})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`.setValue(value)`})}),(0,g.jsxs)(`td`,{children:[`傳入要設定`,(0,g.jsx)(t.code,{children:`<input/>`}),` value值`]})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`.setChecked(boolean)`})}),(0,g.jsx)(`td`,{children:`傳入要設定checked值`})]})]})]})}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled methods`,children:`.el`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Returns`}),(0,g.jsx)(t.br,{}),`
`,`回傳主元件的DOM節點(HTMLElement) - `,(0,g.jsx)(t.code,{children:`<input/>`})]}),`
`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`Checkbox.el; 
`})}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled methods`,children:`.changeTheme(HEXstring)`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Parameters`}),(0,g.jsx)(t.br,{}),`
`,`參數可以放入任一HEX色碼，用來改變主題色`]}),`
`]}),`
`,(0,g.jsx)(`div`,{className:`sb-unstyled alert-msg`,children:`當disabled狀態為true時禁止修改(會跳出錯誤通知)`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:` Checkbox.changeTheme("#8ecb28"); 
`})}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled methods`,children:`.setDisabled(boolean)`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled methods`,children:`.setValue(value)`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled methods`,children:`.setChecked(boolean)`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Parameters`}),(0,g.jsx)(t.br,{}),`
`,`傳入boolean值更改disabled、checked狀態；傳入任一值更改`,(0,g.jsx)(t.code,{children:`<input/>`}),`的value值`]}),`
`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`// ...init Checkbox

Checkbox.setDisabled(false);
Checkbox.setValue(value);
Checkbox.setChecked(true);

`})}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled methods`,children:`.getValue()`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled methods`,children:`.getChecked()`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Returns`}),(0,g.jsx)(t.br,{}),`
`,`分別回傳`,(0,g.jsx)(t.code,{children:`<input/>`}),`的value及checked值`]}),`
`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`Checkbox.getValue(); //""
Checkbox.getChecked(); //true
`})}),`
`,(0,g.jsx)(t.hr,{}),`
`,(0,g.jsx)(t.h1,{id:`checkboxgroup`,children:`CheckboxGroup`}),`
`,(0,g.jsxs)(t.blockquote,{children:[`
`,(0,g.jsx)(t.p,{children:`可以配合Checkbox元件做使用，需要先將要放入的checkbox初始化再放入`}),`
`]}),`
`,(0,g.jsxs)(t.p,{children:[`初始化 CheckboxGroup 元件，帶入 `,(0,g.jsx)(t.code,{children:`name`}),`、`,(0,g.jsx)(t.code,{children:`container`}),` 參數`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`new CheckboxGroup(name, container);
`})}),`
`,(0,g.jsxs)(t.blockquote,{children:[`
`,(0,g.jsx)(t.h3,{id:`parameters-參數設定-1`,children:`parameters 參數設定`}),`
`]}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(`span`,{className:`sb-unstyled font-black`,children:`name`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`string`}),(0,g.jsx)(t.br,{}),`
`,`群組名稱`]}),`
`,(0,g.jsx)(`br`,{}),`
`]}),`
`,(0,g.jsxs)(t.li,{children:[`
`,(0,g.jsx)(`span`,{className:`sb-unstyled font-black`,children:`container`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`}),`
`,(0,g.jsxs)(t.p,{children:[`傳入`,(0,g.jsx)(t.code,{children:`<ul/>`}),`標籤元素節點，如果沒有傳入則會自動建立一個`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-html`,children:`<!-- 基本靜態結構 -->
<ul class="checkbox-group">
  <li class="item">
    <label>
      <input type="checkbox" class="checkbox" />
      文字內容
    </label>
  </li>
</ul>
`})}),`
`]}),`
`]}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsxs)(t.blockquote,{children:[`
`,(0,g.jsx)(t.h3,{id:`properties-內部屬性-1`,children:`properties 內部屬性`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled data-type readonly`,children:`Read-only`}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled`,children:`可以操作的屬性皆須使用methods來更改`}),`
`]}),`
`,(0,g.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,g.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{className:`text-center`,children:[(0,g.jsx)(`td`,{children:`property`}),(0,g.jsx)(`td`,{children:`default`}),(0,g.jsx)(`td`,{children:`type`}),(0,g.jsx)(`td`,{children:`descriptions`})]})}),(0,g.jsxs)(`tbody`,{children:[(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,g.jsx)(`td`,{children:`CheckboxGroup`}),(0,g.jsx)(`td`,{children:`string`}),(0,g.jsxs)(`td`,{children:[`繼承自`,(0,g.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`groupContainer`}),(0,g.jsxs)(`td`,{children:[(0,g.jsx)(t.code,{children:`<ul/>`}),`標籤元素`]}),(0,g.jsx)(`td`,{children:`HTMLElement`}),(0,g.jsx)(`td`,{children:`容器元素節點`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`groupName`}),(0,g.jsx)(`td`,{children:`-`}),(0,g.jsx)(`td`,{children:`string`}),(0,g.jsx)(`td`,{children:`此元件群組名稱`})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{className:`font-bold`,children:`items`}),(0,g.jsx)(`td`,{children:`[]`}),(0,g.jsx)(`td`,{children:`array`}),(0,g.jsx)(`td`,{children:(0,g.jsx)(t.p,{children:`儲存所有子元件(Checkbox)`})})]})]})]})}),`
`,(0,g.jsx)(`br`,{}),`
`,(0,g.jsxs)(t.blockquote,{children:[`
`,(0,g.jsx)(t.h3,{id:`methods-方法-1`,children:`methods 方法`}),`
`,(0,g.jsx)(t.p,{children:`提供外部控制方法調整內部屬性值`}),`
`]}),`
`,(0,g.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`Quick reference`}),`
`,(0,g.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,g.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{className:`text-center`,children:[(0,g.jsx)(`td`,{children:`methods`}),(0,g.jsx)(`td`,{children:`descriptions`}),(0,g.jsx)(`td`,{children:`inherit`})]})}),(0,g.jsxs)(`tbody`,{children:[(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`.el`})}),(0,g.jsx)(`td`,{children:`取得該元件渲染的DOM節點元素`}),(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`BaseComponent`})})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`.getValue(name)`})}),(0,g.jsxs)(`td`,{children:[`取得群組內對應name屬性的`,(0,g.jsx)(t.code,{children:`<input/>`}),`value-pair 物件`]})]}),(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:(0,g.jsx)(t.code,{children:`.addCheckItems(item)`})}),(0,g.jsx)(`td`,{children:`在群組內加入新的Checkbox元件`})]})]})]})}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled methods`,children:`.el`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Returns`}),(0,g.jsx)(t.br,{}),`
`,`回傳主元件的DOM節點(HTMLElement) - `,(0,g.jsx)(t.code,{children:`<ul/>`})]}),`
`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`CheckboxGroup.el; 
`})}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled methods`,children:`.getValue(name)`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Paramenters`}),(0,g.jsx)(t.br,{}),`
`,`可以單獨傳入指定 name attribute`]}),`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Returns`}),(0,g.jsx)(t.br,{}),`
`,`如果有傳入指定參數則會回傳一組對應`,(0,g.jsx)(t.code,{children:`name`}),`的 name-value pair 物件，可以作為後續使用；沒有傳入參數則是回傳一個包含所有 checkbox instance 的 name-value pair 的陣列。`]}),`
`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`CheckboxGroup.getValue("test"); //{name: "test", value: ""}
CheckboxGroup.getValue(); //[{name: "test", value: ""},{name: "A", value: "A"}]
`})}),`
`,(0,g.jsx)(`span`,{className:`sb-unstyled methods`,children:`.addCheckItems(item)`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.strong,{children:`Paramenters`}),(0,g.jsx)(t.br,{}),`
`,`可以傳入一個或多個 Checkbox 元件，如果傳入多個元件則要以`,(0,g.jsx)(t.strong,{children:`陣列`}),`形式傳入。`]}),`
`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`let child = new Checkbox(options);
CheckboxGroup.addCheckItems(child);
`})}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-javascript`,children:`let child1 = new Checkbox(options);
let child2 = new Checkbox(options);
let child3 = new Checkbox(options);

CheckboxGroup.addCheckItems([child1, child2, child3]);
`})})]})}function h(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=o(),c(),t()})))()}var v,y,b,x,S,C;function w(){return(w=e((()=>{p(),_(),{fn:v,expect:y}=__STORYBOOK_MODULE_TEST__,{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`Components/Checkbox`,tags:[`autodocs`],parameters:{docs:{source:{format:!0,language:`html`},page:h}},render:({...e})=>{let t=f({...e});return t.UItype===`Checkbox`?t.container:t.groupContainer},argTypes:{checked:{control:`boolean`,description:`checked狀態`,table:{category:`options parameter`,readOnly:!0,defaultValue:{summary:`false`},type:{summary:`boolean`}}},value:{control:`text`,description:"`<input/>`的 value 值，如果沒有特別設定則是直接套用`title`的值",table:{category:`options parameter`,defaultValue:{summary:`null`},type:{summary:`string | number`}}},name:{control:`text`,description:`input標籤的name attribute`,table:{category:`options parameter`,type:{summary:`string`}}},theme:{control:`color`,description:`色系控制，可以傳入HEX色碼`,table:{category:`options parameter`,subcategory:`Inherits BaseComponent`,type:{summary:`string`}}},checkImg:{control:`select`,options:[`眼睛組合`,`愛心組合`,`信封組合`],mapping:{眼睛組合:[`../../../../public/eye.svg`,`../../../../public/eye-off.svg`],愛心組合:[`../../../../public/heart.svg`,`../../../../public/heart-off.svg`],信封組合:[`../../../../public/envelope.svg`,`../../../../public/envelope-open.svg`]},if:{arg:`style`,eq:`toggle`},description:`[僅限toggle樣式更改] 更換為自訂圖標，傳入自訂圖標檔案路徑，以陣列傳入`,table:{category:`options parameter`,defaultValue:{summary:`eye`},type:{summary:`[./path/img.png,./path/img2.png]`}}},classes:{control:{type:`array`},description:`checkbox classes，每個class以tailwindcss property放入`,table:{category:`options parameter`,defaultValue:{summary:`checkbox`},type:{summary:`array`}}},disabled:{control:{type:`boolean`},description:`是否可操作狀態(要注意和checked是不同意義)`,table:{category:`options parameter`,defaultValue:{summary:`false`},type:{summary:`boolean`}}},title:{control:{type:`text`},if:{arg:`style`,neq:`toggle`},description:"`<label/>`文字內容，當style為toggle時則不會顯示",table:{category:`options parameter`,defaultValue:{summary:`null`},type:{summary:`string`}}},style:{control:`select`,options:[`default`,`switch`,`toggle`,`tag`],description:`樣式類型`,table:{category:`options parameter`,defaultValue:{summary:`default`},type:{summary:`string`}}},handlers:{action:`change`,control:`function`,description:`作為change事件函式傳入`,table:{category:`options parameter`,defaultValue:{summary:`null`},type:{summary:`function`}}}},args:{checkboxGroup:!1}},S={args:{name:`testing`,style:`default`,title:`一般勾選框`,value:`default`,checked:!0,theme:`#61d45b`,checkImg:[`/eye.svg`,`/eye-off.svg`],classes:[`checkbox`],disabled:!1}},C=[`defaultCheckbox`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: "testing",
    //name attribute
    style: "default",
    //樣式
    title: "一般勾選框",
    //文字
    value: "default",
    //<input/>的value attribute
    checked: true,
    theme: "#61d45b",
    //預設顏色
    checkImg: ["/eye.svg", "/eye-off.svg"],
    //check圖標
    classes: ["checkbox"],
    disabled: false
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...S.parameters?.docs?.source}}}})))()}w();export{C as __namedExportsOrder,x as default,S as defaultCheckbox};