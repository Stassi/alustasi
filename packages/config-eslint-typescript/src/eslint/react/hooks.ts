import { configs } from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'

import { type Config } from '../base/base.js'

const {
    flat: { recommended },
  } = configs,
  config = defineConfig([recommended]) satisfies Config[]

export const hooks: Config[] = config
