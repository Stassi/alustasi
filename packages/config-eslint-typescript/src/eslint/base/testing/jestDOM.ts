import { configs } from 'eslint-plugin-jest-dom'
import { defineConfig } from 'eslint/config'

import { type Config, type Rules } from '../base.js'
import { test } from './filesPattern.js'

const { 'flat/recommended': recommended } = configs,
  { rules }: Config = recommended,
  config = defineConfig([
    {
      ...recommended,
      files: [test],
      rules: rules as Rules,
    },
  ]) satisfies Config[]

export const jestDOM: Config[] = config
