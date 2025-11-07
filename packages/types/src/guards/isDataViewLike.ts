export function isDataViewLike(x: unknown): x is DataView {
  return x instanceof DataView
}
