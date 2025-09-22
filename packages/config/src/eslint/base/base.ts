import { type ESLint, type Linter } from 'eslint'
import { defineConfig } from 'eslint/config'

import { globalIgnores } from './globalIgnores.js'
import { javaScript } from './javaScript.js'
import { jest } from './jest.js'
import { json } from './json.js'
import { noUnsanitized } from './noUnsanitized.js'
import { onlyWarn } from './onlyWarn.js'
import { perfectionist } from './perfectionist.js'
import { prettier } from './prettier.js'
import { turbo } from './turbo.js'
import { typeScript } from './typeScript/typeScript.js'

export type Config = Linter.Config
export type Plugin = ESLint.Plugin
export type Rules = Linter.RulesRecord

export const base = defineConfig([
  ...javaScript,
  ...typeScript,
  ...noUnsanitized,
  ...jest,
  ...json,
  ...turbo,
  ...perfectionist,
  ...onlyWarn,
  ...globalIgnores,
  ...prettier,
]) satisfies Config[]
