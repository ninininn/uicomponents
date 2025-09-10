/** @type { import('@storybook/html-vite').Preview } */
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import * as prettier from 'prettier/standalone';
// import * as prettierPluginBabel from 'prettier/plugins/babel';
import * as prettierPluginHtml from 'prettier/plugins/html';
// import * as prettierPluginEstree from 'prettier/plugins/estree';
import "../src/style.css";
import { themes } from "storybook/internal/theming";
const preview = {
  parameters: {
    docs: {
      page: DocumentationTemplate,
      codePanel: true,
      toc: { disable: false, title: 'References' },
      themes: "dark",
      source: {
        transform: async (source) => {
          try {
            return await prettier.format(source, {
              parser: 'html', // Or the appropriate parser for your code
              plugins: [prettierPluginHtml], // Add other necessary plugins
            });
          } catch (e) {
            console.error("Prettier formatting failed:", e);
            return source; // Return original source if formatting fails
          }
        },
      }
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
