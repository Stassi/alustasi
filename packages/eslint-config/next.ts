import tseslint, { type ConfigArray } from 'typescript-eslint'
import pluginNext from '@next/eslint-plugin-next'
import { reactConfig } from './react.js'

export const nextJsConfig: ConfigArray = tseslint.config([
  // @ts-expect-error -- rules are valid
  ...reactConfig(false),
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
