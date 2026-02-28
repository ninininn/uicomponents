import { fn } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createDropdown } from './DropdownStory';
import "../Dropdown.css";
import DropdownAPIdoc from "./DropdownAPIdoc.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Dropdown",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        format: true,
        language: "html",
      },
      page: DropdownAPIdoc,
    },
  },
  // decorators: [withActions],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    let dropdownInstance = createDropdown({ ...args });
    dropdownInstance.containerEl.classList.add("flex", "gap-3", "items-center");
    return dropdownInstance.containerEl;
  },
  argTypes: {
    target: {
      control: "string",
      type: { required: true },
      description: "目標節點元素(也就是`<ul>`)，可以直接帶入節點或是帶入要命名的id名稱",
      table: {
        readOnly: true,
        defaultValue: { summary: "<ul> element | id" },
        type: { summary: "HTNLElement" },
      },
    },
    trigger: {
      control: "string",
      type: { required: true },
      description: "觸發元素，如果是下拉選單則是指`<input/>`元素",
      table: {
        defaultValue: { summary: "element | array" },
        type: { summary: "HTNLElement" },
      },
    },
    selectOptions: {
      if: { arg: "trigger", truthy: false },
      control: "object",
      description: "trigger可以帶入此選項陣列，對應放入要渲染的節點",
      table: {
        type: { summary: "array" },
      },
    },
    bindFilteroption: {
      control: { type: "object" },
      description: "開啟過濾功能及相關設定，內部有 `filter` 及 `filtHandler` 屬性",
      table: {
        defaultValue: { summary: "null" },
        type: { summary: "object" },
      },
    },
    filter: {
      if: { arg: "bindFilteroption", truthy: true },
      control: { type: "boolean" },
      description: "是否開啟過濾功能",
      table: {
        category:"bindFilteroption",
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
    filterHandler: {
      if: { arg: "bindFilteroption", truthy: true },
      control: { type: "function" },
      description: "過濾功能操作函式",
      table: {
        category:"bindFilteroption",
        defaultValue: { summary: "null" },
        type: { summary: "function" },
      },
    },
    changeHandler: {
      control: { type: "function" },
      description: "作為change事件函式來綁定",
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

const example_selectOptions = [
  { value: "1", text: "近1年交易" },
  { value: "2", text: "近2年交易" },
  { value: "3", text: "近3年交易" },
  { value: "4", text: "近4年交易" },
  { value: "5", text: "近5年交易" },
  { value: "0", text: "交易時間不拘", selected: true }, //0827配合調整
];

function filtItem() {
  let inputValue = this.value;
  let ownli = this.parentNode.parentNode.querySelectorAll(".dropdown-item li");
  ownli.forEach((li) => {
    li.textContent.includes(inputValue)
      ? li.classList.remove("hidden")
      : li.classList.add("hidden");
  });
}

function changeHandler() {
  let valueObj = this.value;
  console.log(valueObj);
}
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const defaultDropdown = {
  args: {
    target: "example_dropdown",
    trigger: example_selectOptions,
    bindFilteroption: {
      filter: false, filterHandler: filtItem
    },
    filter: false,
    filterHandler: filtItem,
    changeHandler: changeHandler
  },
};