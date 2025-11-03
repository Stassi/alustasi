export function xor<T extends bigint | number>(x: T, y: T): T
export function xor(x: bigint | number, y: bigint | number): bigint | number {
  if (typeof x === 'number' && typeof y === 'number') return x ^ y
  if (typeof x === 'bigint' && typeof y === 'bigint') return x ^ y
  throw new TypeError('Xor parameters must be of the same type')
}
