import{P as E,M as C,a as x}from"./index-vRTWSlA6.js";import{B as w,U as s}from"./Utils-ac7hKEB-.js";import T from"./NotificationAPIdoc-C4X-De71.js";import"./iframe-B_kediSX.js";import"./preload-helper-DLLWEBaG.js";class h extends w{constructor(t,e,n){let i=document.createElement("div");i.className="notify-container",super(i,e.theme||"light"),this.UItype="Notification",this.options={...this.config,...e,type:n},this.triggerEl=t,this.type=this.options.type,this._instance=this._defineType(this._elem,this.type),this.options.confirm&&(this.confirm=this.options.confirm),this.options.cancel&&(this.cancel=this.options.cancel),this._init()}get config(){return{type:"msg",area:["auto","auto"],msgContent:null,customContent:null,msgTitle:null,classes:null,handler:null,placement:"right-bottom",theme:"light"}}_defineType(t,e){switch(e){case"toast":return new B(t,this.options);case"modal":return new k(t,this.options);case"popover":return new H(t,this.triggerEl,this.options);case"msg":return new L(t,this.triggerEl,this.options);default:console.error("必選一種頁面類型");break}}_confirmSetting;_init(){this._render(),this._bindEvent(),this._confirmAndcancel()}_render(){let t=this._theme==="dark"?"#1e222778":"#F3F4F6",e=this._theme==="dark"?"#F3F4F6":"#1F2937";s.setProperty(this._elem,"--theme",t),s.setProperty(this._elem,"--text",e)}_bindEvent(){this.onevent(this.triggerEl,"click",this.show.bind(this)),this.onevent(this._instance.confirmBtn,"click",this.hide.bind(this)),this.onevent(this._instance.cancelBtn,"click",this.hide.bind(this))}_confirmAndcancel(){let t=Array.isArray(this.confirm)?this.confirm:[this.confirm],e=Array.isArray(this.cancel)?this.cancel:[this.cancel],[n,i]=t,[u,p]=e;this._instance.confirmBtn&&s.setText(this._instance.confirmBtn,n),this._instance.cancelBtn&&s.setText(this._instance.cancelBtn,u)}_setPosition(t){switch(s.clearClass(this._elem,["notify-container",...this.options.classes]),t){case"right-top":s.addClass(this._elem,["right-[5rem]","top-[2rem]"]);break;case"right-bottom":s.addClass(this._elem,["right-[5rem]","bottom-[2rem]"]);break;case"left-top":s.addClass(this._elem,["left-[5rem]","top-[2rem]"]);break;case"left-bottom":s.addClass(this._elem,["left-[5rem]","bottom-[2rem]"]);break;case"center-top":s.addClass(this._elem,["left-[50%]","top-[2rem]","-translate-x-[50%]"]);break;case"center-bottom":s.addClass(this._elem,["left-[50%]","bottom-[2rem]","-translate-x-[50%]"]);break;case"center":s.addClass(this._elem,["top-[50%]","left-[50%]","translate-[-50%_-50%]"]);break;default:console.error("請設定其他位置");break}}show(){this._setPosition(this.options.placement),this._instance.onShow()}hide(){this._instance.onHide()}}class B extends x{constructor(t,e){super(t,t.querySelector("[data-dismissbtn]"),e),t.classList.add("alert","dismiss-alert"),t.innerHTML=`
    <h3 class="text-lg font-medium">${e.msgTitle}</h3>
    <div class="mt-2 mb-4 text-sm">
      ${e.msgContent}
    </div>
    <div class="flex">
    <button type="button" class="btn btn-secondary" data-dismissbtn aria-label="Close">
    <svg class="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
    </svg>
    View more
    </button>
    <button type="button" class="btn btn-primary" data-confirmbtn >
    ${e.miss}
      </button>
    </div>
    `,this._options={...this._options,...this.config},this.msg=this._options.msgContent,this.confirmBtn=this._targetEl.querySelector("[data-confirmbtn]"),this.cancelBtn=this._targetEl.querySelector("[data-dismissbtn]"),this.bindHandler=this.onHide.bind(this),this._init()}get config(){return{transition:"transition-opacity",duration:"ease-out",timing:300}}_init(){this.confirmBtn.addEventListener("click",this.bindHandler)}onShow(){document.body.appendChild(this._targetEl),this._targetEl.classList.remove("hidden"),this._targetEl.classList.remove("opacity-0"),this._targetEl.classList.add("opacity-100")}onHide(){super.hide()}updateOnHide(t){super.updateOnHide(t)}}class k extends C{constructor(t,e){super(t,e),t.innerHTML=`
    <h3 class="text-lg font-medium">${e.msgTitle}</h3>
    <div class="mt-2 mb-4 text-sm">
      ${e.msgContent}
    </div>
    <div class="flex">
      <button type="button" class="btn btn-secondary" data-confirmbtn>
      <svg class="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
      <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
      </svg>
    View more
    </button>
    <button type="button" class="btn btn-primary" data-dismissbtn aria-label="Close">
    ${e.miss}
      </button>
    </div>
    `,this.confirmBtn=this._targetEl.querySelector("[data-confirmbtn]"),this.cancelBtn=this._targetEl.querySelector("[data-dismissbtn]"),this.bindHandler=this.onHide.bind(this),this._init()}get config(){return{placement:"center-center",backdrop:"static",backdropClasses:"bg-gray-500/50",closable:!1}}_init(){this.confirmBtn.forEach(t=>{t.addEventListener("click",this.bindHandler)}),this.cancelBtn.forEach(t=>{t.addEventListener("click",this.bindHandler)})}onShow(){document.body.appendChild(this._targetEl),super.show()}onHide(){super.hide()}}class H extends E{constructor(t,e,n){super()}get config(){return{placement:"top",triggerType:"hover",offset:2}}}class L{constructor(t,e,n){t.innerHTML=`
    <div class="mt-2 mb-4 text-sm">
      ${n.msgContent}
    </div>`,this._targetEl=t,this._options=n,this.bindHandler=this.onHide.bind(this),this._init()}_init(){this._render()}_render(){}onShow(){document.body.appendChild(this._targetEl),this._targetEl.classList.remove("hidden"),this._targetEl.classList.remove("opacity-0"),this._targetEl.classList.add("opacity-100"),this._render(),setTimeout(this.onHide.bind(this),1500)}onHide(){this._targetEl.classList.add("opacity-0"),setTimeout(()=>{document.body.removeChild(this._targetEl)},1e3)}}window.Notification=h;const F=({type:a,area:t,theme:e,msgContent:n,customContent:i,msgTitle:u,classes:p,placement:g,confirm:y,cancel:b,handlers:f})=>{let d=document.createElement("div");d.className="mx-auto";let r=document.createElement("button");r.className="btn btn-primary",r.textContent="Toggle Notification",d.appendChild(r);let _={type:a,theme:e,area:t||["auto","auto"],msgContent:n,customContent:i,msgTitle:u,classes:p,placement:g,confirm:y,cancel:b,handlers:f},v=new h(r,_,a);return console.log("notification_instance:",v),d},{fn:V,expect:P}=__STORYBOOK_MODULE_TEST__,{action:$}=__STORYBOOK_MODULE_ACTIONS__,D={title:"Components/Notification",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:T}},render:({...a})=>F({...a}),argTypes:{type:{control:"select",options:["toast","modal","popover","msg"],type:{required:!0},description:"跳出通知種類",table:{category:"parameters",defaultValue:{summary:"msg"},type:{summary:"string"}}},theme:{control:"select",options:["light","dark"],description:"通知視窗的尺寸大小",table:{category:"parameters",subcategory:"options",defaultValue:{summary:"light"},type:{summary:"string"}}},area:{control:"array",description:"通知視窗的尺寸大小",table:{category:"parameters",subcategory:"options",defaultValue:{summary:"[auto, auto]"},type:{summary:"array"}}},msgContent:{control:"text",description:"訊息內容",table:{category:"parameters",subcategory:"options",type:{summary:"string"}}},customContent:{control:"string",description:"自訂訊息innerHTML結構",table:{category:"parameters",subcategory:"options",type:{summary:"string"}}},msgTitle:{control:"text",description:"通知視窗標題文字",table:{category:"parameters",subcategory:"options",defaultValue:{summary:"-"},type:{summary:"string"}}},classes:{control:{type:"array"},description:"自定義class，每個class以tailwindcss property放入",table:{category:"parameters",subcategory:"options",defaultValue:{summary:".msg"},type:{summary:"array"}}},placement:{control:{type:"select"},options:["right-bottom","right-top","left-bottom","left-top","center-bottom","center-top","center"],description:"訊息框彈出位置",table:{category:"parameters",subcategory:"options",defaultValue:{summary:"center"},type:{summary:"string"}}},confirm:{control:{type:"text"},description:"確認按鈕文字及callback函式(此處僅提供設定按鈕文字)",table:{category:"parameters",subcategory:"options",defaultValue:{summary:"確定"},type:{summary:"array"}}},cancel:{control:{type:"text"},description:"取消按鈕文字及callback函式(此處僅提供設定按鈕文字)",table:{category:"parameters",subcategory:"options",defaultValue:{summary:"取消"},type:{summary:"array"}}},handlers:{action:"click",control:"function",description:"點擊觸發元素後的callback函式",table:{category:"parameters",subcategory:"options",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{type:"msg",theme:"light",area:["auto","auto"],msgContent:"這是測試用通知內容",customContent:"<div>customInner</div>",msgTitle:"通知",classes:["notification"],placement:"left-top",confirm:"確定",cancel:"取消"}},o={args:{type:"toast",placement:"right-top"}},c={args:{type:"modal",placement:"center",confirm:"確定",cancel:"取消"}},l={args:{type:"popover",placement:"top"}},m={args:{type:"alert",placement:"center"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "toast",
    placement: "right-top"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: "popover",
    placement: "top"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: "alert",
    placement: "center"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...m.parameters?.docs?.source}}};const q=["Toast","Modal","Popover","Alert"];export{m as Alert,c as Modal,l as Popover,o as Toast,q as __namedExportsOrder,D as default};
