import { configs } from 'eslint-plugin-jest'
import { defineConfig } from 'eslint/config'

import { type Config } from '../base.js'

const { 'flat/recommended': recommended, 'flat/style': style } = configs
const config = defineConfig([
  {
    files: ['**/*.test.ts?(x)'],
    ...recommended,
    ...style,
  },
]) satisfies Config[]

export const jest: Config[] = config
