import { configs } from '@eslint/js'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

const config = defineConfig([
  configs.recommended,
  {
    rules: {
      'sort-imports': 'off',
    },
  },
]) satisfies Config[]

export const javaScript: Config[] = config
