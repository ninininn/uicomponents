import{N as A}from"./Notification-zCkzQseW.js";import T from"./NotificationAPIdoc-2fuh3f6x.js";import"./index-vRTWSlA6.js";import"./Utils-MIAVsKBh.js";import"./iframe-a3X9s5Ps.js";import"./preload-helper-DLLWEBaG.js";const k=({type:t,area:c,theme:p,maxWidth:i,msgContent:l,customContent:m,msgTitle:y,classes:g,placement:d,confirm:b,cancel:E,handlers:f,backdrop:v,backdropClasses:C,closable:B,triggerType:F,offset:x,countdown:h})=>{let n=document.createElement("div");n.className="mx-auto";let a=document.createElement("button");a.className="btn btn-primary",a.textContent="Show Notification",n.appendChild(a);let e={type:t,theme:p,maxWidth:i,area:c||["auto","auto"],msgContent:l,customContent:m,msgTitle:y,classes:g,placement:d,confirm:b,cancel:E,handlers:f};switch(t){case"modal":e.backdrop=v,e.backdropClasses=C,e.closable=B;break;case"toast":break;case"popover":e.triggerType=F,e.offset=x;break;case"msg":e.countdown=h;break}let D=new A(a,e,t);return console.log("notification_instance:",D),n},{fn:q,expect:L}=__STORYBOOK_MODULE_TEST__,{action:M}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Components/Notification",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:T}},render:({...t})=>k({...t}),argTypes:{type:{control:"select",options:["toast","modal","popover","msg"],type:{required:!0},description:"跳出通知種類",table:{category:"parameters",defaultValue:{summary:"msg"},type:{summary:"string"}}},backdrop:{control:"select",options:["static","dynamic"],if:{arg:"type",eq:"modal"},description:"背景遮罩類型",table:{category:"parameters",subcategory:"private property",defaultValue:{summary:"static"},type:{summary:"string"}}},backdropClasses:{control:"text",if:{arg:"type",eq:"modal"},description:"背景遮罩關閉類型",table:{category:"parameters",subcategory:"private property",defaultValue:{summary:"static"},type:{summary:"string"}}},closable:{control:"boolean",if:{arg:"type",eq:"modal"},description:"背景遮罩關閉類型",table:{category:"parameters",subcategory:"private property",defaultValue:{summary:"true"},type:{summary:"boolean"}}},triggerType:{control:"select",options:["hover","click","none"],if:{arg:"type",eq:"popover"},description:"觸發動作類型",table:{category:"parameters",subcategory:"private property",defaultValue:{summary:"hover"},type:{summary:"string"}}},offset:{control:"number",if:{arg:"type",eq:"popover"},description:"距離觸發元素的位置距離",table:{category:"parameters",subcategory:"private property",defaultValue:{summary:"10"},type:{summary:"number"}}},countdown:{control:"number",if:{arg:"type",eq:"msg"},description:"自訂倒數消失時間",table:{category:"parameters",subcategory:"private property",defaultValue:{summary:"1000"},type:{summary:"number"}}},theme:{control:"select",options:["light","dark"],description:"通知視窗的尺寸大小",table:{category:"parameters",subcategory:"options properties",defaultValue:{summary:"light"},type:{summary:"string"}}},maxWidth:{control:"text",description:"通知視窗的最大尺寸",table:{category:"parameters",subcategory:"options properties",defaultValue:{summary:"auto"},type:{summary:"string"}}},area:{control:"array",description:"通知視窗的尺寸大小",table:{category:"parameters",subcategory:"options properties",defaultValue:{summary:"[auto, auto]"},type:{summary:"array"}}},msgContent:{control:"text",description:"訊息內容",table:{category:"parameters",subcategory:"options properties",type:{summary:"string"}}},customContent:{control:"string",description:"自訂訊息innerHTML結構",table:{category:"parameters",subcategory:"options properties",type:{summary:"string"}}},msgTitle:{control:"text",description:"通知視窗標題文字，如果不需要標題可以傳入空字串或是false",table:{category:"parameters",subcategory:"options properties",defaultValue:{summary:"-"},type:{summary:"string"}}},classes:{control:{type:"array"},description:"自定義class，每個class以tailwindcss property放入",table:{category:"parameters",subcategory:"options properties",defaultValue:{summary:".msg"},type:{summary:"array"}}},placement:{control:{type:"select"},options:["right-bottom","right-top","left-bottom","left-top","center-bottom","center-top"],description:"訊息框彈出位置",table:{category:"parameters",subcategory:"options properties",defaultValue:{summary:"center"},type:{summary:"string"}}},confirm:{control:{type:"text"},description:"確認按鈕文字及callback函式(此處僅提供設定按鈕文字)",table:{category:"parameters",subcategory:"options properties",defaultValue:{summary:"確定"},type:{summary:"array"}}},cancel:{control:{type:"text"},description:"取消按鈕文字及callback函式(此處僅提供設定按鈕文字)",table:{category:"parameters",subcategory:"options properties",defaultValue:{summary:"取消"},type:{summary:"array"}}},handlers:{action:"click",control:"function",description:"點擊觸發元素後的callback函式",table:{category:"parameters",subcategory:"options properties",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{type:"msg",theme:"light",maxWidth:"auto",area:["auto","auto"],msgContent:"這是測試用通知內容",customContent:"<div>customInner</div>",msgTitle:"通知",classes:["notification"],placement:"left-top",confirm:"確定",cancel:"取消",backdrop:"static",backdropClasses:"bg-gray-500/50",closable:!1,triggerType:"hover",offset:10,countdown:1e3}},r={args:{type:"toast",placement:"right-top",msgContent:"動綠是昔毛叫這頭收乞高姐力司「黑枝乾」化氣星常每貝木嗎見雲黃巴事冬更珠，亭肖哪飯隻朱者英二活經貫綠「只地話入」卜風連語貓身陽黑空次司月她！還室意蝴士下卜後唱筆至旦民訴跑書向。後北愛升科訴把肖止聽對。",maxWidth:"360px"}},o={args:{type:"modal",placement:"center",confirm:"確定",cancel:"取消"}},s={args:{type:"popover",placement:"top"}},u={args:{type:"alert",placement:"center"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: "toast",
    placement: "right-top",
    msgContent: "動綠是昔毛叫這頭收乞高姐力司「黑枝乾」化氣星常每貝木嗎見雲黃巴事冬更珠，亭肖哪飯隻朱者英二活經貫綠「只地話入」卜風連語貓身陽黑空次司月她！還室意蝴士下卜後唱筆至旦民訴跑書向。後北愛升科訴把肖止聽對。",
    maxWidth: "360px"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "modal",
    placement: "center",
    confirm: "確定",
    cancel: "取消"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "popover",
    placement: "top"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "alert",
    placement: "center"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...u.parameters?.docs?.source}}};const W=["Toast","Modal","Popover","Alert"];export{u as Alert,o as Modal,s as Popover,r as Toast,W as __namedExportsOrder,H as default};
