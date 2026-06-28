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
      // Deploy to AWS Amplify Hosting (Web Compute / SSR). Nitro emits a
      // `deploy-manifest.json` bundle under `.amplify-hosting/` — a static
      // dir plus a Lambda-style compute handler — which Amplify consumes
      // directly (see amplify.yml).
      preset: "aws-amplify",
      // Pin the compute Lambda runtime; the preset otherwise defaults to
      // nodejs20.x. nodejs22.x is the newest runtime Amplify Web Compute
      // supports (Amplify has no Node 24 runtime yet — see note below about
      // the gap with this project's `engines: node ^24.18.0`).
      awsAmplify: {
        runtime: "nodejs22.x",
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
