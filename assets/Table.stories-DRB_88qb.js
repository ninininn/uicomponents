import{B as c,c as C,U as a,u as w}from"./Utils-C7ThPTTu.js";import{C as b}from"./Checkbox-CTVjkoEw.js";/* empty css                 */import k from"./TableAPIdoc-Cvpla6n4.js";import"./iframe-r4pb3cj8.js";import"./preload-helper-DLLWEBaG.js";let f=class extends c{constructor(e={},t=[]){let s=document.createElement("div");const i=document.createElement("table");super(s,e.theme||"var(--color-primary-200)"),this.UItype="Table",this.id=e.id,this.options={...this.config,...e},this.data=t,this.table=i,this.dataCounts=this.data.length,this._init()}get config(){return{id:"",container:null,limits:50,name:"defaultTable",classes:["table-container"],cols:[],selection:"checkbox",themeColor:"var(--color-primary-100)"}}_init(){this.tableBody=document.createElement("tbody"),this.tableHeader=new E(this.options.cols,this.options.selection);let e=this.options.cols.length;this.skeleton=new R({type:"table",colNum:this.options.selection?e+1:e}),C(this,this.options.cols),console.log(window.CoreContexts),this._createPagination(),this._render(),this._bindEvent()}_render(){super.setTheme(this.options.themeColor),a.setProperty(this._elem,"--theme",this._theme),this.dataCounts<1?this.tableBody.appendChild(this.skeleton.getElem()):this.skeleton.hide(),this.table.id=this.id,this.table.appendChild(this.tableHeader.getElem()),this.table.appendChild(this.tableBody),this._elem.appendChild(this.table),a.addClass(this.table,["table"]),a.addClass(this._elem,this.options.classes),this._updateRows(),this._renderRows(0,this.options.limits),this.options.container?(this.options.container.appendChild(this._elem),this._elem.after(this._pagination.getElem())):console.error("請指定table要放入的位置")}_bindEvent(){}_setRows(e,t){let s=this;return e.map((n,r)=>new T(n,r,t,s))}_updateRows(){this.tableRows=this._setRows(this.data)}_renderRows(e,t){if(!this.tableRows)return;let s=this.tableRows.slice(e,t),i=document.createDocumentFragment();for(let r of s)i.appendChild(r.getElem());let n=this.tableBody.querySelectorAll("tr[data-index]");for(let r of n)r.remove();this.tableBody.appendChild(i),this._elem.scrollTop=0}setSize(e,t="auto"){a.setStyle(this._elem,"width",`${e}px`),a.setStyle(this._elem,"height",`${t}px`)}getTableData(){if(!this.tableRows){console.error("No Data Yet!");return}return this.tableRows.map(t=>t.data)}getSelected(){}setData(e){this.data=e,this.dataCounts=this.data.length,this._pagination.renderPage(this.dataCounts),this._render()}_createPagination(){this._pagination=new S({currentPage:1,pageSize:this.options.limits,total:this.dataCounts,handler:e=>{console.log("handler page:",e);const t=(e-1)*this.options.limits,s=t+this.options.limits;this._renderRows(t,s)}})}};class E extends c{constructor(e,t){const s=document.createElement("thead");super(s),this.UItype="TableHeader",this.cols=e,this.selection=this._checkSelection(t),this._init()}_init(){this._render()}_render(){const e=document.createElement("tr"),t=document.createDocumentFragment();if(this.selection.UItype==="Checkbox"){const s=document.createElement("th");s.appendChild(this.selection.getElem()),e.appendChild(s)}for(let s of this.cols){let i=document.createElement("th");a.setAttribute(i,"field",s.field),a.setText(i,s.title),t.appendChild(i)}e.appendChild(t),this._elem.appendChild(e)}_checkSelection(e){let t=document.createElement("th");if(e==="checkbox")return new b(t,{checked:!1});if(e==="radio")return}}class T extends c{constructor(e,t,s="checkbox",i){const n=document.createElement("tr");super(n),this.UItype="TableRow",this.data=e,this.selection=this._checkSelection(s),this.cells=this._setTableCells(this.data,w(i)),this.index=++t,this._init()}_init(){let e=document.createDocumentFragment();this.selection&&e.appendChild(this.selection.container);for(let t of this.cells)e.appendChild(t.getElem());this._elem.appendChild(e),a.setAttribute(this._elem,"index",this.index),this._bindEvent()}_bindEvent(){function e(){this.selection.getChecked()?a.setAttribute(this._elem,"rowSelected"):delete this._elem.dataset.rowselected}this.selection&&this.onevent(this.selection.getElem(),"change",e.bind(this))}_checkSelection(e){let t=document.createElement("td");if(e==="checkbox")return new b(t,{checked:!1});if(e==="radio")return}_setTableCells(e,t){return Object.values(e).map((i,n)=>new P(i,t[n]))}}class P extends c{constructor(e,t){const s=document.createElement("td");super(s),this.UItype="TableCell",this.dataValue=e,this.config=t,this._init()}_init(){this._render()}_render(){let{field:e,align:t="left"}=this.config;switch(t){case"center":a.addClass(this._elem,["text-center"]);break;case"right":a.addClass(this._elem,["text-right"]);break;default:a.clearClass(this._elem);break}a.setAttribute(this._elem,"field",e),a.setText(this._elem,this.dataValue)}}//! 未來要獨自拆出檔案
class S extends c{constructor(e){const t=document.createElement("div");a.addClass(t,["pagination"]),super(t),this.UItype="Pagination",this._config={...this.config,...e},this.currentPage=e.currentPage||1,this.total=Math.ceil(this._config.total/this._config.pageSize),this.pages=this._createPages(this.total,this.currentPage),this.handler=e.handler,this._init()}get config(){return{currentPage:1,pageSize:20,total:null}}_init(){this._render(),this._bindEvent()}_render(){console.log(this),this._elem.innerHTML="";let e=document.createDocumentFragment();for(let t=0;t<this.pages.length;t++){let s=document.createElement("button");switch(s.type="button",this.pages[t].current&&a.setAttribute(s,"currentPage"),a.addClass(s,["page-item"]),this.pages[t].type){case"prev-page":a.setText(s,"<<");break;case"next-page":a.setText(s,">>");break;default:a.setText(s,this.pages[t].page);break}(this.pages[t].page<1||this.pages[t].page>this.total)&&(this.pages[t].page=this.currentPage,s.disabled=!0),s.dataset.page=this.pages[t].page,e.appendChild(s)}this._elem.appendChild(e)}_bindEvent(){super.onevent(this._elem,"click",e=>{let t=Number(e.target.dataset.page);this.pages[t].onclick(t),this.handler(t)})}_createPages(e,t){let s=this,i=[],n={type:"prev-page",page:this.currentPage-1,current:!1,onclick:this.goPage.bind(s)},r={type:"next-page",page:this.currentPage+1,current:!1,onclick:this.goPage.bind(s)};for(let o=0;o<e;o++){let g={type:"page",page:o+1,current:o+1===t,onclick:this.goPage.bind(s)};i.push(g)}return[n,...i,r]}renderPage(e){this._config={...this._config,total:e},this.total=Math.ceil(e/this._config.pageSize),this.pages=this._createPages(this.total,this.currentPage),this._render()}setCurrentPage(e){this.currentPage=e}updatePage(){let e=this.currentPage;this.pages=this.pages.map(t=>{t.type==="prev-page"?t.page=e-1:t.type==="next-page"&&(t.page=e+1);let s=t.page===e;return t.current=s,t})}goPage(e){console.log(`go ${e} page`,this),this.setCurrentPage(e),this.updatePage(),this._render()}}//! 未來要獨自拆出檔案
class R extends c{constructor(e){let t;switch(e.type){case"table":t=document.createElement("tr");break;case"text":break;case"img":break;default:t=document.createElement("div")}super(t),this.UItype="Skeleton",this.options=e,this._render()}_render(){a.addClass(this._elem,["skeleton"]),this.defineType(this.options.type,this.options?.colNum)}defineType(e,t){switch(a.clearClass(this._elem,["skeleton"]),e){case"table":a.addClass(this._elem,["table-skeleton"]),this._elem.innerHTML=`
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
          </td>`;break;case"text":a.addClass(this._elem,["text-skeleton"]),this._elem.innerHTML=`
          <div role="status" class="max-w-sm animate-pulse">
              <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
              <span class="sr-only">Loading...</span>
          </div>`;break;case"img":a.addClass(this._elem,["img-skeleton"]),this._elem.innerHTML=`
          <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
              <svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
            </svg>
              <span class="sr-only">Loading...</span>
          </div>`;break}}show(){a.removeClass(this._elem,["hidden"])}hide(){a.addClass(this._elem,["hidden"])}}window.Table=f;const B=({id:l,name:e,limits:t,selection:s,container:i,cols:n,tools:r,classes:o,complete:g,error:y,handler:_})=>{let d=document.createElement("div");d.className="mx-auto grid place-items-center";let h=document.createElement("button");h.className="btn btn-primary mb-3",h.textContent="create Table",d.appendChild(h);let v={id:l,name:e,limits:t,container:d,cols:n,tools:r,selection:s,classes:o,complete:g,error:y,handler:_};async function x(u){return await fetch(u)}return h.addEventListener("click",()=>{let u=new f(v);x("https://jsonplaceholder.typicode.com/todos").then(m=>m.json()).then(m=>{setTimeout(()=>{u.setData(m),console.log("table_instance:",u)},5e3)})}),d},{fn:U,expect:V}=__STORYBOOK_MODULE_TEST__,{action:A}=__STORYBOOK_MODULE_ACTIONS__,N={title:"Components/Table",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:k}},render:({...l})=>B({...l}),argTypes:{id:{control:"text",type:{required:!0},description:"表格元素id",table:{category:"configurations",type:{summary:"string"}}},name:{control:"text",description:"Table name",table:{category:"configurations",defaultValue:{summary:"-"},type:{summary:"string"}}},limits:{control:"number",description:"每頁顯示的最多筆數",min:1,table:{category:"configurations",defaultValue:{summary:"50"},type:{summary:"number"}}},container:{control:"text",description:"要放入的DOM元素",table:{category:"configurations",defaultValue:{summary:"null"},type:{summary:"string"}}},cols:{control:"array",description:"欄位設定及帶入值",table:{category:"configurations",defaultValue:{summary:"-"},type:{summary:"array"}}},selection:{control:"select",options:["checkbox","radio"],description:"是否要有勾選功能",table:{category:"configurations",defaultValue:{summary:"checkbox"},type:{summary:"string"}}},tools:{control:"boolean",description:"是否要有基本工具列",table:{category:"configurations",defaultValue:{summary:"true"},type:{summary:"boolean"}}},complete:{control:"function",description:"完成資料載入後要執行的函式",table:{category:"configurations",type:{summary:"function"}}},classes:{control:{type:"array"},description:"自定義class，每個class以tailwindcss property放入",table:{category:"configurations",defaultValue:{summary:".table-container"},type:{summary:"array"}}},complete:{control:{type:"function"},description:"完成資料載入後要執行的函式",table:{category:"configurations",type:{summary:"function"}}},error:{control:{type:"function"},description:"資料載入失敗時要執行的函式",table:{category:"configurations",type:{summary:"function"}}},handler:{action:"click",control:"function",description:"點擊觸發元素後的callback函式",table:{category:"configurations",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{id:"table_first",classes:["table-container"],limits:20,selection:"checkbox",tools:!0}},p={args:{id:"test-table",name:"測試表格",cols:[{field:"useId",title:"使用者id",sort:!0,fixed:!1,align:"center"},{field:"id",title:"編號",sort:!1,fixed:!1,align:"center"},{field:"title",title:"內容",sort:!0,fixed:!1},{field:"done",title:"完成",sort:!0,fixed:!1}],limits:20}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: "test-table",
    name: "測試表格",
    cols: [{
      field: 'useId',
      title: '使用者id',
      sort: true,
      fixed: false,
      align: "center"
    }, {
      field: 'id',
      title: '編號',
      sort: false,
      fixed: false,
      align: "center"
    }, {
      field: 'title',
      title: '內容',
      sort: true,
      fixed: false
    }, {
      field: 'done',
      title: '完成',
      sort: true,
      fixed: false
    }],
    limits: 20
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...p.parameters?.docs?.source}}};const j=["Table"];export{p as Table,j as __namedExportsOrder,N as default};
