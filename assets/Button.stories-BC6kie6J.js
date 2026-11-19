import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,o as n,r,t as i}from"./BaseCompo-Dty9CpKh.js";import"./Button-D7LVSb4t.js";var a;function o(){return(o=e((()=>{n(),t(),a=class extends i{constructor(e,t){let n=document.createElement(`button`);super(n),this.UItype=`Button`,this.options={...this.defaultOptions,...t},this.btnType=e,this.init()}get defaultOptions(){return{type:`button`,classes:[`btn`],text:`按鈕文字`,events:[]}}init(){this.render(),this.bindEvents()}render(){this.options.disabled&&(this.el.disabled=!0),r.addClass(this.el,this.options.classes),r.setText(this.el,this.options.text)}bindEvents(){}}})))()}var s;function c(){return(c=e((()=>{o(),s=({variant:e=`filled`,size:t=`medium`,disabled:n,backgroundColor:r,label:i,onClick:o})=>{let s=new a(`primary-btn`,{text:i,disabled:n});return s.options.classes.push(e+`-btn`),s.render(),s._elem}})))()}var l,u,d,f,p;function m(){return(m=e((()=>{c(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Button`,tags:[`autodocs`],render:({label:e,...t})=>s({label:e,...t}),argTypes:{backgroundColor:{control:`color`},label:{control:`text`},onClick:{action:`onClick`},size:{control:{type:`select`},options:[`small`,`medium`,`large`]},variant:{control:{type:`select`},options:[`default`,`outline`,`text`]},disabled:{control:`boolean`}},args:{onClick:l()}},d={args:{primary:!0,label:`Default Button`,disabled:!1}},f={args:{label:`Outline-Btn`,variant:`outline`}},p=[`Primary`,`Secondary`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Default Button',
    disabled: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Outline-Btn',
    variant: 'outline'
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Primary,f as Secondary,p as __namedExportsOrder,u as default};