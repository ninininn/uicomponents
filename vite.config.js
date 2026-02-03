import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    // server: {
    //     host: "172.20.10.2"
    // }
    root: ".",
    build: {
        outDir: "dist",
        rollupOptions: {
            input: "./index.html", // 入口是 index.html
            external: [], // 這裡先不用特別加
            output: {
                // 輸出的檔案命名規則
                entryFileNames: "[name].js",
                chunkFileNames: "[name].js",
                assetFileNames: "[name].[ext]",
            },
        },
    },
});