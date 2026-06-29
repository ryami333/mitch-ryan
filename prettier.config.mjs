/**
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [
    "prettier-plugin-css-order",
    "@trivago/prettier-plugin-sort-imports",

    /**
     * This plugin is basically just a bolt-on performance improvement, it just
     * replaces the built-in parser with a Rust-based one for huge performance
     * benefits. There are no formatting opinions expressed by the inclusion of
     * this plugin, so if it causes any issues whatsoever then it should just be
     * removed again.
     */
    "@prettier/plugin-oxc",
  ],
  cssDeclarationSorterKeepOverrides: true,
  importOrder: ["^(?!.*\\.css$).*$", "^.+\\.css$"],
  importOrderSortSpecifiers: true,
  importOrderSideEffects: false,
};

export default config;
