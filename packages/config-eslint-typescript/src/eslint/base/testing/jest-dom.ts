import { configs } from 'eslint-plugin-jest-dom'
import { defineConfig } from 'eslint/config'

import { type Config } from '../base.js'

const { 'flat/recommended': recommended } = configs,
  { rules }: Config = recommended,
  config = defineConfig([
    {
      ...recommended,
      files: ['**/*.test.ts?(x)'],
      rules,
    },
  ]) satisfies Config[]

export const jestDOM: Config[] = config
