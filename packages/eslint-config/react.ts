import tseslint, { type ConfigArray } from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import { baseConfig } from "./base.js";

export function reactConfig(browserGlobals: boolean): ConfigArray {
  return tseslint.config([
    ...baseConfig,
    pluginReact.configs.flat.recommended!,
    // @ts-ignore
    {
      languageOptions: {
        ...pluginReact.configs.flat.recommended!.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...(browserGlobals && globals.browser),
        },
      },
    },
    // @ts-ignore
    {
      plugins: {
        "react-hooks": pluginReactHooks,
      },
      settings: { react: { version: "detect" } },
      rules: {
        ...pluginReactHooks.configs.recommended.rules,
        "react/react-in-jsx-scope": "off",
      },
    },
  ])
}
