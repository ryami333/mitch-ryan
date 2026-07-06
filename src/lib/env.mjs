/* eslint no-restricted-properties: "off" */
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    IMAGE_SOURCE_ORIGIN: z.url(),
  },
  runtimeEnv: import.meta.env,
});
