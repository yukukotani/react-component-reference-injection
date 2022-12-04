import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import visualizer from "rollup-plugin-visualizer";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        animatedWithoutContext: resolve(
          __dirname,
          "src/without-context/animated/index.html"
        ),
        nonAnimatedWithoutContext: resolve(
          __dirname,
          "src/without-context/non-animated/index.html"
        ),
      },
      plugins: [
        visualizer({
          gzipSize: true,
          template: "treemap",
        }),
      ],
    },
  },
});
