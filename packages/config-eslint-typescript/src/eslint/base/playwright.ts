import playwrightPlugin from 'eslint-plugin-playwright'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

const {
    configs: { 'flat/recommended': recommended },
  } = playwrightPlugin,
  { rules }: Config = recommended,
  config = defineConfig([
    {
      ...recommended,
      files: ['**/*.spec.ts?(x)'],
      rules,
    },
  ]) satisfies Config[]

export const playwright: Config[] = config
