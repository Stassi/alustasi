import { configs as jsConfigs } from '@eslint/js'
import turbo from 'eslint-plugin-turbo'
import {
  config,
  configs as tsConfigs,
  type ConfigArray,
} from 'typescript-eslint'
// @ts-expect-error -- untyped module
import onlyWarnUntyped from 'eslint-plugin-only-warn'
import { json } from './json.js'
import { prettier } from './prettier.js'

const onlyWarn = <typeof turbo>onlyWarnUntyped

export const base: ConfigArray = config([
  jsConfigs.recommended,
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
  ...prettier,
])
