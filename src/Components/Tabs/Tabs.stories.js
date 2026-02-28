import { fn, expect } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createTabs } from './TabsStory';
import "./Tabs.css";
import TabsAPIdoc from "./TabsAPIdoc.mdx";
import { Dom } from "../../../Utils/Utils";
import { Notification } from '../Notification/Notification';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Tabs",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        format: true,
        language: "html",
      },
      page: TabsAPIdoc,
    },
  },
  // decorators: [withActions],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    let instance = createTabs({ ...args });
    return instance;

  },
  argTypes: {
    orientation: {
      control: "select",
      options: ['vertical', 'horizontal'],
      description: "tabs元件排列方向",
      table: {
        category: "configurations",
        type: { summary: "string" },
        defaultValue: { summary: "vertical" },
      },
    },
    placement: {
      control: "select",
      options: ["top", "bottom", "start", "end"],
      description: "Tab list位置",
      table: {
        category: "configurations",
        defaultValue: { summary: "top" },
        type: { summary: "string" },
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
    title: {
      control: "text",
      description: "tab 標題文字",
      table: {
        category: "tabs configurations",
        defaultValue: { summary: "-" },
        type: { summary: "string" },
      },
    },
    content: {
      control: "text",
      description: "panel內容",
      table: {
        category: "tabs configurations",
        defaultValue: { summary: "-" },
        type: { summary: "string | HTMLElement" },
      },
    },
    active: {
      control: "boolean",
      description: "預設顯示",
      table: {
        category: "tabs configurations",
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
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
    orientation: "vertical",
    placement: "top",
    theme: "var(--color-primary-500)",
    title: 'custom Tab 2',
    content: 'custom content 2',
    active: false
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Tabs = {
  args: {
    orientation: "vertical",
    placement: "top",
    theme: "var(--color-primary-500)",
    title: 'custom Tab 2',
    content: 'custom content 2',
    active: false
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};