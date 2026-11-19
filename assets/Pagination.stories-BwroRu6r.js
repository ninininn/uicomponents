import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,o as n,r,s as i,u as a}from"./blocks-gwT75y1v.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{o as l,r as u}from"./BaseCompo-Dty9CpKh.js";import{n as d,t as f}from"./Notification-Bb6HU3RY.js";import"./Dropdown-D5MClaEP.js";import"./Checkbox-CWL6azu-.js";import{r as p}from"./Pagination-B1BC7HVb.js";var m;function h(){return(h=e((()=>{p(),m=({id:e,name:t,limits:n,selection:r,container:i,cols:a,tools:o,groupTool:s,exportsTool:c,printTool:l,theme:u,classes:d,complete:f,error:p,controlPage:m,handler:h})=>{let g=document.createElement(`div`);g.className=`mx-auto grid place-items-center`;let _=document.createElement(`button`);_.className=`btn btn-secondary mb-3`,_.textContent=`create Table`;let v=document.createElement(`button`);v.className=`btn btn-danger outline-btn mb-3`,v.textContent=`clear Selected`;let y=document.createElement(`div`);y.className=`table-test-target`,g.appendChild(_),g.appendChild(y),g.appendChild(v);let b=[s=`group`,c=`exports`,l=`print`],x={id:e,name:t,limits:n,container:i||`.table-test-target`,cols:a,tools:o?[...b]:!1,selection:r,theme:u,classes:d,complete:f,error:p,handler:h,url:`https://data.moa.gov.tw/Service/OpenData/FromM/BoatBulletinData.aspx?IsTransData=1&UnitId=041`,controlPage:m};return _.addEventListener(`click`,()=>{let e=new Table(x);console.log(`table_instance:`,e),v.addEventListener(`click`,()=>{e.setSize(500,100)})}),g}})))()}function g(e){let t={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n,{isTemplate:!0,title:`How to use Table`}),`
`,(0,v.jsx)(a,{}),`
`,(0,v.jsxs)(t.p,{children:[`常見表格資料表，可以載入資料並更新Table畫面 (此頁面測試用API來源 : `,(0,v.jsx)(t.a,{href:`https://jsonplaceholder.typicode.com/todos`,rel:`nofollow`,children:`公開API
(https://jsonplaceholder.typicode.com/todos)`}),`)`]}),`
`,(0,v.jsx)(i,{}),`
`,(0,v.jsx)(t.h1,{id:`controls`,children:`Controls`}),`
`,(0,v.jsxs)(t.p,{children:[`Table 元件由多個子元件所組成，但其餘子元件之設定在使用時都不會直接操作到，所以僅示意`,(0,v.jsx)(t.code,{children:`config`}),`參數。`]}),`
`,(0,v.jsx)(r,{}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(t.h1,{id:`usage-api`,children:`Usage API`}),`
`,(0,v.jsxs)(t.p,{children:[`使用`,(0,v.jsx)(t.code,{children:`new`}),`關鍵字初始化一個`,(0,v.jsx)(t.code,{children:`Table`}),`元件，並帶入`,(0,v.jsx)(t.code,{children:`config`}),`設定參數。`]}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`let table = new Table(config);
`})}),`
`,(0,v.jsxs)(t.blockquote,{children:[`
`,(0,v.jsx)(t.h3,{id:`parameters-參數設定`,children:`parameters 參數設定`}),`
`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(`span`,{className:`sb-unstyled font-black`,children:`config`}),`
`,(0,v.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),(0,v.jsx)(t.br,{}),`
`,`各屬性的型別及說明可參考上方`,(0,v.jsx)(t.strong,{children:`Controls區塊`}),`，各類別的私有屬性則可以參考`,(0,v.jsx)(t.strong,{children:`子類別`}),`區塊的各個說明，此處僅列出共同設定的屬性。`,`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`  const initConfig = {
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
`,(0,v.jsx)(`br`,{}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsx)(`span`,{className:`sb-unstyled font-black`,children:`column configuration`}),`
`,(0,v.jsx)(t.pre,{children:(0,v.jsx)(t.code,{className:`language-javascript`,children:`const cols = [
  {field:'id', title:'ID', sort:true, fixed:true},
  {field:'name', title:'名稱', sort:false, fixed:false},
  {field:'count', title:'數量', sort:true, fixed:false},
];
`})}),`
`,(0,v.jsx)(`br`,{}),`
`,`每個 column `,(0,v.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),` 都可以設定以下屬性 :`,`
`,(0,v.jsx)(`div`,{className:`sb-unstyled table-container`,children:(0,v.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`text-center`,children:[(0,v.jsx)(`td`,{children:`property`}),(0,v.jsx)(`td`,{children:`default`}),(0,v.jsx)(`td`,{children:`type`}),(0,v.jsx)(`td`,{children:`descriptions`}),(0,v.jsx)(`td`,{children:`options`})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`field`}),(0,v.jsx)(`td`,{className:`text-center`,children:`-`}),(0,v.jsx)(`td`,{className:`text-center`,children:`string`}),(0,v.jsx)(`td`,{children:`欄位屬性/特徵`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`title`}),(0,v.jsx)(`td`,{className:`text-center`,children:`-`}),(0,v.jsx)(`td`,{className:`text-center`,children:`string`}),(0,v.jsx)(`td`,{children:`欄位文字`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`sort`}),(0,v.jsx)(`td`,{className:`text-center`,children:`asc`}),(0,v.jsx)(`td`,{className:`text-center`,children:`string / boolean`}),(0,v.jsxs)(`td`,{children:[`是否有排序功能，`,(0,v.jsx)(t.code,{children:`false`}),`關閉排序功能，asc(升冪)、desc(降冪)`]}),(0,v.jsxs)(`td`,{children:[(0,v.jsx)(t.code,{children:`false`}),`關閉排序功能 / asc(升冪) / desc(降冪)`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`fixed`}),(0,v.jsx)(`td`,{className:`text-center`,children:`false`}),(0,v.jsx)(`td`,{className:`text-center`,children:`boolean`}),(0,v.jsx)(`td`,{children:`是否固定該欄`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`align`}),(0,v.jsx)(`td`,{className:`text-center`,children:`left`}),(0,v.jsx)(`td`,{className:`text-center`,children:`string`}),(0,v.jsx)(`td`,{children:`欄位對齊位置`}),(0,v.jsx)(`td`,{children:` left / center / right`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`template`}),(0,v.jsx)(`td`,{className:`text-center`,children:`-`}),(0,v.jsx)(`td`,{className:`text-center`,children:`function`}),(0,v.jsx)(`td`,{children:`自訂義tablecell的渲染函式`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`print`}),(0,v.jsx)(`td`,{className:`text-center`,children:`true`}),(0,v.jsx)(`td`,{className:`text-center`,children:`boolean`}),(0,v.jsx)(`td`,{children:`列印是否要顯示`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`visible`}),(0,v.jsx)(`td`,{className:`text-center`,children:(0,v.jsx)(t.code,{children:`true`})}),(0,v.jsx)(`td`,{className:`text-center`,children:`boolean`}),(0,v.jsx)(`td`,{children:`控制該欄顯示與否`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`rowspan`}),(0,v.jsx)(`td`,{className:`text-center`,children:`-`}),(0,v.jsx)(`td`,{className:`text-center`,children:`number`}),(0,v.jsx)(`td`,{children:`控制合併列數量`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`colspan`}),(0,v.jsx)(`td`,{className:`text-center`,children:`-`}),(0,v.jsx)(`td`,{className:`text-center`,children:`number`}),(0,v.jsx)(`td`,{children:`控制合併欄數量`})]})]})]})}),`
`]}),`
`]}),`
`,(0,v.jsx)(`br`,{}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsxs)(t.blockquote,{children:[`
`,(0,v.jsx)(t.h3,{id:`prototype-properties-原型屬性`,children:`prototype properties 原型屬性`}),`
`]}),`
`,(0,v.jsx)(`div`,{className:`sb-unstyled table-container`,children:(0,v.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`text-center`,children:[(0,v.jsx)(`td`,{children:`property`}),(0,v.jsx)(`td`,{children:`default`}),(0,v.jsx)(`td`,{children:`type`}),(0,v.jsx)(`td`,{children:`descriptions`})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,v.jsx)(`td`,{children:`Table`}),(0,v.jsx)(`td`,{children:`string`}),(0,v.jsxs)(`td`,{children:[`繼承自`,(0,v.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`id`}),(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`-`})}),(0,v.jsx)(`td`,{children:`string`}),(0,v.jsx)(`td`,{children:`Table ID`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`_tableRows`}),(0,v.jsx)(`td`,{children:`[]`}),(0,v.jsx)(`td`,{children:`array`}),(0,v.jsxs)(`td`,{children:[`多個`,(0,v.jsx)(t.code,{children:`TableRow`}),`元件`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`_tableHeader`}),(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`TableHeader`})}),(0,v.jsx)(`td`,{children:`Object`}),(0,v.jsx)(`td`,{children:(0,v.jsxs)(t.p,{children:[(0,v.jsx)(t.code,{children:`TableHeader`}),`元件`]})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`tableBody`}),(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`<tbody>`})}),(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`HTMLElement`})}),(0,v.jsxs)(`td`,{children:[(0,v.jsx)(t.code,{children:`<tbody>`}),`主體DOM`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`table`}),(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`<table>`})}),(0,v.jsx)(`td`,{children:`HTMLElement`}),(0,v.jsxs)(`td`,{children:[(0,v.jsx)(t.code,{children:`<table>`}),` 元素`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`data`}),(0,v.jsx)(`td`,{children:`[]`}),(0,v.jsx)(`td`,{children:`array`}),(0,v.jsx)(`td`,{children:`呼叫API後取回的資料陣列`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`dataCounts`}),(0,v.jsx)(`td`,{children:`0`}),(0,v.jsx)(`td`,{children:`number`}),(0,v.jsx)(`td`,{children:`資料總筆數`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`_pagination`}),(0,v.jsxs)(`td`,{children:[(0,v.jsx)(t.code,{children:`Pagination`}),`元件`]}),(0,v.jsx)(`td`,{children:`Object`}),(0,v.jsxs)(`td`,{children:[`綁定的`,(0,v.jsx)(t.code,{children:`Pagination`}),`分頁元件`]})]})]})]})}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsxs)(t.blockquote,{children:[`
`,(0,v.jsx)(t.h3,{id:`methods-控制方法`,children:`methods 控制方法`}),`
`]}),`
`,(0,v.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`Quick reference`}),`
`,(0,v.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,v.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`text-center`,children:[(0,v.jsx)(`td`,{children:`methods`}),(0,v.jsx)(`td`,{children:`descriptions`})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`.setSelected(rowIndex)`})}),(0,v.jsx)(`td`,{children:`設定預設勾選列`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`.setData(dataArr)`})}),(0,v.jsx)(`td`,{children:`放入資料重新渲染`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`.setSize(width,height)`})}),(0,v.jsx)(`td`,{children:`設定表格尺寸`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`.reload()`})}),(0,v.jsx)(`td`,{children:`重新呼叫API抓資料`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`.updateRow(index,data)`})}),(0,v.jsx)(`td`,{children:`更新指定列資料`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`.getTableData()`})}),(0,v.jsx)(`td`,{children:`取得表格所有資料`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`.getSelected()`})}),(0,v.jsx)(`td`,{children:`取得表格內所有選取的Row`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`.exportTable()`})}),(0,v.jsx)(`td`,{children:`匯出成csv文件/pdf?`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`.el`})}),(0,v.jsx)(`td`,{children:`取得table DOM節點`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`.setTheme()`})}),(0,v.jsx)(`td`,{children:`設定主題色`})]})]})]})}),`
`,(0,v.jsx)(t.p,{children:`--- # Pagination 元件`}),`
`,(0,v.jsx)(`div`,{className:`sb-unstyled note-msg`,children:(0,v.jsx)(t.p,{children:`詳細說明可參考Pagination元件說明頁(尚未建置...)`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,v.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,v.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`text-center`,children:[(0,v.jsx)(`td`,{children:`property`}),(0,v.jsx)(`td`,{children:`default`}),(0,v.jsx)(`td`,{children:`type`}),(0,v.jsx)(`td`,{children:`descriptions`}),(0,v.jsx)(`td`,{children:`inherits`})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,v.jsx)(`td`,{children:`Pagination`}),(0,v.jsx)(`td`,{children:`string`}),(0,v.jsxs)(`td`,{children:[`繼承自`,(0,v.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]}),(0,v.jsx)(`td`,{children:(0,v.jsx)(t.code,{children:`BaseComponent`})})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`currentPage`}),(0,v.jsx)(`td`,{children:`1`}),(0,v.jsx)(`td`,{children:`number`}),(0,v.jsx)(`td`,{children:`當前頁數`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`total`}),(0,v.jsx)(`td`,{children:`-`}),(0,v.jsx)(`td`,{children:`number`}),(0,v.jsx)(`td`,{children:`資料總數`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`pages`}),(0,v.jsx)(`td`,{children:`[]`}),(0,v.jsx)(`td`,{children:`array`}),(0,v.jsx)(`td`,{children:`全部頁數(page)`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold`,children:`handler`}),(0,v.jsx)(`td`,{children:`-`}),(0,v.jsx)(`td`,{children:`function`}),(0,v.jsx)(`td`,{children:`點擊各頁籤要執行的function`})]})]})]})}),`
`]}),`
`]}),`
`,(0,v.jsx)(t.h2,{id:``,children:(0,v.jsx)(`br`,{})}),`
`,(0,v.jsx)(t.h1,{id:`子元件`,children:`子元件`}),`
`,(0,v.jsx)(`div`,{className:`sb-unstyled alert-msg`,children:`不會直接操作，僅列出參考用`}),`
`,(0,v.jsx)(`br`,{}),`
`,(0,v.jsxs)(t.p,{children:[(0,v.jsx)(`h3`,{id:`TableHeader`,children:`TableHeader`}),`- `,(0,v.jsx)(t.strong,{children:`properties 屬性`})]}),`
`,(0,v.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,v.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`text-center`,children:[(0,v.jsx)(`td`,{children:`property`}),(0,v.jsx)(`td`,{children:`default`}),(0,v.jsx)(`td`,{children:`type`}),(0,v.jsx)(`td`,{children:`descriptions`})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`UItype`}),(0,v.jsx)(`td`,{className:`text-center`,children:`TableHeader`}),(0,v.jsx)(`td`,{className:`text-center`,children:`string`}),(0,v.jsxs)(`td`,{children:[`繼承自`,(0,v.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`cols`}),(0,v.jsx)(`td`,{className:`text-center`,children:`-`}),(0,v.jsx)(`td`,{className:`text-center`,children:`string`}),(0,v.jsx)(`td`,{children:`各欄位設定陣列(= cols 傳入參數)`})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`selection`}),(0,v.jsx)(`td`,{className:`text-center`,children:`checkbox`}),(0,v.jsx)(`td`,{className:`text-center`,children:`string`}),(0,v.jsx)(`td`,{children:`勾選功能，可用 checkbox / radio，其餘視為靜態 table`})]})]})]})}),`
`,(0,v.jsx)(`br`,{}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsx)(`h3`,{id:`TableRow`,children:`TableRow`}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,v.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,v.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`text-center`,children:[(0,v.jsx)(`td`,{children:`property`}),(0,v.jsx)(`td`,{children:`default`}),(0,v.jsx)(`td`,{children:`type`}),(0,v.jsx)(`td`,{children:`descriptions`})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`UItype`}),(0,v.jsx)(`td`,{className:`text-center`,children:`TableRow`}),(0,v.jsx)(`td`,{className:`text-center`,children:`string`}),(0,v.jsxs)(`td`,{children:[`繼承自`,(0,v.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`popover`}),(0,v.jsxs)(`td`,{className:`text-center`,children:[`flowbite `,(0,v.jsx)(t.code,{children:`Popover`}),`物件`]}),(0,v.jsx)(`td`,{className:`text-center`,children:`object`}),(0,v.jsx)(`td`,{children:(0,v.jsxs)(`span`,{className:`sb-unstyled data-type inherits`,children:[`related to flowbite `,(0,v.jsx)(`a`,{href:`https://flowbite.com/docs/components/popover/`,className:`linkout`,children:`Popover`})]})})]})]})]})}),`
`,(0,v.jsx)(`br`,{}),`
`]}),`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`options 參數可設定的私有屬性`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`triggerType`}),` 觸發動作類型，可以選擇hover|click|none`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`offset`}),` 距離triggerElem的距離`,`
`,(0,v.jsx)(`br`,{}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,v.jsx)(t.hr,{}),`
`,(0,v.jsxs)(t.blockquote,{children:[`
`,(0,v.jsx)(`h3`,{id:`TableCell`,children:`TableCell`}),`
`]}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,v.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,v.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`text-center`,children:[(0,v.jsx)(`td`,{children:`property`}),(0,v.jsx)(`td`,{children:`default`}),(0,v.jsx)(`td`,{children:`type`}),(0,v.jsx)(`td`,{children:`descriptions`})]})}),(0,v.jsxs)(`tbody`,{children:[(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`UItype`}),(0,v.jsx)(`td`,{className:`text-center`,children:`TableCell`}),(0,v.jsx)(`td`,{className:`text-center`,children:`string`}),(0,v.jsxs)(`td`,{children:[`繼承自`,(0,v.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{className:`font-bold text-center`,children:`dataValue`}),(0,v.jsx)(`td`,{className:`text-center`,children:`-`}),(0,v.jsx)(`td`,{className:`text-center`,children:`string/number`}),(0,v.jsx)(`td`,{children:`資料格的資料內容`})]})]})]})}),`
`,(0,v.jsx)(`br`,{}),`
`]}),`
`,(0,v.jsxs)(t.li,{children:[`
`,(0,v.jsx)(t.p,{children:(0,v.jsx)(t.strong,{children:`options 參數可設定的私有屬性`})}),`
`,(0,v.jsxs)(t.ul,{children:[`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`backdrop`}),` 遮罩類型，可分為static|dynamic，是否可以點擊螢幕任一處關閉`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`backdropClasses`}),` 遮罩classes`]}),`
`,(0,v.jsxs)(t.li,{children:[(0,v.jsx)(t.code,{children:`closable`}),` 是否可以點擊鍵盤`,(0,v.jsx)(t.code,{children:`esc`}),`鍵關閉modal`]}),`
`]}),`
`]}),`
`]})]})}function _(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,v.jsx)(t,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=o(),c(),t()})))()}var b,x,S,C,w,T;function E(){return(E=e((()=>{h(),y(),l(),d(),{fn:b,expect:x}=__STORYBOOK_MODULE_TEST__,{action:S}=__STORYBOOK_MODULE_ACTIONS__,C={title:`Components/Pagination`,tags:[`autodocs`],parameters:{docs:{source:{format:!0,language:`html`},page:_}},render:({...e})=>m({...e}),argTypes:{id:{control:`text`,type:{required:!0},description:`表格元素id`,table:{category:`configurations`,type:{summary:`string`}}},name:{control:`text`,description:`Table name`,table:{category:`configurations`,defaultValue:{summary:`-`},type:{summary:`string`}}},limits:{control:`select`,options:[10,20,25,50,100],description:`每頁顯示的最多筆數`,table:{category:`configurations`,defaultValue:{summary:`25`},type:{summary:`number`}}},container:{control:`text`,description:`要放入的DOM元素`,table:{category:`configurations`,defaultValue:{summary:`null`},type:{summary:`string`}}},cols:{control:`array`,description:`欄位設定及帶入值`,table:{category:`configurations`,defaultValue:{summary:`-`},type:{summary:`array`}}},selection:{control:`select`,options:[`checkbox`,`radio`],description:`是否要有勾選功能`,table:{category:`configurations`,defaultValue:{summary:`checkbox`},type:{summary:`string`}}},tools:{control:`boolean`,description:`是否要有基本工具列`,table:{category:`configurations`,defaultValue:{summary:`true`},type:{summary:`boolean`}}},groupTool:{control:`boolean`,if:{arg:`tools`,truthy:!0},description:`群組篩選工具`,table:{category:`configurations`,subcategory:`tools feature`,defaultValue:{summary:`true`},type:{summary:`boolean`}}},exportsTool:{control:`boolean`,if:{arg:`tools`,truthy:!0},description:`匯出工具`,table:{category:`configurations`,subcategory:`tools feature`,defaultValue:{summary:`true`},type:{summary:`boolean`}}},printTool:{control:`boolean`,if:{arg:`tools`,truthy:!0},description:`列印工具`,table:{category:`configurations`,subcategory:`tools feature`,defaultValue:{summary:`true`},type:{summary:`boolean`}}},theme:{control:`color`,description:`表格色系`,table:{category:`configurations`,defaultValue:{summary:`var(--color-primary-500)`},type:{summary:`string`}}},controlPage:{control:`boolean`,description:`是否可以操作每頁顯示數量`,table:{category:`configurations`,defaultValue:{summary:`false`},type:{summary:`boolean`}}},complete:{control:`function`,description:`完成資料載入後要執行的函式`,table:{category:`configurations`,type:{summary:`function`}}},classes:{control:{type:`array`},description:`自定義class，每個class以tailwindcss property放入`,table:{category:`configurations`,defaultValue:{summary:`.table-container`},type:{summary:`array`}}},error:{control:{type:`function`},description:`資料載入失敗時要執行的函式`,table:{category:`configurations`,type:{summary:`function`}}},handler:{action:`click`,control:`function`,description:`點擊觸發元素後的callback函式`,table:{category:`configurations`,defaultValue:{summary:`null`},type:{summary:`function`}}}},args:{id:`table_first`,classes:[`table-container`],limits:25,selection:`checkbox`,tools:!0,theme:`var(--color-primary-500)`,controlPage:!0,groupTool:!0,exportsTool:!0,printTool:!0}},w={args:{id:`test-table`,name:`測試表格`,cols:[{field:`日期`,title:`日期`,sort:function(e,t){return new Date(e.data.日期)-new Date(t.data.日期)},fixed:!1,align:`center`,template:function(e){let t=`<div>${e}</div>`;this._elem.innerHTML=t}},{field:`項目`,title:`項目`,sort:`desc`,fixed:!1,align:`center`,visible:!1,resize:!0},{field:`網址`,title:`網址`,sort:!1,fixed:!1,align:`center`},{field:`operate`,title:`操作`,sort:!1,fixed:!1,template:function(e){e.index===1&&(e=void 0);let t=[{classes:[`btn-sm`,`${e?`btn-success`:`btn-secondary`}`],text:`查看細節`,handler:function(t){t.stopPropagation(),console.log(e),f.modal({customContent:`<div>${JSON.stringify(e)}</div>`})}},{classes:[`btn-sm`,`btn-danger`],text:`刪除此列`,handler:function(t){t.stopPropagation(),console.log(`btn handler get value:`,e)}}],n=document.createElement(`div`);u.addClass(n,[`flex`,`gap-2`,`justify-center`]),u.setBtnGroup(t,n),this._elem.appendChild(n)},print:!1}],limits:25,container:`.table-test-target`}},T=[`Pagination`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: "test-table",
    name: "測試表格",
    cols: [{
      field: "日期",
      title: "日期",
      sort: function (x, y) {
        let xDate = new Date(x.data["日期"]);
        let yDate = new Date(y.data["日期"]);
        return xDate - yDate;
      },
      fixed: false,
      align: "center",
      template: function (data) {
        let template = \`<div>\${data}</div>\`;
        this._elem.innerHTML = template;
      }
    }, {
      field: "項目",
      title: "項目",
      sort: "desc",
      fixed: false,
      align: "center",
      visible: false,
      resize: true
    }, {
      field: "網址",
      title: "網址",
      sort: false,
      fixed: false,
      align: "center"
    }, {
      field: "operate",
      title: "操作",
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
            Notification.modal({
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
        Dom.addClass(btnContainer, ["flex", "gap-2", "justify-center"]);
        Dom.setBtnGroup(buttons, btnContainer);
        this._elem.appendChild(btnContainer);
      },
      print: false
    }],
    limits: 25,
    container: ".table-test-target"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...w.parameters?.docs?.source}}}})))()}E();export{w as Pagination,T as __namedExportsOrder,C as default};