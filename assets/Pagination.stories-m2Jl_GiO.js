import"./index-vRTWSlA6.js";import{N as T}from"./Notification-CYZPDGjq.js";/* empty css                   *//* empty css                 *//* empty css                 */import B from"./PaginationAPIdoc-DqO22zQZ.js";import{D as m}from"./Utils-DOz9aA_P.js";import"./iframe-BVS5Mtot.js";import"./preload-helper-DLLWEBaG.js";const O=({id:e,name:t,limits:a,selection:n,container:o,cols:d,tools:p,groupTool:f,exportsTool:g,printTool:y,theme:b,classes:x,complete:C,error:E,controlPage:D,handler:h})=>{let r=document.createElement("div");r.className="mx-auto grid place-items-center";let l=document.createElement("button");l.className="btn btn-secondary mb-3",l.textContent="create Table";let s=document.createElement("button");s.className="btn btn-danger outline-btn mb-3",s.textContent="clear Selected";let u=document.createElement("div");u.className="table-test-target",r.appendChild(l),r.appendChild(u),r.appendChild(s);let v=[f="group",g="exports",y="print"],_={id:e,name:t,limits:a,container:o||".table-test-target",cols:d,tools:p?[...v]:!1,selection:n,theme:b,classes:x,complete:C,error:E,handler:h,url:"https://data.moa.gov.tw/Service/OpenData/FromM/BoatBulletinData.aspx?IsTransData=1&UnitId=041",controlPage:D};return l.addEventListener("click",()=>{let c=new Table(_);console.log("table_instance:",c),s.addEventListener("click",()=>{c.setSize(500,100)})}),r},{fn:M,expect:$}=__STORYBOOK_MODULE_TEST__,{action:z}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Components/Pagination",tags:["autodocs"],parameters:{docs:{source:{format:!0,language:"html"},page:B}},render:({...e})=>O({...e}),argTypes:{id:{control:"text",type:{required:!0},description:"表格元素id",table:{category:"configurations",type:{summary:"string"}}},name:{control:"text",description:"Table name",table:{category:"configurations",defaultValue:{summary:"-"},type:{summary:"string"}}},limits:{control:"select",options:[10,20,25,50,100],description:"每頁顯示的最多筆數",table:{category:"configurations",defaultValue:{summary:"25"},type:{summary:"number"}}},container:{control:"text",description:"要放入的DOM元素",table:{category:"configurations",defaultValue:{summary:"null"},type:{summary:"string"}}},cols:{control:"array",description:"欄位設定及帶入值",table:{category:"configurations",defaultValue:{summary:"-"},type:{summary:"array"}}},selection:{control:"select",options:["checkbox","radio"],description:"是否要有勾選功能",table:{category:"configurations",defaultValue:{summary:"checkbox"},type:{summary:"string"}}},tools:{control:"boolean",description:"是否要有基本工具列",table:{category:"configurations",defaultValue:{summary:"true"},type:{summary:"boolean"}}},groupTool:{control:"boolean",if:{arg:"tools",truthy:!0},description:"群組篩選工具",table:{category:"configurations",subcategory:"tools feature",defaultValue:{summary:"true"},type:{summary:"boolean"}}},exportsTool:{control:"boolean",if:{arg:"tools",truthy:!0},description:"匯出工具",table:{category:"configurations",subcategory:"tools feature",defaultValue:{summary:"true"},type:{summary:"boolean"}}},printTool:{control:"boolean",if:{arg:"tools",truthy:!0},description:"列印工具",table:{category:"configurations",subcategory:"tools feature",defaultValue:{summary:"true"},type:{summary:"boolean"}}},theme:{control:"color",description:"表格色系",table:{category:"configurations",defaultValue:{summary:"var(--color-primary-500)"},type:{summary:"string"}}},controlPage:{control:"boolean",description:"是否可以操作每頁顯示數量",table:{category:"configurations",defaultValue:{summary:"false"},type:{summary:"boolean"}}},complete:{control:"function",description:"完成資料載入後要執行的函式",table:{category:"configurations",type:{summary:"function"}}},classes:{control:{type:"array"},description:"自定義class，每個class以tailwindcss property放入",table:{category:"configurations",defaultValue:{summary:".table-container"},type:{summary:"array"}}},error:{control:{type:"function"},description:"資料載入失敗時要執行的函式",table:{category:"configurations",type:{summary:"function"}}},handler:{action:"click",control:"function",description:"點擊觸發元素後的callback函式",table:{category:"configurations",defaultValue:{summary:"null"},type:{summary:"function"}}}},args:{id:"table_first",classes:["table-container"],limits:25,selection:"checkbox",tools:!0,theme:"var(--color-primary-500)",controlPage:!0,groupTool:!0,exportsTool:!0,printTool:!0}},i={args:{id:"test-table",name:"測試表格",cols:[{field:"日期",title:"日期",sort:function(e,t){let a=new Date(e.data.日期),n=new Date(t.data.日期);return a-n},fixed:!1,align:"center",template:function(e){let t=`<div>${e}</div>`;this._elem.innerHTML=t}},{field:"項目",title:"項目",sort:"desc",fixed:!1,align:"center",visible:!1,resize:!0},{field:"網址",title:"網址",sort:!1,fixed:!1,align:"center"},{field:"operate",title:"操作",sort:!1,fixed:!1,template:function(e){e.index===1&&(e=void 0);let a=[{classes:["btn-sm",`${!!e?"btn-success":"btn-secondary"}`],text:"查看細節",handler:function(o){o.stopPropagation(),console.log(e),T.modal({customContent:`<div>${JSON.stringify(e)}</div>`})}},{classes:["btn-sm","btn-danger"],text:"刪除此列",handler:function(o){o.stopPropagation(),console.log("btn handler get value:",e)}}],n=document.createElement("div");m.addClass(n,["flex","gap-2","justify-center"]),m.setBtnGroup(a,n),this._elem.appendChild(n)},print:!1}],limits:25,container:".table-test-target"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const I=["Pagination"];export{i as Pagination,I as __namedExportsOrder,H as default};
