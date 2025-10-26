export function bigInt64(n: bigint | number): bigint {
  return BigInt.asUintN(64, typeof n === 'bigint' ? n : BigInt(n))
}
