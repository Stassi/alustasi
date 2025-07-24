import { config, type ConfigArray } from 'typescript-eslint'

export const ignores: ConfigArray = config([
  {
    ignores: ['.next/**', 'dist/**', 'node_modules/**'],
  },
])
