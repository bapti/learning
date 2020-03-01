export default () => {
  let i = 1
  return (push, next) => {
    push(null, i)
    i++
    next()
  }
}
