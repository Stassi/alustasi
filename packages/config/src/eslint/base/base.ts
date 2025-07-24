import { configs as jsConfigs } from '@eslint/js'
import {
  config,
  configs as tsConfigs,
  type ConfigArray,
} from 'typescript-eslint'
import { ignores } from './ignores.js'
import { json } from './json.js'
import { onlyWarn } from './onlyWarn.js'
import { prettier } from './prettier.js'
import { turbo } from './turbo.js'

export const base: ConfigArray = config([
  jsConfigs.recommended,
  ...tsConfigs.recommended,
  ...json,
  ...turbo,
  ...onlyWarn,
  ...ignores,
  ...prettier,
])
