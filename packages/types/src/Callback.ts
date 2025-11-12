export type Callback<T> = (x: T) => T
export type CallbackBinary<T> = (x: T, y: T) => T
export type CallbackBinaryCurried<T, R = T> = (x: T) => (x: T) => R
