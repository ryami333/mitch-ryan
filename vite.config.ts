import babel from "@rolldown/plugin-babel";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import { IMAGE_OPTIMIZATION_PATH, IMAGE_WIDTHS } from "./src/lib/imageConfig";
import { devImageOptimization } from "./vite/devImageOptimization";

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
    // Dev-only: emulates Amplify's managed image optimizer (see the plugin and
    // `awsAmplify.imageOptimization` below). Excluded from the production build.
    devImageOptimization(),
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
      awsAmplify: {
        runtime: "nodejs24.x",
        // Offload image optimization to Amplify's managed, CloudFront-backed
        // optimizer (the same service that powers Next.js `<Image>`). It serves
        // `IMAGE_OPTIMIZATION_PATH` in production; the `devImageOptimization`
        // plugin above emulates it during `yarn dev`. This keeps Sharp out of
        // the compute Lambda entirely — see `src/lib/imageConfig.ts`.
        imageOptimization: {
          path: IMAGE_OPTIMIZATION_PATH,
          cacheControl: "public, max-age=31536000, immutable",
        },
        imageSettings: {
          sizes: [...IMAGE_WIDTHS],
          formats: ["image/webp"],
          // Only same-origin sources (`/images/*`); no external hosts allowed.
          domains: [],
          remotePatterns: [],
          minimumCacheTTL: 31536000,
          dangerouslyAllowSVG: false,
        },
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
