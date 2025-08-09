import {
  config,
  configs as tsConfigs,
  type ConfigArray,
} from 'typescript-eslint'
import { importX } from './importX.js'

export const typeScript: ConfigArray = config([
  {
    extends: [tsConfigs.strictTypeChecked, tsConfigs.stylisticTypeChecked],
    ignores: ['**/*.json'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: '.',
      },
    },
  },
  ...importX,
])
