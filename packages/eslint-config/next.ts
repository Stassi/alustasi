import tseslint, { type ConfigArray } from "typescript-eslint";
import pluginNext from "@next/eslint-plugin-next";
import { reactConfig } from "./react.js";

export const nextJsConfig: ConfigArray = tseslint.config([
  // @ts-ignore
  ...reactConfig(false),
  // @ts-ignore
  {
    plugins: {
      "@next/next": pluginNext,
    },
    // @ts-ignore
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
]);
