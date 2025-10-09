import { type ReactFlatConfig, configs } from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import { browser, serviceworker } from 'globals'

import { type Config, base } from '../base/base.js'
import { hooks } from './hooks.js'

const defaultRecommended = {
    languageOptions: {},
  },
  {
    flat: { 'jsx-runtime': jsxRuntime = {}, recommended = defaultRecommended },
  } = configs,
  { languageOptions }: ReactFlatConfig | typeof defaultRecommended = recommended

function config(browserGlobals: boolean): Config[] {
  return defineConfig([
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
  ]) satisfies Config[]
}

export const react: Config[] = config(true)
export const reactWithoutBrowserGlobals: Config[] = config(false)
