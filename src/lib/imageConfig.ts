/**
 * Shared image-optimization constants — the single source of truth for the
 * endpoint path and the served widths, used by three places that must agree:
 *
 * - `imageUrlBuilder.ts` / `Contact.tsx` — the URLs and `srcset` in the markup.
 * - `vite.config.ts` — Amplify's `imageOptimization.path` and `imageSettings.sizes`
 *   (production, via the managed optimizer).
 * - `vite/devImageOptimization.ts` — the `yarn dev` emulator's route and its
 *   width allowlist.
 *
 * If a width isn't listed here, Amplify's optimizer rejects the request — so the
 * dev emulator mirrors the same allowlist to fail identically before deploy.
 */
export const IMAGE_OPTIMIZATION_PATH = "/_image";

export const IMAGE_WIDTHS = [
  360, 640, 768, 960, 1280, 1600, 1920, 2560,
] as const;
