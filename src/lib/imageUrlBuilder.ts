import { createImageUrlBuilder } from "runtime-image-transformer";

/**
 * Builds URLs for the runtime image-transform route (see
 * `src/routes/api/image.ts`). A root-relative `apiRouteUrl` keeps the emitted
 * URLs origin-less, so there's nothing to configure at build time.
 */
export const imageUrlBuilder = createImageUrlBuilder({
  apiRouteUrl: "/api/image",
});
