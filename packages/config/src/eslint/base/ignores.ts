import { config, type ConfigArray } from 'typescript-eslint'

export const ignores: ConfigArray = config([
  {
    ignores: ['.next/**', '.turbo/**', 'dist/**', 'node_modules/**'],
  },
])
