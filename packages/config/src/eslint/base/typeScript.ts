import {
  config,
  configs as tsConfigs,
  type ConfigArray,
} from 'typescript-eslint'

export const typeScript: ConfigArray = config([
  ...tsConfigs.recommended,
  {
    files: ['**/*.json'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
])
