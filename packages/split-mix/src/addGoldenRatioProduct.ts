import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { type Numeric } from '@repo/types/Numeric'
import { type NumericCallback } from '@repo/types/NumericCallback'
import { weylSequence64 } from '@repo/weyl-sequence/weylSequence64'

export const addGoldenRatioProduct = (
  steps: Numeric,
): NumericCallback<Numeric> => add(weylSequence64().jump(steps).result)
