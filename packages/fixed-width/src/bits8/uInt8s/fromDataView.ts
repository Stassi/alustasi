export function fromDataView(x: DataView): Uint8Array {
  const { buffer, byteLength, byteOffset }: DataView = x
  return new Uint8Array(buffer, byteOffset, byteLength)
}
