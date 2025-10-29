import { addCurried } from './addCurried'

export const increment: (n: number) => number = addCurried(1)
