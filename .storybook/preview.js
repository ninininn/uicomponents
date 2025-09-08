/** @type { import('@storybook/html-vite').Preview } */
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import "../src/style.css";
const preview = {
  parameters: {
    docs: {
      page: DocumentationTemplate,
      codePanel: true,
      toc: true,
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
  },
};

export default preview;
