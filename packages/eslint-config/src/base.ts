import { configs as jsConfigs } from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import turbo from 'eslint-plugin-turbo'
import {
  config,
  configs as tsConfigs,
  type ConfigArray,
} from 'typescript-eslint'
// @ts-expect-error -- untyped module
import onlyWarnUntyped from 'eslint-plugin-only-warn'
import { json } from './json.js'

const onlyWarn = <typeof turbo>onlyWarnUntyped

export const base: ConfigArray = config([
  jsConfigs.recommended,
  eslintConfigPrettier,
  ...tsConfigs.recommended,
  ...json,
  {
    plugins: {
      turbo,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'lf',
          printWidth: 80,
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          useTabs: false,
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
])
