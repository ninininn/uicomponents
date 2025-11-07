import{B as r,c as w,U as s,u as C}from"./Utils-CITXYW73.js";import{C as p}from"./Checkbox-CrjPLAle.js";/* empty css                 */import k from"./TableAPIdoc-jLNhiCsz.js";import"./iframe-99hlWHJr.js";import"./preload-helper-DLLWEBaG.js";let b=class extends r{constructor(e={},t=[]){const a=document.createElement("div"),l=document.createElement("table");super(a,e.theme||"var(--color-primary-200)"),this.UItype="Table",this.id=e.id,this.options={...this.config,...e},this.data=t,this.table=l,this.dataCounts=this.data.length,this._init()}get config(){return{id:"",elem:null,limits:50,name:"defaultTable",classes:["table-container"],cols:[],selection:"checkbox",themeColor:"var(--color-primary-100)"}}_init(){this.tableBody=document.createElement("tbody"),this.tableHeader=new E(this.options.cols,this.options.selection);let e=this.options.cols.length;this.skeleton=new S({type:"table",colNum:this.options.selection?e+1:e}),w(this,this.options.cols),this._render(),this._bindEvent()}_render(){super.setTheme(this.options.themeColor),s.setProperty(this._elem,"--theme",this._theme),this.dataCounts<1?this.tableBody.appendChild(this.skeleton.getElem()):this.skeleton.hide(),this.table.appendChild(this.tableHeader.getElem()),this.table.appendChild(this.tableBody),this._elem.appendChild(this.table),s.addClass(this.table,["table"]),s.addClass(this._elem,this.options.classes),this._updateRows(),this._renderRows(),this.options.elem.appendChild(this._elem)}_bindEvent(){}_setRows(e,t){let a=this;return e.map((n,m)=>new T(n,m,t,a))}_updateRows(){this.tableRows=this._setRows(this.data)}_renderRows(){let e=0;for(let t of this.tableRows)e++,e<=this.options.limits&&this.tableBody.appendChild(t.getElem())}setSize(e,t="auto"){s.setStyle(this._elem,"width",`${e}px`),s.setStyle(this._elem,"height",`${t}px`)}getTableData(){if(!this.tableRows){console.error("No Data Yet!");return}return this.tableRows.map(t=>t.data)}getSelected(){}setData(e){this.data=e,this.dataCounts=this.data.length,this._render()}};class E extends r{constructor(e,t){const a=document.createElement("thead");super(a),this.UItype="TableHeader",this.cols=e,this.selection=this._checkSelection(t),this._init()}_init(){this._render()}_render(){const e=document.createElement("tr"),t=document.createDocumentFragment();if(this.selection.UItype==="Checkbox"){const a=document.createElement("th");a.appendChild(this.selection.getElem()),e.appendChild(a)}for(let a of this.cols){let l=document.createElement("th");s.setAttribute(l,"field",a.field),s.setText(l,a.title),t.appendChild(l)}e.appendChild(t),this._elem.appendChild(e)}_checkSelection(e){let t=document.createElement("th");if(e==="checkbox")return new p(t,{checked:!1});if(e==="radio")return}}class T extends r{constructor(e,t,a="checkbox",l){const n=document.createElement("tr");super(n),this.UItype="TableRow",this.data=e,this.selection=this._checkSelection(a),this.cells=this._setTableCells(this.data,C(l)),this.index=++t,this._init()}_init(){let e=document.createDocumentFragment();this.selection&&e.appendChild(this.selection.container);for(let t of this.cells)e.appendChild(t.getElem());this._elem.appendChild(e),s.setAttribute(this._elem,"index",this.index),this._bindEvent()}_bindEvent(){function e(){this.selection.getChecked()?s.setAttribute(this._elem,"rowSelected"):delete this._elem.dataset.rowselected}this.selection&&this.onevent(this.selection.getElem(),"change",e.bind(this))}_checkSelection(e){let t=document.createElement("td");if(e==="checkbox")return new p(t,{checked:!1});if(e==="radio")return}_setTableCells(e,t){return Object.values(e).map((l,n)=>new R(l,t[n]))}}class R extends r{constructor(e,t){const a=document.createElement("td");super(a),this.UItype="TableCell",this.dataValue=e,this.config=t,this._init()}_init(){this._render()}_render(){let{field:e,align:t="left"}=this.config;switch(t){case"center":s.addClass(this._elem,["text-center"]);break;case"right":s.addClass(this._elem,["text-right"]);break;default:s.clearClass(this._elem);break}s.setAttribute(this._elem,"field",e),s.setText(this._elem,this.dataValue)}}//! 未來要獨自拆出檔案
class S extends r{constructor(e){let t;switch(e.type){case"table":t=document.createElement("tr");break;case"text":break;case"img":break;default:t=document.createElement("div")}super(t),this.UItype="Skeleton",this.options=e,this._render()}_render(){s.addClass(this._elem,["skeleton"]),this.defineType(this.options.type,this.options?.colNum)}defineType(e,t){switch(s.clearClass(this._elem,["skeleton"]),e){case"table":s.addClass(this._elem,["table-skeleton"]),this._elem.innerHTML=`
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
          </td>`;break;case"text":s.addClass(this._elem,["text-skeleton"]),this._elem.innerHTML=`
          <div role="status" class="max-w-sm animate-pulse">
              <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
              <span class="sr-only">Loading...</span>
          </div>`;break;case"img":s.addClass(this._elem,["img-skeleton"]),this._elem.innerHTML=`
          <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse">
              <svg class="w-10 h-10 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
            </svg>
              <span class="sr-only">Loading...</span>
          </div>`;break}}show(){s.removeClass(this._elem,["hidden"])}hide(){s.addClass(this._elem,["hidden"])}}window.Table=b;const B=({id:i,name:e,limits:t,selection:a,elem:l,cols:n,tools:m,classes:f,complete:g,error:y,handler:_})=>{let o=document.createElement("div");o.className="mx-auto grid place-items-center";let c=document.createElement("button");c.className="btn btn-primary",c.textContent="create Table",o.appendChild(c);let v={id:i,name:e,limits:t,elem:o,cols:n,tools:m,selection:a,classes:f,complete:g,error:y,handler:_};async function x(d){return await fetch(d)}return c.addEventListener("click",()=>{let d=new b(v);x("https://jsonplaceholder.typicode.com/todos").then(u=>u.json()).then(u=>{setTimeout(()=>{d.setData(u),console.log("table_instance:",d)},5e3)})}),o},{fn:M,expect:A}=__STORYBOOK_MODULE_TEST__,{action:F}=__STORYBOOK_MODULE_ACTIONS__,j={title:"Components/Table",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:k}},render:({...i})=>B({...i}),argTypes:{id:{control:"text",type:{required:!0},description:"表格元素id",table:{category:"configurations",type:{summary:"string"}}},name:{control:"text",description:"Table name",table:{category:"configurations",defaultValue:{summary:"-"},type:{summary:"string"}}},limits:{control:"number",description:"每頁顯示的最多筆數",min:1,table:{category:"configurations",defaultValue:{summary:"50"},type:{summary:"number"}}},elem:{control:"text",description:"要放入的DOM元素",table:{category:"configurations",defaultValue:{summary:"null"},type:{summary:"string"}}},cols:{control:"array",description:"欄位設定及帶入值",table:{category:"configurations",defaultValue:{summary:"-"},type:{summary:"array"}}},selection:{control:"select",options:["checkbox","radio"],description:"是否要有勾選功能",table:{category:"configurations",defaultValue:{summary:"checkbox"},type:{summary:"string"}}},tools:{control:"boolean",description:"是否要有基本工具列",table:{category:"configurations",defaultValue:{summary:"true"},type:{summary:"boolean"}}},complete:{control:"function",description:"完成資料載入後要執行的函式",table:{category:"configurations",type:{summary:"function"}}},classes:{control:{type:"array"},description:"自定義class，每個class以tailwindcss property放入",table:{category:"configurations",defaultValue:{summary:".table-container"},type:{summary:"array"}}},complete:{control:{type:"function"},description:"完成資料載入後要執行的函式",table:{category:"configurations",type:{summary:"function"}}},error:{control:{type:"function"},description:"資料載入失敗時要執行的函式",table:{category:"configurations",type:{summary:"function"}}},handler:{action:"click",control:"function",description:"點擊觸發元素後的callback函式",table:{category:"configurations",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{id:"table_first",classes:["table-container"],limits:20,selection:"checkbox",tools:!0}},h={args:{id:"test-table",name:"測試表格",cols:[{field:"useId",title:"使用者id",sort:!0,fixed:!1,align:"center"},{field:"id",title:"編號",sort:!1,fixed:!1,align:"center"},{field:"title",title:"內容",sort:!0,fixed:!1},{field:"done",title:"完成",sort:!0,fixed:!1}],limits:50}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    limits: 50
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...h.parameters?.docs?.source}}};const N=["Table"];export{h as Table,N as __namedExportsOrder,j as default};
