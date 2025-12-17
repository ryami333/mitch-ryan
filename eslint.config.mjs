import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import { globalIgnores } from "eslint/config";
import typescriptEslint from "typescript-eslint";

const eslintConfig = [
  globalIgnores([
    "public/**",
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/__generated__/**",
  ]),
  eslint.configs.recommended,
  ...typescriptEslint.configs.strict,
  nextPlugin.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        { "ts-ignore": "allow-with-description" },
      ],
    },
  },
];

export default eslintConfig;
