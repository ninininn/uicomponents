/* empty css               */import{B as c,D as i}from"./BaseCompo-DBroM2vG.js";class d extends c{constructor(e,o){const a=document.createElement("button");super(a),this.UItype="Button",this.options={...this.defaultOptions,...o},this.btnType=e,this.init()}get defaultOptions(){return{type:"button",classes:["btn"],text:"按鈕文字",events:[]}}init(){this.render(),this.bindEvents()}render(){this.options.disabled&&(this.el.disabled=!0),i.addClass(this.el,this.options.classes),i.setText(this.el,this.options.text)}bindEvents(){}}const u=({variant:t="filled",size:e="medium",disabled:o,backgroundColor:a,label:l,onClick:m})=>{const r=new d("primary-btn",{text:l,disabled:o});return r.options.classes.push(t+"-btn"),r.render(),r._elem},{fn:p}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Button",tags:["autodocs"],render:({label:t,...e})=>u({label:t,...e}),argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},size:{control:{type:"select"},options:["small","medium","large"]},variant:{control:{type:"select"},options:["default","outline","text"]},disabled:{control:"boolean"}},args:{onClick:p()}},s={args:{primary:!0,label:"Default Button",disabled:!1}},n={args:{label:"Outline-Btn",variant:"outline"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Default Button',
    disabled: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Outline-Btn',
    variant: 'outline'
  }
}`,...n.parameters?.docs?.source}}};const y=["Primary","Secondary"];export{s as Primary,n as Secondary,y as __namedExportsOrder,g as default};
