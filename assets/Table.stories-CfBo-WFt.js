import{B as n,U as a}from"./Utils-AbXWUc07.js";import{C as m}from"./Checkbox-CQHB1oiR.js";/* empty css                 */import w from"./TableAPIdoc-BnZdRWZC.js";import"./iframe-aqnIh44O.js";import"./preload-helper-DLLWEBaG.js";let p=class extends n{constructor(e={},t=[]){const s=document.createElement("div"),l=document.createElement("table");super(s,e.theme||"var(--color-primary-200)"),this.UItype="Table",this.id=e.id,this.options={...this.config,...e},this.data=t,this.table=l,this.dataCounts=this.data.length,this._init()}get config(){return{id:"",elem:null,limits:50,name:"defaultTable",classes:["table-container"],cols:[],selection:"checkbox",themeColor:"var(--color-primary-100)"}}_init(){this.tableBody=document.createElement("tbody"),this.tableHeader=new C(this.options.cols,this.options.selection);let e=this.options.cols.length;this.skeleton=new T({type:"table",colNum:this.options.selection?e+1:e}),this._render(),this._bindEvent()}_render(){super.setTheme(this.options.themeColor),a.setProperty(this._elem,"--theme",this._theme),this.dataCounts<1?this.tableBody.appendChild(this.skeleton.getElem()):this.skeleton.hide(),this.table.appendChild(this.tableHeader.getElem()),this.table.appendChild(this.tableBody),this._elem.appendChild(this.table),a.addClass(this.table,["table"]),a.addClass(this._elem,this.options.classes),this._updateRows(),this._renderRows(),this.options.elem.appendChild(this._elem)}_bindEvent(){}_setRows(e,t){return e.map((l,h)=>new E(l,h,t))}_updateRows(){this.tableRows=this._setRows(this.data)}_renderRows(){let e=0;for(let t of this.tableRows)e++,e<=this.options.limits&&this.tableBody.appendChild(t.getElem())}setSize(e,t="auto"){a.setStyle(this._elem,"width",`${e}px`),a.setStyle(this._elem,"height",`${t}px`)}getTableData(){if(!this.tableRows){console.error("No Data Yet!");return}return this.tableRows.map(t=>t.data)}getSelected(){}setData(e){this.data=e,this.dataCounts=this.data.length,this._render()}};class C extends n{constructor(e,t){const s=document.createElement("thead");super(s),this.UItype="TableHeader",this.cols=e,this.selection=this._checkSelection(t),this._init()}_init(){this._render()}_render(){const e=document.createElement("tr"),t=document.createDocumentFragment();if(this.selection.UItype==="Checkbox"){const s=document.createElement("th");s.appendChild(this.selection.getElem()),e.appendChild(s)}for(let s of this.cols){let l=document.createElement("th");a.setAttribute(l,"field",s.field),a.setText(l,s.title),t.appendChild(l)}e.appendChild(t),this._elem.appendChild(e)}_checkSelection(e){let t=document.createElement("th");if(e==="checkbox")return new m(t,{checked:!1});if(e==="radio")return}}class E extends n{constructor(e,t,s="checkbox"){const l=document.createElement("tr");super(l),this.UItype="TableRow",this.data=e,this.selection=this._checkSelection(s),this.cells=this._setTableCells(this.data),this.index=++t,this._init()}_init(){let e=document.createDocumentFragment();this.selection&&e.appendChild(this.selection.container);for(let t of this.cells)e.appendChild(t.getElem());this._elem.appendChild(e),a.setAttribute(this._elem,"index",this.index),this._bindEvent()}_bindEvent(){function e(){this.selection.getChecked()?a.setAttribute(this._elem,"rowSelected"):delete this._elem.dataset.rowselected}this.selection&&this.onevent(this.selection.getElem(),"change",e.bind(this))}_checkSelection(e){let t=document.createElement("td");if(e==="checkbox")return new m(t,{checked:!1});if(e==="radio")return}_setTableCells(e){return Object.values(e).map(s=>new k(s))}}class k extends n{constructor(e){const t=document.createElement("td");super(t),this.UItype="TableCell",this.dataValue=e,this._init()}_init(){this.dataValue.field?a.setText(this._elem,this.dataValue.title):a.setText(this._elem,this.dataValue)}}//! 未來要獨自拆出檔案
class T extends n{constructor(e){let t;switch(e.type){case"table":t=document.createElement("tr");break;case"text":break;case"img":break;default:t=document.createElement("div")}super(t),this.UItype="Skeleton",this.options=e,this._render()}_render(){a.addClass(this._elem,["skeleton"]),this.defineType(this.options.type,this.options?.colNum)}defineType(e,t){switch(a.clearClass(this._elem,["skeleton"]),e){case"table":a.addClass(this._elem,["table-skeleton"]),this._elem.innerHTML=`
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
          </div>`;break}}show(){a.removeClass(this._elem,["hidden"])}hide(){a.addClass(this._elem,["hidden"])}}window.Table=p;const R=({id:i,name:e,limits:t,selection:s,elem:l,cols:h,tools:b,classes:f,complete:g,error:y,handler:v})=>{let o=document.createElement("div");o.className="mx-auto grid place-items-center";let r=document.createElement("button");r.className="btn btn-primary",r.textContent="create Table",o.appendChild(r);let _={id:i,name:e,limits:t,elem:o,cols:h,tools:b,selection:s,classes:f,complete:g,error:y,handler:v};async function x(c){return await fetch(c)}return r.addEventListener("click",()=>{let c=new p(_);x("https://jsonplaceholder.typicode.com/todos").then(d=>d.json()).then(d=>{setTimeout(()=>{c.setData(d),console.log("table_instance:",c)},5e3)})}),o},{fn:U,expect:I}=__STORYBOOK_MODULE_TEST__,{action:M}=__STORYBOOK_MODULE_ACTIONS__,F={title:"Components/Table",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:w}},render:({...i})=>R({...i}),argTypes:{id:{control:"text",type:{required:!0},description:"表格元素id",table:{category:"configurations",type:{summary:"string"}}},name:{control:"text",description:"Table name",table:{category:"configurations",defaultValue:{summary:"-"},type:{summary:"string"}}},limits:{control:"number",description:"每頁顯示的最多筆數",min:1,table:{category:"configurations",defaultValue:{summary:"50"},type:{summary:"number"}}},elem:{control:"text",description:"要放入的DOM元素",table:{category:"configurations",defaultValue:{summary:"null"},type:{summary:"string"}}},cols:{control:"array",description:"欄位設定及帶入值",table:{category:"configurations",defaultValue:{summary:"-"},type:{summary:"array"}}},selection:{control:"select",options:["checkbox","radio"],description:"是否要有勾選功能",table:{category:"configurations",defaultValue:{summary:"checkbox"},type:{summary:"string"}}},tools:{control:"boolean",description:"是否要有基本工具列",table:{category:"configurations",defaultValue:{summary:"true"},type:{summary:"boolean"}}},complete:{control:"function",description:"完成資料載入後要執行的函式",table:{category:"configurations",type:{summary:"function"}}},classes:{control:{type:"array"},description:"自定義class，每個class以tailwindcss property放入",table:{category:"configurations",defaultValue:{summary:".table"},type:{summary:"array"}}},complete:{control:{type:"function"},description:"完成資料載入後要執行的函式",table:{category:"configurations",type:{summary:"function"}}},error:{control:{type:"function"},description:"資料載入失敗時要執行的函式",table:{category:"configurations",type:{summary:"function"}}},handler:{action:"click",control:"function",description:"點擊觸發元素後的callback函式",table:{category:"configurations",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{id:"table_first",classes:["table-container"],limits:20,selection:"checkbox",tools:!0}},u={args:{id:"test-table",name:"測試表格",cols:[{field:"useId",title:"使用者id",sort:!0,fixed:!1},{field:"id",title:"編號",sort:!1,fixed:!1},{field:"title",title:"內容",sort:!0,fixed:!1},{field:"done",title:"完成",sort:!0,fixed:!1}],limits:50}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: "test-table",
    name: "測試表格",
    cols: [{
      field: 'useId',
      title: '使用者id',
      sort: true,
      fixed: false
    }, {
      field: 'id',
      title: '編號',
      sort: false,
      fixed: false
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
}`,...u.parameters?.docs?.source}}};const j=["Table"];export{u as Table,j as __namedExportsOrder,F as default};
