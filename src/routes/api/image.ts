import { tmpdir } from "node:os";
import { join } from "node:path";
import { fromWebHandler } from "h3";
import { createImageTransformRouteHandler } from "runtime-image-transformer/server";
import sharp from "sharp";
import { env } from "../../lib/env.mjs";

/**
 * Runtime image-transform endpoint (Sharp-powered), consumed via
 * `src/lib/imageUrlBuilder.ts`. It fetches a source image from a fixed, trusted
 * origin, resizes/re-encodes it per the query params, and caches the result on
 * disk.
 */
const sourceOrigin = env.IMAGE_SOURCE_ORIGIN;
const handler = createImageTransformRouteHandler({
  sourceOrigin,
  sharp,
  allowedFormats: [
    "preserve",
    "webp",
    // "avif" – turned out to be *really* slow on AWS Amplify.
  ],
  // The default cacheDir is `process.cwd()/.transform-cache`, which on the
  // Amplify compute Lambda is the read-only `/var/task`. Only the OS temp dir
  // (`/tmp` on Lambda) is writable; it also persists across warm invocations.
  cacheDir: join(tmpdir(), "image-transform-cache"),
});

export default fromWebHandler((request) => handler(request));
