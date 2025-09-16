import { config, configs, type ConfigArray } from 'typescript-eslint'
import { importX } from './importX.js'

const { strictTypeChecked, stylisticTypeChecked } = configs

export const typeScript: ConfigArray = config([
  {
    extends: [strictTypeChecked, stylisticTypeChecked],
    ignores: ['**/*.json'],
    languageOptions: {
      parserOptions: { projectService: true },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  ...importX,
])
