export function repeat(effect: () => void, n: number): void {
  Array.from({ length: n }).forEach((): void => {
    effect()
  })
}

export function repeatCurried(effect: () => void) {
  return (n: number): void => {
    repeat(effect, n)
  }
}
