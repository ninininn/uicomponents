import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,o as n,r,s as i,u as a}from"./blocks-gwT75y1v.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{n as l,t as u}from"./Dropdown-D5MClaEP.js";var d;function f(){return(f=e((()=>{l(),d=({target:e,trigger:t,bindFilteroption:n={},filter:r,filterHandler:i,changeHandler:a=null})=>{if(n.filter=r,n.filterHandler=i,Array.isArray(t))return new u(e,t,n,a);{let r=document.createElement(`div`);r.innerHTML=`
            <h3 class="input-label">title</h3>
            <label class="label input-label">
                <input type="text" class="dropdown-input" />
            </label>
            <ul id="${e}" class="dropdown-item"></ul>
            <select id="${e.split(`_`)[0]}" class="select dropdown-select">
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
            </select>
        `;let i=r.querySelector(`#${e}`),o=i.previousElementSibling.querySelector(`${t}`);return new u(i,o,n,a)}}})))()}function p(e){let t={blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{isTemplate:!0,title:`How to use Dropdown`}),`
`,(0,h.jsx)(a,{}),`
`,(0,h.jsxs)(t.p,{children:[`適用 : 下拉選單項目；繼承自 Flowbite `,(0,h.jsx)(t.code,{children:`Dropdown`}),` 元件`]}),`
`,(0,h.jsx)(i,{}),`
`,(0,h.jsx)(t.h1,{id:`controls`,children:`Controls`}),`
`,(0,h.jsxs)(t.p,{children:[`這邊僅列出幾項可設定參數值，內部屬性請參考`,(0,h.jsx)(t.strong,{children:`properties內部屬性`}),`區塊。`]}),`
`,(0,h.jsx)(r,{}),`
`,(0,h.jsx)(t.hr,{}),`
`,(0,h.jsx)(t.h1,{id:`usage-api`,children:`Usage API`}),`
`,(0,h.jsxs)(t.p,{children:[`初始化 Dropdown 元件，帶入 `,(0,h.jsx)(t.code,{children:`target`}),`、`,(0,h.jsx)(t.code,{children:`trigger`}),`、`,(0,h.jsx)(t.code,{children:`options`}),` 等參數，並設定內部屬性`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`new Dropdown(target, trigger, (bindFilteroption = {}), changeHandler);
`})}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(t.h3,{id:`initial-初始化`,children:`Initial 初始化`}),`
`,(0,h.jsx)(t.p,{children:`使用 Dropdown 元件時，初始化方式可以分為兩種 : (主要差異在target及trigger帶入的值)`}),`
`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.strong,{children:`有已知節點`}),` : 帶入已知 DOM 節點
已經有靜態節點或是可以抓取到的DOM節點時，直接作為參數帶入綁定`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`let container = createElement("div");
container.innerHTML = \`
        <h3 class="input-label">title</h3>
        <label class="label input-label">
            <input type="text" class="dropdown-input" />
        </label>
        <ul id="test_dropdown" class="dropdown-item"></ul>
        <select id="test" class="select dropdown-select">
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
        </select>
  \`;

// container is the exist node
let target = document.getElementById("test_dropdown");
let trigger = target.previousSilblingElement.querySelector(".dropdown-input");

let dropdownInstance = new Dropdown(target, trigger);
`})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(t.p,{children:(0,h.jsxs)(t.strong,{children:[`target 直接帶入要自訂id、trigger 則帶入要渲染的選項`,(0,h.jsx)(t.code,{children:`selectOptions`}),`陣列`]})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`const selectOptions = [
  { value: 1, text: "One" },
  { value: 2, text: "Two" },
];
let dropdownInstance = new Dropdown("test_2", selectOptions);
`})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(t.h3,{id:`parameters-參數設定`,children:`parameters 參數設定`}),`
`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(`span`,{className:`sb-unstyled font-black`,children:`target`}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-html`,children:`<!-- 基本下拉選單結構 -->
<h3 class="input-label">title</h3>
<label class="label input-label">
  <input type="text" class="dropdown-input" />
</label>
<ul id="example_dropdown" class="dropdown-item"></ul>
<select id="example" class="select dropdown-select"></select>
`})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(`span`,{className:`sb-unstyled font-black`,children:`trigger`}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`}),`
`,(0,h.jsx)(`span`,{children:` | `}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled data-type arr`,children:`Array`}),(0,h.jsx)(t.br,{}),`
`,`trigger 可以是HTMLElement，或是把要設定的選項物件以陣列形式傳入 :`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`const selectOptions=[
  {value:"a",text:"A"},
  {value:"b",text:"B"},
  {value:"c",text:"C"},
];
`})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(`span`,{className:`sb-unstyled font-black`,children:`changeHandler`}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled data-type`,children:`function`}),`
`,(0,h.jsxs)(t.p,{children:[`作為 onChange 事件函式使用，會綁定到`,(0,h.jsx)(t.code,{children:`<select>`}),`元素身上`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`function testChange() {
  let value = this.value;
  console.log("value:", value);
}

// trigger change event anywhere
// value: "A"
`})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(`span`,{className:`sb-unstyled font-black`,children:`bindFilteroption`}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`//基本 filtHandler 函式，為打字過濾篩選效果
function filtItem() {
  let inputValue = this.value;
  let ownli = this.parentNode.parentNode.querySelectorAll(".dropdown-item li");
  ownli.forEach((li) => {
    li.textContent.includes(inputValue)
      ? li.classList.remove("hidden")
      : li.classList.add("hidden");
  });
}

const bindFilteroption = { filter: true, filterHandler: filtItem };

let instance = new Dropdown(target, trigger, filtOption);
`})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(t.h3,{id:`properties-內部屬性`,children:`properties 內部屬性`}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled data-type readonly`,children:`Read-only`}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled`,children:`可以操作的屬性皆須使用methods來更改`}),`
`]}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,h.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{className:`text-center`,children:[(0,h.jsx)(`td`,{children:`property`}),(0,h.jsx)(`td`,{children:`default`}),(0,h.jsx)(`td`,{children:`type`}),(0,h.jsx)(`td`,{children:`descriptions`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,h.jsx)(`td`,{children:`Dropdown`}),(0,h.jsx)(`td`,{children:`string`}),(0,h.jsxs)(`td`,{children:[`繼承自`,(0,h.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`bindSelect`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`<select>`})}),(0,h.jsx)(`td`,{children:`HTMLElement`}),(0,h.jsxs)(`td`,{children:[`該下拉選單綁定的`,(0,h.jsx)(t.code,{children:`<select>`}),`節點元素`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`dropdownChildren`}),(0,h.jsx)(`td`,{children:`[]`}),(0,h.jsx)(`td`,{children:`HTMLCollection`}),(0,h.jsxs)(`td`,{children:[`紀錄目前`,(0,h.jsx)(t.code,{children:`<ul>`}),`內所有子節點`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`optValuePair`}),(0,h.jsx)(`td`,{children:`null`}),(0,h.jsx)(`td`,{children:`Object`}),(0,h.jsx)(`td`,{children:(0,h.jsxs)(t.p,{children:[`紀錄每個選項的 value-text 對應值物件；value 為`,(0,h.jsx)(t.code,{children:`<option>`}),`的value值、text 則為`,(0,h.jsx)(t.code,{children:`<option>`}),`的節點文字`]})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`ifAll`}),(0,h.jsx)(`td`,{children:`null`}),(0,h.jsx)(`td`,{children:`Boolean`}),(0,h.jsx)(`td`,{children:`如果原始靜態html的預設值是不拘/全部/全縣，才會加入這個屬性`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`containerEl`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`<div>`})}),(0,h.jsx)(`td`,{children:`HTMLElement`}),(0,h.jsxs)(`td`,{children:[`預設會去抓target的parentElement，如果傳入的參數不是DOM節點，會在生成時建立一個`,(0,h.jsx)(t.code,{children:`<div>`}),`並包覆所有子節點作為parentElement`]})]})]})]})}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(t.h3,{id:`methods-方法`,children:`methods 方法`}),`
`,(0,h.jsx)(t.p,{children:`提供外部控制方法調整內部屬性值`}),`
`]}),`
`,(0,h.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`Quick reference`}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,h.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{className:`text-center`,children:[(0,h.jsx)(`td`,{children:`methods`}),(0,h.jsx)(`td`,{children:`descriptions`}),(0,h.jsx)(`td`,{children:`inherit`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:(0,h.jsx)(t.code,{children:`.show()`})}),(0,h.jsx)(`td`,{children:`顯示綁定的下拉選單`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`flowbiteDropdown`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:(0,h.jsx)(t.code,{children:`.hide()`})}),(0,h.jsx)(`td`,{children:`隱藏綁定的下拉選單`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`flowbiteDropdown`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:(0,h.jsx)(t.code,{children:`.toggle()`})}),(0,h.jsx)(`td`,{children:`切換綁定的下拉選單顯示與否`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`flowbiteDropdown`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.el`})}),(0,h.jsx)(`td`,{children:`回傳該元件渲染的 DOM 節點元素`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`BaseComponent`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.getdropDownInstance()`})}),(0,h.jsx)(`td`,{children:`回傳該元件instance object`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.getDropdownChildren()`})}),(0,h.jsxs)(`td`,{children:[`回傳 `,(0,h.jsx)(t.code,{children:`dropdownChildren`}),` 屬性`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.getTargetDropdown()`})}),(0,h.jsxs)(`td`,{children:[`回傳 `,(0,h.jsx)(t.code,{children:`<ul>`}),` 節點`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.getBindSelect()`})}),(0,h.jsxs)(`td`,{children:[`回傳 `,(0,h.jsx)(t.code,{children:`<select>`}),` 節點`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.clearDropdown()`})}),(0,h.jsxs)(`td`,{children:[`清除 `,(0,h.jsx)(t.code,{children:`<ul>`}),`&`,(0,h.jsx)(t.code,{children:`<select>`}),`子節點`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.renderDropdownChildren(...args)`})}),(0,h.jsxs)(`td`,{children:[`重新渲染節點(單純渲染節點、不改value)；通常會接著搭配 `,(0,h.jsx)(t.code,{children:`.updateValue()`}),`使用`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.updateValue()`})}),(0,h.jsxs)(`td`,{children:[`更新預設 `,(0,h.jsx)(t.code,{children:`<select>`}),` 的value值(通常render完設定為第一項，如果`,(0,h.jsx)(t.code,{children:`<select>`}),`本身有selected option 則以它為主)`]})]})]})]})}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled methods`,children:`.show()`}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled methods`,children:`.hide()`}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled methods`,children:`.toggle()`}),`
`,(0,h.jsx)(`a`,{className:`sb-unstyled linkout`,href:`https://flowbite.com/docs/components/dropdowns/`,children:` more in flowbite docs`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`let dropdownInstance = new Dropdown(target, trigger);

dropdownInstance.show(); //list show
dropdownInstance.hide(); //list hide
dropdownInstance.toggle(); //switch list visible
`})}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled methods`,children:`.getDropdownChildren()`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Returns`}),(0,h.jsx)(t.br,{}),`
`,`回傳`,(0,h.jsx)(t.code,{children:`dropdownChildren`}),`屬性`]}),`
`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`let children = Dropdown.getDropdownChildren();
`})}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled methods`,children:`.getTargetDropdown()`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Returns`}),(0,h.jsx)(t.br,{}),`
`,`回傳targetEl屬性(也就是`,(0,h.jsx)(t.code,{children:`<ul>`}),`)`]}),`
`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`let target = Dropdown.getTargetDropdown();
`})}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled methods`,children:`.getBindSelect()`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Returns`}),(0,h.jsx)(t.br,{}),`
`,`回傳bindSelect屬性(也就是`,(0,h.jsx)(t.code,{children:`<select>`}),`)`]}),`
`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`let select = Dropdown.getBindSelect();
`})}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled methods`,children:`.clearDropdown()`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`Dropdown.clearDropdown(); //children will be clear 
`})}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled methods`,children:`.renderDropdownChildren(newliChild, newoptChild, text, optValue = null)`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`Parameters`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`newChild`}),`: `,(0,h.jsx)(t.code,{children:`<li>`}),`節點`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`text`}),`: 選項文字`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`newoptChild`}),`:  `,(0,h.jsx)(t.code,{children:`<option>`}),`節點`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`optValue`}),`: 指定 `,(0,h.jsx)(t.code,{children:`<option>`}),` value 值`]}),`
`]}),`
`]}),`
`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`let li = document.createElement("li");
let opt = document.createElement("option");

Dropdown.renderDropdownChildren(li, "AA", opt, 1);
`})}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled methods`,children:`.updateValue()`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`//previous renderChildren operations... 
Dropdown.updateValue();
`})})]})}function m(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=o(),c(),t()})))()}function _(){let e=this.value;this.parentNode.parentNode.querySelectorAll(`.dropdown-item li`).forEach(t=>{t.textContent.includes(e)?t.classList.remove(`hidden`):t.classList.add(`hidden`)})}function v(){let e=this.value;console.log(e)}var y,b,x,S,C,w;function T(){return(T=e((()=>{f(),g(),{fn:y}=__STORYBOOK_MODULE_TEST__,{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`Components/Dropdown`,tags:[`autodocs`],parameters:{docs:{source:{format:!0,language:`html`},page:m}},render:({...e})=>{let t=d({...e});return t.containerEl.classList.add(`flex`,`gap-3`,`items-center`),t.containerEl},argTypes:{target:{control:`string`,type:{required:!0},description:"目標節點元素(也就是`<ul>`)，可以直接帶入節點或是帶入要命名的id名稱",table:{readOnly:!0,defaultValue:{summary:`<ul> element | id`},type:{summary:`HTNLElement`}}},trigger:{control:`string`,type:{required:!0},description:"觸發元素，如果是下拉選單則是指`<input/>`元素",table:{defaultValue:{summary:`element | array`},type:{summary:`HTNLElement`}}},selectOptions:{if:{arg:`trigger`,truthy:!1},control:`object`,description:`trigger可以帶入此選項陣列，對應放入要渲染的節點`,table:{type:{summary:`array`}}},bindFilteroption:{control:{type:`object`},description:"開啟過濾功能及相關設定，內部有 `filter` 及 `filtHandler` 屬性",table:{defaultValue:{summary:`null`},type:{summary:`object`}}},filter:{if:{arg:`bindFilteroption`,truthy:!0},control:{type:`boolean`},description:`是否開啟過濾功能`,table:{category:`bindFilteroption`,defaultValue:{summary:`false`},type:{summary:`boolean`}}},filterHandler:{if:{arg:`bindFilteroption`,truthy:!0},control:{type:`function`},description:`過濾功能操作函式`,table:{category:`bindFilteroption`,defaultValue:{summary:`null`},type:{summary:`function`}}},changeHandler:{control:{type:`function`},description:`作為change事件函式來綁定`,table:{defaultValue:{summary:`null`},type:{summary:`function`}}}},args:{}},S=[{value:`1`,text:`近1年交易`},{value:`2`,text:`近2年交易`},{value:`3`,text:`近3年交易`},{value:`4`,text:`近4年交易`},{value:`5`,text:`近5年交易`},{value:`0`,text:`交易時間不拘`,selected:!0}],C={args:{target:`example_dropdown`,trigger:S,bindFilteroption:{filter:!1,filterHandler:_},filter:!1,filterHandler:_,changeHandler:v}},w=[`defaultDropdown`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    target: "example_dropdown",
    trigger: example_selectOptions,
    bindFilteroption: {
      filter: false,
      filterHandler: filtItem
    },
    filter: false,
    filterHandler: filtItem,
    changeHandler: changeHandler
  }
}`,...C.parameters?.docs?.source}}}})))()}T();export{w as __namedExportsOrder,x as default,C as defaultDropdown};