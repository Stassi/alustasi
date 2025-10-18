import hooksPlugin from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'

import { type Config, type Plugin } from '../base/base.js'

const {
    configs: {
      flat: { recommended },
    },
  } = hooksPlugin as unknown as {
    configs: { flat: { recommended: Config } }
  } & Plugin,
  config = defineConfig([recommended]) satisfies Config[]

export const hooks: Config[] = config
