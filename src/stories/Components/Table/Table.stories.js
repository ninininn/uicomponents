import { fn, expect } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createTable } from './TableStory';
import "./Table.css";
import TableAPIdoc from "./TableAPIdoc.mdx";

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
        category: "table",
        type: { summary: "string" },
      },
    },
    style: {
      control: "select",
      options: ["default", "bordered", "accent"],
      if: { arg: "type", eq: "toast" },
      description: "toast樣式",
      table: {
        category: "tableheader",
        subcategory: "private property",
        defaultValue: { summary: "static" },
        type: { summary: "string" },
      },
    },
    limit: {
      control: "number",
      description: "每頁顯示的最多筆數",
      min: 1,
      table: {
        category: "table",
        subcategory: "private property",
        defaultValue: { summary: "static" },
        type: { summary: "string" },
      },
    },
    elem: {
      control: "text",
      description: "要放入的DOM元素",
      table: {
        category: "tableheader",
        subcategory: "private property",
        defaultValue: { summary: "null" },
        type: { summary: "string" },
      },
    },
    triggerType: {
      control: "select",
      options: ["hover", "click", "none"],
      if: { arg: "type", eq: "popover" },
      description: "觸發動作類型",
      table: {
        category: "tableheader",
        subcategory: "private property",
        defaultValue: { summary: "hover" },
        type: { summary: "string" },
      },
    },
    selection: {
      control: "select",
      options: ["checkbox", "radio"],
      description: "是否要有勾選功能",
      table: {
        category: "table",
        defaultValue: { summary: "checkbox" },
        type: { summary: "string" },
      },
    },
    maxWidth: {
      control: "text",
      description: "通知視窗的最大尺寸",
      table: {
        category: "tableheader",
        defaultValue: { summary: "auto" },
        type: { summary: "string" },
      },
    },
    customContent: {
      control: "string",
      description: "自訂訊息innerHTML結構",
      table: {
        category: "tableheader",
        type: { summary: "string" },
      },
    },
    classes: {
      control: { type: "array" },
      description: "自定義class，每個class以tailwindcss property放入",
      table: {
        category: "table",
        defaultValue: { summary: ".table" },
        type: { summary: "array" },
      },
    },
    complete: {
      control: { type: "function" },
      description: "完成資料載入後要執行的函式",
      table: {
        category: "tableheader",
        type: { summary: "function" },
      },
    },
    error: {
      control: { type: "function" },
      description: "資料載入失敗時要執行的函式",
      table: {
        category: "tableheader",
        type: { summary: "function" },
      },
    },
    handler: {
      action: "click",
      control: "function",
      description: "點擊觸發元素後的callback函式",
      table: {
        // type: { required: true },
        category: "tableheader",
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
    theme: "light",
    maxWidth: "auto",
    // customContent: `<div>customInner</div>`,
    classes: ["table-container"],
    limits: 20,
    selection:"checkbox"
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Table = {
  args: {
    id: "test-table",
    name: "測試表格",
    cols: [
      { field: 'useId', title: '使用者id', sort: true, fixed: false },
      { field: 'id', title: '編號', sort: false, fixed: false },
      { field: 'title', title: '內容', sort: true, fixed: false },
      { field: 'done', title: '完成', sort: true, fixed: false },
    ],
    limits: 50,
    customContent: `<div>...customDiv</div>`,
    maxWidth: "360px",
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};