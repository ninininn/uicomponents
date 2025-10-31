import{B as d,U as n}from"./Utils-D4AxMvsK.js";import{C as v}from"./Checkbox-BjWHv-9E.js";/* empty css                 */import w from"./TableAPIdoc-D2zYUAM5.js";import"./iframe-CfB8uh_1.js";import"./preload-helper-DLLWEBaG.js";let h=class extends d{constructor(e={},t=[]){const a=document.createElement("div"),s=document.createElement("table");super(a),this.UItype="Table",this.options={...this.config,...e},this.tableRows=this._setRows(t),this.tableHeader=new k(this.options.cols,this.options.selection),this.tableBody=document.createElement("tbody"),this.table=s,this.dataCounts=this.tableRows.length,this._init()}get config(){return{id:"",elem:null,limits:50,name:"defaultTable",classes:["table-container"],cols:[],selection:"checkbox"}}_init(){this._render(),this._bindEvent()}_render(){this.table.appendChild(this.tableHeader.getElem()),this._elem.appendChild(this.table),n.addClass(this.table,["table"]),n.addClass(this._elem,this.options.classes),this.table.appendChild(this.tableBody);let e=0;for(let t of this.tableRows)e++,e<=this.options.limits&&this.tableBody.appendChild(t.getElem())}_bindEvent(){}_setRows(e,t){return e.map((s,l)=>new p(s,l,t))}setSize(e,t){n.addClass([`w-[${e}px]`,`h-[${t}px]`])}getTableData(){return this.tableRows.map(t=>t.data)}getSelected(){}};class k extends d{constructor(e,t){const a=document.createElement("thead");super(a),this.UItype="TableHeader",this.cols=e,this.selection=t,this._init()}_init(){let e=new p(this.cols,0,this.selection,this.UItype);const t=document.createDocumentFragment();t.appendChild(e._elem),this._elem.appendChild(t)}}class p extends d{constructor(e,t,a="checkbox",s){const l=document.createElement("tr");super(l),this.UItype="TableRow",this.data=e,this.selection=this._checkSelection(a,s),this.cells=this._setTableCells(this.data,s),this.index=++t,this._init()}_init(){let e=document.createDocumentFragment();this.selection&&e.appendChild(this.selection.container);for(let t of this.cells)e.appendChild(t.getElem());this._elem.appendChild(e),n.setAttribute(this._elem,"index",this.index),this._bindEvent()}_bindEvent(){function e(){this.selection.getChecked()?n.setAttribute(this._elem,"rowSelected"):delete this._elem.dataset.rowselected}this.selection&&this.onevent(this.selection.getElem(),"change",e.bind(this))}_checkSelection(e,t){let a=t==="TableHeader"?"th":"td",s=document.createElement(`${a}`);if(e==="checkbox")return new v(s,{checked:!1});if(e==="radio")return}_setTableCells(e,t){let a=t==="TableHeader"?"th":"td";return Object.values(e).map(l=>new B(l,a))}}class B extends d{constructor(e,t=""){const a=document.createElement(`${t}`);super(a),this.UItype="TableCell",this.dataValue=e,this._init()}_init(){this.dataValue.field?n.setText(this._elem,this.dataValue.title):n.setText(this._elem,this.dataValue)}}window.Table=h;const D=({id:i,name:e,limits:t,selection:a,maxWidth:s,elem:l,cols:b,customContent:y,tools:O,classes:f,complete:g,error:_,handler:x})=>{let r=document.createElement("div");r.className="mx-auto grid place-items-center";let o=document.createElement("button");o.className="btn btn-primary",o.textContent="create Table",r.appendChild(o);let C={id:i,name:e,limits:t,elem:l,cols:b,selection:a,maxWidth:s,customContent:y,classes:f,complete:g,error:_,handler:x};async function E(T){await fetch(T).then(u=>u.json()).then(u=>{let m=new h(C,u);console.log("table_instance:",m),r.appendChild(m._elem)})}return o.addEventListener("click",()=>{E("https://jsonplaceholder.typicode.com/todos")}),r},{fn:L,expect:M}=__STORYBOOK_MODULE_TEST__,{action:W}=__STORYBOOK_MODULE_ACTIONS__,$={title:"Components/Table",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:w}},render:({...i})=>D({...i}),argTypes:{id:{control:"text",type:{required:!0},description:"表格元素id",table:{category:"table",type:{summary:"string"}}},style:{control:"select",options:["default","bordered","accent"],if:{arg:"type",eq:"toast"},description:"toast樣式",table:{category:"tableheader",subcategory:"private property",defaultValue:{summary:"static"},type:{summary:"string"}}},limit:{control:"number",description:"每頁顯示的最多筆數",min:1,table:{category:"table",subcategory:"private property",defaultValue:{summary:"static"},type:{summary:"string"}}},elem:{control:"text",description:"要放入的DOM元素",table:{category:"tableheader",subcategory:"private property",defaultValue:{summary:"null"},type:{summary:"string"}}},triggerType:{control:"select",options:["hover","click","none"],if:{arg:"type",eq:"popover"},description:"觸發動作類型",table:{category:"tableheader",subcategory:"private property",defaultValue:{summary:"hover"},type:{summary:"string"}}},selection:{control:"select",options:["checkbox","radio"],description:"是否要有勾選功能",table:{category:"table",defaultValue:{summary:"checkbox"},type:{summary:"string"}}},maxWidth:{control:"text",description:"通知視窗的最大尺寸",table:{category:"tableheader",defaultValue:{summary:"auto"},type:{summary:"string"}}},customContent:{control:"string",description:"自訂訊息innerHTML結構",table:{category:"tableheader",type:{summary:"string"}}},classes:{control:{type:"array"},description:"自定義class，每個class以tailwindcss property放入",table:{category:"table",defaultValue:{summary:".table"},type:{summary:"array"}}},complete:{control:{type:"function"},description:"完成資料載入後要執行的函式",table:{category:"tableheader",type:{summary:"function"}}},error:{control:{type:"function"},description:"資料載入失敗時要執行的函式",table:{category:"tableheader",type:{summary:"function"}}},handler:{action:"click",control:"function",description:"點擊觸發元素後的callback函式",table:{category:"tableheader",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{id:"table_first",theme:"light",maxWidth:"auto",classes:["table-container"],limits:20,selection:"checkbox"}},c={args:{id:"test-table",name:"測試表格",cols:[{field:"useId",title:"使用者id",sort:!0,fixed:!1},{field:"id",title:"編號",sort:!1,fixed:!1},{field:"title",title:"內容",sort:!0,fixed:!1},{field:"done",title:"完成",sort:!0,fixed:!1}],limits:50,customContent:"<div>...customDiv</div>",maxWidth:"360px"}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    limits: 50,
    customContent: \`<div>...customDiv</div>\`,
    maxWidth: "360px"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...c.parameters?.docs?.source}}};const A=["Table"];export{c as Table,A as __namedExportsOrder,$ as default};
