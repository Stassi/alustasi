export function add(a: number, b: number): number {
  return a + b
}

export function addCurried(a: number) {
  return (b: number): number => add(a, b)
}
