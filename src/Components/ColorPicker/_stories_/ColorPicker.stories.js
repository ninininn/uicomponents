import { createColorPicker, createPalette } from './ColorPickerStory';
import "../ColorPicker.css";
import ColorPickerAPIdoc from "./ColorPickerAPIdoc.mdx";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/ColorPicker",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        format: true,
        language: "html",
      },
      page: ColorPickerAPIdoc,
    },
  },
  argTypes: {
    colorCounts: {
      control: { type: "number", min: 1 },
      type: { required: true },
      description: "要產出的顏色數量",
      table: {
        category: "palette config",
        type: { summary: "number" },
      },
    },
    limits: {
      control: { type: "number", min: 1 },
      type: { required: true },
      description: "選擇器最多儲存的顏色數量",
      table: {
        category: "configurations",
        type: { summary: "number" },
      },
    },
    colorMode: {
      control: "select",
      description: "色碼模式",
      options: ['hex', 'rgb', 'hsl'],
      table: {
        category: "palette config",
        defaultValue: { summary: "-" },
        type: { summary: "string" },
      },
    },
    mode: {
      control: "select",
      description: "色碼模式",
      options: ['hex', 'rgb', 'hsl'],
      table: {
        category: "configurations",
        defaultValue: { summary: "hex" },
        type: { summary: "string" },
      },
    },
    defaults: {
      control: "array",
      description: "預設顏色",
      table: {
        category: "configurations",
        defaultValue: { summary: "['#878787','474747']" },
        type: { summary: "string" },
      },
    },
    style: {
      control: "select",
      options: ['random', 'same', 'contrast'],
      description: "色系樣式",
      table: {
        category: "palette config",
        defaultValue: { summary: "random" },
        type: { summary: "string" },
      },
    },
    tone: {
      control: "select",
      options: ['red', 'yellow', 'green', 'cyan', 'blue', 'purple'],
      description: "指定色系",
      table: {
        category: "palette config",
        defaultValue: { summary: "null" },
        type: { summary: "string" },
      },
    },
    offset: {
      control: { type: "number", min: 1 },
      description: "偏移量",
      table: {
        category: "palette config",
        defaultValue: { summary: "-" },
        type: { summary: "number" },
      },
    },
    alpha: {
      control: { type: "number", min: 0, max: 1 },
      description: "透明度",
      table: {
        category: "palette config",
        defaultValue: { summary: "1" },
        type: { summary: "number" },
      },
    },
    saturationFixed: {
      control: "boolean",
      description: "是否固定飽和度",
      table: {
        category: "palette config",
        defaultValue: { summary: "false" },
        type: { summary: "number | boolean" },
      },
    },
    saturation: {
      if: { arg: 'saturationFixed', truthy: true },
      control: { type: "number", min: 0, max: 100 },
      description: "飽和度固定值",
      table: {
        category: "palette config",
        defaultValue: { summary: "random(20~90)" },
        type: { summary: "number" },
      },
    },
    lightnessFixed: {
      control: "boolean",
      description: "是否固定明度",
      table: {
        category: "palette config",
        defaultValue: { summary: "false" },
        type: { summary: "number | boolean" },
      },
    },
    lightness: {
      if: { arg: 'lightnessFixed', truthy: true },
      control: { type: "number", min: 0, max: 100 },
      description: "明度固定值",
      table: {
        category: "palette config",
        defaultValue: { summary: "random(20~90)" },
        type: { summary: "number" },
      },
    },
    // handler: {
    //   action: "click",
    //   control: "function",
    //   description: "點擊觸發元素後的callback函式",
    //   table: {
    //     // type: { required: true },
    //     category: "configurations",
    //     defaultValue: { summary: "null" },
    //     type: { summary: "function" },
    //   },
    // },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // 預設args
  args: {
    // limits: 5,
    // colorCounts: 1,
    // colorMode: 'hsl',
    // mode:'hex',
    // defaults:["#878787","#474747"],
    // alpha: 1,
    // style: 'random',
    // offset: 10,
    // tone: 'red',
    // saturationFixed: false,
    // lightnessFixed: false,
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Defaults = {
//   args: {
//     limits: 5,
//     colorCounts: 1,
//     colorMode: 'hsl',
//     mode: 'hex',
//     defaults: ["#878787", "#474747"],
//     alpha: 1,
//     style: 'random',
//     offset: 10,
//     tone: 'red',
//     saturationFixed: false,
//     lightnessFixed: false,
//   },
//   // play: async ({ args, canvas, userEvent }) => {
//   //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
//   //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
//   //   await expect(args.handlers).toHaveBeenCalled();
//   // }
// };
export const ColorPicker = {
  parameters: {
    controls: { include: ['limits', 'mode', 'defaults'] },
  },
  render: (args) => createColorPicker(args),
  args: {
    limits: 5,
    mode: 'hex',
    defaults: ["#878787", "#474747"],
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Palette = {
  parameters: {
    controls: { include: ['colorCounts', 'colorMode', 'alpha', 'style', 'tone', 'offset', 'saturationFixed', 'saturation', 'lightnessFixed', 'lightness'] },
  },
  render: (args) => createPalette(args),
  args: {
    colorCounts: 10,
    colorMode: 'hsl',
    style: 'random',
    alpha: 1,
    offset: 20,
    saturationFixed: false,
    lightnessFixed: true,
    saturation: 90,
    lightness: 70,
  },
  // play: async ({ args, canvas, userEvent }) => {
  //   await userEvent.type(canvas.getByText('一般勾選框'), '勾選框');
  //   await userEvent.click(canvas.getByLabelText('一般勾選框'));
  //   await expect(args.handlers).toHaveBeenCalled();
  // }
};