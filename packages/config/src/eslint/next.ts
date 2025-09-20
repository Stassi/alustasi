import nextPlugin, { configs } from '@next/eslint-plugin-next'
import { type Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import { type Config, type Plugin } from './base/base.js'
import { reactWithoutBrowserGlobals } from './react/react.js'

type Rules = Partial<Linter.RulesRecord>

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
