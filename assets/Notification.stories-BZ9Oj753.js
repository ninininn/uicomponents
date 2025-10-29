import{N as r}from"./Notification-BDVYPhGn.js";import w from"./NotificationAPIdoc-PBc-og8N.js";import"./index-vRTWSlA6.js";import"./Utils-BNEgZEv2.js";import"./iframe-BG6fSF4C.js";import"./preload-helper-DLLWEBaG.js";const V=({type:a,area:c,theme:m,maxWidth:i,msgContent:p,icon:y,customContent:d,msgTitle:g,classes:b,placement:f,confirm:E,cancel:h,btnList:v,handler:C,backdrop:x,backdropClasses:B,closable:D,triggerType:F,offset:k,countdown:A,style:T})=>{let l=document.createElement("div");l.className="mx-auto grid place-items-center";let t=document.createElement("button");t.className="btn btn-primary",t.textContent="Show Notification",l.appendChild(t);let e={type:a,theme:m,maxWidth:i,icon:y,area:c||["auto","auto"],msgContent:p,customContent:d,msgTitle:g,classes:b,placement:f,confirm:E,cancel:h,handler:C,btnList:v};switch(a){case"modal":e.backdrop=x,e.backdropClasses=B,e.closable=D,console.log(e.btnList);break;case"toast":e.style=T;break;case"popover":e.triggerType=F,e.offset=k;break;case"msg":e.countdown=A;break}return t.addEventListener("click",()=>{switch(a){case"modal":r.modal(t,e);break;case"toast":r.toast(t,e);break;case"popover":r.popover(t,e);break;case"msg":r.msg(t,e);break}}),l},{fn:M,expect:H}=__STORYBOOK_MODULE_TEST__,{action:W}=__STORYBOOK_MODULE_ACTIONS__,K={title:"Components/Notification",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:w}},render:({...a})=>V({...a}),argTypes:{type:{control:"select",options:["toast","modal","popover","msg"],type:{required:!0},description:"呼叫方法name",table:{category:"method",defaultValue:{summary:"msg"},type:{summary:"string"}}},style:{control:"select",options:["default","bordered","accent"],if:{arg:"type",eq:"toast"},description:"toast樣式",table:{category:"method's parameters",subcategory:"private property",defaultValue:{summary:"static"},type:{summary:"string"}}},backdrop:{control:"select",options:["static","dynamic"],if:{arg:"type",eq:"modal"},description:"背景遮罩類型",table:{category:"method's parameters",subcategory:"private property",defaultValue:{summary:"static"},type:{summary:"string"}}},backdropClasses:{control:"text",if:{arg:"type",eq:"modal"},description:"背景遮罩關閉類型",table:{category:"method's parameters",subcategory:"private property",defaultValue:{summary:"static"},type:{summary:"string"}}},closable:{control:"boolean",if:{arg:"type",eq:"modal"},description:"背景遮罩關閉類型",table:{category:"method's parameters",subcategory:"private property",defaultValue:{summary:"true"},type:{summary:"boolean"}}},triggerType:{control:"select",options:["hover","click","none"],if:{arg:"type",eq:"popover"},description:"觸發動作類型",table:{category:"method's parameters",subcategory:"private property",defaultValue:{summary:"hover"},type:{summary:"string"}}},offset:{control:"number",if:{arg:"type",eq:"popover"},description:"距離觸發元素的位置距離",table:{category:"method's parameters",subcategory:"private property",defaultValue:{summary:"10"},type:{summary:"number"}}},countdown:{control:"number",if:{arg:"type",eq:"msg"},description:"自訂倒數消失時間(ms)",table:{category:"method's parameters",subcategory:"private property",defaultValue:{summary:"1000"},type:{summary:"number"}}},theme:{control:"select",options:["light","dark"],description:"通知視窗的尺寸大小",table:{category:"method's parameters",defaultValue:{summary:"light"},type:{summary:"string"}}},maxWidth:{control:"text",description:"通知視窗的最大尺寸",table:{category:"method's parameters",defaultValue:{summary:"auto"},type:{summary:"string"}}},area:{control:"array",description:"通知視窗的尺寸大小",table:{category:"method's parameters",defaultValue:{summary:"[auto, auto]"},type:{summary:"array"}}},icon:{control:"select",options:["confirm","error","notice","lock","download"],description:"視窗icon圖示",table:{category:"method's parameters",defaultValue:{summary:"notice"},type:{summary:"null"}}},msgContent:{control:"text",description:"訊息內容",table:{category:"method's parameters",type:{summary:"string"}}},customContent:{control:"string",description:"自訂訊息innerHTML結構",table:{category:"method's parameters",type:{summary:"string"}}},msgTitle:{control:"text",description:"通知視窗標題文字，如果不需要標題可以傳入空字串或是false",table:{category:"method's parameters",defaultValue:{summary:"-"},type:{summary:"string"}}},classes:{control:{type:"array"},description:"自定義class，每個class以tailwindcss property放入",table:{category:"method's parameters",defaultValue:{summary:".notify-container"},type:{summary:"array"}}},placement:{control:{type:"select"},options:["right-bottom","right-top","left-bottom","left-top","center-bottom","center-top","center","custom"],mapping:{custom:["180px","80px"]},description:"彈出位置",table:{category:"method's parameters",defaultValue:{summary:"center"},type:{summary:"string"}}},confirm:{control:{type:"text"},description:"確認按鈕文字及callback函式(此處僅提供設定按鈕文字)",table:{category:"method's parameters",defaultValue:{summary:"確定"},type:{summary:"array"}}},cancel:{control:{type:"text"},description:"取消按鈕文字及callback函式(此處僅提供設定按鈕文字)",table:{category:"method's parameters",defaultValue:{summary:"取消"},type:{summary:"array"}}},btnList:{control:{type:"array"},description:"除了確認及取消以外的按鈕；text:按鈕文字|classes:樣式class陣列|handler:click-handler function",table:{category:"method's parameters",defaultValue:{summary:"null"},type:{summary:"array"}}},handler:{action:"click",control:"function",description:"點擊觸發元素後的callback函式",table:{category:"method's parameters",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{type:"msg",theme:"light",maxWidth:"auto",area:["auto","auto"],icon:"notice",msgContent:"這是測試用通知內容",msgTitle:"通知",classes:["notification"],placement:"left-top",confirm:"確定",cancel:"取消",btnList:[],style:"accent",backdrop:"static",backdropClasses:"bg-gray-500/50",closable:!1,triggerType:"hover",offset:10,countdown:1e3}},o={args:{type:"toast",placement:"right-top",msgContent:"動綠是昔毛叫這頭收乞高姐力司「黑枝乾」化氣星常每貝木嗎見雲黃巴事冬更珠，亭肖哪飯隻朱者英二活經貫綠「只地話入」卜風連語貓身陽黑空次司月她！還室意蝴士下卜後唱筆至旦民訴跑書向。後北愛升科訴把肖止聽對。",customContent:"<div>...customDiv</div>",maxWidth:"360px"}},s={args:{type:"modal",icon:"lock",msgTitle:"您的權限不足",msgContent:"請前往xx專區進行登錄",placement:"center",confirm:["馬上前往",function(){alert("to other links...")}],cancel:"取消",btnList:[{text:"前往",classes:["btn-primary","outline-btn"],handler:function(a,c){alert("前往某網址")}},{icon:"sticker.png",text:"查看更多",classes:["btn-secondary","outline-btn"]}]}},n={args:{type:"popover",placement:"top"}},u={args:{type:"msg",placement:"left-top"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "toast",
    placement: "right-top",
    msgContent: "動綠是昔毛叫這頭收乞高姐力司「黑枝乾」化氣星常每貝木嗎見雲黃巴事冬更珠，亭肖哪飯隻朱者英二活經貫綠「只地話入」卜風連語貓身陽黑空次司月她！還室意蝴士下卜後唱筆至旦民訴跑書向。後北愛升科訴把肖止聽對。",
    customContent: \`<div>...customDiv</div>\`,
    maxWidth: "360px"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "modal",
    icon: "lock",
    msgTitle: "您的權限不足",
    msgContent: "請前往xx專區進行登錄",
    placement: "center",
    confirm: ["馬上前往", function () {
      alert("to other links...");
    }],
    cancel: "取消",
    btnList: [{
      text: "前往",
      classes: ["btn-primary", "outline-btn"],
      handler: function (e, config) {
        alert("前往某網址");
      }
    }, {
      icon: "sticker.png",
      text: "查看更多",
      classes: ["btn-secondary", "outline-btn"]
    }]
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "popover",
    placement: "top"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "msg",
    placement: "left-top"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...u.parameters?.docs?.source}}};const P=["Toast","Modal","Popover","Msg"];export{s as Modal,u as Msg,n as Popover,o as Toast,P as __namedExportsOrder,K as default};
