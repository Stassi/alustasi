import parser from '@typescript-eslint/parser'
import { importX } from 'eslint-plugin-import-x'
import { config } from 'typescript-eslint'
import { type ConfigArray } from 'typescript-eslint'

export const importConfig: ConfigArray = config([
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    languageOptions: {
      parser,
    },
    rules: {
      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
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
