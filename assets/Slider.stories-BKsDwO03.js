import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,o as n,r,s as i,u as a}from"./blocks-gwT75y1v.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{i as l,n as u,o as d,r as f,t as p}from"./BaseCompo-Dty9CpKh.js";function m(e){let t=new T(`signal`,e);return[()=>(g(t),t.value),e=>{let n=typeof e==`function`?e(t.value):e;if(!Object.is(t.value,n)){t.value=n;for(let e of t.subs)e.type===`effect`&&D.get(e)?.schedule(),e.type===`computed`&&C(e)}},e=>{if(e.type===`signal`)throw Error(`A signal cannot subscribe to another node`);return _(e,t),()=>v(e,t)}]}function h(e,t){let n=w;w=e;try{return t()}finally{w=n}}function g(e){w&&_(w,e)}function _(e,t){if(e.type===`signal`)throw Error(`Signal nodes cannot depend on others`);e.deps.add(t),t.subs.add(e)}function v(e,t){e.deps.delete(t),t.subs.delete(e)}function y(e,t){for(let n=e.length-1;n>=0;n--){let r=e[n];try{r()}catch(e){t?.(e)}}e.length=0}function b(e){e.disposed||(O.add(e),!k&&A===0&&(k=!0,queueMicrotask(x)))}function x(){k=!1;let e=0;for(;O.size;){let t=Array.from(O);O.clear();for(let e of t)e.run();if(++e>1e4)throw Error(`Inffinite update loop`)}}function S(e){let t=new j(e);return t.run(),()=>t.dispose()}function C(e){if(e.type!==`computed`)return;let t=e;if(!t.stale){t.stale=!0;for(let t of e.subs)t.type===`computed`?C(t):t.type===`effect`&&D.get(t)?.schedule()}}var w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{w=null,T=class{constructor(e,t){switch(this.type=e,this.type){case`computed`:this.subs=new Set,this.deps=new Set;break;case`signal`:this.subs=new Set;break;case`effect`:this.deps=new Set}this.value=t}},E=new WeakMap,D={get:e=>E.get(e),set:(e,t)=>E.set(e,t),delete:e=>E.delete(e)},O=new Set,k=!1,A=0,j=class{constructor(e){this.node=new T(`effect`),this.cleanups=[],this.disposed=!1,this._fn=e,D.set(this.node,this)}run(){if(!this.disposed){y(this.cleanups);for(let e of[...this.node.deps])v(this.node,e);try{let e=h(this.node,this._fn);typeof e==`function`&&this.cleanups.push(e)}finally{}}}schedule(){b(this)}dispose(){if(!this.disposed){this.disposed=!0,y(this.cleanups);for(let e of[...this.node.deps])v(this.node,e);this.node.deps.clear(),D.delete(this.node)}}}})))()}var N,P,F,I;function L(){return(L=e((()=>{d(),u(),M(),N={min:0,max:100,initValue:0,step:1,input:!1,range:!1,theme:`var(--color-primary-500)`,thumbImg:null,classes:[`slider`],handlers:null,disabled:!1},P=class extends p{constructor(...e){let{element:t,options:n}=l(e,`div`),r=n.disabled?`var(--color-gray-500)`:n.theme||`var(--color-primary-500)`;super(t,r),this.UItype=`Slider`,this.options=Object.assign({},N,n),this.disabled=this.options.disabled,this.defaultTheme=n.theme||r,this._draggingIndex=null,this._checkRange();let[i,a]=m(this.options.initValue);this.getValue=i,this.setValue=a;let[o,s]=m(r);this.getTheme=o,this.setTheme=s,this.options.handlers&&(this.handlers=this.options.handlers),this.bar=new I(i,o),this.options.range?(this.thumb=[new F(i,o,this.options.thumbImg,0),new F(i,o,this.options.thumbImg,1)],this.childrens=[...this.thumb.map(e=>e.el),this.bar.el]):(this.thumb=new F(i,o,this.options.thumbImg),this.childrens=[this.thumb.el,this.bar.el]),this._init()}_init(){this.render();for(let e of this.childrens)this.el.appendChild(e);this._bindEvents(),this.setDisabled(this.disabled)}render(){this._checkRange(),f.addClass(this.el,this.options.classes),this.options.range&&f.setDataAttr(this.el,`slider`,`range`),this.disabled?f.addClass(this.el,[`disabled`]):f.removeClass(this.el,[`disabled`])}changeTheme(e){this.setTheme(e),super.setTheme(e)}setDisabled(e){this.disabled=e,this.changeTheme(this.disabled?`var(--color-gray-500)`:this.defaultTheme),this._updateDisabled()}_onPointerMove=e=>{e.preventDefault(),this._draggingIndex!==null&&this._setPointValue(e)};_onPointerUp=()=>{this._draggingIndex=null,this.offevent(this._removePointerMove),this.offevent(this._removePointerUp)};_onPointerDown(e,t){e.preventDefault(),this._draggingIndex=t,this._removePointerMove=this.onevent(e.currentTarget,`pointermove`,this._onPointerMove),this._removePointerUp=this.onevent(e.currentTarget,`pointerup`,this._onPointerUp)}_bindEvents(){(this.options.range?this.thumb:[this.thumb]).forEach((e,t)=>{this.onevent(e.el,`pointerdown`,e=>{e.currentTarget.setPointerCapture(e.pointerId),this._onPointerDown(e,t)})}),this.onevent(this.bar.el,`pointerdown`,e=>this._setPointValue(e))}_setPointValue(e){let t=this.getValue(),n=this.el.getBoundingClientRect(),r=(e.clientX-n.left)/n.width*100,i=Math.round(r/this.options.step)*this.options.step,a=Math.min(this.options.max,Math.max(0,i));if(a<this.options.min&&(a=this.options.min),this.options.range){let e=[...t];e[this._draggingIndex]=a,e[0]>e[1]&&e.reverse(),this.setValue(e)}else this.setValue(a);this.handlers&&this.handlers(this.getValue())}_checkRange(){let{initValue:e,range:t,min:n,max:r}=this.options;t?this.options.initValue=Array.isArray(e)?e:[e,r]:this.options.initValue=Array.isArray(e)?e[0]:e}_updateDisabled(){this.disabled?(super.destroy(),f.addClass(this.el,[`disabled`])):(this._bindEvents(),f.removeClass(this.el,[`disabled`]))}},F=class extends p{constructor(e,t,n=null,r=0){let i=document.createElement(`div`);super(i,t()),this._thumbIndex=r,this._thumbImg=n,this._init(),S(()=>{let t=e();this._setThumbValue(Array.isArray(t)?t[r]:t)}),S(()=>{super.setTheme(t())})}_init(){this.render()}render(){f.addClass(this.el,[`slider-thumb`]),f.setProp(this.el,`--bgColor`,this._theme),this._thumbImg&&(f.setProp(this.el,`--tmb-img`,`url(${this._thumbImg})`),f.addClass(this.el,[`custom-thumb`]))}_setThumbValue(e){this._thumbValue=e,this.el.style.left=`${e-5}%`}},I=class extends p{constructor(e,t){let n=document.createElement(`div`),r=document.createElement(`span`);r.classList.add(`mask`),super(n,t()),this.mask=r,this.options={...this.defaultOptions},this._init(),S(()=>{let t=e();this.startValue=Array.isArray(t)?t[0]:t,this._setBarValue(Array.isArray(t)?t[1]-t[0]:t)}),S(()=>{super.setTheme(t())})}get defaultOptions(){return{classes:[`slider-bar`]}}_init(){this.render(),this.el.appendChild(this.mask)}render(){f.addClass(this.el,this.options.classes),f.setProp(this.mask,`--bgColor`,this._theme)}_setBarValue(e){this._barValue=e,f.setProp(this.mask,`--slider-width`,`${e}%`),f.setProp(this.mask,`--start-point`,`${this.startValue}%`)}}})))()}var R;function z(){return(z=e((()=>{L(),R=e=>{let t=new P(e);return console.log(t),t}})))()}function B(e){let t={blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(n,{isTemplate:!0,title:`How to use Slider`}),`
`,(0,H.jsx)(a,{}),`
`,(0,H.jsx)(t.p,{children:`適用 : 圖層清單、透明度、數值選擇；可以搭配其他元件如 Checkbox 來使用`}),`
`,(0,H.jsx)(i,{}),`
`,(0,H.jsx)(t.h1,{id:`controls`,children:`Controls`}),`
`,(0,H.jsx)(r,{}),`
`,(0,H.jsx)(t.hr,{}),`
`,(0,H.jsx)(t.h1,{id:`usage-api`,children:`Usage API`}),`
`,(0,H.jsxs)(t.p,{children:[`初始化 Slider 元件，帶入參數 `,(0,H.jsx)(t.code,{children:`parentDOM`}),` 及 `,(0,H.jsx)(t.code,{children:`options`}),` 物件，並設定內部屬性。
(兩參數皆為可選值，若沒有帶入則會套用內部預設值)`]}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-javascript`,children:`new Slider(parentDOM, (options = {}));
`})}),`
`,(0,H.jsxs)(t.blockquote,{children:[`
`,(0,H.jsx)(t.h3,{id:`parameters-參數設定`,children:`parameters 參數設定`}),`
`]}),`
`,(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[`
`,(0,H.jsx)(`span`,{className:`sb-unstyled font-black`,children:`parentDOM`}),`
`,(0,H.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-html`,children:`<!--  要放入的container -->
<div id="slider_1"></div>
`})}),`
`,(0,H.jsx)(`br`,{}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-javascript`,children:`const sliderParent = document.getElementById("slider_1");
const sliderInstance = new Slider(sliderParent, {initValue: 79});
`})}),`
`,(0,H.jsx)(`br`,{}),`
`]}),`
`,(0,H.jsxs)(t.li,{children:[`
`,(0,H.jsxs)(t.p,{children:[(0,H.jsx)(`span`,{className:`sb-unstyled font-black`,children:` options`}),`
`,(0,H.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),(0,H.jsx)(t.br,{}),`
`,`各屬性傳入型別可參考上方 Control 說明，以下 option 設定值為內部預設值。`]}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-javascript`,children:`const sliderOptions = {
  min:1,
  max:100,
  initValue:0,
  step:1,
  range:false,
  theme:'var(--color-primary-500)',
  thumbImg:null,
  classes:['slider'],
  handler:null,
  disabled:false
}
`})}),`
`]}),`
`]}),`
`,(0,H.jsx)(`br`,{}),`
`,(0,H.jsxs)(t.blockquote,{children:[`
`,(0,H.jsx)(t.h3,{id:`properties-內部屬性`,children:`properties 內部屬性`}),`
`,(0,H.jsx)(`span`,{class:`sb-unstyled data-type readonly`,children:`Read-only`}),`
`,(0,H.jsx)(`span`,{className:`sb-unstyled`,children:`可以操作的屬性皆須使用methods來更改`}),`
`]}),`
`,(0,H.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,H.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{className:`text-center`,children:[(0,H.jsx)(`td`,{children:`property`}),(0,H.jsx)(`td`,{children:`descriptions`})]})}),(0,H.jsxs)(`tbody`,{children:[(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{className:`font-bold`,children:`options`}),(0,H.jsx)(`td`,{children:`該 Slider 元件的 options 參數設定`})]}),(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{className:`font-bold`,children:`childrens`}),(0,H.jsxs)(`td`,{children:[`指向該 Slider 元件的兩個子元件 [ `,(0,H.jsx)(t.code,{children:`Sliderbar`}),`, `,(0,H.jsx)(t.code,{children:`SliderThumb`}),`] (禁止從外部更改子元件設定)`]})]}),(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{className:`font-bold`,children:`thumb`}),(0,H.jsxs)(`td`,{children:[`指向 `,(0,H.jsx)(t.code,{children:`SliderThumb`}),` 子元件`]})]}),(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{className:`font-bold`,children:`bar`}),(0,H.jsxs)(`td`,{children:[`指向 `,(0,H.jsx)(t.code,{children:`SliderBar`}),` 子元件`]})]})]})]})}),`
`,(0,H.jsx)(`br`,{}),`
`,(0,H.jsxs)(t.blockquote,{children:[`
`,(0,H.jsx)(t.h3,{id:`methods-方法`,children:`methods 方法`}),`
`,(0,H.jsx)(t.p,{children:`提供外部控制方法調整內部屬性值`}),`
`]}),`
`,(0,H.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`Quick reference`}),`
`,(0,H.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,H.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,H.jsx)(`thead`,{children:(0,H.jsxs)(`tr`,{className:`text-center`,children:[(0,H.jsx)(`td`,{children:`methods`}),(0,H.jsx)(`td`,{children:`descriptions`}),(0,H.jsx)(`td`,{children:`inherit`})]})}),(0,H.jsxs)(`tbody`,{children:[(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{children:(0,H.jsx)(t.code,{children:`.el`})}),(0,H.jsx)(`td`,{children:`回傳該元件渲染的 DOM 節點元素`}),(0,H.jsx)(`td`,{children:(0,H.jsx)(t.code,{children:`BaseComponent`})})]}),(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{children:(0,H.jsx)(t.code,{children:`.getValue()`})}),(0,H.jsx)(`td`,{children:`回傳該元件的 slider 數值`})]}),(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{children:(0,H.jsx)(t.code,{children:`.setValue(val)`})}),(0,H.jsxs)(`td`,{children:[`傳入要設定的 slider 數值，如果是 range-type 則傳入 `,(0,H.jsx)(t.code,{children:`[ startVal, endVal ]`})]})]}),(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{children:(0,H.jsx)(t.code,{children:`.changeTheme(HEXstring)`})}),(0,H.jsx)(`td`,{children:`更改主題色`})]}),(0,H.jsxs)(`tr`,{children:[(0,H.jsx)(`td`,{children:(0,H.jsx)(t.code,{children:`.setDisabled(boolean)`})}),(0,H.jsx)(`td`,{children:`更改顯示/操作與否`})]})]})]})}),`
`,(0,H.jsx)(`span`,{className:`sb-unstyled methods`,children:`.el`}),`
`,(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`Returns`}),(0,H.jsx)(t.br,{}),`
`,`回傳主元件的DOM節點(HTMLElement) - `,(0,H.jsx)(t.code,{children:`<input/>`})]}),`
`]}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-javascript`,children:`  let sliderElem = Slider.el; // return an DOM HTMLElement
`})}),`
`,(0,H.jsx)(`span`,{className:`sb-unstyled methods`,children:`.getValue()`}),`
`,(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`Returns`}),(0,H.jsx)(t.br,{}),`
`,`回傳該元件的 slider 數值，如果是range則會回傳一個陣列`]}),`
`]}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-javascript`,children:`  let value = Slider.getValue(); // 30
`})}),`
`,(0,H.jsx)(`span`,{className:`sb-unstyled methods`,children:`.setValue(val)`}),`
`,(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`Parameters`}),(0,H.jsx)(t.br,{}),`
`,`傳入數值更改value值，如果是range則傳入一陣列`]}),`
`]}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-javascript`,children:`  Slider.setValue(45);
console.log(Slider.getValue()); // 45
`})}),`
`,(0,H.jsx)(`span`,{className:`sb-unstyled methods`,children:`.changeTheme(HEX)`}),`
`,(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`Parameters`}),(0,H.jsx)(t.br,{}),`
`,`參數可以放入任一HEX色碼，用來改變主題色`]}),`
`]}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-javascript`,children:`  Slider.changeTheme("#878787");
`})}),`
`,(0,H.jsx)(`span`,{className:`sb-unstyled methods`,children:`.setDisabled(boolean)`}),`
`,(0,H.jsxs)(t.ul,{children:[`
`,(0,H.jsxs)(t.li,{children:[(0,H.jsx)(t.strong,{children:`Parameters`}),(0,H.jsx)(t.br,{}),`
`,`傳入boolean值更改disabled狀態`]}),`
`]}),`
`,(0,H.jsx)(t.pre,{children:(0,H.jsx)(t.code,{className:`language-javascript`,children:`  Slider.setDisabled(true); //Slider will become disabled
`})})]})}function V(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,H.jsx)(t,{...e,children:(0,H.jsx)(B,{...e})}):B(e)}var H;function U(){return(U=e((()=>{H=o(),c(),t()})))()}var W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{z(),U(),{fn:W}=__STORYBOOK_MODULE_TEST__,{action:G}=__STORYBOOK_MODULE_ACTIONS__,K={title:`Components/Slider`,tags:[`autodocs`],parameters:{docs:{source:{format:!0,language:`html`},page:V}},render:({...e})=>{let t=document.createElement(`div`);t.classList.add(`w-70`);let n=R({...e});return t.appendChild(n.el),t},argTypes:{handlers:{action:`callback`,control:`function`,description:`callback function，可以取用 slider value`,table:{category:`options parameter`,defaultValue:{summary:`null`},type:{summary:`function`}}},initValue:{control:`number`,description:`初始值，如果有開啟range功能則傳入Array`,table:{category:`options parameter`,defaultValue:{summary:`0`},type:{summary:`number | array`}}},range:{control:`boolean`,description:`控制雙向slider功能`,table:{category:`options parameter`,defaultValue:{summary:`false`},type:{summary:`boolean`}}},thumbImg:{control:{type:`file`},description:`客製thumb圖示，可以放入圖片路徑來使用`,table:{category:`options parameter`,defaultValue:{summary:`null`},type:{summary:`/path-to-img.png`}}},step:{control:{type:`number`},table:{category:`options parameter`,defaultValue:{summary:`1`},type:{summary:`number`}}},theme:{control:{type:`color`,presetColors:[`var(--color-yellow-500)`]},description:`Slider主題色，可以傳入css variables 或是 HEX 色碼`,table:{category:`options parameter`,subcategory:`Inherits BaseComponent`,defaultValue:{summary:`var(--color-yellow-500)`},type:{summary:`string`}}},min:{control:{type:`number`},table:{category:`options parameter`}},max:{control:{type:`number`},table:{category:`options parameter`}},disabled:{control:`boolean`,description:`是否為disabled狀態，可以搭配Checkbox元件(傳入checked值)使用`,table:{category:`options parameter`,defaultValue:{summary:`false`},type:{summary:`boolean`}}}},args:{handlers:G(`getValue`)}},q={args:{initValue:30,range:!1,step:1,disabled:!1,theme:`#8bd7bb`,min:1,max:100}},J={args:{initValue:30,range:!1,step:1,disabled:!1,theme:`#8bd7bb`,min:1,max:100,thumbImg:`/sticker.png`}},Y={args:{initValue:[24,64],range:!0,step:1,disabled:!1,theme:`#8bd7bb`,min:1,max:100}},X=[`defaultSlider`,`customSlider`,`rangeSlider`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    initValue: 30,
    range: false,
    step: 1,
    disabled: false,
    theme: '#8bd7bb',
    min: 1,
    max: 100
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    initValue: 30,
    range: false,
    step: 1,
    disabled: false,
    theme: '#8bd7bb',
    min: 1,
    max: 100,
    thumbImg: '/sticker.png'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    initValue: [24, 64],
    range: true,
    step: 1,
    disabled: false,
    theme: '#8bd7bb',
    min: 1,
    max: 100
  }
}`,...Y.parameters?.docs?.source}}}})))()}Z();export{X as __namedExportsOrder,J as customSlider,K as default,q as defaultSlider,Y as rangeSlider};