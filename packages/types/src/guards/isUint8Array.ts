export function isUint8Array(x: unknown): x is Uint8Array {
  return x instanceof Uint8Array
}
