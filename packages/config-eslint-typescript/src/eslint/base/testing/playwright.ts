import playwrightPlugin from 'eslint-plugin-playwright'
import { defineConfig } from 'eslint/config'

import { type Config, type Rules } from '../base.js'
import { spec } from './filesPattern.js'

const {
    configs: { 'flat/recommended': recommended },
  } = playwrightPlugin,
  { rules }: Config = recommended,
  config = defineConfig([
    {
      ...recommended,
      files: [spec],
      rules: rules as Rules,
    },
  ]) satisfies Config[]

export const playwright: Config[] = config
