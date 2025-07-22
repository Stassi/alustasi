import eslintPluginJsonc from 'eslint-plugin-jsonc'
import { config, type ConfigArray } from 'typescript-eslint'

export const json: ConfigArray = config([
  ...eslintPluginJsonc.configs['flat/base'],
  ...eslintPluginJsonc.configs['flat/recommended-with-json'],
  ...eslintPluginJsonc.configs['flat/prettier'],
])
