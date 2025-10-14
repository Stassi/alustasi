import { type ESLint, type Linter } from 'eslint'
import { defineConfig } from 'eslint/config'

import { globalIgnores } from './globalIgnores.js'
import { javaScript } from './javaScript.js'
import { jsonc } from './jsonc.js'
import { noUnsanitized } from './noUnsanitized.js'
import { onlyWarn } from './onlyWarn.js'
import { perfectionist } from './perfectionist.js'
import { prettier } from './prettier.js'
import { testing } from './testing/testing.js'
import { turbo } from './turbo.js'
import { typeScript } from './typeScript/typeScript.js'

export type Config = Linter.Config
export type Plugin = ESLint.Plugin
export type Rules = Linter.RulesRecord

const config = defineConfig([
  ...javaScript,
  ...typeScript,
  ...noUnsanitized,
  ...testing,
  ...jsonc,
  ...turbo,
  ...perfectionist,
  ...onlyWarn,
  ...globalIgnores,
  ...prettier,
]) satisfies Config[]

export const base: Config[] = config
