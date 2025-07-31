import { config } from 'typescript-eslint'
import { type ConfigArray } from 'typescript-eslint'
import { importX } from 'eslint-plugin-import-x'
import parser from '@typescript-eslint/parser'

export const importConfig: ConfigArray = config([
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    languageOptions: {
      parser,
    },
    rules: {
      'import-x/consistent-type-specifier-style': ['error', 'prefer-inline'],
    },
  },
])
