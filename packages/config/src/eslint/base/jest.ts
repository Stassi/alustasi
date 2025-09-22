import { configs } from 'eslint-plugin-jest'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

const {
  'flat/recommended': recommended,
  'flat/style': style,
}: Record<`flat/${'all' | 'recommended' | 'style'}`, Config> = configs

export const jest = defineConfig([
  {
    files: ['**/*.test.ts?(x)'],
    ...recommended,
    ...style,
  },
]) satisfies Config[]
