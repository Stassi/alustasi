import tseslint, { type ConfigArray } from 'typescript-eslint'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import { base } from './base/base.js'

function config(browserGlobals: boolean): ConfigArray {
  return tseslint.config([
    ...base,
    pluginReact.configs.flat.recommended!,
    {
      languageOptions: {
        ...pluginReact.configs.flat.recommended!.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...(browserGlobals && globals.browser),
        },
      },
    },
    {
      plugins: {
        'react-hooks': pluginReactHooks,
      },
      settings: { react: { version: 'detect' } },
      rules: {
        ...pluginReactHooks.configs.recommended.rules,
        'react/react-in-jsx-scope': 'off',
      },
    },
  ])
}

export const react: ConfigArray = config(true)
export const reactWithoutBrowserGlobals: ConfigArray = config(false)
