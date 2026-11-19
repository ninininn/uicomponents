import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,o as n,r,s as i,u as a}from"./blocks-gwT75y1v.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import"./iframe-EfQV_tKJ.js";import{n as l,t as u}from"./Notification-Bb6HU3RY.js";var d;function f(){return(f=e((()=>{l(),d=({type:e,area:t,theme:n,maxWidth:r,msgContent:i,icon:a,customContent:o,msgTitle:s,classes:c,placement:l,confirm:d,cancel:f,btnList:p,handler:m,backdrop:h,backdropClasses:g,closable:_,triggerType:v,offset:y,countdown:b,style:x})=>{let S=document.createElement(`div`);S.className=`mx-auto grid place-items-center`;let C=document.createElement(`button`);C.className=`btn btn-primary`,C.textContent=`Show Notification`,S.appendChild(C);let w={type:e,theme:n,maxWidth:r,icon:a,area:t||[`auto`,`auto`],msgContent:i,customContent:o,msgTitle:s,classes:c,placement:l,confirm:d,cancel:f,handler:m,btnList:p};switch(e){case`modal`:w.backdrop=h,w.backdropClasses=g,w.closable=_,console.log(w.btnList);break;case`toast`:w.style=x;break;case`popover`:w.triggerType=v,w.offset=y;break;case`msg`:w.countdown=b}return C.addEventListener(`click`,()=>{switch(e){case`modal`:u.modal(C,w);break;case`toast`:u.toast(C,w);break;case`popover`:u.popover(C,w);break;case`msg`:u.msg(C,w)}}),S}})))()}function p(e){let t={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n,{isTemplate:!0,title:`How to use Notification`}),`
`,(0,h.jsx)(a,{}),`
`,(0,h.jsx)(t.p,{children:`適用 : 基本跳出視窗及通知，分為四種類型(toast、modal、popover及msg)。`}),`
`,(0,h.jsx)(i,{}),`
`,(0,h.jsx)(t.h1,{id:`controls`,children:`Controls`}),`
`,(0,h.jsxs)(t.p,{children:[`由於 Notification 元件的使用方式較特殊，是以呼叫的方法來決定類型，提供操作的`,(0,h.jsx)(t.code,{children:`type`}),`請視為實際使用場景要呼叫的方法；而 Method's parameter 則是呼叫時可以控制的設定，其餘內部屬性請參考 `,(0,h.jsx)(t.strong,{children:`properties 內部屬性`}),`區塊。`]}),`
`,(0,h.jsx)(r,{}),`
`,(0,h.jsx)(t.hr,{}),`
`,(0,h.jsx)(t.h1,{id:`usage-api`,children:`Usage API`}),`
`,(0,h.jsxs)(t.p,{children:[`Notification 元件和其他元件不同，不需要`,(0,h.jsx)(t.code,{children:`new`}),`初始化，用法為直接呼叫對應類型的靜態方法，並帶入參數 `,(0,h.jsx)(t.code,{children:`trigger`}),`及`,(0,h.jsx)(t.code,{children:`options`}),`即可。`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`  Notification.modal(trigger,options);\r
  //直接呼叫對應方法
`})}),`
`,(0,h.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`Quick reference`}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,h.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{className:`text-center`,children:[(0,h.jsx)(`td`,{children:`methods`}),(0,h.jsx)(`td`,{children:`descriptions`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.toast(options)`})}),(0,h.jsx)(`td`,{children:`呼叫一個toast類型通知視窗`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.modal(options)`})}),(0,h.jsx)(`td`,{children:`呼叫一個modal類型通知視窗`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.popover(options)`})}),(0,h.jsx)(`td`,{children:`呼叫一個popover類型通知視窗`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`.msg(options)`})}),(0,h.jsx)(`td`,{children:`呼叫一般msg類型通知視窗`})]})]})]})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(`span`,{className:`sb-unstyled font-black`,children:`通知視窗類型說明，分為四種表現: `}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.a,{href:`#ToastMsg`,children:(0,h.jsx)(t.strong,{children:`toast`})}),(0,h.jsx)(t.br,{}),`
`,`讓使用者知道/提醒目前操作或是狀態，一般表現為在視窗某位置(通常為四個角落)跳出，並持續一段時間後消失。`,`
`,(0,h.jsxs)(`div`,{className:`sb-unstyled note-msg my-3`,children:[(0,h.jsx)(`span`,{children:`toast類型特色`}),(0,h.jsx)(`p`,{children:`toast應該要由一個主容器包覆所有toast-item，且item要依照順序堆疊出現(FIFO)`})]}),`
`,(0,h.jsx)(`br`,{}),`
`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.a,{href:`#ModalMsg`,children:(0,h.jsx)(t.strong,{children:`modal`})}),(0,h.jsx)(t.br,{}),`
`,`適合需要中斷使用者操作的情況，用於提供關鍵資訊或要求做出決定。對話框在出現時會禁用其他功能，並一直保留在屏幕上，直到確認、關閉或採取所需的操作(背景遮罩為不可關閉的設定、且一定要做決定，所以沒有右上的關閉功能)。`,`
`,(0,h.jsxs)(`div`,{className:`sb-unstyled note-msg my-3`,children:[(0,h.jsx)(`span`,{children:`Page、Modal比較`}),(0,h.jsx)(`p`,{children:`Modal為必須中斷使用者操作的UI類型，而Page(inherit Flowbite Drawer)則是不強制中斷(可以設定是否出現遮罩)；但兩者都可以設定使用者關閉行為:是否點擊任一處關閉。`})]}),`
`,(0,h.jsx)(`br`,{}),`
`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.a,{href:`#PopoverMsg`,children:(0,h.jsx)(t.strong,{children:`popover`})}),(0,h.jsx)(t.br,{}),`
`,`視覺呈現類似tooltip，不同的是可以控制觸發行為。`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.a,{href:`#DefaultMsg`,children:(0,h.jsx)(t.strong,{children:`msg`})}),(0,h.jsx)(t.br,{}),`
`,`簡單提示訊息，會在指定時間(預設1秒)後自動消失。`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`]}),`
`]}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(t.h3,{id:`parameters-參數設定`,children:`parameters 參數設定`}),`
`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(`span`,{className:`sb-unstyled font-black`,children:`trigger`}),`
`,(0,h.jsx)(`span`,{className:`sb-unstyled data-type element`,children:`HTMLElement`}),`
`,(0,h.jsx)(t.p,{children:`傳入HTMLElement作為觸發元素，控制Notification出現與否。`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-html`,children:`<!-- 基本靜態結構 -->\r
<label class="label input-label">\r
  <input type="checkbox" class="checkbox" />\r
  文字內容\r
</label>
`})}),`
`,(0,h.jsx)(`br`,{}),`
`]}),`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(`span`,{className:`sb-unstyled font-black`,children:`options`}),`\r
`,(0,h.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),(0,h.jsx)(t.br,{}),`
`,`各屬性的型別及說明可參考上方`,(0,h.jsx)(t.strong,{children:`Controls區塊`}),`，各類別的私有屬性則可以參考`,(0,h.jsx)(t.strong,{children:`子類別`}),`區塊的各個說明，此處僅列出共同設定的屬性。`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-javascript`,children:`  const options = {\r
    type: "msg",                       //類型\r
    theme: "light",                    //主題色\r
    maxWidth: "auto",                  //最大尺寸\r
    area: ["auto", "auto"],            //尺寸\r
    icon:"notice",                     //icon圖標，用做主要分類\r
    msgContent: null,                  //主要文字內容\r
    customContent: null,               //自定義HTML內容\r
    msgTitle: null,                    //title文字\r
    classes: [],                       //自定義class\r
    placement:"center",                //位置\r
    confirm:["確認", function(){}],    //確認按鈕文字&callback\r
    cancel:["取消", function(){}],     //取消按鈕文字&callback\r
    handler:null,\r
  };
`})}),`
`,(0,h.jsx)(`br`,{}),`
`]}),`
`]}),`
`,(0,h.jsx)(t.hr,{}),`
`,(0,h.jsx)(t.h1,{id:`basemsg-類別`,children:`BaseMsg 類別`}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled alert-msg`,children:`只負責建構UI資料基礎，相關對應行為由子類別內部負責。`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,h.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{className:`text-center`,children:[(0,h.jsx)(`td`,{children:`property`}),(0,h.jsx)(`td`,{children:`default`}),(0,h.jsx)(`td`,{children:`type`}),(0,h.jsx)(`td`,{children:`descriptions`}),(0,h.jsx)(`td`,{children:`inherits`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,h.jsx)(`td`,{children:`BaseMsg`}),(0,h.jsx)(`td`,{children:`string`}),(0,h.jsxs)(`td`,{children:[`繼承自`,(0,h.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`BaseComponent`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`theme`}),(0,h.jsx)(`td`,{children:`light`}),(0,h.jsx)(`td`,{children:`string`}),(0,h.jsx)(`td`,{children:`主題設定，分為light/daark兩色系`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`BaseComponent`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`options`}),(0,h.jsx)(`td`,{children:`-`}),(0,h.jsx)(`td`,{children:`object`}),(0,h.jsxs)(`td`,{children:[`相關設定內容，由Notification的`,(0,h.jsx)(t.code,{children:`options`}),`參數傳入`]})]})]})]})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(t.hr,{}),`
`,(0,h.jsx)(t.h1,{id:`子類別`,children:`子類別`}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled alert-msg`,children:`不會直接操作，僅列出參考用`}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(`span`,{id:`ToastMsg`,children:`ToastMsg 類別`}),(0,h.jsx)(t.br,{}),`
`,(0,h.jsxs)(`span`,{children:[`作為容器並負責管理`,(0,h.jsx)(t.code,{children:`ToastItem`})]})]}),`
`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,h.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{className:`text-center`,children:[(0,h.jsx)(`td`,{children:`property`}),(0,h.jsx)(`td`,{children:`default`}),(0,h.jsx)(`td`,{children:`type`}),(0,h.jsx)(`td`,{children:`descriptions`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`trigger`}),(0,h.jsx)(`td`,{children:`-`}),(0,h.jsx)(`td`,{children:`HTMLElement`}),(0,h.jsx)(`td`,{children:`觸發元素`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`toastContainer`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.code,{children:`<div></div>`})}),(0,h.jsx)(`td`,{children:`HTMLElement`}),(0,h.jsx)(`td`,{children:`容器元素節點`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`options`}),(0,h.jsx)(`td`,{children:`-`}),(0,h.jsx)(`td`,{children:`object`}),(0,h.jsxs)(`td`,{children:[`設定值，由參數`,(0,h.jsx)(t.code,{children:`options`}),`傳入，並往下傳遞至`,(0,h.jsx)(t.code,{children:`ToastItem`})]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`toastItems`}),(0,h.jsx)(`td`,{children:`[]`}),(0,h.jsx)(`td`,{children:`array`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.p,{children:`儲存所有子訊息(ToastItem)`})})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`id`}),(0,h.jsx)(`td`,{children:`-`}),(0,h.jsx)(`td`,{children:`string`}),(0,h.jsx)(`td`,{children:(0,h.jsx)(t.p,{children:`容器id，會用來儲存同一批子訊息`})})]})]})]})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`options 參數可設定的私有屬性`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`style`}),` toast樣式，可分為 bordered | accent | default`]}),`
`]}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(t.hr,{}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(`h3`,{id:`ToastItem`,children:`ToastItem 類別`}),`
`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,h.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{className:`text-center`,children:[(0,h.jsx)(`td`,{children:`property`}),(0,h.jsx)(`td`,{children:`default`}),(0,h.jsx)(`td`,{children:`type`}),(0,h.jsx)(`td`,{children:`descriptions`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,h.jsx)(`td`,{children:`ToastItem`}),(0,h.jsx)(`td`,{children:`string`}),(0,h.jsxs)(`td`,{children:[`繼承自`,(0,h.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`style`}),(0,h.jsx)(`td`,{children:`accent`}),(0,h.jsx)(`td`,{children:`string`}),(0,h.jsx)(`td`,{children:`toast版型，可以選擇bordered|accent|default`})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`dismiss`}),(0,h.jsxs)(`td`,{children:[(0,h.jsx)(t.code,{children:`Dissmiss`}),` object`]}),(0,h.jsx)(`td`,{children:`object`}),(0,h.jsx)(`td`,{children:(0,h.jsxs)(`span`,{className:`sb-unstyled data-type inherits`,children:[`related to flowbite `,(0,h.jsx)(`a`,{href:`https://flowbite.com/docs/components/toast/`,className:`linkout`,children:`Dismiss`})]})})]})]})]})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(t.hr,{}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(`h3`,{id:`ModalMsg`,children:`ModalMsg 類別`}),`
`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,h.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{className:`text-center`,children:[(0,h.jsx)(`td`,{children:`property`}),(0,h.jsx)(`td`,{children:`default`}),(0,h.jsx)(`td`,{children:`type`}),(0,h.jsx)(`td`,{children:`descriptions`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,h.jsx)(`td`,{children:`ModalMsg`}),(0,h.jsx)(`td`,{children:`string`}),(0,h.jsxs)(`td`,{children:[`繼承自`,(0,h.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`modal`}),(0,h.jsxs)(`td`,{children:[`flowbite `,(0,h.jsx)(t.code,{children:`Modal`}),`物件`]}),(0,h.jsx)(`td`,{children:`object`}),(0,h.jsx)(`td`,{children:(0,h.jsxs)(`span`,{className:`sb-unstyled data-type inherits`,children:[`related to flowbite `,(0,h.jsx)(`a`,{href:`https://flowbite.com/docs/components/modal/`,className:`linkout`,children:`Modal`})]})})]})]})]})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`options 參數可設定的私有屬性`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`backdrop`}),` 遮罩類型，可分為static|dynamic，是否可以點擊螢幕任一處關閉`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`backdropClasses`}),` 遮罩classes`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`closable`}),` 是否可以點擊鍵盤`,(0,h.jsx)(t.code,{children:`esc`}),`鍵關閉modal`]}),`
`]}),`
`]}),`
`]}),`
`,(0,h.jsx)(t.hr,{}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(`h3`,{id:`PopoverMsg`,children:`PopoverMsg 類別`}),`
`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,h.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{className:`text-center`,children:[(0,h.jsx)(`td`,{children:`property`}),(0,h.jsx)(`td`,{children:`default`}),(0,h.jsx)(`td`,{children:`type`}),(0,h.jsx)(`td`,{children:`descriptions`})]})}),(0,h.jsxs)(`tbody`,{children:[(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,h.jsx)(`td`,{children:`PopoverMsg`}),(0,h.jsx)(`td`,{children:`string`}),(0,h.jsxs)(`td`,{children:[`繼承自`,(0,h.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`popover`}),(0,h.jsxs)(`td`,{children:[`flowbite `,(0,h.jsx)(t.code,{children:`Popover`}),`物件`]}),(0,h.jsx)(`td`,{children:`object`}),(0,h.jsx)(`td`,{children:(0,h.jsxs)(`span`,{className:`sb-unstyled data-type inherits`,children:[`related to flowbite `,(0,h.jsx)(`a`,{href:`https://flowbite.com/docs/components/popover/`,className:`linkout`,children:`Popover`})]})})]})]})]})}),`
`]}),`
`]}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`options 參數可設定的私有屬性`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`triggerType`}),` 觸發動作類型，可以選擇hover|click|none`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`offset`}),` 距離triggerElem的距離`]}),`
`]}),`
`]}),`
`]}),`
`,(0,h.jsx)(t.hr,{}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsx)(`h3`,{id:`DefaultMsg`,children:`DefaultMsg 類別`}),`
`]}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`properties 屬性`})}),`
`,(0,h.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,h.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{className:`text-center`,children:[(0,h.jsx)(`td`,{children:`property`}),(0,h.jsx)(`td`,{children:`default`}),(0,h.jsx)(`td`,{children:`type`}),(0,h.jsx)(`td`,{children:`descriptions`})]})}),(0,h.jsx)(`tbody`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,h.jsx)(`td`,{children:`DefaultMsg`}),(0,h.jsx)(`td`,{children:`string`}),(0,h.jsxs)(`td`,{children:[`繼承自`,(0,h.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]})})]})}),`
`]}),`
`,(0,h.jsxs)(t.li,{children:[`
`,(0,h.jsx)(t.p,{children:(0,h.jsx)(t.strong,{children:`options 參數可設定的私有屬性`})}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`countdown`}),` 倒數消失毫秒數(ms)`]}),`
`]}),`
`]}),`
`]})]})}function m(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=o(),c(),t()})))()}var _,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{f(),g(),{fn:_,expect:v}=__STORYBOOK_MODULE_TEST__,{action:y}=__STORYBOOK_MODULE_ACTIONS__,b={title:`Components/Notification`,tags:[`autodocs`],parameters:{docs:{source:{format:!0,language:`html`},page:m}},render:({...e})=>d({...e}),argTypes:{type:{control:`select`,options:[`toast`,`modal`,`popover`,`msg`],type:{required:!0},description:`呼叫方法name`,table:{category:`method`,defaultValue:{summary:`msg`},type:{summary:`string`}}},style:{control:`select`,options:[`default`,`bordered`,`accent`],if:{arg:`type`,eq:`toast`},description:`toast樣式`,table:{category:`method's parameters`,subcategory:`private property`,defaultValue:{summary:`static`},type:{summary:`string`}}},backdrop:{control:`select`,options:[`static`,`dynamic`],if:{arg:`type`,eq:`modal`},description:`背景遮罩類型`,table:{category:`method's parameters`,subcategory:`private property`,defaultValue:{summary:`static`},type:{summary:`string`}}},backdropClasses:{control:`text`,if:{arg:`type`,eq:`modal`},description:`背景遮罩關閉類型`,table:{category:`method's parameters`,subcategory:`private property`,defaultValue:{summary:`static`},type:{summary:`string`}}},closable:{control:`boolean`,if:{arg:`type`,eq:`modal`},description:`背景遮罩關閉類型`,table:{category:`method's parameters`,subcategory:`private property`,defaultValue:{summary:`true`},type:{summary:`boolean`}}},triggerType:{control:`select`,options:[`hover`,`click`,`none`],if:{arg:`type`,eq:`popover`},description:`觸發動作類型`,table:{category:`method's parameters`,subcategory:`private property`,defaultValue:{summary:`hover`},type:{summary:`string`}}},offset:{control:`number`,if:{arg:`type`,eq:`popover`},description:`距離觸發元素的位置距離`,table:{category:`method's parameters`,subcategory:`private property`,defaultValue:{summary:`10`},type:{summary:`number`}}},countdown:{control:`number`,if:{arg:`type`,eq:`msg`},description:`自訂倒數消失時間(ms)`,table:{category:`method's parameters`,subcategory:`private property`,defaultValue:{summary:`1000`},type:{summary:`number`}}},theme:{control:`select`,options:[`light`,`dark`],description:`通知視窗的尺寸大小`,table:{category:`method's parameters`,defaultValue:{summary:`light`},type:{summary:`string`}}},maxWidth:{control:`text`,description:`通知視窗的最大尺寸`,table:{category:`method's parameters`,defaultValue:{summary:`auto`},type:{summary:`string`}}},area:{control:`array`,description:`通知視窗的尺寸大小`,table:{category:`method's parameters`,defaultValue:{summary:`[auto, auto]`},type:{summary:`array`}}},icon:{control:`select`,options:[`confirm`,`error`,`notice`,`lock`,`download`],description:`視窗icon圖示`,table:{category:`method's parameters`,defaultValue:{summary:`notice`},type:{summary:`null`}}},msgContent:{control:`text`,description:`訊息內容`,table:{category:`method's parameters`,type:{summary:`string`}}},customContent:{control:`string`,description:`自訂訊息innerHTML結構`,table:{category:`method's parameters`,type:{summary:`string`}}},msgTitle:{control:`text`,description:`通知視窗標題文字，如果不需要標題可以傳入空字串或是false`,table:{category:`method's parameters`,defaultValue:{summary:`-`},type:{summary:`string`}}},classes:{control:{type:`array`},description:`自定義class，每個class以tailwindcss property放入`,table:{category:`method's parameters`,defaultValue:{summary:`.notify-container`},type:{summary:`array`}}},placement:{control:{type:`select`},options:[`right-bottom`,`right-top`,`left-bottom`,`left-top`,`center-bottom`,`center-top`,`center`,`custom`],mapping:{custom:[`180px`,`80px`]},description:`彈出位置`,table:{category:`method's parameters`,defaultValue:{summary:`center`},type:{summary:`string`}}},confirm:{control:{type:`text`},description:`確認按鈕文字及callback函式(此處僅提供設定按鈕文字)`,table:{category:`method's parameters`,defaultValue:{summary:`確定`},type:{summary:`array`}}},cancel:{control:{type:`text`},description:`取消按鈕文字及callback函式(此處僅提供設定按鈕文字)`,table:{category:`method's parameters`,defaultValue:{summary:`取消`},type:{summary:`array`}}},btnList:{control:{type:`array`},description:`除了確認及取消以外的按鈕；text:按鈕文字|classes:樣式class陣列|handler:click-handler function`,table:{category:`method's parameters`,defaultValue:{summary:`null`},type:{summary:`array`}}},handler:{action:`click`,control:`function`,description:`點擊觸發元素後的callback函式`,table:{category:`method's parameters`,defaultValue:{summary:`null`},type:{summary:`function`}}}},args:{type:`msg`,theme:`light`,maxWidth:`auto`,area:[`auto`,`auto`],icon:`notice`,msgContent:`這是測試用通知內容`,msgTitle:`通知`,classes:[`notification`],placement:`left-top`,confirm:`確定`,cancel:`取消`,btnList:[],style:`accent`,backdrop:`static`,backdropClasses:`bg-gray-500/50`,closable:!1,triggerType:`hover`,offset:10,countdown:1e3}},x={args:{type:`toast`,placement:`right-top`,msgContent:`動綠是昔毛叫這頭收乞高姐力司「黑枝乾」化氣星常每貝木嗎見雲黃巴事冬更珠，亭肖哪飯隻朱者英二活經貫綠「只地話入」卜風連語貓身陽黑空次司月她！還室意蝴士下卜後唱筆至旦民訴跑書向。後北愛升科訴把肖止聽對。`,customContent:`<div>...customDiv</div>`,maxWidth:`360px`}},S={args:{type:`modal`,icon:`lock`,msgTitle:`您的權限不足`,msgContent:`請前往xx專區進行登錄`,placement:`center`,confirm:[`馬上前往`,function(){alert(`to other links...`)}],cancel:`取消`,btnList:[{text:`前往`,classes:[`btn-primary`,`outline-btn`],handler:function(e,t){alert(`前往某網址`)}},{icon:`sticker.png`,text:`查看更多`,classes:[`btn-secondary`,`outline-btn`]}]}},C={args:{type:`popover`,placement:`top`}},w={args:{type:`msg`,placement:`left-top`}},T=[`Toast`,`Modal`,`Popover`,`Msg`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: "toast",
    placement: "right-top",
    msgContent: "動綠是昔毛叫這頭收乞高姐力司「黑枝乾」化氣星常每貝木嗎見雲黃巴事冬更珠，亭肖哪飯隻朱者英二活經貫綠「只地話入」卜風連語貓身陽黑空次司月她！還室意蝴士下卜後唱筆至旦民訴跑書向。後北愛升科訴把肖止聽對。",
    customContent: \`<div>...customDiv</div>\`,
    maxWidth: "360px"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: "modal",
    icon: "lock",
    msgTitle: "您的權限不足",
    msgContent: "請前往xx專區進行登錄",
    placement: "center",
    confirm: ["馬上前往", function () {
      alert("to other links...");
    }],
    cancel: "取消",
    btnList: [{
      text: "前往",
      classes: ["btn-primary", "outline-btn"],
      handler: function (e, config) {
        alert("前往某網址");
      }
    }, {
      icon: "sticker.png",
      text: "查看更多",
      classes: ["btn-secondary", "outline-btn"]
    }]
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    type: "popover",
    placement: "top"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    type: "msg",
    placement: "left-top"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...w.parameters?.docs?.source}}}})))()}E();export{S as Modal,w as Msg,C as Popover,x as Toast,T as __namedExportsOrder,b as default};