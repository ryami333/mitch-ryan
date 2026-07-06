/* eslint no-restricted-properties: "off" */
import "dotenv/config";
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
  /**
   * We need to use the explicitly-keyed variant rather than `runtimeEnv: process.env`
   * because ENV vars will get baked in at build-time.
   */
  runtimeEnv: {
    IMAGE_SOURCE_ORIGIN: process.env.IMAGE_SOURCE_ORIGIN,
  },
});
