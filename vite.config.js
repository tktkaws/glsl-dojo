import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [glsl()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        other: resolve(__dirname, "other/index.html"),
        third: resolve(__dirname, "third/index.html"),
      },
    },
  },
});
