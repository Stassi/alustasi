import { config as tseslintConfig, type ConfigArray } from 'typescript-eslint'
import { configs } from 'eslint-plugin-react'
import { browser, serviceworker } from 'globals'
import { base } from '../base/base.js'
import { hooks } from './hooks.js'

function config(browserGlobals: boolean): ConfigArray {
  return tseslintConfig([
    ...base,
    configs.flat.recommended!,
    {
      languageOptions: {
        ...configs.flat.recommended!.languageOptions,
        globals: {
          ...serviceworker,
          ...(browserGlobals && browser),
        },
      },
    },
    ...hooks,
  ])
}

export const react: ConfigArray = config(true)
export const reactWithoutBrowserGlobals: ConfigArray = config(false)
