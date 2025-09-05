import { fn } from 'storybook/test';
// import { withActions } from '@storybook/addon-actions/decorator';
import { action } from 'storybook/actions';

// import { createDropdown } from './DropdownStory';
// import '../stories/Components/Dropdown/Dropdown.css';
import DropdownAPIdoc from './Components/Dropdown/DropdownAPIdoc.mdx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        format: true, language: 'html',
      },
      page: DropdownAPIdoc
    }
  },
  // decorators: [withActions],
  render: ({ ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return `<div></div>`;
  },
  argTypes: {
    handlers: { action: 'callback' },
    target: {
      control: 'DOMElement',
      description: '初始值，如果有開啟range功能則傳入Array',
      table: {
        readOnly: true,
        defaultValue: { summary: '0' },
        type: { summary: 'number | array' },
      },
    },
    trigger: {
      control: 'boolean',
      description: '控制雙向slider功能',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    bindFilteroption: {
      control: { type: 'boolean' },
      description: '自訂過濾function',
      table: {
        defaultValue: { summary: 'null' },
        type: { summary: '/path-to-img.png' }
      }
    },
    changeHandler: {
      control: { type: 'function' },
      table: {
        // type: { required: true },
        defaultValue: { summary: 'null' },
        type: { summary: 'function' },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { handlers: action('getValue') },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const defaultDropdown = {
  args: {
    target: 'target',
    trigger: 'trigger',
    selectOptions: [
      { value: "1", text: "近1年交易" },
      { value: "2", text: "近2年交易" },
      { value: "3", text: "近3年交易" },
      { value: "4", text: "近4年交易" },
      { value: "5", text: "近5年交易" },
      { value: "0", text: "交易時間不拘", selected: true }, //0827配合調整
    ],
  },
};