import { defineConfig } from 'eslint/config'
import { configs } from 'typescript-eslint'
import { type Config } from '../base.js'
import { importX } from './importX.js'

const { strictTypeChecked, stylisticTypeChecked } = configs

export const typeScript = defineConfig([
  {
    extends: [strictTypeChecked, stylisticTypeChecked],
    ignores: ['**/*.json'],
    languageOptions: {
      parserOptions: { projectService: true },
    },
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/sort-type-constituents': 'off',
    },
  },
  ...importX,
]) satisfies Config[]
