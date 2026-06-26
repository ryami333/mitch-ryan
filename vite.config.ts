import babel from "@rolldown/plugin-babel";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]__[hash:base64:5]",
    },
  },
  plugins: [
    tanstackStart({ srcDirectory: "src" }),
    viteReact(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    nitro({
      /**
       * Bundle src/assets as Nitro server assets so files like the Ausweis logo
       * are emitted into .output and readable at runtime via
       * `useStorage("assets/static").getItemRaw(...)` — independent of how Vite
       * chunks the server build. (Vite's `?url`/`?inline` don't reliably emit
       * assets referenced only from server-side code.)
       */
      serverAssets: [{ baseName: "static", dir: "./src/assets" }],
    }),
  ],
});
