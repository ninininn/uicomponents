import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,o as n,r,s as i,u as a}from"./blocks-gwT75y1v.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{n as l,o as u,r as d,t as f}from"./BaseCompo-Dty9CpKh.js";var p,m;function h(){return(h=e((()=>{l(),u(),p={paths:[],theme:`var(--stx-system-primary)`,size:`md`,separator:`/`},m=class e extends f{constructor(e){let t=d.create(`div`);super(t),this.UItype=`Breadcrumbs`,this._config=Object.assign({},p,e),this._init()}static throughPath(t,{attr:n=`data-route`,onNavigate:r}={}){let i=[],a=t;for(;a;)a.hasAttribute(n)&&i.unshift({el:a,label:a.getAttribute(n)}),a=a.parentElement;let o=i.map(({el:e,label:t},n)=>n===i.length-1||!r?{label:t}:{label:t,handler:()=>r(e)});return new e({paths:o})}_init(){d.setAttr(this.el,`aria-label`,`breadcrumb`),d.addClass(this.el,`breadcrumb`);let e=d.create(`ol`);d.addClass(e,`breadcrumb-list`),this._config.paths.forEach((t,n)=>{let r=n===this._config.paths.length-1,i=d.create(`li`);if(d.addClass(i,[`breadcrumb-item`]),r)d.setAttr(i,`aria-current`,`page`),d.addClass(i,[`breadcrumb-item--current`]),d.setText(i,t.label);else if(t.href){let e=d.create(`a`);e.href=t.href,d.setText(e,t.label),i.append(e)}else if(t.handler){let e=d.create(`button`);e.type=`button`,d.addClass(e,[`breadcrumb-btn`]),d.setText(e,t.label),this.onevent(e,`click`,t.handler),i.append(e)}else d.setText(i,t.label);e.append(i)}),this.el.append(e)}}})))()}var g,_;function v(){return(v=e((()=>{h(),g=({paths:e,theme:t})=>{let n=document.createElement(`div`);n.className=`p-4`;let r=new m({paths:e,theme:t});return n.appendChild(r.el),console.log(`instance:`,r),n},_=()=>{let e=document.createElement(`div`);e.className=`p-4 flex flex-col gap-6`;let t=document.createElement(`section`);t.setAttribute(`data-route`,`首頁`);let n=document.createElement(`section`);n.setAttribute(`data-route`,`產品列表`);let r=document.createElement(`section`);r.setAttribute(`data-route`,`產品詳細`);let i=document.createElement(`section`);i.setAttribute(`data-route`,`產品詳細頁面`),r.appendChild(i),n.appendChild(r),t.appendChild(n);let a=document.createElement(`p`);a.className=`text-sm mt-2 text-gray-500`,a.textContent=`當前：產品詳細頁面`;let o=m.throughPath(i,{onNavigate:e=>{a.textContent=`切換到：${e.getAttribute(`data-route`)}`}});return e.appendChild(o.el),e.appendChild(a),console.log(o),e}})))()}function y(e){let t={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n,{isTemplate:!0,title:`How to use NavBar`}),`
`,(0,x.jsx)(a,{}),`
`,(0,x.jsxs)(t.p,{children:[`常見表格資料表，可以載入資料並更新Table畫面 (此頁面測試用API來源 : `,(0,x.jsx)(t.a,{href:`https://jsonplaceholder.typicode.com/todos`,rel:`nofollow`,children:`公開API
(https://jsonplaceholder.typicode.com/todos)`}),`)`]}),`
`,(0,x.jsx)(i,{}),`
`,(0,x.jsx)(t.h1,{id:`controls`,children:`Controls`}),`
`,(0,x.jsxs)(t.p,{children:[`Table 元件由多個子元件所組成，但其餘子元件之設定在使用時都不會直接操作到，所以僅示意`,(0,x.jsx)(t.code,{children:`config`}),`參數。`]}),`
`,(0,x.jsx)(r,{}),`
`,(0,x.jsx)(t.hr,{}),`
`,(0,x.jsx)(t.h1,{id:`usage-api`,children:`Usage API`}),`
`,(0,x.jsxs)(t.p,{children:[`使用`,(0,x.jsx)(t.code,{children:`new`}),`關鍵字初始化一個`,(0,x.jsx)(t.code,{children:`Table`}),`元件，並帶入`,(0,x.jsx)(t.code,{children:`config`}),`設定參數。`]}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-javascript`,children:`let table = new Table(config);
`})}),`
`,(0,x.jsxs)(t.blockquote,{children:[`
`,(0,x.jsx)(t.h3,{id:`parameters-參數設定`,children:`parameters 參數設定`}),`
`]}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(`span`,{className:`sb-unstyled font-black`,children:`config`}),`
`,(0,x.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),(0,x.jsx)(t.br,{}),`
`,`各屬性的型別及說明可參考上方`,(0,x.jsx)(t.strong,{children:`Controls區塊`}),`，各類別的私有屬性則可以參考`,(0,x.jsx)(t.strong,{children:`子類別`}),`區塊的各個說明，此處僅列出共同設定的屬性。`,`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-javascript`,children:`  const initConfig = {
    id: "table_A",                                 //tableId
    name: "測試用表格",                             //自定義table名稱
    limits: 20,                                    //單頁顯示筆數限制
    container: ".table-test-target",               //要放入的DOM元素(容器)
    cols:cols,                                     //欄位設定
    tools: true,                                   //是否顯示工具列
    selection: "checkbox",                         //是否開啟勾選列
    classes: ["table-container"],                  //自定義class
    complete: complete,                            //渲染完成後要執行的fn
    error: error,                                  //渲染失敗執行的fn
    handler: handler,                              //渲染時執行的fn(非同步)
  };
`})}),`
`]}),`
`]}),`
`,(0,x.jsx)(`br`,{}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[`
`,(0,x.jsx)(`span`,{className:`sb-unstyled font-black`,children:`column configuration`}),`
`,(0,x.jsx)(t.pre,{children:(0,x.jsx)(t.code,{className:`language-javascript`,children:`const cols = [
  {field:'id', title:'ID', sort:true, fixed:true},
  {field:'name', title:'名稱', sort:false, fixed:false},
  {field:'count', title:'數量', sort:true, fixed:false},
];
`})}),`
`,(0,x.jsx)(`br`,{}),`
`,`每個 column `,(0,x.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),` 都可以設定以下屬性 :`,`
`,(0,x.jsx)(`div`,{className:`sb-unstyled table-container`,children:(0,x.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{className:`text-center`,children:[(0,x.jsx)(`td`,{children:`property`}),(0,x.jsx)(`td`,{children:`default`}),(0,x.jsx)(`td`,{children:`type`}),(0,x.jsx)(`td`,{children:`descriptions`}),(0,x.jsx)(`td`,{children:`options`})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`field`}),(0,x.jsx)(`td`,{className:`text-center`,children:`-`}),(0,x.jsx)(`td`,{className:`text-center`,children:`string`}),(0,x.jsx)(`td`,{children:`欄位屬性/特徵`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`title`}),(0,x.jsx)(`td`,{className:`text-center`,children:`-`}),(0,x.jsx)(`td`,{className:`text-center`,children:`string`}),(0,x.jsx)(`td`,{children:`欄位文字`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`sort`}),(0,x.jsx)(`td`,{className:`text-center`,children:`asc`}),(0,x.jsx)(`td`,{className:`text-center`,children:`string / boolean`}),(0,x.jsxs)(`td`,{children:[`是否有排序功能，`,(0,x.jsx)(t.code,{children:`false`}),`關閉排序功能，asc(升冪)、desc(降冪)`]}),(0,x.jsxs)(`td`,{children:[(0,x.jsx)(t.code,{children:`false`}),`關閉排序功能 / asc(升冪) / desc(降冪)`]})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`fixed`}),(0,x.jsx)(`td`,{className:`text-center`,children:`false`}),(0,x.jsx)(`td`,{className:`text-center`,children:`boolean`}),(0,x.jsx)(`td`,{children:`是否固定該欄`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`align`}),(0,x.jsx)(`td`,{className:`text-center`,children:`left`}),(0,x.jsx)(`td`,{className:`text-center`,children:`string`}),(0,x.jsx)(`td`,{children:`欄位對齊位置`}),(0,x.jsx)(`td`,{children:` left / center / right`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`template`}),(0,x.jsx)(`td`,{className:`text-center`,children:`-`}),(0,x.jsx)(`td`,{className:`text-center`,children:`function`}),(0,x.jsx)(`td`,{children:`自訂義tablecell的渲染函式`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`print`}),(0,x.jsx)(`td`,{className:`text-center`,children:`true`}),(0,x.jsx)(`td`,{className:`text-center`,children:`boolean`}),(0,x.jsx)(`td`,{children:`列印是否要顯示`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`visible`}),(0,x.jsx)(`td`,{className:`text-center`,children:(0,x.jsx)(t.code,{children:`true`})}),(0,x.jsx)(`td`,{className:`text-center`,children:`boolean`}),(0,x.jsx)(`td`,{children:`控制該欄顯示與否`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`rowspan`}),(0,x.jsx)(`td`,{className:`text-center`,children:`-`}),(0,x.jsx)(`td`,{className:`text-center`,children:`number`}),(0,x.jsx)(`td`,{children:`控制合併列數量`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`colspan`}),(0,x.jsx)(`td`,{className:`text-center`,children:`-`}),(0,x.jsx)(`td`,{className:`text-center`,children:`number`}),(0,x.jsx)(`td`,{children:`控制合併欄數量`})]})]})]})}),`
`]}),`
`]}),`
`,(0,x.jsx)(`br`,{}),`
`,(0,x.jsx)(t.hr,{}),`
`,(0,x.jsxs)(t.blockquote,{children:[`
`,(0,x.jsx)(t.h3,{id:`prototype-properties-原型屬性`,children:`prototype properties 原型屬性`}),`
`]}),`
`,(0,x.jsx)(`div`,{className:`sb-unstyled table-container`,children:(0,x.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{className:`text-center`,children:[(0,x.jsx)(`td`,{children:`property`}),(0,x.jsx)(`td`,{children:`default`}),(0,x.jsx)(`td`,{children:`type`}),(0,x.jsx)(`td`,{children:`descriptions`})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,x.jsx)(`td`,{children:`Table`}),(0,x.jsx)(`td`,{children:`string`}),(0,x.jsxs)(`td`,{children:[`繼承自`,(0,x.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`id`}),(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`-`})}),(0,x.jsx)(`td`,{children:`string`}),(0,x.jsx)(`td`,{children:`Table ID`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`_tableRows`}),(0,x.jsx)(`td`,{children:`[]`}),(0,x.jsx)(`td`,{children:`array`}),(0,x.jsxs)(`td`,{children:[`多個`,(0,x.jsx)(t.code,{children:`TableRow`}),`元件`]})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`_tableHeader`}),(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`TableHeader`})}),(0,x.jsx)(`td`,{children:`Object`}),(0,x.jsx)(`td`,{children:(0,x.jsxs)(t.p,{children:[(0,x.jsx)(t.code,{children:`TableHeader`}),`元件`]})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`tableBody`}),(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`<tbody>`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`HTMLElement`})}),(0,x.jsxs)(`td`,{children:[(0,x.jsx)(t.code,{children:`<tbody>`}),`主體DOM`]})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`table`}),(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`<table>`})}),(0,x.jsx)(`td`,{children:`HTMLElement`}),(0,x.jsxs)(`td`,{children:[(0,x.jsx)(t.code,{children:`<table>`}),` 元素`]})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`data`}),(0,x.jsx)(`td`,{children:`[]`}),(0,x.jsx)(`td`,{children:`array`}),(0,x.jsx)(`td`,{children:`呼叫API後取回的資料陣列`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`dataCounts`}),(0,x.jsx)(`td`,{children:`0`}),(0,x.jsx)(`td`,{children:`number`}),(0,x.jsx)(`td`,{children:`資料總筆數`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`_pagination`}),(0,x.jsxs)(`td`,{children:[(0,x.jsx)(t.code,{children:`Pagination`}),`元件`]}),(0,x.jsx)(`td`,{children:`Object`}),(0,x.jsxs)(`td`,{children:[`綁定的`,(0,x.jsx)(t.code,{children:`Pagination`}),`分頁元件`]})]})]})]})}),`
`,(0,x.jsx)(t.hr,{}),`
`,(0,x.jsxs)(t.blockquote,{children:[`
`,(0,x.jsx)(t.h3,{id:`methods-控制方法`,children:`methods 控制方法`}),`
`]}),`
`,(0,x.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`Quick reference`}),`
`,(0,x.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,x.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{className:`text-center`,children:[(0,x.jsx)(`td`,{children:`methods`}),(0,x.jsx)(`td`,{children:`descriptions`})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`.setSelected(rowIndex)`})}),(0,x.jsx)(`td`,{children:`設定預設勾選列`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`.setData(dataArr)`})}),(0,x.jsx)(`td`,{children:`放入資料重新渲染`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`.setSize(width,height)`})}),(0,x.jsx)(`td`,{children:`設定表格尺寸`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`.reload()`})}),(0,x.jsx)(`td`,{children:`重新呼叫API抓資料`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`.updateRow(index,data)`})}),(0,x.jsx)(`td`,{children:`更新指定列資料`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`.getTableData()`})}),(0,x.jsx)(`td`,{children:`取得表格所有資料`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`.getSelected()`})}),(0,x.jsx)(`td`,{children:`取得表格內所有選取的Row`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`.exportTable()`})}),(0,x.jsx)(`td`,{children:`匯出成csv文件/pdf?`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`.el`})}),(0,x.jsx)(`td`,{children:`取得table DOM節點`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`.setTheme()`})}),(0,x.jsx)(`td`,{children:`設定主題色`})]})]})]})}),`
`,(0,x.jsx)(t.p,{children:`--- # Pagination 元件`}),`
`,(0,x.jsx)(`div`,{className:`sb-unstyled note-msg`,children:(0,x.jsx)(t.p,{children:`詳細說明可參考Pagination元件說明頁(尚未建置...)`})}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[`
`,(0,x.jsx)(t.p,{children:(0,x.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,x.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,x.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{className:`text-center`,children:[(0,x.jsx)(`td`,{children:`property`}),(0,x.jsx)(`td`,{children:`default`}),(0,x.jsx)(`td`,{children:`type`}),(0,x.jsx)(`td`,{children:`descriptions`}),(0,x.jsx)(`td`,{children:`inherits`})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,x.jsx)(`td`,{children:`Pagination`}),(0,x.jsx)(`td`,{children:`string`}),(0,x.jsxs)(`td`,{children:[`繼承自`,(0,x.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]}),(0,x.jsx)(`td`,{children:(0,x.jsx)(t.code,{children:`BaseComponent`})})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`currentPage`}),(0,x.jsx)(`td`,{children:`1`}),(0,x.jsx)(`td`,{children:`number`}),(0,x.jsx)(`td`,{children:`當前頁數`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`total`}),(0,x.jsx)(`td`,{children:`-`}),(0,x.jsx)(`td`,{children:`number`}),(0,x.jsx)(`td`,{children:`資料總數`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`pages`}),(0,x.jsx)(`td`,{children:`[]`}),(0,x.jsx)(`td`,{children:`array`}),(0,x.jsx)(`td`,{children:`全部頁數(page)`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold`,children:`handler`}),(0,x.jsx)(`td`,{children:`-`}),(0,x.jsx)(`td`,{children:`function`}),(0,x.jsx)(`td`,{children:`點擊各頁籤要執行的function`})]})]})]})}),`
`]}),`
`]}),`
`,(0,x.jsx)(t.h2,{id:``,children:(0,x.jsx)(`br`,{})}),`
`,(0,x.jsx)(t.h1,{id:`子元件`,children:`子元件`}),`
`,(0,x.jsx)(`div`,{className:`sb-unstyled alert-msg`,children:`不會直接操作，僅列出參考用`}),`
`,(0,x.jsx)(`br`,{}),`
`,(0,x.jsxs)(t.p,{children:[(0,x.jsx)(`h3`,{id:`TableHeader`,children:`TableHeader`}),`- `,(0,x.jsx)(t.strong,{children:`properties 屬性`})]}),`
`,(0,x.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,x.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{className:`text-center`,children:[(0,x.jsx)(`td`,{children:`property`}),(0,x.jsx)(`td`,{children:`default`}),(0,x.jsx)(`td`,{children:`type`}),(0,x.jsx)(`td`,{children:`descriptions`})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`UItype`}),(0,x.jsx)(`td`,{className:`text-center`,children:`TableHeader`}),(0,x.jsx)(`td`,{className:`text-center`,children:`string`}),(0,x.jsxs)(`td`,{children:[`繼承自`,(0,x.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`cols`}),(0,x.jsx)(`td`,{className:`text-center`,children:`-`}),(0,x.jsx)(`td`,{className:`text-center`,children:`string`}),(0,x.jsx)(`td`,{children:`各欄位設定陣列(= cols 傳入參數)`})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`selection`}),(0,x.jsx)(`td`,{className:`text-center`,children:`checkbox`}),(0,x.jsx)(`td`,{className:`text-center`,children:`string`}),(0,x.jsx)(`td`,{children:`勾選功能，可用 checkbox / radio，其餘視為靜態 table`})]})]})]})}),`
`,(0,x.jsx)(`br`,{}),`
`,(0,x.jsx)(t.hr,{}),`
`,(0,x.jsx)(`h3`,{id:`TableRow`,children:`TableRow`}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[`
`,(0,x.jsx)(t.p,{children:(0,x.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,x.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,x.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{className:`text-center`,children:[(0,x.jsx)(`td`,{children:`property`}),(0,x.jsx)(`td`,{children:`default`}),(0,x.jsx)(`td`,{children:`type`}),(0,x.jsx)(`td`,{children:`descriptions`})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`UItype`}),(0,x.jsx)(`td`,{className:`text-center`,children:`TableRow`}),(0,x.jsx)(`td`,{className:`text-center`,children:`string`}),(0,x.jsxs)(`td`,{children:[`繼承自`,(0,x.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`popover`}),(0,x.jsxs)(`td`,{className:`text-center`,children:[`flowbite `,(0,x.jsx)(t.code,{children:`Popover`}),`物件`]}),(0,x.jsx)(`td`,{className:`text-center`,children:`object`}),(0,x.jsx)(`td`,{children:(0,x.jsxs)(`span`,{className:`sb-unstyled data-type inherits`,children:[`related to flowbite `,(0,x.jsx)(`a`,{href:`https://flowbite.com/docs/components/popover/`,className:`linkout`,children:`Popover`})]})})]})]})]})}),`
`,(0,x.jsx)(`br`,{}),`
`]}),`
`,(0,x.jsxs)(t.li,{children:[`
`,(0,x.jsx)(t.p,{children:(0,x.jsx)(t.strong,{children:`options 參數可設定的私有屬性`})}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.code,{children:`triggerType`}),` 觸發動作類型，可以選擇hover|click|none`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.code,{children:`offset`}),` 距離triggerElem的距離`,`
`,(0,x.jsx)(`br`,{}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,x.jsx)(t.hr,{}),`
`,(0,x.jsxs)(t.blockquote,{children:[`
`,(0,x.jsx)(`h3`,{id:`TableCell`,children:`TableCell`}),`
`]}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[`
`,(0,x.jsx)(t.p,{children:(0,x.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,x.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,x.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{className:`text-center`,children:[(0,x.jsx)(`td`,{children:`property`}),(0,x.jsx)(`td`,{children:`default`}),(0,x.jsx)(`td`,{children:`type`}),(0,x.jsx)(`td`,{children:`descriptions`})]})}),(0,x.jsxs)(`tbody`,{children:[(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`UItype`}),(0,x.jsx)(`td`,{className:`text-center`,children:`TableCell`}),(0,x.jsx)(`td`,{className:`text-center`,children:`string`}),(0,x.jsxs)(`td`,{children:[`繼承自`,(0,x.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`font-bold text-center`,children:`dataValue`}),(0,x.jsx)(`td`,{className:`text-center`,children:`-`}),(0,x.jsx)(`td`,{className:`text-center`,children:`string/number`}),(0,x.jsx)(`td`,{children:`資料格的資料內容`})]})]})]})}),`
`,(0,x.jsx)(`br`,{}),`
`]}),`
`,(0,x.jsxs)(t.li,{children:[`
`,(0,x.jsx)(t.p,{children:(0,x.jsx)(t.strong,{children:`options 參數可設定的私有屬性`})}),`
`,(0,x.jsxs)(t.ul,{children:[`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.code,{children:`backdrop`}),` 遮罩類型，可分為static|dynamic，是否可以點擊螢幕任一處關閉`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.code,{children:`backdropClasses`}),` 遮罩classes`]}),`
`,(0,x.jsxs)(t.li,{children:[(0,x.jsx)(t.code,{children:`closable`}),` 是否可以點擊鍵盤`,(0,x.jsx)(t.code,{children:`esc`}),`鍵關閉modal`]}),`
`]}),`
`]}),`
`]})]})}function b(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,x.jsx)(t,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=o(),c(),t()})))()}var C,w,T,E;function D(){return(D=e((()=>{v(),S(),C={title:`Components/Breadcrumbs`,tags:[`autodocs`],parameters:{docs:{source:{format:!0,language:`html`},page:b}},render:({...e})=>g({...e}),argTypes:{paths:{control:`object`,description:"麵包屑路徑清單，每項為 `{ label, href }`。最後一項不填 href 視為當前頁，不會加上連結",table:{category:`configurations`,type:{summary:`Array<{ label: string, href?: string }>`},defaultValue:{summary:`[]`}}},theme:{control:`color`,description:`主題色`,table:{category:`configurations`,defaultValue:{summary:`var(--stx-system-primary)`},type:{summary:`string`}}}},args:{paths:[{label:`首頁`,href:`/`},{label:`產品列表`,href:`/products`},{label:`產品詳細`,href:`/details`},{label:`產品詳細內容`}],theme:`var(--stx-system-primary)`}},w={args:{paths:[{label:`首頁`,href:`/`},{label:`產品列表`,href:`/products`},{label:`產品詳細`,href:`/details`},{label:`產品詳細內容`}]}},T={render:()=>_(),args:{}},E=[`Manual`,`ThroughPath`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`手動傳入 paths 陣列`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => createBreadcrumbsFromElement(),
  args: {}
}`,...T.parameters?.docs?.source},description:{story:`使用 Breadcrumbs.fromElement() — 自動從巢狀 DOM 的 data-route 屬性產生路徑`,...T.parameters?.docs?.description}}}})))()}D();export{w as Manual,T as ThroughPath,E as __namedExportsOrder,C as default};