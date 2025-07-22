import { configs as jsConfigs } from '@eslint/js'
import {
  config,
  configs as tsConfigs,
  type ConfigArray,
} from 'typescript-eslint'
// @ts-expect-error -- untyped module
import onlyWarnUntyped from 'eslint-plugin-only-warn'
import { json } from './json.js'
import { prettier } from './prettier.js'
import { turbo, type ESLintPlugin } from './turbo.js'

const onlyWarn = <ESLintPlugin>onlyWarnUntyped

export const base: ConfigArray = config([
  jsConfigs.recommended,
  ...tsConfigs.recommended,
  ...json,
  ...turbo,
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
