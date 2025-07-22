import { configs } from 'eslint-plugin-jsonc'
import { config, type ConfigArray } from 'typescript-eslint'

export const json: ConfigArray = config([
  ...configs['flat/base'],
  ...configs['flat/recommended-with-json'],
  ...configs['flat/prettier'],
])
