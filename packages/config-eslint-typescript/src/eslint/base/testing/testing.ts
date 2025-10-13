import { defineConfig } from 'eslint/config'

import { type Config } from '../base.js'
import { jest } from './jest.js'
import { jestDOM } from './jestDOM.js'
import { playwright } from './playwright.js'
import { testingLibrary } from './testingLibrary.js'

const config = defineConfig([
  ...jest,
  ...jestDOM,
  ...playwright,
  ...testingLibrary,
]) satisfies Config[]

export const testing: Config[] = config
