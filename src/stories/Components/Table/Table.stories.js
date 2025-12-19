import { fn, expect } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createTable } from './TableStory';
import "./Table.css";
import TableAPIdoc from "./TableAPIdoc.mdx";
import { UIUtils } from "../../../Utils";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Table",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        format: true,
        language: "html",
      },
      page: TableAPIdoc,
    },
  },
  // decorators: [withActions],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    let instance = createTable({ ...args });
    return instance;

  },
  argTypes: {
    id: {
      control: "text",
      type: { required: true },
      description: "表格元素id",
      table: {
        category: "configurations",
        type: { summary: "string" },
      },
    },
    name: {
      control: "text",
      description: "Table name",
      table: {
        category: "configurations",
        defaultValue: { summary: "-" },
        type: { summary: "string" },
      },
    },
    limits: {
      control: "select",
      options: [10, 20, 25, 50, 100],
      description: "每頁顯示的最多筆數",
      table: {
        category: "configurations",
        defaultValue: { summary: "25" },
        type: { summary: "number" },
      },
    },
    container: {
      control: "text",
      description: "要放入的DOM元素",
      table: {
        category: "configurations",
        defaultValue: { summary: "null" },
        type: { summary: "string" },
      },
    },
    cols: {
      control: "array",
      description: "欄位設定及帶入值",
      table: {
        category: "configurations",
        defaultValue: { summary: "-" },
        type: { summary: "array" },
      },
    },
    selection: {
      control: "select",
      options: ["checkbox", "radio"],
      description: "是否要有勾選功能",
      table: {
        category: "configurations",
        defaultValue: { summary: "checkbox" },
        type: { summary: "string" },
      },
    },
    tools: {
      control: "boolean",
      description: "是否要有基本工具列",
      table: {
        category: "configurations",
        defaultValue: { summary: "true" },
        type: { summary: "boolean" },
      },
    },
    theme: {
      control: "color",
      description: "表格色系",
      table: {
        category: "configurations",
        defaultValue: { summary: "var(--color-primary-500)" },
        type: { summary: "string" },
      },
    },
    complete: {
      control: "function",
      description: "完成資料載入後要執行的函式",
      table: {
        category: "configurations",
        type: { summary: "function" },
      },
    },
    classes: {
      control: { type: "array" },
      description: "自定義class，每個class以tailwindcss property放入",
      table: {
        category: "configurations",
        defaultValue: { summary: ".table-container" },
        type: { summary: "array" },
      },
    },

    error: {
      control: { type: "function" },
      description: "資料載入失敗時要執行的函式",
      table: {
        category: "configurations",
        type: { summary: "function" },
      },
    },
    handler: {
      action: "click",
      control: "function",
      description: "點擊觸發元素後的callback函式",
      table: {
        // type: { required: true },
        category: "configurations",
        defaultValue: { summary: "null" },
        type: { summary: "function" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // 預設args
  args: {
    // handlers: action("change"),
    id: "table_first",
    classes: ["table-container"],
    limits: 25,
    selection: "checkbox",
    tools: true,
    theme: "var(--color-primary-500)",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Table = {
  args: {
    id: "test-table",
    name: "測試表格",
    cols: [
      {
        field: 'postId', title: 'postId', sort: 'asc', fixed: false, align: "center", template: function (data) {
          let template = `<div>${data}</div>`;
          this.getElem().innerHTML = template;
        }
      },
      { field: 'id', title: 'id', sort: 'dec', fixed: false, align: "center" },
      { field: 'name', title: '名字', sort: false, fixed: false, align: "center" },
      { field: 'email', title: 'email', sort: false, fixed: true, align: "center" },
      { field: 'body', title: '內容', sort: false, fixed: false },
      {
        field: 'operate', title: '操作', sort: false, fixed: false, template: function (data) {
          console.log("點擊的row data是:", data);
          let template = UIUtils.setButtons({
            classes: ["btn-sm", "btn-success"], text: "操作按鈕", handler: function (e) {
              console.log("點擊的row data是:", data);
            }.bind(this)
          });
          this.getElem().appendChild(template);
        }
      },
    ],
    limits: 25,
    container: '.table-test-target'
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};