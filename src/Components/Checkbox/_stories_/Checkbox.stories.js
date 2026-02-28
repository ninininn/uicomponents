import { fn, expect } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createCheckbox } from './CheckboxStory';
import "../Checkbox.css";
import CheckboxAPIdoc from "./CheckboxAPIdoc.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        format: true,
        language: "html",
      },
      page: CheckboxAPIdoc,
    },
  },
  // decorators: [withActions],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    let checkboxInstance = createCheckbox({ ...args });
    if (checkboxInstance.UItype ==="Checkbox"){
      return checkboxInstance.container;
    }else{
      return checkboxInstance.groupContainer;
    }
  },
  argTypes: {
    checked: {
      control: "boolean",
      // type: { required: true },
      description: "checked狀態",
      table: {
        category: "options parameter",
        readOnly: true,
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    value: {
      control: "text",
      // type: { required: true },
      description: "`<input/>`的 value 值，如果沒有特別設定則是直接套用`title`的值",
      table: {
        category: "options parameter",
        defaultValue: { summary: "null" },
        type: { summary: "string | number" },
      },
    },
    name: {
      control: "text",
      description: "input標籤的name attribute",
      table: {
        category: "options parameter",
        type: { summary: "string" },
      },
    },
    theme: {
      control: "color",
      description: "色系控制，可以傳入HEX色碼",
      table: {
        category: "options parameter",
        subcategory: "Inherits BaseComponent",
        type: { summary: "string" },
      },
    },
    checkImg: {
      // control: { type: "file" },
      control: "select",
      options: ["眼睛組合", "愛心組合", "信封組合"],
      mapping: {
        "眼睛組合": ["../../../../public/eye.svg", "../../../../public/eye-off.svg"],
        "愛心組合": ["../../../../public/heart.svg", "../../../../public/heart-off.svg"],
        "信封組合": ["../../../../public/envelope.svg", "../../../../public/envelope-open.svg"],
      },
      if: { arg: "style", eq: "toggle" },
      description: "[僅限toggle樣式更改] 更換為自訂圖標，傳入自訂圖標檔案路徑，以陣列傳入",
      table: {
        category: "options parameter",
        defaultValue: { summary: "eye" },
        type: { summary: "[./path/img.png,./path/img2.png]" },
      },
    },
    classes: {
      control: { type: "array" },
      description: "checkbox classes，每個class以tailwindcss property放入",
      table: {
        category: "options parameter",
        defaultValue: { summary: "checkbox" },
        type: { summary: "array" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "是否可操作狀態(要注意和checked是不同意義)",
      table: {
        // type: { required: true },
        category: "options parameter",
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    title: {
      control: { type: "text" },
      if: { arg: "style", neq: "toggle" },
      description: "`<label/>`文字內容，當style為toggle時則不會顯示",
      table: {
        // type: { required: true },
        category: "options parameter",
        defaultValue: { summary: "null" },
        type: { summary: "string" },
      },
    },
    style: {
      control: "select",
      options: ["default", "switch", "toggle", "tag"],
      description: "樣式類型",
      table: {
        // type: { required: true },
        category: "options parameter",
        defaultValue: { summary: "default" },
        type: { summary: "string" },
      },
    },
    handlers: {
      action: "change",
      control: "function",
      description: "作為change事件函式傳入",
      table: {
        // type: { required: true },
        category: "options parameter",
        defaultValue: { summary: "null" },
        type: { summary: "function" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // 預設args
  args: {
    // handlers: action("change"),
    checkboxGroup:false,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const defaultCheckbox = {
  args: {
    name: "testing",//name attribute
    style: "default", //樣式
    title: "一般勾選框", //文字
    value: "default", //<input/>的value attribute
    checked: true,
    theme: "#61d45b", //預設顏色
    checkImg: ["/eye.svg", "/eye-off.svg"], //check圖標
    classes: ["checkbox"],
    disabled: false,
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};
