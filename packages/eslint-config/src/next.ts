import tseslint, { type ConfigArray } from 'typescript-eslint'
import pluginNext from '@next/eslint-plugin-next'
import { reactWithoutBrowserGlobals } from './react.js'

export const next: ConfigArray = tseslint.config([
  // @ts-expect-error -- rules are valid
  ...reactWithoutBrowserGlobals,
  {
    plugins: {
      '@next/next': pluginNext,
    },
    // @ts-expect-error -- rules are valid
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
])
