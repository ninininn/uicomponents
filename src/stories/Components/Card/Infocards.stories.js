import { fn, expect } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createCards } from './CardsStory';
import "./Cards.css";
import CardsAPIdoc from "./CardsAPIdoc.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Infocards",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        format: true,
        language: "html",
      },
      page: CardsAPIdoc,
    },
  },
  // decorators: [withActions],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    let checkboxInstance = createCards({ ...args });
    return checkboxInstance;
  },
  argTypes: {
    cardSize: {
      control: "select",
      options: [1, 2, 3],
      // type: { required: true },
      description: "卡片尺寸大小",
      table: {
        category: "parameters",
        subcategory: "Inherits Card 類別",
        defaultValue: { summary: "1" },
        type: { summary: "number" },
      },
    },
    infoList: {
      control: "array",
      // type: { required: true },
      description: "傳入之資料欄位設定，請參考上方Info porperties",
      table: {
        readonly: true,
        category: "parameters",
        subcategory: "Inherits Info 類別",
        type: { summary: "array" },
      },
    },
    title: {
      control: "text",
      description: "卡片標題文字",
      table: {
        category: "parameters",
        subcategory: "Inherits Card 類別",
        type: { summary: "string" },
      },
    },
    blockId: {
      control: "text",
      description: "區塊指定id",
      table: {
        category: "infoList poperties",
        type: { summary: "string" },
      },
    },
    blockclass: {
      control: "array",
      description: "區塊classes",
      table: {
        category: "infoList poperties",
        type: { summary: "array" },
      },
    },
    label: {
      control: "text",
      description: "資料標題",
      table: {
        category: "infoList poperties",
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "資料內容",
      table: {
        category: "infoList poperties",
        type: { summary: "string" },
      },
    },
    customInner: {
      control: "text",
      description: "自訂innerHTML內容，可以取代value屬性",
      table: {
        category: "infoList poperties",
        type: { summary: "string" },
      },
    },
    btn: {
      control: "function",
      description: "所有按鈕設定",
      table: {
        readonly:true,
        category: "infoList poperties",
        type: { summary: "array" },
      },
    },
    text: {
      control: { type: "text" },
      if: { arg: "btn", exists: true },
      description: "按鈕文字",
      table: {
        category: "infoList poperties",
        subcategory: "btn",
        defaultValue: { summary: "checkbox" },
        type: { summary: "string" },
      },
    },
    class: {
      control: { type: "array" },
      if: { arg: "btn", exists: true },
      description: "checkbox classes，每個class以tailwindcss property放入",
      table: {
        category: "infoList poperties",
        subcategory: "btn",
        defaultValue: { summary: "checkbox" },
        type: { summary: "array" },
      },
    },
    handlers: {
      action: "change",
      control: "function",
      if: { arg: "btn", exists: true },
      description: "作為click事件函式傳入",
      table: {
        // type: { required: true },
        category: "infoList poperties",
        subcategory: "btn",
        defaultValue: { summary: "null" },
        type: { summary: "function" },
      },
    },
    btngroupClass: {
      control: "text",
      description: "按鈕群組樣式(如果沒有特別設定則是吃blockClass)",
      table: {
        // type: { required: true },
        category: "infoList poperties",
        subcategory: "btn",
        defaultValue: { summary: "null" },
        type: { summary: "string" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // 預設args
  args: {
    // handlers: action("change"),
    label:"資料欄位A",
    value:"資料A"
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const defaultInfocard = {
  args: {
    blockId: "testing",
    blockclass: ["gap-3"],
    label: "資料欄位A: ",
    value: "資料內容A",
    customInner:`<div class="border-2 border-gray-400 rounded-sm p-2">自訂義區塊</div>`,
    title: "測試面板", //文字
    cardSize: 1,
    btn:[],
    text: "開始查詢",
    class: ["btn-secondary"],
    btngroupClass: "flex flex-nowrap ml-2"
  }
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};
