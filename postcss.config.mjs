import { fileURLToPath } from "node:url";

const globalDataFile = (path) => fileURLToPath(new URL(path, import.meta.url));

const config = {
  plugins: {
    /**
     * Inject the shared definition files into every file's PostCSS run (and
     * strip them again before output), so the preset-env features below can
     * resolve `@apply` (mixins) and `@media (--name)` (custom media) across CSS
     * Modules. Vite processes each module in isolation, so without this a
     * `@mixin`/`@custom-media` definition would be invisible outside the file
     * that declares it — and an unresolved `@apply`/`@media (--name)` ships
     * silently as broken CSS. Any new shared-definition file must be listed
     * here.
     */
    "@csstools/postcss-global-data": {
      files: [
        globalDataFile("./src/styles/mixins.css"),
        globalDataFile("./src/styles/breakpoints.css"),
      ],
    },
    "postcss-preset-env": {
      stage: 3,
      features: {
        /**
         * CSS Nesting Rules (Stage 2).
         *
         * https://preset-env.cssdb.org/features/#nesting-rules
         */
        "nesting-rules": true,
        /**
         * Custom Media Queries (Stage 2): named breakpoints defined with
         * `@custom-media --name (…)` and used as `@media (--name)`. The
         * definitions live in src/styles/breakpoints.css and are shared across
         * files via postcss-global-data above.
         *
         * https://preset-env.cssdb.org/features/#custom-media-queries
         */
        "custom-media-queries": true,
        /**
         * Mixins (Stage 2): define reusable declaration blocks with
         * `@mixin --name() { … }` and apply them with `@apply --name`. The
         * definitions live in src/styles/mixins.css and are shared across
         * files via postcss-global-data above.
         *
         * https://preset-env.cssdb.org/features/#mixins
         */
        mixins: true,
      },
    },
  },
};

export default config;
