import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turbo from "eslint-plugin-turbo";
import tseslint, { type ConfigArray } from "typescript-eslint";
// @ts-ignore
import onlyWarnUntyped from "eslint-plugin-only-warn";

const onlyWarn = <typeof turbo>onlyWarnUntyped

export const baseConfig: ConfigArray = tseslint.config([
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
]);
