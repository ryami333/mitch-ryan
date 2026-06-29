import { fileURLToPath } from "node:url";

const mixinsFile = fileURLToPath(
  new URL("./src/styles/mixins.css", import.meta.url),
);

const config = {
  plugins: {
    /**
     * Inject the shared mixin definitions from `src/styles/mixins.css` into
     * every file's PostCSS run (and strip them again before output), so the
     * preset-env `mixins` feature below can resolve `@apply` across CSS
     * Modules. Vite processes each module in isolation, so without this the
     * `@mixin` definitions would be invisible outside the file that declares
     * them — and an unresolved `@apply` ships silently as broken CSS. This is
     * the same mechanism `@custom-media` / custom properties need to resolve
     * across modules.
     */
    "@csstools/postcss-global-data": {
      files: [mixinsFile],
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
