import hooksPlugin from 'eslint-plugin-react-hooks'
import { defineConfig } from 'eslint/config'

import { type Config } from '../base/base.js'

const {
  // @ts-expect-error -- improperly typed upstream
  configs: {
    flat: { recommended },
  },
} = hooksPlugin

const config = defineConfig([recommended]) satisfies Config[]

export const hooks: Config[] = config
