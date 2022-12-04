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
        animatedWithBooleanProps: resolve(
          __dirname,
          "src/with-boolean-props/animated/index.html"
        ),
        nonAnimatedWithBooleanProps: resolve(
          __dirname,
          "src/with-boolean-props/non-animated/index.html"
        ),
        animatedWithAnimationProps: resolve(
          __dirname,
          "src/with-animation-props/animated/index.html"
        ),
        nonAnimatedWithAnimationProps: resolve(
          __dirname,
          "src/with-animation-props/non-animated/index.html"
        ),
        animatedWithContext: resolve(
          __dirname,
          "src/with-context/animated/index.html"
        ),
        nonAnimatedWithContext: resolve(
          __dirname,
          "src/with-context/non-animated/index.html"
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
