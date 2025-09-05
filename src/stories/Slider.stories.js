import { fn } from 'storybook/test';
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from 'storybook/actions';

import { createSlider } from './SliderStory.js';
import '../stories/Components/Slider/Slider.css';
import SliderAPIdoc from './Components/Slider/SliderAPIdoc.mdx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Slider',
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        format: true, language: 'html',
      },
      page: SliderAPIdoc
    }
  },
  // decorators: [withActions],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    let container = document.createElement("div");
    container.classList.add("w-70");
    let slider = createSlider({ ...args });
    container.appendChild(slider.getElem());
    return container;
  },
  argTypes: {
    handlers: { action: 'callback' },
    initValue: {
      control: 'number',
      description: '初始值，如果有開啟range功能則傳入Array',
      table: {
        defaultValue: { summary: '0' },
        type: { summary: 'number | array' },
      },
    },
    range: {
      control: 'boolean',
      description: '控制雙向slider功能',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    thumbImg: {
      control: { type: 'file' },
      description: '客製thumb圖示，可以放入圖片路徑來使用',
      table: {
        defaultValue: { summary: 'null' },
        type: { summary: '/path-to-img.png' }
      }
    },
    step: {
      control: { type: 'number' },
      table: {
        defaultValue: { summary: '1' },
        type: { summary: 'number' },
      },
    },
    theme: {
      control: { type: 'color', presetColors: ['var(--color-yellow-500)'] },
      description: 'Slider主題色，可以傳入css variables 或是 HEX 色碼',
      table: {
        defaultValue: { summary: 'var(--color-yellow-500)' },
        type: { summary: 'string' },
      },
    },
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    disabled: {
      control: 'boolean',
      // type: { required: true },
      description: '是否為disabled狀態，可以搭配Checkbox元件(傳入checked值)使用',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { handlers: action('getValue') },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const defaultSlider = {
  args: {
    initValue: 30,
    range: false,
    step: 1,
    disabled: false,
    theme: '#8bd7bb',
    min: 1,
    max: 100
  },
};
export const customSlider = {
  args: {
    initValue: 30,
    range: false,
    step: 1,
    disabled: false,
    theme: '#8bd7bb',
    min: 1,
    max: 100,
    thumbImg: '../../public/sticker.png'
  },
};
export const rangeSlider = {
  args: {
    initValue: [24, 64],
    range: true,
    step: 1,
    disabled: false,
    theme: '#8bd7bb',
    min: 1,
    max: 100,
  },
};