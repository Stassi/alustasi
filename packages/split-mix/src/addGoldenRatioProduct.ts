import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { weylSequence64 } from '@repo/sequences/orbit/invariants/weylSequence64'
import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallback } from '@repo/types/NumericCallback'

export const addGoldenRatioProduct = (
  steps: Numeric,
): NumericCallback<Numeric> => add(weylSequence64().jump(steps).result)
