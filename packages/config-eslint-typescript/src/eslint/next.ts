import nextPlugin, { configs } from '@next/eslint-plugin-next'
import { defineConfig } from 'eslint/config'

import { type Config, type Plugin, type Rules } from './base/base.js'
import { reactWithoutBrowserGlobals } from './react/react.js'

export const next = defineConfig([
  ...reactWithoutBrowserGlobals,
  {
    plugins: {
      '@next/next': nextPlugin as Plugin,
    },
    rules: {
      ...(configs.recommended.rules as Rules),
      ...(configs['core-web-vitals'].rules as Rules),
    },
  },
]) satisfies Config[]
