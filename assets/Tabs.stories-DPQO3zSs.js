import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,o as n,r,s as i,u as a}from"./blocks-gwT75y1v.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{n as l,o as u,r as d,t as f}from"./BaseCompo-Dty9CpKh.js";var p,m,h,g;function _(){return(_=e((()=>{u(),l(),p={orientation:`vertical`,placement:`top`,varient:``,theme:`var(--color-theme-primary)`},m=class extends f{constructor(e,t){let n=document.createElement(`div`);n.classList.add(`tabs`),n.setAttribute(`role`,`tablist`),n.setAttribute(`tabindex`,`0 `),super(n,e.theme),this.UItype=`Tabs`,this._config=Object.assign({},p,e),this.tablist=t.map((e,t)=>new h(e,t)),this.panel=new g(t.reduce((e,t)=>{let n=t.content;return e.concat(n)},[])),this.activeTabIndex=this._checkActive(t),this._createTabs(),this._bindEvent(),console.log(this)}_checkActive(e){let t=e.findIndex(e=>e.active);return t<0?1:++t}_createTabs(){d.setProp(this.el,`--theme`,this._theme);let e=this._config.orientation===`vertical`,t=this._config.placement===`start`||this._config.placement===`top`;e?t?this.el.classList.add(`flex-col`):this.el.classList.add(`flex-col-reverse`):(this.el.classList.add(`flex`),t||this.el.classList.add(`flex-row-reverse`)),this.setActiveTab(this.activeTabIndex),this.el.setAttribute(`aria-orientation`,this._config.orientation);let n=document.createElement(`div`);n.classList.add(`tab-list`),n.append(...this.tablist.map(e=>e.el)),this.el.append(n,this.panel.el)}_bindEvent(){function e(e){let t=e.target;if(t.role===`tab`){let e=t.dataset.tabindex;this.setActiveTab(e)}}this.el.addEventListener(`click`,e.bind(this))}setActiveTab(e){this.activeTabIndex=e,this.tablist.forEach(t=>{let n=t.tabIndex==e;t.activeState=n,n?(t.el.dataset.tabselected=``,t.el.setAttribute(`aria-selected`,`true`)):(delete t.el.dataset.tabselected,t.el.setAttribute(`aria-selected`,`false`))}),this.panel.panels.forEach(t=>{e==t.dataset.panelindex?t.classList.remove(`hidden`):t.classList.add(`hidden`)})}},h=class extends f{constructor({title:e,content:t,active:n},r){let i=document.createElement(`button`);super(i),this.UItype=`tab-item`,this.tabTitle=e,this.tabIndex=++r,this.panel=t,this.activeState=n,this._createTab()}_createTab(){let e=this.el,t=document.createElement(`div`);return e.classList.add(`tab-item`),e.setAttribute(`role`,`tab`),t.textContent=this.tabTitle,t.classList.add(`pointer-events-none`),e.appendChild(t),e.setAttribute(`data-tabindex`,this.tabIndex),this.activeState&&(e.setAttribute(`aria-selected`,`true`),e.setAttribute(`data-tabSelected`,``)),e}},g=class extends f{constructor(e){let t=document.createElement(`div`);super(t),this.panels=e.map((e,t)=>{let n=document.createElement(`div`);return n.classList.add(`panel`),n.setAttribute(`role`,`tabpanel`),n.setAttribute(`data-panelindex`,++t),e instanceof HTMLElement?n.appendChild(e):n.textContent=e,n}),this.contents=e,this._createPanel()}_createPanel(){let e=this.el;return e.classList.add(`panel-container`),e.append(...this.panels),e}}})))()}var v;function y(){return(y=e((()=>{_(),v=({orientation:e,placement:t,theme:n,title:r,content:i,active:a,handler:o})=>{let s=document.createElement(`div`);s.className=`mx-auto grid place-items-center`;let c=new m({orientation:e,placement:t,theme:n},[{title:`Tab 1`,content:`Content 1`},{title:r,content:i,active:a},{title:`Tab 3`,content:`Content 3`}]);return s.appendChild(c.el),s}})))()}function b(e){let t={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n,{isTemplate:!0,title:`How to use Table`}),`
`,(0,S.jsx)(a,{}),`
`,(0,S.jsxs)(t.p,{children:[`常見表格資料表，可以載入資料並更新Table畫面 (此頁面測試用API來源 : `,(0,S.jsx)(t.a,{href:`https://jsonplaceholder.typicode.com/todos`,rel:`nofollow`,children:`公開API
(https://jsonplaceholder.typicode.com/todos)`}),`)`]}),`
`,(0,S.jsx)(i,{}),`
`,(0,S.jsx)(t.h1,{id:`controls`,children:`Controls`}),`
`,(0,S.jsxs)(t.p,{children:[`Table 元件由多個子元件所組成，但其餘子元件之設定在使用時都不會直接操作到，所以僅示意`,(0,S.jsx)(t.code,{children:`config`}),`參數。`]}),`
`,(0,S.jsx)(r,{}),`
`,(0,S.jsx)(t.hr,{}),`
`,(0,S.jsx)(t.h1,{id:`usage-api`,children:`Usage API`}),`
`,(0,S.jsxs)(t.p,{children:[`使用`,(0,S.jsx)(t.code,{children:`new`}),`關鍵字初始化一個`,(0,S.jsx)(t.code,{children:`Table`}),`元件，並帶入`,(0,S.jsx)(t.code,{children:`config`}),`設定參數。`]}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-javascript`,children:`let table = new Table(config);
`})}),`
`,(0,S.jsxs)(t.blockquote,{children:[`
`,(0,S.jsx)(t.h3,{id:`parameters-參數設定`,children:`parameters 參數設定`}),`
`]}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(`span`,{className:`sb-unstyled font-black`,children:`config`}),`
`,(0,S.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),(0,S.jsx)(t.br,{}),`
`,`各屬性的型別及說明可參考上方`,(0,S.jsx)(t.strong,{children:`Controls區塊`}),`，各類別的私有屬性則可以參考`,(0,S.jsx)(t.strong,{children:`子類別`}),`區塊的各個說明，此處僅列出共同設定的屬性。`,`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-javascript`,children:`  const initConfig = {
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
`,(0,S.jsx)(`br`,{}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`
`,(0,S.jsx)(`span`,{className:`sb-unstyled font-black`,children:`column configuration`}),`
`,(0,S.jsx)(t.pre,{children:(0,S.jsx)(t.code,{className:`language-javascript`,children:`const cols = [
  {field:'id', title:'ID', sort:true, fixed:true},
  {field:'name', title:'名稱', sort:false, fixed:false},
  {field:'count', title:'數量', sort:true, fixed:false},
];
`})}),`
`,(0,S.jsx)(`br`,{}),`
`,`每個 column `,(0,S.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),` 都可以設定以下屬性 :`,`
`,(0,S.jsx)(`div`,{className:`sb-unstyled table-container`,children:(0,S.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{className:`text-center`,children:[(0,S.jsx)(`td`,{children:`property`}),(0,S.jsx)(`td`,{children:`default`}),(0,S.jsx)(`td`,{children:`type`}),(0,S.jsx)(`td`,{children:`descriptions`}),(0,S.jsx)(`td`,{children:`options`})]})}),(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`field`}),(0,S.jsx)(`td`,{className:`text-center`,children:`-`}),(0,S.jsx)(`td`,{className:`text-center`,children:`string`}),(0,S.jsx)(`td`,{children:`欄位屬性/特徵`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`title`}),(0,S.jsx)(`td`,{className:`text-center`,children:`-`}),(0,S.jsx)(`td`,{className:`text-center`,children:`string`}),(0,S.jsx)(`td`,{children:`欄位文字`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`sort`}),(0,S.jsx)(`td`,{className:`text-center`,children:`asc`}),(0,S.jsx)(`td`,{className:`text-center`,children:`string / boolean`}),(0,S.jsxs)(`td`,{children:[`是否有排序功能，`,(0,S.jsx)(t.code,{children:`false`}),`關閉排序功能，asc(升冪)、desc(降冪)`]}),(0,S.jsxs)(`td`,{children:[(0,S.jsx)(t.code,{children:`false`}),`關閉排序功能 / asc(升冪) / desc(降冪)`]})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`fixed`}),(0,S.jsx)(`td`,{className:`text-center`,children:`false`}),(0,S.jsx)(`td`,{className:`text-center`,children:`boolean`}),(0,S.jsx)(`td`,{children:`是否固定該欄`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`align`}),(0,S.jsx)(`td`,{className:`text-center`,children:`left`}),(0,S.jsx)(`td`,{className:`text-center`,children:`string`}),(0,S.jsx)(`td`,{children:`欄位對齊位置`}),(0,S.jsx)(`td`,{children:` left / center / right`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`template`}),(0,S.jsx)(`td`,{className:`text-center`,children:`-`}),(0,S.jsx)(`td`,{className:`text-center`,children:`function`}),(0,S.jsx)(`td`,{children:`自訂義tablecell的渲染函式`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`print`}),(0,S.jsx)(`td`,{className:`text-center`,children:`true`}),(0,S.jsx)(`td`,{className:`text-center`,children:`boolean`}),(0,S.jsx)(`td`,{children:`列印是否要顯示`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`visible`}),(0,S.jsx)(`td`,{className:`text-center`,children:(0,S.jsx)(t.code,{children:`true`})}),(0,S.jsx)(`td`,{className:`text-center`,children:`boolean`}),(0,S.jsx)(`td`,{children:`控制該欄顯示與否`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`rowspan`}),(0,S.jsx)(`td`,{className:`text-center`,children:`-`}),(0,S.jsx)(`td`,{className:`text-center`,children:`number`}),(0,S.jsx)(`td`,{children:`控制合併列數量`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`colspan`}),(0,S.jsx)(`td`,{className:`text-center`,children:`-`}),(0,S.jsx)(`td`,{className:`text-center`,children:`number`}),(0,S.jsx)(`td`,{children:`控制合併欄數量`})]})]})]})}),`
`]}),`
`]}),`
`,(0,S.jsx)(`br`,{}),`
`,(0,S.jsx)(t.hr,{}),`
`,(0,S.jsxs)(t.blockquote,{children:[`
`,(0,S.jsx)(t.h3,{id:`prototype-properties-原型屬性`,children:`prototype properties 原型屬性`}),`
`]}),`
`,(0,S.jsx)(`div`,{className:`sb-unstyled table-container`,children:(0,S.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{className:`text-center`,children:[(0,S.jsx)(`td`,{children:`property`}),(0,S.jsx)(`td`,{children:`default`}),(0,S.jsx)(`td`,{children:`type`}),(0,S.jsx)(`td`,{children:`descriptions`})]})}),(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,S.jsx)(`td`,{children:`Table`}),(0,S.jsx)(`td`,{children:`string`}),(0,S.jsxs)(`td`,{children:[`繼承自`,(0,S.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`id`}),(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`-`})}),(0,S.jsx)(`td`,{children:`string`}),(0,S.jsx)(`td`,{children:`Table ID`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`_tableRows`}),(0,S.jsx)(`td`,{children:`[]`}),(0,S.jsx)(`td`,{children:`array`}),(0,S.jsxs)(`td`,{children:[`多個`,(0,S.jsx)(t.code,{children:`TableRow`}),`元件`]})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`_tableHeader`}),(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`TableHeader`})}),(0,S.jsx)(`td`,{children:`Object`}),(0,S.jsx)(`td`,{children:(0,S.jsxs)(t.p,{children:[(0,S.jsx)(t.code,{children:`TableHeader`}),`元件`]})})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`tableBody`}),(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`<tbody>`})}),(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`HTMLElement`})}),(0,S.jsxs)(`td`,{children:[(0,S.jsx)(t.code,{children:`<tbody>`}),`主體DOM`]})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`table`}),(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`<table>`})}),(0,S.jsx)(`td`,{children:`HTMLElement`}),(0,S.jsxs)(`td`,{children:[(0,S.jsx)(t.code,{children:`<table>`}),` 元素`]})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`data`}),(0,S.jsx)(`td`,{children:`[]`}),(0,S.jsx)(`td`,{children:`array`}),(0,S.jsx)(`td`,{children:`呼叫API後取回的資料陣列`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`dataCounts`}),(0,S.jsx)(`td`,{children:`0`}),(0,S.jsx)(`td`,{children:`number`}),(0,S.jsx)(`td`,{children:`資料總筆數`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`_pagination`}),(0,S.jsxs)(`td`,{children:[(0,S.jsx)(t.code,{children:`Pagination`}),`元件`]}),(0,S.jsx)(`td`,{children:`Object`}),(0,S.jsxs)(`td`,{children:[`綁定的`,(0,S.jsx)(t.code,{children:`Pagination`}),`分頁元件`]})]})]})]})}),`
`,(0,S.jsx)(t.hr,{}),`
`,(0,S.jsxs)(t.blockquote,{children:[`
`,(0,S.jsx)(t.h3,{id:`methods-控制方法`,children:`methods 控制方法`}),`
`]}),`
`,(0,S.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`Quick reference`}),`
`,(0,S.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,S.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{className:`text-center`,children:[(0,S.jsx)(`td`,{children:`methods`}),(0,S.jsx)(`td`,{children:`descriptions`})]})}),(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`.setSelected(rowIndex)`})}),(0,S.jsx)(`td`,{children:`設定預設勾選列`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`.setData(dataArr)`})}),(0,S.jsx)(`td`,{children:`放入資料重新渲染`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`.setSize(width,height)`})}),(0,S.jsx)(`td`,{children:`設定表格尺寸`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`.reload()`})}),(0,S.jsx)(`td`,{children:`重新呼叫API抓資料`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`.updateRow(index,data)`})}),(0,S.jsx)(`td`,{children:`更新指定列資料`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`.getTableData()`})}),(0,S.jsx)(`td`,{children:`取得表格所有資料`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`.getSelected()`})}),(0,S.jsx)(`td`,{children:`取得表格內所有選取的Row`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`.exportTable()`})}),(0,S.jsx)(`td`,{children:`匯出成csv文件/pdf?`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`.el`})}),(0,S.jsx)(`td`,{children:`取得table DOM節點`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`.setTheme()`})}),(0,S.jsx)(`td`,{children:`設定主題色`})]})]})]})}),`
`,(0,S.jsx)(t.p,{children:`--- # Pagination 元件`}),`
`,(0,S.jsx)(`div`,{className:`sb-unstyled note-msg`,children:(0,S.jsx)(t.p,{children:`詳細說明可參考Pagination元件說明頁(尚未建置...)`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,S.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,S.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{className:`text-center`,children:[(0,S.jsx)(`td`,{children:`property`}),(0,S.jsx)(`td`,{children:`default`}),(0,S.jsx)(`td`,{children:`type`}),(0,S.jsx)(`td`,{children:`descriptions`}),(0,S.jsx)(`td`,{children:`inherits`})]})}),(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,S.jsx)(`td`,{children:`Pagination`}),(0,S.jsx)(`td`,{children:`string`}),(0,S.jsxs)(`td`,{children:[`繼承自`,(0,S.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]}),(0,S.jsx)(`td`,{children:(0,S.jsx)(t.code,{children:`BaseComponent`})})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`currentPage`}),(0,S.jsx)(`td`,{children:`1`}),(0,S.jsx)(`td`,{children:`number`}),(0,S.jsx)(`td`,{children:`當前頁數`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`total`}),(0,S.jsx)(`td`,{children:`-`}),(0,S.jsx)(`td`,{children:`number`}),(0,S.jsx)(`td`,{children:`資料總數`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`pages`}),(0,S.jsx)(`td`,{children:`[]`}),(0,S.jsx)(`td`,{children:`array`}),(0,S.jsx)(`td`,{children:`全部頁數(page)`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold`,children:`handler`}),(0,S.jsx)(`td`,{children:`-`}),(0,S.jsx)(`td`,{children:`function`}),(0,S.jsx)(`td`,{children:`點擊各頁籤要執行的function`})]})]})]})}),`
`]}),`
`]}),`
`,(0,S.jsx)(t.h2,{id:``,children:(0,S.jsx)(`br`,{})}),`
`,(0,S.jsx)(t.h1,{id:`子元件`,children:`子元件`}),`
`,(0,S.jsx)(`div`,{className:`sb-unstyled alert-msg`,children:`不會直接操作，僅列出參考用`}),`
`,(0,S.jsx)(`br`,{}),`
`,(0,S.jsxs)(t.p,{children:[(0,S.jsx)(`h3`,{id:`TableHeader`,children:`TableHeader`}),`- `,(0,S.jsx)(t.strong,{children:`properties 屬性`})]}),`
`,(0,S.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,S.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{className:`text-center`,children:[(0,S.jsx)(`td`,{children:`property`}),(0,S.jsx)(`td`,{children:`default`}),(0,S.jsx)(`td`,{children:`type`}),(0,S.jsx)(`td`,{children:`descriptions`})]})}),(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`UItype`}),(0,S.jsx)(`td`,{className:`text-center`,children:`TableHeader`}),(0,S.jsx)(`td`,{className:`text-center`,children:`string`}),(0,S.jsxs)(`td`,{children:[`繼承自`,(0,S.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`cols`}),(0,S.jsx)(`td`,{className:`text-center`,children:`-`}),(0,S.jsx)(`td`,{className:`text-center`,children:`string`}),(0,S.jsx)(`td`,{children:`各欄位設定陣列(= cols 傳入參數)`})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`selection`}),(0,S.jsx)(`td`,{className:`text-center`,children:`checkbox`}),(0,S.jsx)(`td`,{className:`text-center`,children:`string`}),(0,S.jsx)(`td`,{children:`勾選功能，可用 checkbox / radio，其餘視為靜態 table`})]})]})]})}),`
`,(0,S.jsx)(`br`,{}),`
`,(0,S.jsx)(t.hr,{}),`
`,(0,S.jsx)(`h3`,{id:`TableRow`,children:`TableRow`}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,S.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,S.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{className:`text-center`,children:[(0,S.jsx)(`td`,{children:`property`}),(0,S.jsx)(`td`,{children:`default`}),(0,S.jsx)(`td`,{children:`type`}),(0,S.jsx)(`td`,{children:`descriptions`})]})}),(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`UItype`}),(0,S.jsx)(`td`,{className:`text-center`,children:`TableRow`}),(0,S.jsx)(`td`,{className:`text-center`,children:`string`}),(0,S.jsxs)(`td`,{children:[`繼承自`,(0,S.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`popover`}),(0,S.jsxs)(`td`,{className:`text-center`,children:[`flowbite `,(0,S.jsx)(t.code,{children:`Popover`}),`物件`]}),(0,S.jsx)(`td`,{className:`text-center`,children:`object`}),(0,S.jsx)(`td`,{children:(0,S.jsxs)(`span`,{className:`sb-unstyled data-type inherits`,children:[`related to flowbite `,(0,S.jsx)(`a`,{href:`https://flowbite.com/docs/components/popover/`,className:`linkout`,children:`Popover`})]})})]})]})]})}),`
`,(0,S.jsx)(`br`,{}),`
`]}),`
`,(0,S.jsxs)(t.li,{children:[`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`options 參數可設定的私有屬性`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.code,{children:`triggerType`}),` 觸發動作類型，可以選擇hover|click|none`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.code,{children:`offset`}),` 距離triggerElem的距離`,`
`,(0,S.jsx)(`br`,{}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,S.jsx)(t.hr,{}),`
`,(0,S.jsxs)(t.blockquote,{children:[`
`,(0,S.jsx)(`h3`,{id:`TableCell`,children:`TableCell`}),`
`]}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,S.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,S.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{className:`text-center`,children:[(0,S.jsx)(`td`,{children:`property`}),(0,S.jsx)(`td`,{children:`default`}),(0,S.jsx)(`td`,{children:`type`}),(0,S.jsx)(`td`,{children:`descriptions`})]})}),(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`UItype`}),(0,S.jsx)(`td`,{className:`text-center`,children:`TableCell`}),(0,S.jsx)(`td`,{className:`text-center`,children:`string`}),(0,S.jsxs)(`td`,{children:[`繼承自`,(0,S.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`td`,{className:`font-bold text-center`,children:`dataValue`}),(0,S.jsx)(`td`,{className:`text-center`,children:`-`}),(0,S.jsx)(`td`,{className:`text-center`,children:`string/number`}),(0,S.jsx)(`td`,{children:`資料格的資料內容`})]})]})]})}),`
`,(0,S.jsx)(`br`,{}),`
`]}),`
`,(0,S.jsxs)(t.li,{children:[`
`,(0,S.jsx)(t.p,{children:(0,S.jsx)(t.strong,{children:`options 參數可設定的私有屬性`})}),`
`,(0,S.jsxs)(t.ul,{children:[`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.code,{children:`backdrop`}),` 遮罩類型，可分為static|dynamic，是否可以點擊螢幕任一處關閉`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.code,{children:`backdropClasses`}),` 遮罩classes`]}),`
`,(0,S.jsxs)(t.li,{children:[(0,S.jsx)(t.code,{children:`closable`}),` 是否可以點擊鍵盤`,(0,S.jsx)(t.code,{children:`esc`}),`鍵關閉modal`]}),`
`]}),`
`]}),`
`]})]})}function x(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,S.jsx)(t,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=o(),c(),t()})))()}var w,T,E,D,O,k;function A(){return(A=e((()=>{y(),C(),{fn:w,expect:T}=__STORYBOOK_MODULE_TEST__,{action:E}=__STORYBOOK_MODULE_ACTIONS__,D={title:`Components/Tabs`,tags:[`autodocs`],parameters:{docs:{source:{format:!0,language:`html`},page:x}},render:({...e})=>v({...e}),argTypes:{orientation:{control:`select`,options:[`vertical`,`horizontal`],description:`tabs元件排列方向`,table:{category:`configurations`,type:{summary:`string`},defaultValue:{summary:`vertical`}}},placement:{control:`select`,options:[`top`,`bottom`,`start`,`end`],description:`Tab list位置`,table:{category:`configurations`,defaultValue:{summary:`top`},type:{summary:`string`}}},theme:{control:`color`,description:`表格色系`,table:{category:`configurations`,defaultValue:{summary:`var(--color-primary-500)`},type:{summary:`string`}}},title:{control:`text`,description:`tab 標題文字`,table:{category:`tabs configurations`,defaultValue:{summary:`-`},type:{summary:`string`}}},content:{control:`text`,description:`panel內容`,table:{category:`tabs configurations`,defaultValue:{summary:`-`},type:{summary:`string | HTMLElement`}}},active:{control:`boolean`,description:`預設顯示`,table:{category:`tabs configurations`,defaultValue:{summary:`false`},type:{summary:`boolean`}}},handler:{action:`click`,control:`function`,description:`點擊觸發元素後的callback函式`,table:{category:`configurations`,defaultValue:{summary:`null`},type:{summary:`function`}}}},args:{orientation:`vertical`,placement:`top`,theme:`var(--color-primary-500)`,title:`custom Tab 2`,content:`custom content 2`,active:!1}},O={args:{orientation:`vertical`,placement:`top`,theme:`var(--color-primary-500)`,title:`custom Tab 2`,content:`custom content 2`,active:!1}},k=[`Tabs`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    placement: "top",
    theme: "var(--color-primary-500)",
    title: "custom Tab 2",
    content: "custom content 2",
    active: false
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...O.parameters?.docs?.source}}}})))()}A();export{O as Tabs,k as __namedExportsOrder,D as default};