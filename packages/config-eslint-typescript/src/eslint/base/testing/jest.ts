import { configs } from 'eslint-plugin-jest'
import { defineConfig } from 'eslint/config'

import { type Config } from '../base.js'
import { test } from './filesPattern.js'

const { 'flat/recommended': recommended, 'flat/style': style } = configs,
  config = defineConfig([
    {
      ...recommended,
      ...style,
      files: [test],
    },
  ]) satisfies Config[]

export const jest: Config[] = config
