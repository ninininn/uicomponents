/** @type { import('@storybook/html-vite').Preview } */
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import "../src/style.css";
import { themes } from "storybook/internal/theming";
const preview = {
  parameters: {
    docs: {
      page: DocumentationTemplate,
      codePanel: true,
      toc: true,
      themes: "dark"
    },
    controls: {
      disableSaveFromUI: true,
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: "requiredFirst",
    },
    // actions: { argTypesRegex: '^on.*' },
  },
};

export default preview;
