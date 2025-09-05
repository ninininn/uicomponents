import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    // server: {
    //     host: "172.20.10.2"
    // }
});