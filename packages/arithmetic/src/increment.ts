import { addCurried } from './add.js'

export const increment: (n: number) => number = addCurried(1)
