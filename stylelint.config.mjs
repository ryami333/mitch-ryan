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
     * Ban shorthands in favour of explicit longhands. The longhands and
     * shorthands have distinct property names, so listing the bare shorthands
     * here leaves `margin-inline`, `row-gap`, … untouched:
     *
     *   - `margin` / `padding` → logical longhands (`margin-inline`, `margin-block`, …)
     *   - `gap` → `row-gap` / `column-gap`
     */
    "property-disallowed-list": [
      ["margin", "padding", "gap"],
      {
        message: (name) => {
          switch (name) {
            case "gap":
              return `Don't use the "gap" shorthand — use "row-gap" / "column-gap" instead.`;
            case "margin":
            case "padding":
              return `Don't use the "${name}" shorthand — use the logical longhands instead (e.g. ${name}-inline / ${name}-block).`;
            default:
              throw new Error(
                `Unhandled property "${name}" in property-disallowed-list message.`,
              );
          }
        },
      },
    ],

    /**
     * Permit the preset-env `mixins` at-rules (see postcss.config.mjs):
     * `@mixin` definitions in src/styles/mixins.css and `@apply` at each
     * call site.
     */
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["mixin", "apply"],
      },
    ],

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
