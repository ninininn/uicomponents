import { fn, expect } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createDraggableItem } from './DraggableItemStory';
import "./DraggableItem.css";
import DraggableItemAPIdoc from "./DraggableItemAPIdoc.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/DraggableItem",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        format: true,
        language: "html",
      },
      page: DraggableItemAPIdoc,
    },
  },
  // decorators: [withActions],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    let instance = createDraggableItem({ ...args });
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
      control: "number",
      description: "每頁顯示的最多筆數",
      min: 1,
      table: {
        category: "configurations",
        defaultValue: { summary: "50" },
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
    complete: {
      control: { type: "function" },
      description: "完成資料載入後要執行的函式",
      table: {
        category: "configurations",
        type: { summary: "function" },
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
    limits: 20,
    selection: "checkbox",
    tools: true,

  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DraggableItem = {
  args: {
    id: "test-table",
    name: "測試表格",
    cols: [
      { field: 'useId', title: '使用者id', sort: true, fixed: false, align: "center" },
      { field: 'id', title: '編號', sort: false, fixed: false, align: "center" },
      { field: 'title', title: '內容', sort: true, fixed: false },
      { field: 'done', title: '完成', sort: true, fixed: false },
    ],
    limits: 20,
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};