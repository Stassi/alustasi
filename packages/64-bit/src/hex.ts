import { uInt64 } from './uInt'

export function hex64(n: bigint | number): string {
  return uInt64(n).toString(16).padStart(16, '0')
}
