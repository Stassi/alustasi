import { addCurried as add } from '@repo/arithmetic/addition/addCurried'
import { multiplyCurried as multiply } from '@repo/arithmetic/multiplication/multiplyCurried'
import { type Numeric } from '@repo/types/Numeric'

import { w } from './w'
import { wCurried } from './wCurried'

type Case<T extends Numeric = Numeric> = Readonly<{
  expected: T
  input: T
  numeric: 'bigint' | 'number'
}>

describe('W combinator', (): void => {
  describe.each([
    {
      arithmetic: 'add',
      cases: [
        { expected: 0, input: 0, numeric: 'number' },
        { expected: 8, input: 4, numeric: 'number' },
        { expected: 24, input: 12, numeric: 'number' },
        { expected: 24n, input: 12n, numeric: 'bigint' },
        { expected: 32n, input: 16n, numeric: 'bigint' },
      ] as const satisfies readonly Case[],
      fn: add,
      infix: '* 2',
      relation: 'double',
    },
    {
      arithmetic: 'multiply',
      cases: [
        { expected: 0, input: 0, numeric: 'number' },
        { expected: 16, input: 4, numeric: 'number' },
        { expected: 144, input: 12, numeric: 'number' },
        { expected: 144n, input: 12n, numeric: 'bigint' },
        { expected: 256n, input: 16n, numeric: 'bigint' },
      ] as const satisfies readonly Case[],
      fn: multiply,
      infix: '^2',
      relation: 'square',
    },
  ] as const)('w($arithmetic) == $relation', ({ cases, fn, infix }): void => {
    describe.each<Case>(cases)('$numeric', ({ expected, input }): void => {
      const label =
        `should satisfy ${String(input)} ${infix} === ${String(expected)}` as const

      it(label, (): void => {
        expect(w(fn, input)).toBe(expected)
      })

      describe('curried', (): void => {
        it(label, (): void => {
          expect(wCurried(fn)(input)).toBe(expected)
        })
      })
    })
  })
})
