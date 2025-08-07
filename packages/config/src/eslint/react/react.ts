import { config as tseslintConfig, type ConfigArray } from 'typescript-eslint'
import { configs, type ReactFlatConfig } from 'eslint-plugin-react'
import { browser, serviceworker } from 'globals'
import { base } from '../base/base.js'
import { hooks } from './hooks.js'

const defaultRecommended = {
    languageOptions: {},
  },
  {
    flat: { 'jsx-runtime': jsxRuntime = {}, recommended = defaultRecommended },
  } = configs,
  { languageOptions }: ReactFlatConfig | typeof defaultRecommended = recommended

function config(browserGlobals: boolean): ConfigArray {
  return tseslintConfig([
    ...base,
    recommended,
    jsxRuntime,
    {
      languageOptions: {
        ...languageOptions,
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
