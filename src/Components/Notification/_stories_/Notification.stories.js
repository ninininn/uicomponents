import { fn, expect } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createNotification } from './NotificationStory';
import "../Notification.css";
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
      description: "呼叫方法name",
      table: {
        category: "method",
        defaultValue: { summary: "msg" },
        type: { summary: "string" },
      },
    },
    style: {
      control: "select",
      options: ["default", "bordered", "accent"],
      if: { arg: "type", eq: "toast" },
      description: "toast樣式",
      table: {
        category: "method's parameters",
        subcategory: "private property",
        defaultValue: { summary: "static" },
        type: { summary: "string" },
      },
    },
    backdrop: {
      control: "select",
      options: ["static", "dynamic"],
      if: { arg: "type", eq: "modal" },
      description: "背景遮罩類型",
      table: {
        category: "method's parameters",
        subcategory: "private property",
        defaultValue: { summary: "static" },
        type: { summary: "string" },
      },
    },
    backdropClasses: {
      control: "text",
      if: { arg: "type", eq: "modal" },
      description: "背景遮罩關閉類型",
      table: {
        category: "method's parameters",
        subcategory: "private property",
        defaultValue: { summary: "static" },
        type: { summary: "string" },
      },
    },
    closable: {
      control: "boolean",
      if: { arg: "type", eq: "modal" },
      description: "背景遮罩關閉類型",
      table: {
        category: "method's parameters",
        subcategory: "private property",
        defaultValue: { summary: "true" },
        type: { summary: "boolean" },
      },
    },
    triggerType: {
      control: "select",
      options: ["hover", "click", "none"],
      if: { arg: "type", eq: "popover" },
      description: "觸發動作類型",
      table: {
        category: "method's parameters",
        subcategory: "private property",
        defaultValue: { summary: "hover" },
        type: { summary: "string" },
      },
    },
    offset: {
      control: "number",
      if: { arg: "type", eq: "popover" },
      description: "距離觸發元素的位置距離",
      table: {
        category: "method's parameters",
        subcategory: "private property",
        defaultValue: { summary: "10" },
        type: { summary: "number" },
      },
    },
    countdown: {
      control: "number",
      if: { arg: "type", eq: "msg" },
      description: "自訂倒數消失時間(ms)",
      table: {
        category: "method's parameters",
        subcategory: "private property",
        defaultValue: { summary: "1000" },
        type: { summary: "number" },
      },
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "通知視窗的尺寸大小",
      table: {
        category: "method's parameters",
        defaultValue: { summary: "light" },
        type: { summary: "string" },
      },
    },
    maxWidth: {
      control: "text",
      description: "通知視窗的最大尺寸",
      table: {
        category: "method's parameters",
        defaultValue: { summary: "auto" },
        type: { summary: "string" },
      },
    },

    area: {
      control: "array",
      // type: { required: true },
      description: "通知視窗的尺寸大小",
      table: {
        category: "method's parameters",
        defaultValue: { summary: "[auto, auto]" },
        type: { summary: "array" },
      },
    },
    icon: {
      control: "select",
      options: ["confirm", "error", "notice", "lock", "download"],
      // type: { required: true },
      description: "視窗icon圖示",
      table: {
        category: "method's parameters",
        defaultValue: { summary: "notice" },
        type: { summary: "null" },
      },
    },
    msgContent: {
      control: "text",
      description: "訊息內容",
      table: {
        category: "method's parameters",
        type: { summary: "string" },
      },
    },
    customContent: {
      control: "string",
      description: "自訂訊息innerHTML結構",
      table: {
        category: "method's parameters",
        type: { summary: "string" },
      },
    },
    msgTitle: {
      control: "text",
      description: "通知視窗標題文字，如果不需要標題可以傳入空字串或是false",
      table: {
        category: "method's parameters",
        defaultValue: { summary: "-" },
        type: { summary: "string" },
      },
    },
    classes: {
      control: { type: "array" },
      description: "自定義class，每個class以tailwindcss property放入",
      table: {
        category: "method's parameters",
        defaultValue: { summary: ".notify-container" },
        type: { summary: "array" },
      },
    },
    placement: {
      control: { type: "select" },
      options: ["right-bottom", "right-top", "left-bottom", "left-top", "center-bottom", "center-top", "center", "custom"],
      mapping: {
        "custom": ["180px", "80px"]
      },
      description: "彈出位置",
      table: {
        category: "method's parameters",
        defaultValue: { summary: "center" },
        type: { summary: "string" },
      },
    },
    confirm: {
      control: { type: "text" },
      description: "確認按鈕文字及callback函式(此處僅提供設定按鈕文字)",
      table: {
        category: "method's parameters",
        defaultValue: { summary: "確定" },
        type: { summary: "array" },
      },
    },
    cancel: {
      control: { type: "text" },
      description: "取消按鈕文字及callback函式(此處僅提供設定按鈕文字)",
      table: {
        category: "method's parameters",
        defaultValue: { summary: "取消" },
        type: { summary: "array" },
      },
    },
    btnList: {
      control: { type: "array" },
      description: "除了確認及取消以外的按鈕；text:按鈕文字|classes:樣式class陣列|handler:click-handler function",
      table: {
        category: "method's parameters",
        defaultValue: { summary: "null" },
        type: { summary: "array" },
      },
    },
    handler: {
      action: "click",
      control: "function",
      description: "點擊觸發元素後的callback函式",
      table: {
        // type: { required: true },
        category: "method's parameters",
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
    theme: "light",
    maxWidth: "auto",
    area: ["auto", "auto"],
    icon: "notice",
    msgContent: "這是測試用通知內容",
    // customContent: `<div>customInner</div>`,
    msgTitle: "通知",
    classes: ["notification"],
    placement: "left-top",//因為不同類型能設定的位置不太一樣
    confirm: "確定",
    cancel: "取消",
    btnList: [],
    //toast private
    style: "accent",
    //modal private
    backdrop: "static",
    backdropClasses: "bg-gray-500/50",
    closable: false,
    //popover private
    triggerType: "hover",
    offset: 10,
    //msg private
    countdown: 1000,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Toast = {
  args: {
    type: "toast",
    placement: "right-top",
    msgContent: "動綠是昔毛叫這頭收乞高姐力司「黑枝乾」化氣星常每貝木嗎見雲黃巴事冬更珠，亭肖哪飯隻朱者英二活經貫綠「只地話入」卜風連語貓身陽黑空次司月她！還室意蝴士下卜後唱筆至旦民訴跑書向。後北愛升科訴把肖止聽對。",
    customContent: `<div>...customDiv</div>`,
    maxWidth: "360px",
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
    icon: "lock",
    msgTitle: "您的權限不足",
    msgContent: "請前往xx專區進行登錄",
    placement: "center",
    confirm: ["馬上前往", function () { alert("to other links..."); }],
    cancel: "取消",
    btnList: [
      {
        text: "前往",
        classes: ["btn-primary", "outline-btn"],
        handler: function (e, config) {
          alert("前往某網址");
        }
      },
      { icon: "sticker.png", text: "查看更多", classes: ["btn-secondary", "outline-btn"] },
    ]
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
export const Msg = {
  args: {
    type: "msg",
    placement: "left-top",
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};
