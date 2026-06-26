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
      // Deploy to Cloudflare Workers with Static Assets (the unified
      // Workers + Pages platform). Nitro emits a Worker entry plus a
      // `.wrangler/deploy/config.json` that points Wrangler at the build
      // output, so `wrangler deploy` works with no extra flags.
      preset: "cloudflare_module",
      // Required for the Static Assets binding (must be 2024-09-19 or later).
      compatibilityDate: "2024-09-19",
      cloudflare: {
        // Generate the Wrangler deploy config from this build.
        deployConfig: true,
        // Use workerd's native Node.js compat (nodejs_compat flag).
        nodeCompat: true,
      },
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
