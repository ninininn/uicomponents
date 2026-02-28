import { fn, expect } from "storybook/test";
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from "storybook/actions";

import { createDraggableItem } from './DraggableItemStory';
import "../DraggableItem.css";
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
    group: {
      control: "text",
      type: { required: true },
      description: "群組名稱",
      table: {
        category: "configurations",
        type: { summary: "string" },
      },
    },
    name: {
      control: "text",
      description: "groupObj name attribute",
      table: {
        category: "configurations",
        subcategory: 'group',
        defaultValue: { summary: "-" },
        type: { summary: "string" },
      },
    },
    pull: {
      control: "select",
      options: ['true', 'false', "['groupA','groupB']", 'clone'],
      description: "如何移動該item，除了一般的move方式，也可以用clone(複製)",
      table: {
        category: "configurations",
        subcategory: 'group',
        defaultValue: { summary: "true" },
        type: { summary: "string | boolean | array | function" },
      },
    },
    put: {
      control: "select",
      options: ['true', 'false', "['groupA','groupB']", 'function'],
      description: "是否可以被放到其他draggableItem，也可以用array放入要被放置的群組名稱",
      table: {
        category: "configurations",
        subcategory: 'group',
        defaultValue: { summary: "true" },
        type: { summary: "boolean | array | function" },
      },
    },
    sort: {
      control: "boolean",
      description: "是否可以排序",
      table: {
        category: "configurations",
        defaultValue: { summary: "true" },
        type: { summary: "boolean" },
      },
    },
    delay: {
      control: "number",
      description: "判斷結束拖曳的延遲時間(milliseconds)",
      table: {
        category: "configurations",
        defaultValue: { summary: "0" },
        type: { summary: "number" },
      },
    },
    animation: {
      control: "number",
      description: "動畫速度ms(0為沒有動畫)",
      min: 0,
      table: {
        category: "configurations",
        defaultValue: { summary: "150" },
        type: { summary: "number" },
      },
    },
    easing: {
      control: "select",
      options: ["ease-in-out", "linear", "cubic-bezier(1, 0, 0, 1)"],
      description: "動畫漸變函數",
      table: {
        category: "configurations",
        defaultValue: { summary: "null" },
        type: { summary: "string" },
      },
    },
    filter: {
      control: "text",
      description: "要過濾的css class元素",
      table: {
        category: "configurations",
        defaultValue: { summary: "-" },
        type: { summary: "text" },
      },
    },
    dataIdAttr: {
      control: "text",
      description: "自訂的data值，可以用.toArray()方法取得序列",
      table: {
        category: "configurations",
        defaultValue: { summary: "-" },
        type: { summary: "string" },
      },
    },
    ghostClass: {
      control: "text",
      description: "自訂placeHolder元素的css class",
      table: {
        category: "configurations",
        defaultValue: { summary: "sortable-ghost" },
        type: { summary: "string" },
      },
    },
    chosenClass: {
      control: "text",
      description: "自訂chosen item元素的css class",
      table: {
        category: "configurations",
        defaultValue: { summary: "sortable-chosen" },
        type: { summary: "string" },
      },
    },
    dragClass: {
      control: "text",
      description: "自訂dragging item元素的css class",
      table: {
        category: "configurations",
        defaultValue: { summary: "sortable-drag" },
        type: { summary: "string" },
      },
    },
    direction: {
      control: "select",
      options: ['horizontal', 'vertical'],
      description: "插入軸方向",
      table: {
        category: "configurations",
        defaultValue: { summary: "horizontal" },
        type: { summary: "string" },
      },
    },
    dataList: {
      control: "object",
      description: "dataIdAttr對應轉換資料",
      table: {
        category: "configurations",
        defaultValue: { summary: "{}" },
        type: { summary: "object" },
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
    group: "draggable-group",
    name: 'draggable-group',
    pull: 'true',
    put: 'true',
    dataIdAttr: "data-drag",
    dataList: {},
    sort: true,
    delay: 0,
    animation: 150,
    direction: 'horizontal',
    easing: "cubic-bezier(1, 0, 0, 1)",
    ghostClass: 'drag-indicator',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DraggableItem = {
  args: {
    group: 'draggable-group',
    name: 'draggable-group',
    pull: 'true',
    put: 'true',
    delay: 0,
    animation: 200,
    chosenClass: 'chosen-item',
    dragClass: 'sortable-drag',
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};