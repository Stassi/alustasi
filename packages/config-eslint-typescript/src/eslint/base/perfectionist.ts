import { configs } from 'eslint-plugin-perfectionist'
import { defineConfig } from 'eslint/config'

import { type Config } from './base.js'

const config = defineConfig([
  configs['recommended-alphabetical'],
  {
    rules: {
      'perfectionist/sort-named-imports': [
        'error',
        {
          groups: ['type-import', 'value-import'],
        },
      ],
    },
  },
]) satisfies Config[]

export const perfectionist: Config[] = config
