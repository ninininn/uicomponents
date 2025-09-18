import { fn, expect } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createNotification } from './NotificationStory';
import "./Notification.css";
import NotificationAPIdoc from "./NotificationAPIdoc.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Notification",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        format: true,
        language: "html",
      },
      page: NotificationAPIdoc,
    },
  },
  // decorators: [withActions],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    let instance = createNotification({ ...args });
    return instance;

  },
  argTypes: {
    type: {
      control: "select",
      options: ["toast", "modal", "popover", "msg"],
      type: { required: true },
      description: "跳出通知種類",
      table: {
        category: "parameters",
        defaultValue: { summary: "msg" },
        type: { summary: "string" },
      },
    },
    theme: {
      control: "select",
      options:["light","dark"],
      description: "通知視窗的尺寸大小",
      table: {
        category: "parameters",
        subcategory: "options",
        defaultValue: { summary: "light" },
        type: { summary: "string" },
      },
    },
    area: {
      control: "array",
      // type: { required: true },
      description: "通知視窗的尺寸大小",
      table: {
        category: "parameters",
        subcategory: "options",
        defaultValue: { summary: "[auto, auto]" },
        type: { summary: "array" },
      },
    },
    msgContent: {
      control: "text",
      description: "訊息內容",
      table: {
        category: "parameters",
        subcategory: "options",
        type: { summary: "string" },
      },
    },
    customContent: {
      control: "string",
      description: "自訂訊息innerHTML結構",
      table: {
        category: "parameters",
        subcategory: "options",
        type: { summary: "string" },
      },
    },
    msgTitle: {
      control: "text",
      description: "通知視窗標題文字",
      table: {
        category: "parameters",
        subcategory: "options",
        defaultValue: { summary: "-" },
        type: { summary: "string" },
      },
    },
    classes: {
      control: { type: "array" },
      description: "自定義class，每個class以tailwindcss property放入",
      table: {
        category: "parameters",
        subcategory: "options",
        defaultValue: { summary: ".msg" },
        type: { summary: "array" },
      },
    },
    placement: {
      control: { type: "select" },
      options: ["right-bottom", "right-top", "left-bottom", "left-top", "center-bottom", "center-top", "center"],
      description: "訊息框彈出位置",
      table: {
        category: "parameters",
        subcategory: "options",
        defaultValue: { summary: "center" },
        type: { summary: "string" },
      },
    },
    confirm: {
      control: { type: "text" },
      description: "確認按鈕文字及callback函式(此處僅提供設定按鈕文字)",
      table: {
        category: "parameters",
        subcategory: "options",
        defaultValue: { summary: "確定" },
        type: { summary: "array" },
      },
    },
    cancel: {
      control: { type: "text" },
      description: "取消按鈕文字及callback函式(此處僅提供設定按鈕文字)",
      table: {
        category: "parameters",
        subcategory: "options",
        defaultValue: { summary: "取消" },
        type: { summary: "array" },
      },
    },
    handlers: {
      action: "click",
      control: "function",
      description: "點擊觸發元素後的callback函式",
      table: {
        // type: { required: true },
        category: "parameters",
        subcategory: "options",
        defaultValue: { summary: "null" },
        type: { summary: "function" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // 預設args
  args: {
    // handlers: action("change"),
    type: "msg",
    theme:"light",
    area: ["auto", "auto"],
    msgContent: "這是測試用通知內容",
    customContent: `<div>customInner</div>`,
    msgTitle: "通知",
    classes: ["notification"],
    placement: "left-top",
    confirm: "確定",
    cancel: "取消"
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Toast = {
  args: {
    type: "toast",
    placement: "right-top",
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};
export const Modal = {
  args: {
    type: "modal",
    placement: "center",
    confirm: "確定",
    cancel: "取消"
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};
export const Popover = {
  args: {
    type: "popover",
    placement: "top",
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};
export const Alert = {
  args: {
    type: "alert",
    placement: "center",
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};
