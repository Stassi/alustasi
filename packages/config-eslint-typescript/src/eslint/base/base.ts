import { type ESLint, type Linter } from 'eslint'
import { defineConfig } from 'eslint/config'

import { globalIgnores } from './globalIgnores.js'
import { javaScript } from './javaScript.js'
import { jest } from './testing/jest.js'
import { json } from './json.js'
import { noUnsanitized } from './noUnsanitized.js'
import { onlyWarn } from './onlyWarn.js'
import { perfectionist } from './perfectionist.js'
import { playwright } from './testing/playwright.js'
import { prettier } from './prettier.js'
import { turbo } from './turbo.js'
import { typeScript } from './typeScript/typeScript.js'

export type Config = Linter.Config
export type Plugin = ESLint.Plugin
export type Rules = Linter.RulesRecord

const config = defineConfig([
  ...javaScript,
  ...typeScript,
  ...noUnsanitized,
  ...jest,
  ...playwright,
  ...json,
  ...turbo,
  ...perfectionist,
  ...onlyWarn,
  ...globalIgnores,
  ...prettier,
]) satisfies Config[]

export const base: Config[] = config
