import { configs } from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

export const perfectionist = defineConfig([
  configs['recommended-alphabetical'],
]) satisfies Config[]
