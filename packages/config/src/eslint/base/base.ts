import { config, type ConfigArray } from 'typescript-eslint'
import { ignores } from './ignores.js'
import { importX } from './importX.js'
import { javaScript } from './javaScript.js'
import { json } from './json.js'
import { noUnsanitized } from './noUnsanitized.js'
import { onlyWarn } from './onlyWarn.js'
import { prettier } from './prettier.js'
import { turbo } from './turbo.js'
import { typeScript } from './typeScript.js'

export const base: ConfigArray = config([
  ...javaScript,
  ...typeScript,
  ...noUnsanitized,
  ...json,
  ...turbo,
  ...onlyWarn,
  ...importX,
  ...ignores,
  ...prettier,
])
