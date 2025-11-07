export function isArrayBufferLike(x: unknown): x is ArrayBuffer {
  return x instanceof ArrayBuffer
}
