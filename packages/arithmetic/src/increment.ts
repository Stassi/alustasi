import { addCurried } from './add'

export const increment: (n: number) => number = addCurried(1)
