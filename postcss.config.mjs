const config = {
  plugins: {
    "postcss-preset-env": {
      stage: 3,
      features: {
        /**
         * We want to use CSS Nesting Rules, which are currently Stage 2. Once
         * these rules go to Stage 3, we can probably update our dependencies
         * and remove this config file again to defer to Next's defualts.
         *
         * https://preset-env.cssdb.org/features/#nesting-rules
         */
        "nesting-rules": true,
        /**
         * Enable `@mixin` / `@apply` (also Stage 2). Define reusable
         * declaration blocks with `@mixin --name() { … }` and apply them with
         * `@apply --name`.
         *
         * https://preset-env.cssdb.org/features/#mixins
         */
        mixins: true,
      },
    },
  },
};

export default config;
