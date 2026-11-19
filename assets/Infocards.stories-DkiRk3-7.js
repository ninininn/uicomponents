import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{d as t,o as n,r,s as i,u as a}from"./blocks-gwT75y1v.js";import{s as o}from"./chunk-W22LQPXL-BFH_Bymq.js";import{i as s,r as c}from"./react-DITjJg24.js";import{a as l,i as u,s as d}from"./Utils-UtpDOmh6.js";import{n as f,t as p}from"./BaseCompo-Dty9CpKh.js";import{n as m,t as h}from"./Notification-Bb6HU3RY.js";import{n as g,t as _}from"./Dropdown-D5MClaEP.js";import"./Checkbox-CWL6azu-.js";var v,y,b,x,S;function C(){return(C=e((()=>{l(),f(),m(),v={cardSize:1,closable:!0,minimize:!0},y=class extends p{constructor(e,{cardSize:t,closable:n,minimize:r}){let i=document.createElement(`div`);if(i.classList.add(`card`),i.innerHTML=`<div class="card-header">
            <div class="data-title">${e}</div>
        </div>`,n||r){let e=document.createElement(`div`);e.classList.add(`flex`),i.querySelector(`.card-header`).appendChild(e),r&&(e.innerHTML+=`<button type="button" class="miniBtn btn icon-btn text-btn" >
                <svg class="icon text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg></button>`),n&&(e.innerHTML+=`<button type="button" class="closeBtn btn icon-btn text-btn" data-modal-target="close-data-modal">
                <svg class="icon text-gray-800" width="24" height="24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </button>`)}super(i),this.UItype=`Card`,this._config=Object.assign({},v,{cardSize:t,closable:n,minimize:r}),this.cardContainer=this._elem,this.title=e,this._cardsize=this._setCardSize(this._config.cardSize),this.minimize=!1,this._bindEvent()}_setCardSize(e){switch(e){case 2:return this.cardContainer.classList.add(`md:col-span-2`),`2-col`;case 3:return this.cardContainer.classList.add(`md:col-span-3`),`full-col`;default:return`1-col`}}_bindEvent(){let{minimize:e,closable:t}=this._config;e&&this.onevent(this.cardContainer.querySelector(`.miniBtn`),`click`,n.bind(this));function n(){this.minimize=!this.minimize,this.cardContainer.dataset.minimize=this.minimize?`mini`:`expand`;let e=this.minimize?`<svg class="icon text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5"/>
</svg>`:`<svg class="icon text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>`;this.cardContainer.querySelector(`.miniBtn`).innerHTML=e}if(t){this.cardContainer.querySelector(`.closeBtn`).addEventListener(`click`,e.bind(this));function e(){h.modal(this.cardContainer.querySelector(`.closeBtn`),{msgContent:`確定關閉此資料區塊? 關閉後須重新查詢`,placement:`center`,confirm:[`確定關閉`,()=>{this.cardContainer.remove()}],cancel:`取消`,backdropClasses:`bg-gray-800/50`})}}}},b=class extends y{constructor(e,t,n=v){let r;typeof n==`number`&&(r.cardSize=n),r=Object.assign({},v,n),super(e,r),this._infoStruct=new x(t),this.infoList=this._infoStruct.infos,this.blocks=[],this._contentBlock=document.createElement(`div`),this._init()}_createBlock(e){let t=document.createElement(`div`);if(t.classList.add(`row-block`),e.blockId&&(t.id=e.blockId),e.label){let n=document.createElement(`div`);if(e.blockclass&&n.classList.add(...e.blockclass),Array.isArray(e.label))e.label.forEach((t,r)=>{let i=document.createElement(`span`);if(i.textContent=t,i.classList.add(`card-label`),n.appendChild(i),e.value?.[r]){let t=document.createElement(`span`);t.textContent=e.value[r],e.valueId?.[r]&&(t.id=e.valueId[r]),n.appendChild(t)}});else{let t=document.createElement(`span`);if(t.textContent=e.label,t.classList.add(`card-label`),n.appendChild(t),e.value){let t=document.createElement(`span`);t.textContent=e.value,e.valueId&&(t.id=e.valueId),n.appendChild(t)}}e.customInner&&e.customInner.forEach(e=>{if(e instanceof HTMLElement)n.appendChild(e);else{let t=document.createElement(`div`);t.innerHTML=e,n.appendChild(t)}}),t.appendChild(n)}if(e.customInner&&!e.label&&e.customInner.forEach(n=>{if(n instanceof HTMLElement)e.blockclass&&n.classList.add(...e.blockclass),t.appendChild(n);else{let r=document.createElement(`div`);r.innerHTML=n,e.blockclass&&r.classList.add(...e.blockclass),t.appendChild(r)}}),e.btn){let n=document.createElement(`div`);n.classList.add(`card-buttons`),e.btngroupClass?n.classList.add(...e.btngroupClass.split(` `)):e.blockclass&&!e.label&&n.classList.add(...e.blockclass),e.btn.forEach(e=>{let t=document.createElement(`button`);t.classList.add(`btn`),t.textContent=e.text,e.class&&t.classList.add(...e.class),e.handler&&t.addEventListener(`click`,e.handler.bind(this)),e.id&&(t.id=e.id),n.appendChild(t)}),t.appendChild(n)}return t}_init(){this._contentBlock.className=`card-data-content`,this._render()}_render(){this.clearBlocks();let e=new Map;this.infoList.forEach(t=>{if(t._groupId)e.has(t._groupId)||e.set(t._groupId,[]),e.get(t._groupId).push(t);else{if(t._visible===!1)return;let e=this._createBlock(t);this.blocks.push(e),this._contentBlock.appendChild(e)}}),e.forEach((e,t)=>{let n=document.createElement(`div`);n.id=t,e.forEach(e=>{if(e._visible===!1)return;let t=this._createBlock(e);n.appendChild(t)}),this._contentBlock.appendChild(n),this.blocks.push(n)}),this.cardContainer.appendChild(this._contentBlock)}addBlocks(e,t={}){this._infoStruct.add(e,t),this.infoList=this._infoStruct.infos,this._render()}clearBlocks(){if(this._contentBlock.children){for(;this._contentBlock.firstChild;)this._contentBlock.firstChild.remove();this.blocks=[]}}deleteBlock(e){this._infoStruct.delete(e),this.infoList=this._infoStruct.infos,this._render()}toggleBlock(e){this._infoStruct.toggle(e),this.blocks.forEach(t=>{t.id===e&&t.classList.add(`hidden`)})}updateLabel(e,t){this._infoStruct.update(e,t),this.infoList=this._infoStruct.infos,this._render()}},x=class{constructor(e){this.infoProps=this._wrapInfos(e),this.rowNum=e.length,this.infos=this._createInfoRows(e),this.uuid=d()}_init(){this.infos=[];for(let e=0;e<this.rowNum;e++){let t={blockId:this.getInfoKeys(`blockId`)[e]||null,blockclass:this.getInfoKeys(`blockClass`)[e]||null,label:this.getInfoKeys(`label`)[e]||null,value:this.getInfoKeys(`value`)[e]||null,valueId:this.getInfoKeys(`valueId`)[e]||null,customInner:this.getInfoKeys(`customInner`)[e]||[],btn:Array.isArray(this.getInfoKeys(`btn`))?this.getInfoKeys(`btn`)[e]:this.getInfoKeys(`btn`),btngroupClass:this.getInfoKeys(`btngroupClass`)[e]};this.infos.push(t)}}_wrapInfos(e){return e.reduce((e,t)=>(e.blockId.push(t.blockId||``),e.label.push(t.label||``),e.blockClass.push(t.blockclass||``),e.value.push(t.value||``),e.valueId.push(t?.valueId||``),e.customInner.push(t.customInner?Array.isArray(t.customInner)?t.customInner:[t.customInner]:[]),e.btn.push(t.btn),e.btngroupClass.push(t.btngroupClass),e),{blockId:[],label:[],blockClass:[],value:[],valueId:[],customInner:[],btn:[],btngroupClass:[]})}getInfoKeys(e){return this.infoProps[e]}_createInfoRows(e){let t=this._wrapInfos(e);return e.map((e,n)=>({blockId:e.blockId||null,blockclass:t.blockClass[n]||null,label:t.label[n]||null,value:t.value[n]||null,valueId:t.valueId[n]||null,customInner:t.customInner[n]||[],btn:Array.isArray(t.btn)?t.btn[n]:t.btn,btngroupClass:t.btngroupClass[n]}))}add(e,{once:t=!1,id:n}={}){let r=this._createInfoRows(e);if(r.forEach(e=>e._groupId=n||null),t){if(!n){console.error(`once 模式需要提供 id`);return}this.infos=this.infos.filter(e=>e._groupId!==n)}this.infos.push(...r),this.infoProps=this._wrapInfos(this.infos),this.rowNum=this.infos.length}delete(e){let t=this.getInfoKeys(`label`).findIndex(t=>t.includes(e));if(t<0){if(t=this.getInfoKeys(`blockId`).findIndex(t=>t===e),t<0){console.error(`沒有對應的block`);return}}else if(Array.isArray(this.getInfoKeys(`label`)[t])){let n=this.getInfoKeys(`label`)[t].findIndex(t=>t.includes(e));this.getInfoKeys(`label`)[t]=this.getInfoKeys(`label`)[t].filter((e,t)=>t!==n),this.getInfoKeys(`value`)[t]=this.getInfoKeys(`value`)[t].filter((e,t)=>t!==n),this.getInfoKeys(`label`)[t].length===1?(this.getInfoKeys(`label`)[t]=this.getInfoKeys(`label`)[t].toString(),this.getInfoKeys(`value`)[t]=this.getInfoKeys(`value`)[t].toString(),this.infos[t].label=this.getInfoKeys(`label`)[t],this.rows[t].value=this.getInfoKeys(`value`)[t]):(this.rows[t].label=this.getInfoKeys(`label`)[t].filter((e,t)=>t!==n),this.rows[t].value=this.getInfoKeys(`value`)[t].filter((e,t)=>t!==n))}else{for(let e in this.infoProps)this.infoProps[e]=this.infoProps[e].filter((e,n)=>n!==t);--this.rowNum,this.infos=this.infos.filter((e,n)=>n!==t)}console.log(`after delete:`,this.infoProps)}clear(){this.infoProps={},this.rowNum=0,this.infos=[]}toggle(e){this.infos.forEach(t=>{let n=t._visible||!0;t._groupId===e&&(t._visible=!n)})}update(e,t,n){if(u(e,`string`)){let n=this.getInfoKeys(`label`),r=this.getInfoKeys(`value`),i=n.findIndex(t=>t.includes(e));if(i<0&&(i=this.getInfoKeys(`blockId`).findIndex(t=>t===e),i<0)){console.error(`沒有對應的block`);return}if(Array.isArray(n[i])){let a=n[i].findIndex(t=>t.includes(e));r[i][a]=t}else r[i]=t;this.infos[i].value=r[i]}else console.log(e,t,n)}},S=class{constructor({labels:e,legends:t}){this.labels=e,this.legends=t,this.container=document.createElement(`div`),this._init()}_init(){this.entries=Object.fromEntries(this.labels.map((e,t)=>[e,this.legends[t]])),this._render()}_render(){for(let e in this.entries){let t=document.createElement(`div`),n=document.createElement(`span`),r=document.createElement(`p`);r.textContent=e,n.classList.add(`inline-block`,`w-6`,`h-5`,`border-gray-700`),n.classList.add(this.entries[e]),t.classList.add(`flex`,`gap-2`,`items-center`),t.appendChild(n),t.appendChild(r),this.container.appendChild(t)}}},new S({labels:[`a`,`b`,`c`],legends:[`bg-red-700`,`bg-green-500`,`bg-blue-500`]})})))()}var w;function T(){return(T=e((()=>{C(),g(),w=({blockId:e,blockclass:t,label:n,value:r,customInner:i,title:a,cardSize:o,minimize:s,closable:c,btn:l,text:u,handlers:d,btngroupClass:f,...p})=>{let m=new _(`ex_drop`,[{value:1,text:`One`},{value:2,text:`Two`},{value:3,text:`Three`}]);function h(){alert(`查看更多 clicked!`)}let g=document.createElement(`div`);g.className=`grid grid-cols-3`,l=[{text:u,class:p.class,handlers:d}];let v=[{blockId:e,blockclass:[...t],label:[n,`price: `],value:[r,`$1,000`],customInner:i,btn:l,btngroupClass:f},{blockclass:[`mt-3`],label:`配合其他元件作為customInner :`,customInner:m.containerEl},{btn:[{text:`查看更多`,class:[`btn-primary`],handler:h}],btngroupClass:`mt-3`}],y=new b(a,v,{cardSize:o,minimize:s,closable:c});g.appendChild(y.cardContainer),console.log(`realpriceCard:`,y),y.updateLabel(n,`更新資料欄位內容A`);let x=crypto.randomUUID();return y.addBlocks([{blockId:`testa`,label:`統計範圍內(橘框虛線)建物資料數量：`,value:1,btn:[{text:`btn01`,class:[`btn-primary`]},{text:`btn01`,class:[`btn-primary`]}],btngroupClass:`a b c`},{blockId:`testb`,label:`平均屋齡：`,value:2,blockclass:[`test-class`]},{label:[`最大值`,`最小值`],value:[2,3]},{blockclass:[`flex`,`flex-col`,`tips-container`,`text-sm`],customInner:`<span>＊計算可能受到建築完成日未填寫影響，數據僅供參考</span><span>檢視屋齡分布可操作[交易安全]></span><a class="text-btn" href="javascript:overnav(555);">[建物屋齡模擬]</a>`}],{once:!0,id:x}),y.updateLabel(`最大值`,10),g}})))()}function E(e){let t={blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...s(),...e.components};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(n,{isTemplate:!0,title:`How to use Cards`}),`
`,(0,O.jsx)(a,{}),`
`,(0,O.jsx)(t.p,{children:`適用 : 資訊面板的資料呈現`}),`
`,(0,O.jsx)(`div`,{className:`sb-unstyled alert-msg`,children:(0,O.jsxs)(`span`,{children:[`卡片元件的呈現方式可能會有多種變化，這邊僅先以基礎`,(0,O.jsx)(t.strong,{children:`資訊面板`}),`(BasicInfoCard)作為示意說明`]})}),`
`,(0,O.jsx)(i,{}),`
`,(0,O.jsx)(t.h1,{id:`controls`,children:`Controls`}),`
`,(0,O.jsx)(t.p,{children:`卡片元件設定較為複雜，Controls區塊包含初始化時可設定的相關參數(title, cardSize)及資料設定之參數細節(infoList)。`}),`
`,(0,O.jsx)(r,{}),`
`,(0,O.jsx)(t.hr,{}),`
`,(0,O.jsx)(t.h1,{id:`usage-api`,children:`Usage API`}),`
`,(0,O.jsxs)(t.p,{children:[`初始化 BasicInfoCard 元件，帶入 `,(0,O.jsx)(t.code,{children:`title`}),`、`,(0,O.jsx)(t.code,{children:`infoList`}),`及`,(0,O.jsx)(t.code,{children:`cardSize`}),`參數。`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-javascript`,children:`new BasicInfoCard(title, infoList, cardSize = 1);
`})}),`
`,(0,O.jsxs)(t.blockquote,{children:[`
`,(0,O.jsx)(t.h3,{id:`parameters-參數設定`,children:`parameters 參數設定`}),`
`]}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsx)(`span`,{className:`sb-unstyled font-black`,children:`title`}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`string`}),`
`,(0,O.jsx)(t.p,{children:`傳入卡片面版的標題文字`}),`
`,(0,O.jsx)(`br`,{}),`
`]}),`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsx)(`span`,{className:`sb-unstyled font-black`,children:`infoList`}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type arr`,children:`array`}),`
`,(0,O.jsxs)(t.p,{children:[`各屬性的型別及說明可參考上方Controls區塊；每個`,(0,O.jsx)(t.code,{children:`{}`}),`都是一個 row 區塊，排列組成完整資訊面板。`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-javascript`,children:`const infoList = [{\r
  blockId: "default", //區塊指定id\r
  blockclass: ["flex","gap-4"], //tailwindcss 樣式\r
  label: "", //資料標題文字\r
  value: "", //資料內容\r
  customInner: \`<div class="container"></div>\`, //直接放入innerHTML或是帶入其他HTMLElement的容器\r
  btn: [ //按鈕清單，每個{}視為一個btn資料\r
    {\r
      text:"", //按鈕文字\r
      class:[], //按鈕樣式(預設已經帶入.btn)\r
      handler:null //click事件函式\r
    }\r
  ],\r
  btngroupClass: "flex-col gap-[4px]",//按鈕群組樣式(string)\r
}];
`})}),`
`,(0,O.jsx)(`br`,{}),`
`,(0,O.jsxs)(`div`,{className:`sb-unstyled note-msg`,children:[(0,O.jsx)(`span`,{children:`label 及 value 屬性傳入型別說明`}),(0,O.jsxs)(`p`,{children:[`原則上一個`,(0,O.jsx)(t.code,{children:`{}`}),`內的屬性會視為同一欄(row)，如果要在同一個row顯示多組資料，可以在`,(0,O.jsx)(t.code,{children:`label`}),`及`,(0,O.jsx)(t.code,{children:`value`}),`屬性帶入array型別的資料。(但上方control處先以單一資料呈現操作)`]}),(0,O.jsxs)(`p`,{children:[`需要注意的是，如果`,(0,O.jsx)(t.code,{children:`label`}),`傳入一陣列，那`,(0,O.jsx)(t.code,{children:`value`}),`也需要傳入陣列，如果對應資料尚未知，可以先放入`,(0,O.jsx)(t.code,{children:`" "`}),`作為替代；然而如果沒有帶入`,(0,O.jsx)(t.code,{children:`value`}),`，但是有`,(0,O.jsx)(t.code,{children:`customInner`}),`，則預設會直接把 label & customInner 視為同一組。`]}),(0,O.jsx)(`br`,{}),(0,O.jsx)(`div`,{className:`examples`,children:(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsx)(`span`,{className:`sb-unstyled examples-title`,children:`label:"A", value:"B"`}),`
`]}),`
`]})}),(0,O.jsx)(`div`,{className:`examples`,children:(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsx)(`span`,{className:`sb-unstyled examples-title`,children:`label:["A", "B"], value:["a", "b"]`}),`
`]}),`
`]})}),(0,O.jsx)(`div`,{className:`examples`,children:(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsx)(`span`,{className:`sb-unstyled examples-title`,children:`label:["A", "B"], value:["a", " "]`}),`
`]}),`
`]})}),(0,O.jsx)(`div`,{className:`examples`,children:(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsxs)(`span`,{className:`sb-unstyled examples-title`,children:[`label:"A", customInner:`,(0,O.jsx)(t.code,{children:`<div></div>`})]}),`
`]}),`
`]})})]}),`
`,(0,O.jsx)(`br`,{}),`
`]}),`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(`span`,{className:`sb-unstyled font-black`,children:`cardSize`}),`\r
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type num`,children:`number`}),(0,O.jsx)(t.br,{}),`
`,`卡片尺寸大小，預設為1(最小)，也可以設定為2或3(全滿)的尺寸。`]}),`
`]}),`
`]}),`
`,(0,O.jsx)(`br`,{}),`
`,(0,O.jsxs)(t.blockquote,{children:[`
`,(0,O.jsx)(t.h3,{id:`properties-內部屬性`,children:`properties 內部屬性`}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type readonly`,children:`Read-only`}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled`,children:`可以操作的屬性皆須使用methods來更改`}),`
`]}),`
`,(0,O.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,O.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,O.jsx)(`thead`,{children:(0,O.jsxs)(`tr`,{className:`text-center`,children:[(0,O.jsx)(`td`,{children:`property`}),(0,O.jsx)(`td`,{children:`default`}),(0,O.jsx)(`td`,{children:`type`}),(0,O.jsx)(`td`,{children:`descriptions`}),(0,O.jsx)(`td`,{children:`inherit`})]})}),(0,O.jsxs)(`tbody`,{children:[(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,O.jsx)(`td`,{children:`Card`}),(0,O.jsx)(`td`,{children:`string`}),(0,O.jsxs)(`td`,{children:[`繼承自`,(0,O.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]}),(0,O.jsxs)(`td`,{children:[(0,O.jsx)(t.code,{children:`Card`}),` 類別`]})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`cardContainer`}),(0,O.jsx)(`td`,{children:`-`}),(0,O.jsx)(`td`,{children:`HTMLElement`}),(0,O.jsxs)(`td`,{children:[`當前顯示的圖示，`,(0,O.jsx)(t.code,{children:`style`}),`為toggle時才會出現`]}),(0,O.jsxs)(`td`,{children:[(0,O.jsx)(t.code,{children:`Card`}),` 類別`]})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`title`}),(0,O.jsx)(`td`,{children:`-`}),(0,O.jsx)(`td`,{children:`string`}),(0,O.jsx)(`td`,{children:`卡片標題(Header)`}),(0,O.jsxs)(`td`,{children:[(0,O.jsx)(t.code,{children:`Card`}),` 類別`]})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`blocks`}),(0,O.jsx)(`td`,{children:`[]`}),(0,O.jsx)(`td`,{children:`array`}),(0,O.jsx)(`td`,{children:`記錄此卡片內所有內容區塊`})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`infoList`}),(0,O.jsx)(`td`,{children:`[]`}),(0,O.jsx)(`td`,{children:`array`}),(0,O.jsx)(`td`,{children:`各區塊資料設定`})]})]})]})}),`
`,(0,O.jsx)(`br`,{}),`
`,(0,O.jsxs)(t.blockquote,{children:[`
`,(0,O.jsx)(t.h3,{id:`methods-方法`,children:`methods 方法`}),`
`,(0,O.jsx)(t.p,{children:`提供外部控制方法調整內部屬性值`}),`
`]}),`
`,(0,O.jsx)(`p`,{className:`sb-unstyled font-bold text-yellow-500`,children:`Quick reference`}),`
`,(0,O.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,O.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,O.jsx)(`thead`,{children:(0,O.jsxs)(`tr`,{className:`text-center`,children:[(0,O.jsx)(`td`,{children:`methods`}),(0,O.jsx)(`td`,{children:`descriptions`})]})}),(0,O.jsxs)(`tbody`,{children:[(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{children:(0,O.jsx)(t.code,{children:`.addBlocks(addInfo, options = {})`})}),(0,O.jsx)(`td`,{children:`新增項目or欄位`})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{children:(0,O.jsx)(t.code,{children:`.clearBlocks()`})}),(0,O.jsx)(`td`,{children:`清空dataContent`})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{children:(0,O.jsx)(t.code,{children:`.deleteBlock(label)`})}),(0,O.jsx)(`td`,{children:`刪除單一欄位UI&對應資料`})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{children:(0,O.jsx)(t.code,{children:`.toggleBlock(groupId)`})}),(0,O.jsx)(`td`,{children:`切換區塊visible`})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{children:(0,O.jsx)(t.code,{children:`.updateLabel(labelStr,updateStr)`})}),(0,O.jsx)(`td`,{children:`替換指定label的值`})]})]})]})}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled methods`,children:`.addBlocks(addInfo, options)`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`Parameters`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(`span`,{className:`sb-unstyled font-black`,children:`addInfo`}),`\r
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type arr`,children:`array`}),(0,O.jsx)(t.br,{}),`
`,`要加入的資訊區塊設定，等同於 `,(0,O.jsx)(t.code,{children:`infoList`}),` 參數設定`]}),`
`]}),`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(`span`,{className:`sb-unstyled font-black`,children:`options`}),`\r
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type`,children:`object`}),(0,O.jsx)(t.br,{}),`
`,`onceSetting，是否只新增一次，其他時候則用替換方式取代原內容。`]}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:(0,O.jsx)(t.code,{children:`once`})}),` 是否只新增一次`]}),`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:(0,O.jsx)(t.code,{children:`id`})}),` 當once設定為true時，必須給定id作為groupId`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-javascript`,children:`  BasicInfoCard.addBlocks(buildno, { once: true, id:"buildno_1" });
`})}),`
`,(0,O.jsx)(`br`,{}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled methods`,children:`.clearBlocks()`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsx)(t.li,{children:(0,O.jsx)(t.strong,{children:`清空dataContent(僅清空blocks節點，資料仍留存)`})}),`
`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-javascript`,children:` BasicInfoCard.clearBlocks(); 
`})}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled methods`,children:`.deleteBlock(label)`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`Parameters`}),(0,O.jsx)(t.br,{}),`
`,`傳入欄位文字來刪除單一欄位UI&對應資料\r
`,(0,O.jsx)(`span`,{className:`sb-unstyled alert-msg`,children:`須注意是針對單一欄位來做刪除(要有label)!`})]}),`
`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-javascript`,children:` BasicInfoCard.deleteBlock("資料欄位A"); 
`})}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled methods`,children:`.toggleBlock()`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`parameters`}),(0,O.jsx)(t.br,{}),`
`,`可以切換同一個card內的group(有點類似tab)；使用`,(0,O.jsx)(t.code,{children:`addBlock({once})`}),`後會綁定內部屬性`,(0,O.jsx)(t.code,{children:`_groupId`}),`，可以用來切換`]}),`
`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-javascript`,children:`BasicInfoCard.toggleBlock("buildno_1");
`})}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled methods`,children:`.updateLabel(label,updateValue)`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(t.strong,{children:`Parameters`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(`span`,{className:`sb-unstyled font-black`,children:`label`}),`\r
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`string`}),(0,O.jsx)(t.br,{}),`
`,`指定的`,(0,O.jsx)(t.code,{children:`label`}),`文字`]}),`
`]}),`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(`span`,{className:`sb-unstyled font-black`,children:`updateValue`}),`\r
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`string`}),(0,O.jsx)(t.br,{}),`
`,`要替換的新value`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,(0,O.jsxs)(t.p,{children:[`傳入一個指定的`,(0,O.jsx)(t.code,{children:`label`}),`文字，會去替換掉對應的`,(0,O.jsx)(t.code,{children:`value`})]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-javascript`,children:`BasicInfoCard.updateLabel("資料欄位A :","更新A");
`})}),`
`,(0,O.jsx)(t.hr,{}),`
`,(0,O.jsx)(t.h1,{id:`inherits`,children:`Inherits`}),`
`,(0,O.jsxs)(`div`,{className:`sb-unstyled alert-msg`,children:[`做為`,(0,O.jsx)(t.code,{children:`Card`}),`類別的子類別之一，繼承其相關屬性；但資料部分則涉及 `,(0,O.jsx)(t.code,{children:`Info`}),` 類別，詳細請見個別說明。`]}),`
`,(0,O.jsxs)(t.blockquote,{children:[`
`,(0,O.jsx)(t.h3,{id:`card-類別`,children:`Card 類別`}),`
`]}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsx)(t.h4,{id:`parameters-參數設定-1`,children:`parameters 參數設定`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsxs)(t.p,{children:[(0,O.jsx)(`span`,{className:`sb-unstyled font-black`,children:`title`}),`\r
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`string`}),(0,O.jsx)(t.br,{}),`
`,`卡片標題名稱(Header部分)`]}),`
`]}),`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsx)(`span`,{className:`sb-unstyled font-black`,children:`cardSize`}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type num`,children:`number`}),`
`,(0,O.jsx)(t.p,{children:`卡片尺寸設定，由小到大分別為1、2、3`}),`
`]}),`
`]}),`
`,(0,O.jsx)(`br`,{}),`
`]}),`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsx)(t.h4,{id:`properties-內部屬性-1`,children:`properties 內部屬性`}),`
`,(0,O.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,O.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,O.jsx)(`thead`,{children:(0,O.jsxs)(`tr`,{className:`text-center`,children:[(0,O.jsx)(`td`,{children:`property`}),(0,O.jsx)(`td`,{children:`default`}),(0,O.jsx)(`td`,{children:`type`}),(0,O.jsx)(`td`,{children:`descriptions`})]})}),(0,O.jsxs)(`tbody`,{children:[(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`UItype`}),(0,O.jsx)(`td`,{children:`Card`}),(0,O.jsx)(`td`,{children:`string`}),(0,O.jsxs)(`td`,{children:[`繼承自`,(0,O.jsx)(t.code,{children:`BaseComponent`}),`的屬性，代表該元件名稱`]})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`cardContainer`}),(0,O.jsxs)(`td`,{children:[(0,O.jsx)(t.code,{children:`<ul/>`}),`標籤元素`]}),(0,O.jsx)(`td`,{children:`HTMLElement`}),(0,O.jsx)(`td`,{children:`卡片元素節點`})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`title`}),(0,O.jsx)(`td`,{children:`-`}),(0,O.jsx)(`td`,{children:`string`}),(0,O.jsx)(`td`,{children:`卡片標題(Header)`})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`minimize`}),(0,O.jsx)(`td`,{children:`false`}),(0,O.jsx)(`td`,{children:`boolean`}),(0,O.jsx)(`td`,{children:`是否為縮小狀態`})]})]})]})}),`
`]}),`
`]}),`
`,(0,O.jsx)(`br`,{}),`
`,(0,O.jsxs)(t.blockquote,{children:[`
`,(0,O.jsx)(t.h3,{id:`info-類別`,children:`Info 類別`}),`
`,(0,O.jsx)(`span`,{className:`sb-unstyled alert-msg`,children:`負責整併card資料欄位(不會直接操作到!)`}),`
`]}),`
`,(0,O.jsx)(t.pre,{children:(0,O.jsx)(t.code,{className:`language-javascript`,children:`  BasicInfoCard._infoStruct = new Info(infoArray);\r
  //此處的_infoStruct屬性禁止外部取用!
`})}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsx)(t.h4,{id:`parameters-參數設定-2`,children:`parameters 參數設定`}),`
`,(0,O.jsxs)(t.ul,{children:[`
`,(0,O.jsxs)(t.li,{children:[(0,O.jsx)(`span`,{className:`sb-unstyled font-black`,children:`infoArray`}),`\r
`,(0,O.jsx)(`span`,{className:`sb-unstyled data-type str`,children:`array`}),(0,O.jsx)(t.br,{}),`
`,(0,O.jsx)(t.code,{children:`BasicInfoCard`}),`傳入的資料設定陣列(infolist)`]}),`
`]}),`
`,(0,O.jsx)(`br`,{}),`
`]}),`
`,(0,O.jsxs)(t.li,{children:[`
`,(0,O.jsx)(t.h4,{id:`properties-內部屬性-2`,children:`properties 內部屬性`}),`
`,(0,O.jsx)(`div`,{className:`sb-unstyled table-container overflow-hidden`,children:(0,O.jsxs)(`table`,{className:`sb-unstyled table-content`,children:[(0,O.jsx)(`thead`,{children:(0,O.jsxs)(`tr`,{className:`text-center`,children:[(0,O.jsx)(`td`,{children:`property`}),(0,O.jsx)(`td`,{children:`default`}),(0,O.jsx)(`td`,{children:`type`}),(0,O.jsx)(`td`,{children:`descriptions`})]})}),(0,O.jsxs)(`tbody`,{children:[(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`originInfos`}),(0,O.jsx)(`td`,{children:`-`}),(0,O.jsx)(`td`,{children:`object`}),(0,O.jsx)(`td`,{children:`包裝原始傳入的infoList設定`})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`rowNum`}),(0,O.jsx)(`td`,{children:`0`}),(0,O.jsx)(`td`,{children:`number`}),(0,O.jsx)(`td`,{children:`紀錄資料區塊數量`})]}),(0,O.jsxs)(`tr`,{children:[(0,O.jsx)(`td`,{className:`font-bold`,children:`rows`}),(0,O.jsx)(`td`,{children:`[]`}),(0,O.jsx)(`td`,{children:`array`}),(0,O.jsx)(`td`,{children:`儲存整理後的各區塊資料物件`})]})]})]})}),`
`]}),`
`]})]})}function D(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,O.jsx)(t,{...e,children:(0,O.jsx)(E,{...e})}):E(e)}var O;function k(){return(k=e((()=>{O=o(),c(),t()})))()}var A,j,M,N,P,F;function I(){return(I=e((()=>{T(),k(),{fn:A,expect:j}=__STORYBOOK_MODULE_TEST__,{action:M}=__STORYBOOK_MODULE_ACTIONS__,N={title:`Components/Infocards`,tags:[`autodocs`],parameters:{docs:{source:{format:!0,language:`html`},page:D}},render:({...e})=>w({...e}),argTypes:{cardSize:{control:`select`,options:[1,2,3],description:`卡片尺寸大小`,table:{category:`parameters`,subcategory:`Inherits Card 類別`,defaultValue:{summary:`1`},type:{summary:`number`}}},minimize:{control:`boolean`,description:`縮小功能`,table:{category:`parameters`,subcategory:`Inherits Card 類別`,defaultValue:{summary:`true`},type:{summary:`boolean`}}},closable:{control:`boolean`,description:`關閉功能`,table:{category:`parameters`,subcategory:`Inherits Card 類別`,defaultValue:{summary:`true`},type:{summary:`boolean`}}},infoList:{control:`array`,description:`傳入之資料欄位設定，請參考上方Info porperties`,table:{readonly:!0,category:`parameters`,subcategory:`Inherits Info 類別`,type:{summary:`array`}}},title:{control:`text`,description:`卡片標題文字`,table:{category:`parameters`,subcategory:`Inherits Card 類別`,type:{summary:`string`}}},blockId:{control:`text`,description:`區塊指定id`,table:{category:`infoList poperties`,type:{summary:`string`}}},blockclass:{control:`array`,description:`區塊classes`,table:{category:`infoList poperties`,type:{summary:`array`}}},label:{control:`text`,description:`資料標題`,table:{category:`infoList poperties`,type:{summary:`string`}}},value:{control:`text`,description:`資料內容`,table:{category:`infoList poperties`,type:{summary:`string`}}},customInner:{control:`text`,description:`自訂innerHTML內容，可以取代value屬性`,table:{category:`infoList poperties`,type:{summary:`string`}}},btn:{control:`function`,description:`所有按鈕設定`,table:{readonly:!0,category:`infoList poperties`,type:{summary:`array`}}},text:{control:{type:`text`},if:{arg:`btn`,exists:!0},description:`按鈕文字`,table:{category:`infoList poperties`,subcategory:`btn`,type:{summary:`string`}}},class:{control:{type:`array`},if:{arg:`btn`,exists:!0},description:`checkbox classes，每個class以tailwindcss property放入`,table:{category:`infoList poperties`,subcategory:`btn`,type:{summary:`array`}}},handlers:{action:`change`,control:`function`,if:{arg:`btn`,exists:!0},description:`作為click事件函式傳入`,table:{category:`infoList poperties`,subcategory:`btn`,defaultValue:{summary:`null`},type:{summary:`function`}}},btngroupClass:{control:`text`,description:`按鈕群組樣式(如果沒有特別設定則是吃blockClass)`,table:{category:`infoList poperties`,subcategory:`btn`,defaultValue:{summary:`null`},type:{summary:`string`}}}},args:{label:`資料欄位A`,value:`資料A`}},P={args:{blockId:`testing`,blockclass:[`gap-3`],label:`資料欄位A: `,value:`資料內容A`,customInner:`<div class="border-2 border-gray-400 rounded-sm p-2">自訂義區塊</div>`,title:`測試面板`,cardSize:1,closable:!0,minimize:!0,btn:[],text:`開始查詢`,class:[`btn-secondary`],btngroupClass:`flex flex-nowrap ml-2`}},F=[`defaultInfocard`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    blockId: "testing",
    blockclass: ["gap-3"],
    label: "資料欄位A: ",
    value: "資料內容A",
    customInner: \`<div class="border-2 border-gray-400 rounded-sm p-2">自訂義區塊</div>\`,
    title: "測試面板",
    //文字
    cardSize: 1,
    closable: true,
    minimize: true,
    btn: [],
    text: "開始查詢",
    class: ["btn-secondary"],
    btngroupClass: "flex flex-nowrap ml-2"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
}`,...P.parameters?.docs?.source}}}})))()}I();export{F as __namedExportsOrder,N as default,P as defaultInfocard};