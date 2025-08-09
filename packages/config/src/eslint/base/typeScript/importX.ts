import parser from '@typescript-eslint/parser'
import { importX as importXPlugin } from 'eslint-plugin-import-x'
import { config, type ConfigArray } from 'typescript-eslint'

const {
  flatConfigs: { recommended, typescript },
} = importXPlugin

export const importX: ConfigArray = config([
  recommended,
  typescript,
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
])
