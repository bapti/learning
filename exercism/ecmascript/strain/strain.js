const keep = (arr, predicate) =>
  arr.reduce((acc, x) => predicate(x) ? [...acc, x] : acc, [])
const not = fn => (...args) => !fn(...args)
const discard = (arr, predicate) => keep(arr, not(predicate))

export default {
  keep,
  discard
}
