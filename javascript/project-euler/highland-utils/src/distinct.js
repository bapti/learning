
var distinct = () => {
  let nums = []
  return (err, x, push, next) => {
    if (err) {
      push(err)
      next()
    }
    else if (x === _.nil) {
      push(null, x);
    }
    else {
      if(!nums.includes(x)){
        nums.push(x)
        push(null, x)
      }
      next()
    }
  }
}
