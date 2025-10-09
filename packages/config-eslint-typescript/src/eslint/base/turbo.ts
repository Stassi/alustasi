import turboPlugin from 'eslint-plugin-turbo'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

const config = defineConfig([
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
]) satisfies Config[]

export const turbo: Config[] = config
