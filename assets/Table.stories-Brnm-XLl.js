import{B as C,U as l,f as H}from"./Utils-D9cYNN_F.js";import{C as y}from"./Checkbox-Ad-IPbEC.js";import{D as x}from"./Dropdown-BFbw9Seo.js";/* empty css                 */import I from"./TableAPIdoc-Df3rKO3e.js";import{N as L}from"./Notification-DWN4lmg0.js";import"./iframe-DOtvq2Ys.js";import"./preload-helper-DLLWEBaG.js";import"./index-ksVrQ76b.js";const w="index",b="rowselected",E="field",T="sort",h=[10,20,25,50,100,1e3];var N={id:"",container:null,limits:h[2],name:"defaultTable",classes:["table-container"],cols:[],selection:"checkbox",tools:["group","exports","print"]},F={field:void 0,title:void 0,align:"left",fixed:!1,sort:void 0,template:void 0,visible:!0};let k=class extends C{constructor(e={},t){let a=document.createElement("div");const s=document.createElement("table");a.appendChild(s);//!把初始設定值定義好-cols
let i=e.cols;e.cols=i.map(o=>Object.assign({},F,o)),super(a,e.theme="var(--color-primary-500)"),this.UItype="Table",this.id=e.id,this._config=Object.assign(N,e),this.table=s,this.tableBody=document.createElement("tbody"),this.tableHeader=new M(this);let n=this.config.cols.length;this.skeleton=new $({type:"table",colNum:this.config.selection?n+1:n}),this._data=t?.map((o,r)=>Object.assign({},{index:r+1,data:o})),this.dataCounts=this.data?.length||0,this._createPagination(),this._init()}get config(){return this._config}get data(){return this._data}async pullData(e){return await fetch(e)}_init(){this.config.tools&&this._createToolBar(this.config.tools),this._render(),this._bindEvent()}_render(){super.setTheme(this.config.theme),l.setProperty(this._elem,"--theme",this._theme),this.dataCounts<1?(this.tableBody.appendChild(this.skeleton.getElem()),this.skeleton.show()):this.skeleton.hide(),!this.data&&this.config.url&&this.pullData(this.config.url).then(t=>t.json()).then(t=>{this.setData(t),this.skeleton.hide()}),this.table.id=this.id,this.table.appendChild(this.tableHeader.getElem()),this.table.appendChild(this.tableBody),l.addClass(this.table,["table"]),l.addClass(this._elem,this.config.classes);let e=H(this.config.container);e||(e=document.createElement("div")),this.tools&&e.appendChild(this.tools),e.appendChild(this.getElem()),this._elem.after(this._pagination.getElem())}_bindEvent(){this.onevent(this.tableBody,"click",(function(e){let t;if(e.target.nodeName==="INPUT")t=e.target.checked;else{const i=e.target.closest("tr[data-index]").querySelector("input[type='checkbox']");t=!i.checked,i.checked=t}let a=parseInt(e.target.closest("tr[data-index]").dataset.index);this.selectedRows[a]=t,this.restoreState();const s=this.checkPageSelected();this.tableHeader.selection.setChecked(s)}).bind(this))}_createToolBar(e){let t=document.createElement("div");for(let a of e){let s,i;switch(a){case"group":let n=document.createElement("div");l.addClass(n,["tools-popover"]),n.addEventListener("click",r=>{r.stopImmediatePropagation(),r.target.nodeName==="INPUT"&&l.toggleClass(n,["visible"])});let o=this.config.cols;for(let r of o){let c=new y({theme:this._theme,checked:r.visible,title:r.title,handlers:u=>{r.visible=u,this.tableHeader._updateCol(`${r.field}`,r)}});n.appendChild(c.container)}s=l.setButtons({classes:["btn-sm","outline-btn","relative"],icon:"/filter.svg",handler:r=>{r.stopImmediatePropagation(),r.target===s&&l.toggleClass(n,["visible"])}}),t.appendChild(n);break;case"exports":i=()=>{},s=l.setButtons({classes:["btn-sm","outline-btn"],icon:"/export.svg",handler:i});break;case"print":i=()=>{},s=l.setButtons({classes:["btn-sm","outline-btn"],icon:"/print.svg",handler:i});break;default:t.appendChild(l.setButtons(a));break}t.appendChild(s)}l.addClass(t,["table-tools"]),this.tools=t}_createRow(e,t,a){const s=document.createElement("tr");if(l.setAttribute(s,w,t),this.config.selection==="checkbox"){const i=document.createElement("td"),n=new y(i,{checked:!1,theme:this._theme});s.appendChild(n.container)}return a.forEach(i=>{const n=this._createCell(e,i);s.appendChild(n)}),s}_createCell(e,t){const a=document.createElement("td");let{field:s,align:i="left",template:n,fixed:o}=t,r=document.createElement("span");switch(i){case"center":l.addClass(a,["text-center"]);break;case"right":l.addClass(a,["text-right"]);break;default:l.clearClass(a);break}if(l.setAttribute(a,E,s),e.data[s]&&(l.setText(r,e.data[s]),a.appendChild(r)),n){let c=e.data[s]||this.data[e.index-1];n.call({_elem:a},c)}return a}_rowSort(e,t){switch(e){case"asc":this.data.sort((a,s)=>a.data[t]-s.data[t]);break;case"dec":this.data.sort((a,s)=>s.data[t]-a.data[t]);break}this._showRows()}_checkRowState(e){return this.selected[e]}_showRows(){const e=this.config.cols.filter(s=>s.visible!==!1),t=this.getCurrentData();console.log("showRow's pageData:",t);let a=document.createDocumentFragment();t.forEach((s,i)=>{(this.getCurrentPage()-1)*this.config.limits+i+1;const n=this._createRow(s,s.index,e);a.appendChild(n)}),this.tableBody.innerHTML="",this.tableBody.appendChild(a),this.restoreState(),this._elem.scrollTop=0}restoreState(){const e=this.checkPageSelected();this.tableHeader.selection.setChecked(e),this.tableBody.querySelectorAll("tr[data-index]").forEach(a=>{const s=parseInt(a.dataset.index),i=this.selectedRows[s]||!1,n=a.querySelector('input[type="checkbox"]');n&&(n.checked=i),i?l.setAttribute(a,b):delete a.dataset[b]})}setSize(e,t="auto"){l.setStyle(this._elem,"width",`${e}px`),l.setStyle(this._elem,"height",`${t}px`)}getTableData(){this.data||console.error("No Data Yet!")}getSelectedRows(){const e=Object.keys(this.selectedRows).filter(a=>this.selectedRows[a]!==!1);return this.data.filter((a,s)=>{if(e.includes((s+1).toString()))return a.data})}getFiltedRows(e){return this._data.filter(e)}setData(e){return this._data=e.map((t,a)=>Object.assign({},{index:a+1,data:t})),this.dataCounts=this.data.length,this._pagination.renderPage(this.dataCounts),this.selectedRows={},this._showRows(),this._render(),this}selectedFullPage(e,t=!0){return this.getCurrentData(e).forEach((s,i)=>{const n=(e-1)*this.config.limits+i+1;this.selectedRows[n]=t}),this}_createPagination(){this._pagination=new V({theme:this._theme,currentPage:1,pageSize:this.config.limits,total:this.dataCounts,controlPage:this.config.controlPage,handler:({page:e,size:t})=>{this.config.limits=t,this.restoreState(),this._showRows(),console.log("目前selected的row:",this.getSelectedRows())}})}getCurrentData(e=this.getCurrentPage()){const t=(e-1)*this.config.limits,a=t+this.config.limits;return this.data.slice(t,a)}getCurrentPage(){return this._pagination.currentPage}checkPageSelected(){const e=this.selectedRows;return Array.from(this.tableBody.querySelectorAll("tr[data-index]")).every(s=>s.dataset[w]in e)}clearSelected(){let e=this._pagination.total;for(let t=1;t<=e;t++)this.selectedFullPage(t,!1),this.restoreState(),console.log(this);this.tableHeader.selection.setChecked(!1)}};class M extends C{constructor(e){const{cols:t,selection:a,theme:s}=e.config,i=document.createElement("thead"),n=document.createElement("tr");i.appendChild(n),super(i,s),this.UItype="TableHeader",this.table=e,this.cols=t,this.selection=this._checkSelection(a),this._init()}_init(){if(this.selection.UItype==="Checkbox"){const e=document.createElement("th");e.appendChild(this.selection.getElem()),this._elem.querySelector("tr").appendChild(e)}this._elem.querySelector("tr").appendChild(this._createHead()),this._bindEvent()}_bindEvent(){function e(t){if(t.stopPropagation(),t.currentTarget.dataset.sort){let a=t.currentTarget.dataset.sort==="asc"?"dec":"asc";this.table._rowSort(a,t.currentTarget.dataset.field),l.setAttribute(t.currentTarget,T,a)}}this.cols.some(t=>t.sort)&&this.getElem().querySelectorAll("[data-sort]").forEach(t=>{this.onevent(t,"click",e.bind(this))})}_render(){const e=document.createDocumentFragment(),t=this.getElem().querySelectorAll("th");e.append(...t);//!把節點放到新的片段中組裝
const a=document.createDocumentFragment();this.selection.UItype==="Checkbox"&&a.appendChild(e.firstElementChild);const s=Array.from(t).map(i=>i.dataset.field);for(let i=0;i<this.cols.length;i++)if(this.cols[i].visible)if(s.includes(this.cols[i].field)){let n=e.querySelector(`[data-field=${this.cols[i].field}]`);a.appendChild(n)}else a.appendChild(this._createCol(this.cols[i]));this._elem.querySelector("tr").appendChild(a)}_createHead(){const e=document.createDocumentFragment();for(let t of this.cols){if(!t.visible)continue;let a=this._createCol(t);e.appendChild(a)}return e}_createCol(e){let{field:t,title:a,sort:s,visible:i,resize:n}=e;if(!i)return;let o=document.createElement("th"),r=document.createElement("span");if(l.setAttribute(o,E,t),l.setText(r,a),s&&(l.setAttribute(o,T,s),r.innerHTML+=`<svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17.25C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H11C10.5858 18.75 10.25 18.4142 10.25 18C10.25 17.5858 10.5858 17.25 11 17.25H14ZM16 13.25C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75H11C10.5858 14.75 10.25 14.4142 10.25 14C10.25 13.5858 10.5858 13.25 11 13.25H16ZM18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H11C10.5858 10.75 10.25 10.4142 10.25 10C10.25 9.58579 10.5858 9.25 11 9.25H18ZM21 5.25C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H11C10.5858 6.75 10.25 6.41421 10.25 6C10.25 5.58579 10.5858 5.25 11 5.25H21Z" fill="currentColor"/>
<path d="M4.24999 10.7617V15C4.24999 15.4142 4.58578 15.75 4.99999 15.75C5.4142 15.75 5.74999 15.4142 5.74999 15V10.7617C5.83248 10.875 5.9131 10.9879 5.9912 11.0967L5.9958 11.1031C6.1467 11.3133 6.30972 11.5404 6.43847 11.6855C6.71335 11.9954 7.18818 12.0239 7.49804 11.749C7.80761 11.4742 7.83604 11.0002 7.56151 10.6904C7.49513 10.6156 7.38199 10.4613 7.20995 10.2217L7.19283 10.1978C7.0366 9.98019 6.84876 9.71852 6.65526 9.46875C6.45751 9.2135 6.23286 8.94285 6.00487 8.73047C5.89083 8.62424 5.75714 8.51521 5.60937 8.42871C5.46887 8.34647 5.25683 8.25 4.99999 8.25C4.74316 8.25 4.53111 8.34647 4.39062 8.42871C4.24284 8.51521 4.10915 8.62424 3.99511 8.73047C3.76712 8.94285 3.54247 9.2135 3.34472 9.46875C3.14409 9.72771 2.94956 9.99947 2.79003 10.2217C2.61799 10.4613 2.50485 10.6156 2.43847 10.6904C2.16394 11.0002 2.19237 11.4742 2.50194 11.749C2.8118 12.0239 3.28663 11.9954 3.56151 11.6855C3.69026 11.5403 3.85328 11.3133 4.00418 11.1031L4.00878 11.0967C4.08689 10.9879 4.1675 10.875 4.24999 10.7617Z" fill="currentColor"/>
</svg>
`),n){let c=document.createElement("div");l.addClass(c,["table-resizer"]),c.style.height=`${this.table.getElem().offsetHeight}px`,o.appendChild(c)}return o.appendChild(r),o}_checkSelection(e){let t=document.createElement("th");if(e==="checkbox")return new y(t,{theme:this._theme,checked:!1,handlers:s=>{const i=this.table.getCurrentPage();this.table.selectedFullPage(i,s),this.table.tableBody.querySelectorAll("tr[data-index]").forEach(o=>{const r=o.querySelector("input[type='checkbox']");r.checked=s,s?l.setAttribute(o,b):delete o.dataset[b]}),console.log(this.table)}});if(e==="radio")return}_updateCol(e,t){this.cols=this.cols.map(a=>a.field===e?{...a,...t}:a),this._render();//!重新依據資料showRows
this.table._showRows()}}//! 未來要獨自拆出檔案
const O="currentPage",j="prev",z="next";var U={jump:!0,initCurrentPage:1,pageSize:h[1],total:0,controlPage:!1};class V extends C{constructor(e){const t=document.createElement("div");l.addClass(t,["pagination"]),super(t,e.theme="var(--color-primary-500)"),this.UItype="Pagination",this._config=Object.assign(U,e),this.currentPage=e.currentPage||1,this.total=Math.ceil(this.config.total/this.config.pageSize)||0,this.pages=this._createPages(this.total,this.currentPage),this.handler=e.handler,this._init()}get config(){return this._config}_init(){this._render(),this._bindEvent()}_render(){this._elem.innerHTML="",super.setTheme(this._theme),l.setProperty(this._elem,"--theme",this._theme);let e=document.createDocumentFragment();for(let t=0;t<this.pages.length;t++){let a=document.createElement("button");switch(a.type="button",this.pages[t].current&&l.setAttribute(a,O),l.addClass(a,["page-item"]),this.pages[t].type){case"prev-page":l.setText(a,"<<"),l.setAttribute(a,j);break;case"next-page":l.setText(a,">>"),l.setAttribute(a,z);break;case"start-ellipsis":l.setText(a,"..."),a.disabled=!0;break;case"end-ellipsis":l.setText(a,"..."),a.disabled=!0;break;default:l.setText(a,this.pages[t].page),a.dataset.page=this.pages[t].page;break}(this.pages[t].page<1||this.pages[t].page>this.total)&&(this.pages[t].page=this.currentPage,a.disabled=!0),e.appendChild(a)}this._elem.appendChild(e),this.config.jump&&this._createJumpCompo(),this.config.controlPage&&this._createPageControl()}_bindEvent(){function e(t){if(t.stopPropagation(),!t.target.classList.contains("page-item"))return;let a=Number(t.target.dataset.page);a||(a=t.target.hasAttribute("data-prev")?this.currentPage-1:t.target.hasAttribute("data-next")?this.currentPage+1:this.currentPage),this.goPage(a),this.handler({page:a,size:this.config.pageSize})}super.onevent(this._elem,"click",e.bind(this))}_createPages(e,t){let a=[],s=this.config.pageSize,i={type:"prev-page",page:this.currentPage-1,current:!1},n={type:"next-page",page:this.currentPage+1,current:!1};for(let r=1;r<=e;r++){let c;r===1||r===t||r===e||r===t+1||r===t-1?c="page":r<=t+s?c="start-ellipsis":r>=t+s&&(c="end-ellipsis");let u={type:c||"page",page:r,current:r===t};a.push(u)}let o=a.filter((r,c)=>{const{type:u}=r;return!(u==="start-ellipsis"&&a[c+1].type==="start-ellipsis"||u==="end-ellipsis"&&a[c+1].type==="end-ellipsis"||u==="start-ellipsis"&&a[c+1].type==="end-ellipsis")});return[i,...o,n]}_createJumpCompo(){if(this.total<=0)return;let e=document.createElement("div");l.addClass(e,["pagination-jump"]);let t=[];for(let i=1;i<=this.total;i++){let n={value:i,text:i};i===this.currentPage&&(n.selected=!0),t.push(n)}let a=new x("jump-dropdown",t,{filter:!0,filterHandler:function(){let n=this.value;this.parentNode.parentNode.querySelectorAll(".dropdown-item li").forEach(r=>{r.textContent.includes(n)?r.classList.remove("hidden"):r.classList.add("hidden")})}},(function(i){let n=Number(i.target.value);this.goPage(n),this.handler({page:n,size:this.config.pageSize})}).bind(this)),s=document.createDocumentFragment();s.appendChild(document.createTextNode("前往第")),s.appendChild(a.containerEl),s.appendChild(document.createTextNode(`/${this.total} 頁`)),e.appendChild(s),this._elem.appendChild(e)}_createPageControl(){let e=document.createElement("div");l.addClass(e,["pagination-jump"]);let t=[];for(let i=0;i<h.length;i++){let n={value:h[i],text:`${h[i]}條`};h[i]===this.config.pageSize&&(n.selected=!0),t.push(n)}let a=new x("table-page-dropdown",t,null,(function(i){let n=Number(i.target.value);this._config.pageSize=n,this.renderPage(this._config.total),this.goPage(1),this.handler({page:1,size:n})}).bind(this)),s=document.createDocumentFragment();s.appendChild(document.createTextNode("每頁顯示")),s.appendChild(a.containerEl),s.appendChild(document.createTextNode(" / 頁")),e.appendChild(s),this._elem.appendChild(e)}renderPage(e){this._config={...this.config,total:e},this.total=Math.ceil(e/this._config.pageSize),this.pages=this._createPages(this.total,this.currentPage),this._render()}setCurrentPage(e){this.currentPage=e,this.pages=this._createPages(this.total,this.currentPage),this._config={...this.config,currentPage:e}}goPage(e){console.log(`go ${e} page`),!(e<1||e>this.total)&&(this.setCurrentPage(e),this._render())}}//! 未來要獨自拆出檔案
class $ extends C{constructor(e){let t;switch(e.type){case"table":t=document.createElement("tr");break;case"text":break;case"img":break;default:t=document.createElement("div")}super(t),this.UItype="Skeleton",this.options=e,this._render()}_render(){l.addClass(this._elem,["skeleton"]),this.defineType(this.options.type,this.options?.colNum)}defineType(e,t){switch(l.clearClass(this._elem,["skeleton"]),e){case"table":l.addClass(this._elem,["table-skeleton"]),this._elem.innerHTML=`
          <td colspan='${t}' class="shadow-sm animate-pulse">
              <div class="flex items-center justify-between">
                  <div>
                      <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                  <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
              </div>
              <div class="flex items-center justify-between pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                  <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
              </div>
              <div class="flex items-center justify-between pt-4">
                  <div>
                      <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                  <div class="h-2.5 bg-gray-300 rounded-full w-12"></div>
              </div>
              <span class="sr-only">Loading...</span>
          </td>`;break;case"text":l.addClass(this._elem,["text-skeleton"]),this._elem.innerHTML=`
          <div role="status" class="max-w-sm animate-pulse">
              <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
              <span class="sr-only">Loading...</span>
          </div>`;break;case"img":l.addClass(this._elem,["img-skeleton"]),this._elem.innerHTML=`
          <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
              <svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
            </svg>
              <span class="sr-only">Loading...</span>
          </div>`;break}}show(){l.removeClass(this._elem,["hidden"])}hide(){l.addClass(this._elem,["hidden"])}}window.Table=k;const q=({id:d,name:e,limits:t,selection:a,container:s,cols:i,tools:n,groupTool:o,exportsTool:r,printTool:c,theme:u,classes:P,complete:S,error:D,handler:A})=>{let p=document.createElement("div");p.className="mx-auto grid place-items-center";let g=document.createElement("button");g.className="btn btn-secondary mb-3",g.textContent="create Table";let m=document.createElement("button");m.className="btn btn-danger outline-btn mb-3",m.textContent="clear Selected";let _=document.createElement("div");_.className="table-test-target",p.appendChild(g),p.appendChild(_),p.appendChild(m);let B=[o="group",r="exports",c="print"],R={id:d,name:e,limits:t,container:s||".table-test-target",cols:i,tools:n?[...B]:!1,selection:a,theme:u,classes:P,complete:S,error:D,handler:A,url:"https://jsonplaceholder.typicode.com/comments",controlPage:!0};return g.addEventListener("click",()=>{let v=new k(R);console.log("table_instance:",v),m.addEventListener("click",()=>{v.setSize(500,100)})}),p},{fn:ae,expect:se}=__STORYBOOK_MODULE_TEST__,{action:ie}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Components/Table",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:I}},render:({...d})=>q({...d}),argTypes:{id:{control:"text",type:{required:!0},description:"表格元素id",table:{category:"configurations",type:{summary:"string"}}},name:{control:"text",description:"Table name",table:{category:"configurations",defaultValue:{summary:"-"},type:{summary:"string"}}},limits:{control:"select",options:[10,20,25,50,100],description:"每頁顯示的最多筆數",table:{category:"configurations",defaultValue:{summary:"25"},type:{summary:"number"}}},container:{control:"text",description:"要放入的DOM元素",table:{category:"configurations",defaultValue:{summary:"null"},type:{summary:"string"}}},cols:{control:"array",description:"欄位設定及帶入值",table:{category:"configurations",defaultValue:{summary:"-"},type:{summary:"array"}}},selection:{control:"select",options:["checkbox","radio"],description:"是否要有勾選功能",table:{category:"configurations",defaultValue:{summary:"checkbox"},type:{summary:"string"}}},tools:{control:"boolean",description:"是否要有基本工具列",table:{category:"configurations",defaultValue:{summary:"true"},type:{summary:"boolean"}}},groupTool:{control:"boolean",if:{arg:"tools",truthy:!0},description:"群組篩選工具",table:{category:"configurations",subcategory:"tools feature",defaultValue:{summary:"true"},type:{summary:"boolean"}}},exportsTool:{control:"boolean",if:{arg:"tools",truthy:!0},description:"匯出工具",table:{category:"configurations",subcategory:"tools feature",defaultValue:{summary:"true"},type:{summary:"boolean"}}},printTool:{control:"boolean",if:{arg:"tools",truthy:!0},description:"列印工具",table:{category:"configurations",subcategory:"tools feature",defaultValue:{summary:"true"},type:{summary:"boolean"}}},theme:{control:"color",description:"表格色系",table:{category:"configurations",defaultValue:{summary:"var(--color-primary-500)"},type:{summary:"string"}}},complete:{control:"function",description:"完成資料載入後要執行的函式",table:{category:"configurations",type:{summary:"function"}}},classes:{control:{type:"array"},description:"自定義class，每個class以tailwindcss property放入",table:{category:"configurations",defaultValue:{summary:".table-container"},type:{summary:"array"}}},error:{control:{type:"function"},description:"資料載入失敗時要執行的函式",table:{category:"configurations",type:{summary:"function"}}},handler:{action:"click",control:"function",description:"點擊觸發元素後的callback函式",table:{category:"configurations",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{id:"table_first",classes:["table-container"],limits:25,selection:"checkbox",tools:!0,theme:"var(--color-primary-500)",groupTool:!0,exportsTool:!0,printTool:!0}},f={args:{id:"test-table",name:"測試表格",cols:[{field:"postId",title:"postId",sort:"asc",fixed:!1,align:"center",template:function(d){let e=`<div>${d}</div>`;this._elem.innerHTML=e}},{field:"id",title:"id",sort:"dec",fixed:!1,align:"right",visible:!1,resize:!0},{field:"name",title:"名字",sort:!1,fixed:!1,align:"center"},{field:"email",title:"email",sort:!1,fixed:!0,align:"center"},{field:"body",title:"內容",sort:!1,fixed:!1},{field:"operate",title:"操作",sort:!1,fixed:!1,template:function(d){d.index===1&&(d=void 0);let t=[{classes:["btn-sm",`${!!d?"btn-success":"btn-secondary"}`],text:"查看細節",handler:function(s){s.stopPropagation(),console.log(d),L.modal(this,{customContent:`<div>${JSON.stringify(d)}</div>`})}},{classes:["btn-sm","btn-danger"],text:"刪除此列",handler:function(s){s.stopPropagation(),console.log("btn handler get value:",d)}}],a=document.createElement("div");l.addClass(a,["flex","gap-2","justify-center"]),l.setBtnGroup(t,a),this._elem.appendChild(a)}}],limits:25,container:".table-test-target"}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: "test-table",
    name: "測試表格",
    cols: [{
      field: 'postId',
      title: 'postId',
      sort: 'asc',
      fixed: false,
      align: "center",
      template: function (data) {
        let template = \`<div>\${data}</div>\`;
        this._elem.innerHTML = template;
      }
    }, {
      field: 'id',
      title: 'id',
      sort: 'dec',
      fixed: false,
      align: "right",
      visible: false,
      resize: true
    }, {
      field: 'name',
      title: '名字',
      sort: false,
      fixed: false,
      align: "center"
    }, {
      field: 'email',
      title: 'email',
      sort: false,
      fixed: true,
      align: "center"
    }, {
      field: 'body',
      title: '內容',
      sort: false,
      fixed: false
    }, {
      field: 'operate',
      title: '操作',
      sort: false,
      fixed: false,
      template: function (data) {
        //手動測試資料為undefined
        if (data.index === 1) {
          data = undefined;
        }
        let isSelectable = Boolean(data);
        let buttons = [{
          classes: ["btn-sm", \`\${isSelectable ? "btn-success" : "btn-secondary"}\`],
          text: "查看細節",
          handler: function (e) {
            e.stopPropagation(); //避免觸發選取該row
            console.log(data);
            Notification.modal(this, {
              customContent: \`<div>\${JSON.stringify(data)}</div>\`
            });
          }
        }, {
          classes: ["btn-sm", "btn-danger"],
          text: "刪除此列",
          handler: function (e) {
            e.stopPropagation(); //避免觸發選取該row
            console.log("btn handler get value:", data);
          }
        }];
        let btnContainer = document.createElement("div");
        UIUtils.addClass(btnContainer, ["flex", "gap-2", "justify-center"]);
        UIUtils.setBtnGroup(buttons, btnContainer);
        this._elem.appendChild(btnContainer);
      }
    }],
    limits: 25,
    container: '.table-test-target'
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...f.parameters?.docs?.source}}};const le=["Table"];export{f as Table,le as __namedExportsOrder,ne as default};
