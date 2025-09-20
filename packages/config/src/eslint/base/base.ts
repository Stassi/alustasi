import { type ESLint, type Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import { globalIgnores } from './globalIgnores.js'
import { javaScript } from './javaScript.js'
import { json } from './json.js'
import { noUnsanitized } from './noUnsanitized.js'
import { onlyWarn } from './onlyWarn.js'
import { perfectionist } from './perfectionist.js'
import { prettier } from './prettier.js'
import { turbo } from './turbo.js'
import { typeScript } from './typeScript/typeScript.js'

export type Config = Linter.Config
export type Rules = Linter.RulesRecord
export type Plugin = ESLint.Plugin

export const base = defineConfig([
  ...javaScript,
  ...typeScript,
  ...noUnsanitized,
  ...json,
  ...turbo,
  ...perfectionist,
  ...onlyWarn,
  ...globalIgnores,
  ...prettier,
]) satisfies Config[]
