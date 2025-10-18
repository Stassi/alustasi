import turboPlugin from 'eslint-plugin-turbo'
import { defineConfig } from 'eslint/config'

import { type Config, type Plugin } from './base.js'

const config = defineConfig([
  {
    plugins: {
      turbo: turboPlugin as Plugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
]) satisfies Config[]

export const turbo: Config[] = config
