import babel from "@rolldown/plugin-babel";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import { env } from "./src/lib/env.mjs";

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
        runtime: "nodejs24.x",
      },
      replace: {
        "process.env.IMAGE_SOURCE_ORIGIN": JSON.stringify(
          env.IMAGE_SOURCE_ORIGIN,
        ),
      },
      // Register the runtime image-transform endpoint. This stack has no
      // file-based server routes (TanStack Start doesn't provide them, and Nitro
      // only scans its own `serverDir`), so the handler at
      // `src/routes/api/image.ts` is wired to `/api/image` explicitly here — an
      // explicit `handlers` entry rather than pointing `serverDir` at `src`,
      // which would make Nitro try to serve `index.tsx`/`__root.tsx` too.
      handlers: [{ route: "/api/image", handler: "./src/routes/api/image.ts" }],
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
