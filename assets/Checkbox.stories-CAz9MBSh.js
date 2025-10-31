import{C as l,a as f}from"./Checkbox-BjWHv-9E.js";/* empty css                 */import k from"./CheckboxAPIdoc-BDbq31Ih.js";import"./Utils-D4AxMvsK.js";import"./iframe-CfB8uh_1.js";import"./preload-helper-DLLWEBaG.js";const v=({checked:t,classes:e,disabled:u,style:s,name:i,theme:p,title:m,checkImg:n,value:g,handlers:y,checkboxGroup:d})=>{let b={checked:t,value:g,name:i,classes:e,disabled:u,style:s,theme:p,title:m,checkImg:n,handlers:y},r=new l(b);if(r.getElem().addEventListener("change",a=>{const c={checked:a.target.checked,value:a.target.value};r.options.handlers?.(c)}),d){let a=new f("test"),c=new l({checked:t,name:"group2",classes:e,disabled:u,style:s,theme:"#69bbe5",title:"群組勾選框A",checkImg:n}),h=new l({checked:t,name:"group3",classes:e,disabled:!0,style:s,theme:"#c4729b",title:"群組勾選框B",checkImg:n});return a.addCheckItems([r,c,h]),a}return r},{fn:I,expect:B}=__STORYBOOK_MODULE_TEST__,{action:T}=__STORYBOOK_MODULE_ACTIONS__,V={title:"Components/Checkbox",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:k}},render:({...t})=>{let e=v({...t});return e.UItype==="Checkbox"?e.container:e.groupContainer},argTypes:{checked:{control:"boolean",description:"checked狀態",table:{category:"options parameter",readOnly:!0,defaultValue:{summary:"false"},type:{summary:"boolean"}}},value:{control:"text",description:"`<input/>`的 value 值，如果沒有特別設定則是直接套用`title`的值",table:{category:"options parameter",defaultValue:{summary:"null"},type:{summary:"string | number"}}},name:{control:"text",description:"input標籤的name attribute",table:{category:"options parameter",type:{summary:"string"}}},theme:{control:"color",description:"色系控制，可以傳入HEX色碼",table:{category:"options parameter",subcategory:"Inherits BaseComponent",type:{summary:"string"}}},checkImg:{control:"select",options:["眼睛組合","愛心組合","信封組合"],mapping:{眼睛組合:["../../../../public/eye.svg","../../../../public/eye-off.svg"],愛心組合:["../../../../public/heart.svg","../../../../public/heart-off.svg"],信封組合:["../../../../public/envelope.svg","../../../../public/envelope-open.svg"]},if:{arg:"style",eq:"toggle"},description:"[僅限toggle樣式更改] 更換為自訂圖標，傳入自訂圖標檔案路徑，以陣列傳入",table:{category:"options parameter",defaultValue:{summary:"eye"},type:{summary:"[./path/img.png,./path/img2.png]"}}},classes:{control:{type:"array"},description:"checkbox classes，每個class以tailwindcss property放入",table:{category:"options parameter",defaultValue:{summary:"checkbox"},type:{summary:"array"}}},disabled:{control:{type:"boolean"},description:"是否可操作狀態(要注意和checked是不同意義)",table:{category:"options parameter",defaultValue:{summary:"false"},type:{summary:"boolean"}}},title:{control:{type:"text"},if:{arg:"style",neq:"toggle"},description:"`<label/>`文字內容，當style為toggle時則不會顯示",table:{category:"options parameter",defaultValue:{summary:"null"},type:{summary:"string"}}},style:{control:"select",options:["default","switch","toggle","tag"],description:"樣式類型",table:{category:"options parameter",defaultValue:{summary:"default"},type:{summary:"string"}}},handlers:{action:"change",control:"function",description:"作為change事件函式傳入",table:{category:"options parameter",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{checkboxGroup:!1}},o={args:{name:"testing",style:"default",title:"一般勾選框",value:"default",checked:!0,theme:"#61d45b",checkImg:["/eye.svg","/eye-off.svg"],classes:["checkbox"],disabled:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const F=["defaultCheckbox"];export{F as __namedExportsOrder,V as default,o as defaultCheckbox};
