import { fn, expect } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createCards } from './CardsStory';
import "./Cards.css";
import CardsAPIdoc from "./CardsAPIdoc.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Cards",
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
      options: [1,2,3],
      // type: { required: true },
      description: "checked狀態",
      table: {
        category: "parameters",
        subcategory: "Inherits Card",
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    }, 
    title: {
      control: "text",
      description: "卡片標題文字",
      table: {
        category: "parameters",
        subcategory: "Inherits Card",
        type: { summary: "string" },
      },
    },
    name: {
      control: "text",
      description: "input標籤的name attribute",
      table: {
        category: "infoList poperties",
        type: { summary: "string" },
      },
    },

    classes: {
      control: { type: "array" },
      description: "checkbox classes，每個class以tailwindcss property放入",
      table: {
        category: "infoList poperties",
        defaultValue: { summary: "checkbox" },
        type: { summary: "array" },
      },
    },
    handlers: {
      action: "change",
      control: "function",
      description: "作為change事件函式傳入",
      table: {
        // type: { required: true },
        category: "infoList poperties",
        defaultValue: { summary: "null" },
        type: { summary: "function" },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // 預設args
  args: {
    // handlers: action("change"),
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const defaultInfocard = {
  args: {
    title:"測試面板", //文字
    cardSize:2,

  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};
