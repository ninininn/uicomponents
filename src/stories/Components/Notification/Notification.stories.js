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
      options: ["toast", "modal", "popover","alert"],
      type: { required: true },
      description: "跳出通知種類",
      table: {
        category: "parameters",
        defaultValue: { summary: "toast" },
        type: { summary: "string" },
      },
    },
    area: {
      control: "array",
      // type: { required: true },
      description: "通知視窗的尺寸大小",
      table: {
        category: "options",
        defaultValue: { summary: "[auto, auto]" },
        type: { summary: "array" },
      },
    },
    msgContent: {
      control: "text",
      description: "訊息內容",
      table: {
        category: "options",
        type: { summary: "string" },
      },
    },
    customContent: {
      control: "string",
      description: "訊息自訂內容，放入innerHTML",
      table: {
        category: "options",
        type: { summary: "string" },
      },
    },
    msgTitle: {
      control: "text",
      description: "通知視窗標題文字",
      table: {
        category: "options",
        defaultValue: { summary: "-" },
        type: { summary: "string" },
      },
    },
    classes: {
      control: { type: "array" },
      description: "自定義class，每個class以tailwindcss property放入",
      table: {
        category: "options",
        defaultValue: { summary: ".msg" },
        type: { summary: "array" },
      },
    },
    handlers: {
      action: "click",
      control: "function",
      description: "點擊確認按鈕後的callback函式",
      table: {
        // type: { required: true },
        category: "options",
        defaultValue: { summary: "null" },
        type: { summary: "function" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // 預設args
  args: {
    // handlers: action("change"),
    type: "toast",
    area: ["auto", "auto"],
    msgContent: "這是測試用通知內容",
    customContent: `<div>customInner</div>`,
    msgTitle: "通知",
    classes: ["notification"],
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Toast = {
  args: {
    type: "toast",
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
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};
