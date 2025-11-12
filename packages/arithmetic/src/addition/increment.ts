import { type NumberCallback } from '@repo/types/NumericCallback'

import { addCurried as add } from './addCurried'

export const increment = add(1) as NumberCallback
