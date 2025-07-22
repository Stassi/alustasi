import turboPlugin from 'eslint-plugin-turbo'
import { config, type ConfigArray } from 'typescript-eslint'

export type ESLintPlugin = typeof turboPlugin

export const turbo: ConfigArray = config([
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
])
