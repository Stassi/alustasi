import eslintPluginJsonc from 'eslint-plugin-jsonc'
import tseslint, { type ConfigArray } from 'typescript-eslint'

export const json: ConfigArray = tseslint.config([
  ...eslintPluginJsonc.configs['flat/base'],
  ...eslintPluginJsonc.configs['flat/recommended-with-json'],
  ...eslintPluginJsonc.configs['flat/prettier'],
])
