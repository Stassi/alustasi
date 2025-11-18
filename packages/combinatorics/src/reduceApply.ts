import { type Callback } from '@repo/types/Callback'

import { apply } from './apply/apply'
import { reduceCurried as reduce } from './reduce/reduceCurried'

export const reduceApply: <T>(arr: readonly Callback<T>[]) => Callback<T> =
  reduce(apply)
