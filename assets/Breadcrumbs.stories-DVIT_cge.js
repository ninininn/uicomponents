import{B as b,D as r}from"./BaseCompo-DBroM2vG.js";import h from"./BreadcrumbsAPIdoc-BglNTEIC.js";import"./iframe-UhzdqN6V.js";import"./preload-helper-DLLWEBaG.js";const f={paths:[],theme:"var(--stx-system-primary)",size:"md"};class i extends b{constructor(s){const e=r.create("div");super(e),this.UItype="Breadcrumbs",this._config=Object.assign({},f,s),this._init()}static fromElement(s,{attr:e="data-route",onNavigate:n}={}){const o=[];let t=s;for(;t;)t.hasAttribute(e)&&o.unshift({el:t,label:t.getAttribute(e)}),t=t.parentElement;const a=o.map(({el:d,label:m},p)=>p===o.length-1||!n?{label:m}:{label:m,handler:()=>n(d)});return new i({paths:a})}_init(){r.setAttr(this.el,"aria-label","breadcrumb"),r.addClass(this.el,"breadcrumb");const s=r.create("ol");r.addClass(s,"breadcrumb-list"),this._config.paths.forEach((e,n)=>{const o=n===this._config.paths.length-1,t=r.create("li");if(r.addClass(t,["breadcrumb-item"]),o)r.setAttr(t,"aria-current","page"),r.addClass(t,["breadcrumb-item--current"]),r.setText(t,e.label);else if(e.href){const a=r.create("a");a.href=e.href,r.setText(a,e.label),t.append(a)}else if(e.handler){const a=r.create("button");a.type="button",r.addClass(a,["breadcrumb-btn"]),r.setText(a,e.label),this.onevent(a,"click",e.handler),t.append(a)}else r.setText(t,e.label);s.append(t)}),this.el.append(s)}}const g=({paths:c,theme:s})=>{const e=document.createElement("div");e.className="p-4";const n=new i({paths:c,theme:s});return e.appendChild(n.el),e},C=()=>{const c=document.createElement("div");c.className="p-4 flex flex-col gap-6";const s=document.createElement("section");s.setAttribute("data-route","首頁");const e=document.createElement("section");e.setAttribute("data-route","產品列表");const n=document.createElement("section");n.setAttribute("data-route","產品詳細");const o=document.createElement("section");o.setAttribute("data-route","產品詳細頁面"),n.appendChild(o),e.appendChild(n),s.appendChild(e);const t=document.createElement("p");t.className="text-sm mt-2 text-gray-500",t.textContent="當前：產品詳細頁面";const a=i.fromElement(o,{onNavigate:d=>{t.textContent=`切換到：${d.getAttribute("data-route")}`}});return c.appendChild(a.el),c.appendChild(t),c},D={title:"Components/Breadcrumbs",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:h}},render:({...c})=>g({...c}),argTypes:{paths:{control:"object",description:"麵包屑路徑清單，每項為 `{ label, href }`。最後一項不填 href 視為當前頁，不會加上連結",table:{category:"configurations",type:{summary:"Array<{ label: string, href?: string }>"},defaultValue:{summary:"[]"}}},theme:{control:"color",description:"主題色",table:{category:"configurations",defaultValue:{summary:"var(--stx-system-primary)"},type:{summary:"string"}}}},args:{paths:[{label:"首頁",href:"/"},{label:"產品列表",href:"/products"},{label:"產品詳細",href:"/details"},{label:"產品詳細內容"}],theme:"var(--stx-system-primary)"}},l={args:{paths:[{label:"首頁",href:"/"},{label:"產品列表",href:"/products"},{label:"產品詳細",href:"/details"},{label:"產品詳細內容"}]}},u={render:()=>C(),args:{}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    paths: [{
      label: "首頁",
      href: "/"
    }, {
      label: "產品列表",
      href: "/products"
    }, {
      label: "產品詳細",
      href: "/details"
    }, {
      label: "產品詳細內容"
    }]
  }
}`,...l.parameters?.docs?.source},description:{story:"手動傳入 paths 陣列",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => createBreadcrumbsFromElement(),
  args: {}
}`,...u.parameters?.docs?.source},description:{story:"使用 Breadcrumbs.fromElement() — 自動從巢狀 DOM 的 data-route 屬性產生路徑",...u.parameters?.docs?.description}}};const F=["Manual","FromElement"];export{u as FromElement,l as Manual,F as __namedExportsOrder,D as default};
