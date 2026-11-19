/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/docs/**/*.mdx",
    "../src/Components/**/_stories_/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/Components/**/_stories_/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-docs",
    "@chromatic-com/storybook",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: { defaultName: "API Docs" },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    config.base = "/uicomponents/"; // 👈 必須加上這個
    return config;
  },
};
export default config;
