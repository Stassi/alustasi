import { configs as jsConfigs } from '@eslint/js'
import { config, type ConfigArray } from 'typescript-eslint'

export const javaScript: ConfigArray = config([
  jsConfigs.recommended,
  {
    ignores: ['**/*.json'],
    rules: {
      'sort-keys': ['error', 'asc'],
    },
  },
])
