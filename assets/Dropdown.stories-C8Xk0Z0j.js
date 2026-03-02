import{D as i}from"./Dropdown-FDjR_vQ8.js";/* empty css                 */import p from"./DropdownAPIdoc-BQ55cRxS.js";import"./index-vRTWSlA6.js";import"./iframe-BVS5Mtot.js";import"./preload-helper-DLLWEBaG.js";const m=({target:e,trigger:r,bindFilteroption:t={},filter:u,filterHandler:d,changeHandler:n=null})=>{if(t.filter=u,t.filterHandler=d,Array.isArray(r))return new i(e,r,t,n);{let a=document.createElement("div");a.innerHTML=`
            <h3 class="input-label">title</h3>
            <label class="label input-label">
                <input type="text" class="dropdown-input" />
            </label>
            <ul id="${e}" class="dropdown-item"></ul>
            <select id="${e.split("_")[0]}" class="select dropdown-select">
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
            </select>
        `;let o=a.querySelector(`#${e}`),c=o.previousElementSibling.querySelector(`${r}`);return new i(o,c,t,n)}},{fn:x}=__STORYBOOK_MODULE_TEST__,{action:O}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Components/Dropdown",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:p}},render:({...e})=>{let r=m({...e});return r.containerEl.classList.add("flex","gap-3","items-center"),r.containerEl},argTypes:{target:{control:"string",type:{required:!0},description:"目標節點元素(也就是`<ul>`)，可以直接帶入節點或是帶入要命名的id名稱",table:{readOnly:!0,defaultValue:{summary:"<ul> element | id"},type:{summary:"HTNLElement"}}},trigger:{control:"string",type:{required:!0},description:"觸發元素，如果是下拉選單則是指`<input/>`元素",table:{defaultValue:{summary:"element | array"},type:{summary:"HTNLElement"}}},selectOptions:{if:{arg:"trigger",truthy:!1},control:"object",description:"trigger可以帶入此選項陣列，對應放入要渲染的節點",table:{type:{summary:"array"}}},bindFilteroption:{control:{type:"object"},description:"開啟過濾功能及相關設定，內部有 `filter` 及 `filtHandler` 屬性",table:{defaultValue:{summary:"null"},type:{summary:"object"}}},filter:{if:{arg:"bindFilteroption",truthy:!0},control:{type:"boolean"},description:"是否開啟過濾功能",table:{category:"bindFilteroption",defaultValue:{summary:"false"},type:{summary:"boolean"}}},filterHandler:{if:{arg:"bindFilteroption",truthy:!0},control:{type:"function"},description:"過濾功能操作函式",table:{category:"bindFilteroption",defaultValue:{summary:"null"},type:{summary:"function"}}},changeHandler:{control:{type:"function"},description:"作為change事件函式來綁定",table:{defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{}},f=[{value:"1",text:"近1年交易"},{value:"2",text:"近2年交易"},{value:"3",text:"近3年交易"},{value:"4",text:"近4年交易"},{value:"5",text:"近5年交易"},{value:"0",text:"交易時間不拘",selected:!0}];function s(){let e=this.value;this.parentNode.parentNode.querySelectorAll(".dropdown-item li").forEach(t=>{t.textContent.includes(e)?t.classList.remove("hidden"):t.classList.add("hidden")})}function y(){let e=this.value;console.log(e)}const l={args:{target:"example_dropdown",trigger:f,bindFilteroption:{filter:!1,filterHandler:s},filter:!1,filterHandler:s,changeHandler:y}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const E=["defaultDropdown"];export{E as __namedExportsOrder,H as default,l as defaultDropdown};
