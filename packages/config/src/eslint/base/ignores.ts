import { config, type ConfigArray } from 'typescript-eslint'

export const ignores: ConfigArray = config([
  {
    ignores: ['dist/**'],
  },
])
