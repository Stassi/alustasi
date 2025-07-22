import { config as tseslintConfig, type ConfigArray } from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import { base } from '../base/base.js'
import { hooks } from './hooks.js'

function config(browserGlobals: boolean): ConfigArray {
  return tseslintConfig([
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
    ...hooks,
  ])
}

export const react: ConfigArray = config(true)
export const reactWithoutBrowserGlobals: ConfigArray = config(false)
