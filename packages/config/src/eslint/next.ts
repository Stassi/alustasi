import nextPlugin, { configs } from '@next/eslint-plugin-next'
import { config, type ConfigArray } from 'typescript-eslint'
import { reactWithoutBrowserGlobals } from './react/react.js'

export const next: ConfigArray = config([
  // @ts-expect-error -- `rules` are presumed valid
  ...reactWithoutBrowserGlobals,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    // @ts-expect-error -- `rules` are presumed valid
    rules: {
      ...configs.recommended.rules,
      ...configs['core-web-vitals'].rules,
    },
  },
])
