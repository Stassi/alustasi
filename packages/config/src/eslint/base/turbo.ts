import turboPlugin from 'eslint-plugin-turbo'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

export const turbo = defineConfig([
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
]) satisfies Config[]
