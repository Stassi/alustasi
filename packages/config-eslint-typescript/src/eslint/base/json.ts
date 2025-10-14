import { configs } from 'eslint-plugin-jsonc'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

const {
    'flat/base': base,
    'flat/prettier': prettier,
    'flat/recommended-with-json': recommendedWithJSON,
  } = configs,
  config = defineConfig([
    ...base,
    ...recommendedWithJSON,
    ...prettier,
  ]) satisfies Config[]

export const json: Config[] = config
