/** @type {import('stylelint').Config} */
const config = {
  extends: "stylelint-config-recommended",
  plugins: ["stylelint-use-nesting"],
  rules: {
    /**
     * Eg.
     *
     * (min-width: 600px) ❌
     * (width >= 600px) ✅
     *
     * (max-width: 599px) ❌
     * (width < 600px) ✅
     */
    "media-feature-range-notation": "context",
    /**
     * Eg.
     *
     * ❌
     * .foo {
     *   color: red;
     * }
     * .foo::after {
     *   color: blue;
     * }
     *
     * ✅
     * .foo {
     *   color: red;
     *
     *   &::after {
     *     color: blue;
     *   }
     * }
     */
    "csstools/use-nesting": "always",

    /**
     * Seeing as we're using CSS Modules, we need to permit the use of the
     * "special" pseudo selector `:global`.
     */
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
  },
};

export default config;
