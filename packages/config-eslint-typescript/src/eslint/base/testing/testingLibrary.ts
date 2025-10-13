import { configs } from 'eslint-plugin-testing-library'
import { defineConfig } from 'eslint/config'

import { type Config } from '../base.js'
import { test } from './filesPattern.js'

const { 'flat/dom': recommendedDOM } = configs,
  config = defineConfig([
    {
      ...recommendedDOM,
      files: [test],
    },
  ]) satisfies Config[]

export const testingLibrary: Config[] = config
