export function hex64(n: { toString: (radix: number) => string }): string {
  return n.toString(16).padStart(16, '0')
}
