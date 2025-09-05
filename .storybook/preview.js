/** @type { import('@storybook/html-vite').Preview } */
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import "../src/style.css";
const preview = {
  parameters: {
    docs: {
      // source: {
      //   transform: async (source) => {
      //     const prettier = await import("prettier/standalone");
      //     const prettierPluginBabel = await import("prettier/plugins/babel");
      //     const prettierPluginEstree = await import("prettier/plugins/estree");

      //     return prettier.format(source, {
      //       parser: "babel",
      //       plugins: [prettierPluginBabel, prettierPluginEstree],
      //     });
      //   },
      // },
      page: DocumentationTemplate,
      codePanel: true,
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
