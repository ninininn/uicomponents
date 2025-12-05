import{B as l,U as i}from"./Utils-6FG_Pzxt.js";class c extends l{constructor(e,a){const o=document.createElement("button");super(o),this.UItype="Button",this.options={...this.defaultOptions,...a},this.btnType=e,this.init()}get defaultOptions(){return{type:"button",classes:["btn"],text:"按鈕文字",events:[]}}init(){this.render(),this.bindEvents()}render(){i.addClass(this.getElem(),this.options.classes),i.setText(this.getElem(),this.options.text)}bindEvents(){}}const d=({variant:t="filled",size:e="medium",backgroundColor:a,label:o,onClick:p})=>{const r=new c("primary-btn",{text:o});return r.options.classes.push(t+"-btn"),r.render(),r._elem},{fn:u}=__STORYBOOK_MODULE_TEST__,b={title:"Components/Button",tags:["autodocs"],render:({label:t,...e})=>d({label:t,...e}),argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},size:{control:{type:"select"},options:["small","medium","large"]},variant:{control:{type:"select"},options:["filled","outlined","text"]}},args:{onClick:u()}},n={args:{primary:!0,label:"Filled btn"}},s={args:{label:"Outlined btn",variant:"outlined"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Filled btn'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Outlined btn',
    variant: 'outlined'
  }
}`,...s.parameters?.docs?.source}}};const g=["Primary","Secondary"];export{n as Primary,s as Secondary,g as __namedExportsOrder,b as default};
