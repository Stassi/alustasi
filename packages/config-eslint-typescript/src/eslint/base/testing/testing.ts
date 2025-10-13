import { defineConfig } from 'eslint/config'

import { type Config } from '../base.js'
import { jestDOM } from './jest-dom.js'
import { jest } from './jest.js'
import { playwright } from './playwright.js'

const config = defineConfig([
  ...jest,
  ...jestDOM,
  ...playwright,
]) satisfies Config[]

export const testing: Config[] = config
