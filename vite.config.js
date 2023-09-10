import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [glsl()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "other/index.html"),
      },
    },
  },
});
