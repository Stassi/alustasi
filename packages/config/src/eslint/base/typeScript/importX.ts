import parser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import { importX as importXPlugin } from 'eslint-plugin-import-x'
import { type Config } from '../base.js'

const {
  flatConfigs: { recommended, typescript },
} = importXPlugin

export const importX = defineConfig([
  recommended as Config,
  typescript as Config,
  {
    languageOptions: {
      parser,
    },
    rules: {
      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
      'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
      'import-x/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          named: { enabled: true, types: 'types-last' },
        },
      ],
    },
  },
]) satisfies Config[]
