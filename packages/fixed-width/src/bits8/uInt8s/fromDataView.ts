export function fromDataView({
  buffer,
  byteLength,
  byteOffset,
}: DataView): Uint8Array {
  return new Uint8Array(buffer, byteOffset, byteLength)
}
