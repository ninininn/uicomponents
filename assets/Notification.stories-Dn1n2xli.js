import{P as y,M as h,a as E}from"./index-vRTWSlA6.js";import{B as v}from"./Utils-DnITNN2a.js";import b from"./NotificationAPIdoc-XTNgr-e8.js";import"./iframe-DNts8CDd.js";import"./preload-helper-DLLWEBaG.js";class p extends v{constructor(t,a,e){let n=document.createElement("div");n.className="notify-container",super(n),this.UItype="Notification",this.options={...this.config,...a,type:e},this.triggerEl=t,this.type=this.options.type,this._instance=this._defineType(this._elem,this.type),this._init()}get config(){return{type:"toast",area:["auto","auto"],msgContent:null,customContent:null,msgTitle:null,classes:null,handler:null,position:"right-bottom"}}_defineType(t,a){switch(a){case"toast":return new f(t,this.triggerEl,this.options);case"modal":return new _(this.triggerEl,this.options);case"popover":return new w(t,this.triggerEl,this.options);case"alert":return new C(t,this.triggerEl,this.options);default:console.error("必選一種頁面類型");break}}_init(){this._bindEvent()}_bindEvent(){this.onevent(this.triggerEl,"click",this.show.bind(this))}show(){this._instance.onShow()}}class f extends E{constructor(t,a,e){super(t,t.querySelector("[data-dismissbtn]"),e),t.id="alert-content",t.classList.add("alert","dismiss-alert"),t.innerHTML=`
    <h3 class="text-lg font-medium">${e.msgTitle}</h3>
    <div class="mt-2 mb-4 text-sm">
      ${e.msgContent}
    </div>
    <div class="flex">
    <button type="button" class="btn btn-secondary">
    <svg class="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
    </svg>
    View more
    </button>
    <button type="button" class="btn btn-primary" data-dismissbtn aria-label="Close">
    ${e.miss}
      </button>
    </div>
    `,this._options={...this._options,...this.config},this.msg=this._options.msgContent,this.missBtn=this._targetEl.querySelectorAll("[data-dismissbtn]"),this.bindHandler=this.onHide.bind(this),this._init()}get config(){return{transition:"transition-opacity",duration:"ease-out",timing:300,yes:"我了解了",miss:"dismiss"}}_init(){this.missBtn.forEach(t=>{t.addEventListener("click",this.bindHandler)})}onShow(){document.body.appendChild(this._targetEl),this._targetEl.classList.remove("hidden"),this._targetEl.classList.remove("opacity-0"),this._targetEl.classList.add("opacity-100")}onHide(){super.hide()}updateOnHide(t){super.updateOnHide(t)}}class _ extends h{constructor(t,a){super()}get config(){return{}}}class w extends y{constructor(t,a,e){super()}}class C{constructor(t,a,e){}}window.Notification=p;const x=({type:s,area:t,msgContent:a,customContent:e,msgTitle:n,classes:m,handlers:T})=>{let u=document.createElement("div");u.className="mx-auto";let o=document.createElement("button");o.className="btn btn-primary",o.textContent="Toggle Notification",u.appendChild(o);let d={type:s,area:t||["auto","auto"],msgContent:a,customContent:e,msgTitle:n,classes:m},g=new p(o,d,s);return console.log("notification_instance:",g),u},{fn:H,expect:S}=__STORYBOOK_MODULE_TEST__,{action:N}=__STORYBOOK_MODULE_ACTIONS__,k={title:"Components/Notification",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:b}},render:({...s})=>x({...s}),argTypes:{type:{control:"select",options:["toast","modal","popover","alert"],type:{required:!0},description:"跳出通知種類",table:{category:"parameters",defaultValue:{summary:"toast"},type:{summary:"string"}}},area:{control:"array",description:"通知視窗的尺寸大小",table:{category:"options",defaultValue:{summary:"[auto, auto]"},type:{summary:"array"}}},msgContent:{control:"text",description:"訊息內容",table:{category:"options",type:{summary:"string"}}},customContent:{control:"string",description:"訊息自訂內容，放入innerHTML",table:{category:"options",type:{summary:"string"}}},msgTitle:{control:"text",description:"通知視窗標題文字",table:{category:"options",defaultValue:{summary:"-"},type:{summary:"string"}}},classes:{control:{type:"array"},description:"自定義class，每個class以tailwindcss property放入",table:{category:"options",defaultValue:{summary:".msg"},type:{summary:"array"}}},handlers:{action:"click",control:"function",description:"點擊確認按鈕後的callback函式",table:{category:"options",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{type:"toast",area:["auto","auto"],msgContent:"這是測試用通知內容",customContent:"<div>customInner</div>",msgTitle:"通知",classes:["notification"]}},r={args:{type:"toast"}},i={args:{type:"modal"}},c={args:{type:"popover"}},l={args:{type:"alert"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: "toast"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: "modal"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: "popover"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: "alert"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...l.parameters?.docs?.source}}};const V=["Toast","Modal","Popover","Alert"];export{l as Alert,i as Modal,c as Popover,r as Toast,V as __namedExportsOrder,k as default};
