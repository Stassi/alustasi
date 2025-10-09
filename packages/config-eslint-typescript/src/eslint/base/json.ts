import { configs } from 'eslint-plugin-jsonc'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

const config = defineConfig([
  ...configs['flat/base'],
  ...configs['flat/recommended-with-json'],
  ...configs['flat/prettier'],
]) satisfies Config[]

export const json: Config[] = config
