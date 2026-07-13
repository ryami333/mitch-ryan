import { createImageUrlBuilder } from "runtime-image-transformer";
import { createImageTransformRouteHandler } from "runtime-image-transformer/server";
import sharp from "sharp";
import type { Plugin } from "vite";
import { IMAGE_OPTIMIZATION_PATH, IMAGE_WIDTHS } from "../src/lib/imageConfig";

const ALLOWED_WIDTHS = new Set<number>(IMAGE_WIDTHS);

/**
 * Dev-only emulator for AWS Amplify's managed image optimization.
 *
 * In production, `awsAmplify.imageOptimization` (see `vite.config.ts`) makes
 * Amplify's CloudFront-backed optimizer serve `IMAGE_OPTIMIZATION_PATH`. That
 * managed service doesn't exist locally, and `deploy-manifest.json` routing
 * isn't applied by the dev server — so this Vite middleware stands in during
 * `yarn dev`, speaking the same `?url=&w=&q=` + `Accept` contract. `apply:
 * "serve"` keeps it (and Sharp) out of the production build entirely.
 *
 * The transform is delegated to `runtime-image-transformer` (the same libvips/
 * Sharp engine Amplify uses under the hood), so dev output closely matches prod.
 * No cache plugin is supplied, so every request re-transforms — always fresh
 * while iterating on source images.
 */
export function devImageOptimization(): Plugin {
  return {
    name: "dev-image-optimization",
    apply: "serve",
    configureServer(server) {
      const port = server.config.server.port ?? 3000;
      const origin = `http://localhost:${port}`;

      // The library speaks its own encoded contract (`?source=&w=&fmt=&q=`), so
      // encode with its matching builder and delegate to its handler. The
      // handler fetches the source over HTTP from `sourceOrigin` — here the dev
      // server itself, which serves `/images/*` from `public/`.
      const toTransformUrl = createImageUrlBuilder({ apiRouteUrl: origin });
      const transform = createImageTransformRouteHandler({
        sourceOrigin: origin,
        sharp,
        allowedFormats: ["preserve", "webp"],
      });

      server.middlewares.use(IMAGE_OPTIMIZATION_PATH, async (req, res) => {
        try {
          const { searchParams } = new URL(req.url ?? "", origin);
          const source = searchParams.get("url");
          const w = Number(searchParams.get("w"));
          const q = Number(searchParams.get("q") ?? "75");

          // Mirror Amplify's validation: same-origin path, allowlisted width.
          if (!source?.startsWith("/") || !ALLOWED_WIDTHS.has(w)) {
            res.statusCode = 400;
            res.end("Bad Request");
            return;
          }

          // Amplify negotiates the output format from `Accept`; map that to the
          // library's explicit `fmt`.
          const fmt = req.headers.accept?.includes("image/webp")
            ? "webp"
            : "preserve";

          const response = await transform(
            new Request(toTransformUrl({ source, w, fmt, q })),
          );

          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch {
          res.statusCode = 500;
          res.end("Image optimization failed");
        }
      });
    },
  };
}
