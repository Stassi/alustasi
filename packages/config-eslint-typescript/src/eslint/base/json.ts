import { configs } from 'eslint-plugin-jsonc'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

export const json = defineConfig([
  ...configs['flat/base'],
  ...configs['flat/recommended-with-json'],
  ...configs['flat/prettier'],
]) satisfies Config[]
