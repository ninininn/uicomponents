import{u as d,j as e,M as t,T as r,P as c,C as i}from"./iframe-hvrkV3Yv.js";import"./preload-helper-DLLWEBaG.js";function l(s){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{isTemplate:!0,title:"How to use Dropdown"}),`
`,e.jsx(r,{}),`
`,e.jsxs(n.p,{children:["適用 : 下拉選單項目；繼承自 Flowbite ",e.jsx(n.code,{children:"Dropdown"})," 元件"]}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h1,{id:"controls",children:"Controls"}),`
`,e.jsxs(n.p,{children:["這邊僅列出幾項可設定參數值，內部屬性請參考",e.jsx(n.strong,{children:"properties內部屬性"}),"區塊。"]}),`
`,e.jsx(i,{}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"usage-api",children:"Usage API"}),`
`,e.jsxs(n.p,{children:["初始化 Dropdown 元件，帶入 ",e.jsx(n.code,{children:"target"}),"、",e.jsx(n.code,{children:"trigger"}),"、",e.jsx(n.code,{children:"options"})," 等參數，並設定內部屬性"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`new Dropdown(target, trigger, (bindFilteroption = {}), changeHandler);
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.h3,{id:"initial-初始化",children:"Initial 初始化"}),`
`,e.jsx(n.p,{children:"使用 Dropdown 元件時，初始化方式可以分為兩種 : (主要差異在target及trigger帶入的值)"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"有已知節點"}),` : 帶入已知 DOM 節點
已經有靜態節點或是可以抓取到的DOM節點時，直接作為參數帶入綁定`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let container = createElement("div");
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
`,e.jsx("br",{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["target 直接帶入要自訂id、trigger 則帶入要渲染的選項",e.jsx(n.code,{children:"selectOptions"}),"陣列"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const selectOptions = [
  { value: 1, text: "One" },
  { value: 2, text: "Two" },
];
let dropdownInstance = new Dropdown("test_2", selectOptions);
`})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.h3,{id:"parameters-參數設定",children:"parameters 參數設定"}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("span",{className:"sb-unstyled font-black",children:"target"}),`
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- 基本下拉選單結構 -->
<h3 class="input-label">title</h3>
<label class="label input-label">
  <input type="text" class="dropdown-input" />
</label>
<ul id="example_dropdown" class="dropdown-item"></ul>
<select id="example" class="select dropdown-select"></select>
`})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx("span",{className:"sb-unstyled font-black",children:"trigger"}),`
`,e.jsx("span",{className:"sb-unstyled data-type element",children:"HTMLElement"}),`
`,e.jsx("span",{children:" | "}),`
`,e.jsx("span",{className:"sb-unstyled data-type arr",children:"Array"}),e.jsx(n.br,{}),`
`,"trigger 可以是HTMLElement，或是把要設定的選項物件以陣列形式傳入 :"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const selectOptions=[
  {value:"a",text:"A"},
  {value:"b",text:"B"},
  {value:"c",text:"C"},
];
`})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("span",{className:"sb-unstyled font-black",children:"changeHandler"}),`
`,e.jsx("span",{className:"sb-unstyled data-type",children:"function"}),`
`,e.jsxs(n.p,{children:["作為 onChange 事件函式使用，會綁定到",e.jsx(n.code,{children:"<select>"}),"元素身上"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function testChange() {
  let value = this.value;
  console.log("value:", value);
}

// trigger change event anywhere
// value: "A"
`})}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("span",{className:"sb-unstyled font-black",children:"bindFilteroption"}),`
`,e.jsx("span",{className:"sb-unstyled data-type",children:"object"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`//基本 filtHandler 函式，為打字過濾篩選效果
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
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.h3,{id:"properties-內部屬性",children:"properties 內部屬性"}),`
`,e.jsx("span",{className:"sb-unstyled data-type readonly",children:"Read-only"}),`
`,e.jsx("span",{className:"sb-unstyled",children:"可以操作的屬性皆須使用methods來更改"}),`
`]}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"property"}),e.jsx("td",{children:"default"}),e.jsx("td",{children:"type"}),e.jsx("td",{children:"descriptions"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"UItype"}),e.jsx("td",{children:"Dropdown"}),e.jsx("td",{children:"string"}),e.jsxs("td",{children:["繼承自",e.jsx(n.code,{children:"BaseComponent"}),"的屬性，代表該元件名稱"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"bindSelect"}),e.jsx("td",{children:e.jsx(n.code,{children:"<select>"})}),e.jsx("td",{children:"HTMLElement"}),e.jsxs("td",{children:["該下拉選單綁定的",e.jsx(n.code,{children:"<select>"}),"節點元素"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"dropdownChildren"}),e.jsx("td",{children:"[]"}),e.jsx("td",{children:"HTMLCollection"}),e.jsxs("td",{children:["紀錄目前",e.jsx(n.code,{children:"<ul>"}),"內所有子節點"]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"optValuePair"}),e.jsx("td",{children:"null"}),e.jsx("td",{children:"Object"}),e.jsx("td",{children:e.jsxs(n.p,{children:["紀錄每個選項的 value-text 對應值物件；value 為",e.jsx(n.code,{children:"<option>"}),"的value值、text 則為",e.jsx(n.code,{children:"<option>"}),"的節點文字"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"ifAll"}),e.jsx("td",{children:"null"}),e.jsx("td",{children:"Boolean"}),e.jsx("td",{children:"如果原始靜態html的預設值是不拘/全部/全縣，才會加入這個屬性"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:"containerEl"}),e.jsx("td",{children:e.jsx(n.code,{children:"<div>"})}),e.jsx("td",{children:"HTMLElement"}),e.jsxs("td",{children:["預設會去抓target的parentElement，如果傳入的參數不是DOM節點，會在生成時建立一個",e.jsx(n.code,{children:"<div>"}),"並包覆所有子節點作為parentElement"]})]})]})]})}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.h3,{id:"methods-方法",children:"methods 方法"}),`
`,e.jsx(n.p,{children:"提供外部控制方法調整內部屬性值"}),`
`]}),`
`,e.jsx("p",{className:"sb-unstyled font-bold text-yellow-500",children:"Quick reference"}),`
`,e.jsx("div",{className:"sb-unstyled table-container overflow-hidden",children:e.jsxs("table",{className:"sb-unstyled table-content",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{children:"methods"}),e.jsx("td",{children:"descriptions"}),e.jsx("td",{children:"inherit"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:e.jsx(n.code,{children:".show()"})}),e.jsx("td",{children:"顯示綁定的下拉選單"}),e.jsx("td",{children:e.jsx(n.code,{children:"flowbiteDropdown"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:e.jsx(n.code,{children:".hide()"})}),e.jsx("td",{children:"隱藏綁定的下拉選單"}),e.jsx("td",{children:e.jsx(n.code,{children:"flowbiteDropdown"})})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"font-bold",children:e.jsx(n.code,{children:".toggle()"})}),e.jsx("td",{children:"切換綁定的下拉選單顯示與否"}),e.jsx("td",{children:e.jsx(n.code,{children:"flowbiteDropdown"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:".getElem()"})}),e.jsx("td",{children:"回傳該元件渲染的 DOM 節點元素"}),e.jsx("td",{children:e.jsx(n.code,{children:"BaseComponent"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:".getdropDownInstance()"})}),e.jsx("td",{children:"回傳該元件instance object"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:".getDropdownChildren()"})}),e.jsxs("td",{children:["回傳 ",e.jsx(n.code,{children:"dropdownChildren"})," 屬性"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:".getTargetDropdown()"})}),e.jsxs("td",{children:["回傳 ",e.jsx(n.code,{children:"<ul>"})," 節點"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:".getBindSelect()"})}),e.jsxs("td",{children:["回傳 ",e.jsx(n.code,{children:"<select>"})," 節點"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:".clearDropdown()"})}),e.jsxs("td",{children:["清除 ",e.jsx(n.code,{children:"<ul>"}),"&",e.jsx(n.code,{children:"<select>"}),"子節點"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:".renderDropdownChildren(...args)"})}),e.jsxs("td",{children:["重新渲染節點(單純渲染節點、不改value)；通常會接著搭配 ",e.jsx(n.code,{children:".updateValue()"}),"使用"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(n.code,{children:".updateValue()"})}),e.jsxs("td",{children:["更新預設 ",e.jsx(n.code,{children:"<select>"})," 的value值(通常render完設定為第一項，如果",e.jsx(n.code,{children:"<select>"}),"本身有selected option 則以它為主)"]})]})]})]})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".show()"}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".hide()"}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".toggle()"}),`
`,e.jsx("a",{className:"sb-unstyled linkout",href:"https://flowbite.com/docs/components/dropdowns/",children:" more in flowbite docs"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let dropdownInstance = new Dropdown(target, trigger);

dropdownInstance.show(); //list show
dropdownInstance.hide(); //list hide
dropdownInstance.toggle(); //switch list visible
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".getDropdownChildren()"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Returns"}),e.jsx(n.br,{}),`
`,"回傳",e.jsx(n.code,{children:"dropdownChildren"}),"屬性"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let children = Dropdown.getDropdownChildren();
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".getTargetDropdown()"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Returns"}),e.jsx(n.br,{}),`
`,"回傳targetEl屬性(也就是",e.jsx(n.code,{children:"<ul>"}),")"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let target = Dropdown.getTargetDropdown();
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".getBindSelect()"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Returns"}),e.jsx(n.br,{}),`
`,"回傳bindSelect屬性(也就是",e.jsx(n.code,{children:"<select>"}),")"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let select = Dropdown.getBindSelect();
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".clearDropdown()"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`Dropdown.clearDropdown(); //children will be clear 
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".renderDropdownChildren(newliChild, newoptChild, text, optValue = null)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Parameters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"newChild"}),": ",e.jsx(n.code,{children:"<li>"}),"節點"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"text"}),": 選項文字"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"newoptChild"}),":  ",e.jsx(n.code,{children:"<option>"}),"節點"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"optValue"}),": 指定 ",e.jsx(n.code,{children:"<option>"})," value 值"]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let li = document.createElement("li");
let opt = document.createElement("option");

Dropdown.renderDropdownChildren(li, "AA", opt, 1);
`})}),`
`,e.jsx("span",{className:"sb-unstyled methods",children:".updateValue()"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`//previous renderChildren operations... 
Dropdown.updateValue();
`})})]})}function h(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{h as default};
