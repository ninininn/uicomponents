/** @type { import('@storybook/html-vite').Preview } */
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import * as prettier from 'prettier/standalone';
// import * as prettierPluginBabel from 'prettier/plugins/babel';
import * as prettierPluginHtml from 'prettier/plugins/html';
// import * as prettierPluginEstree from 'prettier/plugins/estree';
import "../src/style.css";
import { themes, ensure } from "storybook/internal/theming";
const preview = {
  decorators: [
    (Story) => {
      // 確保 Flowbite / Notification 類似的浮層能被 append 到 Preview iframe 的 body
      const previewIframe = document.querySelector("#storybook-preview-iframe");
      if (previewIframe) {
        const previewDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;
        previewDoc.body.setAttribute("data-storybook-preview", "true");

        // Monkey-patch: 在 storybook 環境裡，讓 append 到 window.document.body = append 到 previewDoc.body
        const originalAppend = document.body.appendChild;
        document.body.appendChild = function (node) {
          if (previewDoc) {
            return previewDoc.body.appendChild(node);
          }
          return originalAppend.call(document.body, node);
        };
      }

      return Story();
    },
  ],
  parameters: {
    docs: {
      page: DocumentationTemplate,
      codePanel: true,
      toc: { disable: false, title: 'Reference', headingSelector: 'h1, h2, h3' },
      themes: ensure(themes.dark),
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
