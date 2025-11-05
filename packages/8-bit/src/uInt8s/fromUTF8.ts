export function fromUTF8(x: string): Uint8Array {
  return new TextEncoder().encode(x)
}
