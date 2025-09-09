import { fn } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createCheckbox } from './CheckboxStory';
import "./Checkbox.css";
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
    return checkboxInstance.container;
  },
  argTypes: {
    UItype: {
      control: "string",
      description: "繼承自`BaseComponent`的屬性，代表該元件名稱",
      table: {
        readonly: true,
        category: "Inherits BaseComponent",
        defaultValue: { summary: "Checkbox" },
      },
    },
    element: {
      control: "string",
      description: "checkbox節點，如果不是 `<input>` 或 `<label>` 則視為容器(container)",
    },
    checked: {
      control: "boolean",
      // type: { required: true },
      description: "checked狀態",
      table: {
        readOnly: true,
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    value: {
      control: "string",
      // type: { required: true },
      description: "`<input/>`的 value 值",
      table: {
        defaultValue: { summary: "null" },
        type: { summary: "string | number" },
      },
    },
    theme: {
      if: { arg: "trigger", truthy: false },
      control: "color",
      description: "色系控制，可以傳入變數(var...)或是HEX色碼",
      table: {
        category: "Inherits BaseComponent",
        type: { summary: "string" },
      },
    },
    checkImg: {
      control: { type: "file" },
      description: "是否更換為自訂圖標，傳入自訂圖標檔案路徑；如果樣式設定為 toggle，則將要自訂切換的圖檔以陣列傳入",
      table: {
        defaultValue: { summary: "null" },
        type: { summary: "./path/img.png | array" },
      },
    },
    classes: {
      control: { type: "array" },
      description: "checkbox classes",
      table: {
        defaultValue: { summary: "checkbox" },
        type: { summary: "array" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "是否可操作狀態",
      table: {
        // type: { required: true },
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    title: {
      control: { type: "string" },
      description: "`<label/>文字內容`",
      table: {
        // type: { required: true },
        defaultValue: { summary: "null" },
        type: { summary: "string" },
      },
    },
    style: {
      control: "select",
      options: ["default", "switch", "toggle", "tag"],
      description: "`<label/>文字內容`",
      table: {
        // type: { required: true },
        defaultValue: { summary: "default" },
        type: { summary: "string" },
      },
    },
    handlers: {
      control: "function",
      description: "作為change事件函式傳入",
      table: {
        // type: { required: true },
        defaultValue: { summary: "null" },
        type: { summary: "function" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // 預設args
  args: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const defaultCheckbox = {
  args: {
    style: "default", //樣式
    title: "一般 勾選框", //文字
    value: "", //<input/>的value attribute
    checked: true,
    theme: "var(--color-blue-500)", //預設顏色
    checkImg: ["../../../../public/eye.svg", "../../../../public/eye-off.svg"], //check圖標
    classes: ["checkbox"],
    disabled: false,
  },
};
export const toggleCheckbox = {
  args: {
    style: "toggle", //樣式
    title: "閉合切換樣式", //文字
    value: "", //<input/>的value attribute
    checked: false,
    theme: "var(--color-purple-500)", //預設顏色
    checkImg: ["../../../../public/eye.svg", "../../../../public/eye-off.svg"], //check圖標
    classes: ["checkbox"],
    disabled: true,
  },
};