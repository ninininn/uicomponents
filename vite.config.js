import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  // server: {
  //     host: "172.20.10.2"
  // }
  root: ".",
  publicDir: false,
  build: {
    outDir: "dist",
    lib: {
      entry: "src/index.js",
      name: "UIcompos",
      formats: ["es"],
      fileName: "uicompos",
    },
    rollupOptions: {
      output: {
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
