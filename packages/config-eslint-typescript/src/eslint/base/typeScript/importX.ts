import parser from '@typescript-eslint/parser'
import { importX as importXPlugin } from 'eslint-plugin-import-x'
import { defineConfig } from 'eslint/config'

import { type Config } from '../base.js'

const {
  flatConfigs: { recommended, typescript },
} = importXPlugin

const config = defineConfig([
  recommended as Config,
  typescript as Config,
  {
    languageOptions: {
      parser,
    },
    rules: {
      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
      'import-x/order': 'off',
    },
  },
]) satisfies Config[]

export const importX: Config[] = config
