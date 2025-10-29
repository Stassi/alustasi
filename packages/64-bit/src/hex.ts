import { bigInt64 } from './bigInt'

export function hex64(n: bigint | number): string {
  return bigInt64(n).toString(16).padStart(16, '0')
}
