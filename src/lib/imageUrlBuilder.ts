import { IMAGE_OPTIMIZATION_PATH } from "./imageConfig";

/**
 * Builds image-optimization URLs using AWS Amplify's contract (`?url=&w=&q=`) —
 * the same one Next.js `<Image>` uses. In production these are served by
 * Amplify's managed, CloudFront-backed optimizer (configured via
 * `awsAmplify.imageOptimization` in `vite.config.ts`); during `yarn dev` they're
 * served by the emulator in `vite/devImageOptimization.ts`.
 *
 * There is no `fmt`: the output format is content-negotiated from the request's
 * `Accept` header (against `imageSettings.formats`), so callers don't pick it.
 */
export function imageUrlBuilder({
  source,
  w,
  q = 75,
}: {
  source: string;
  w: number;
  q?: number;
}): string {
  const params = new URLSearchParams({
    url: source,
    w: String(w),
    q: String(q),
  });
  return `${IMAGE_OPTIMIZATION_PATH}?${params.toString()}`;
}
