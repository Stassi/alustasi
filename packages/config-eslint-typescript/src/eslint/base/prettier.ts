import prettierConfig from 'eslint-config-prettier'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

const config = defineConfig([
  prettierConfig,
  prettierPluginRecommended,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'lf',
          printWidth: 80,
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          useTabs: false,
        },
      ],
    },
  },
]) satisfies Config[]

export const prettier: Config[] = config
