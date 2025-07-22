import { config, type ConfigArray } from 'typescript-eslint'
import pluginNext from '@next/eslint-plugin-next'
import { reactWithoutBrowserGlobals } from './react/react.js'

export const next: ConfigArray = config([
  // @ts-expect-error -- `rules` are presumed valid
  ...reactWithoutBrowserGlobals,
  {
    plugins: {
      '@next/next': pluginNext,
    },
    // @ts-expect-error -- `rules` are presumed valid
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
])
