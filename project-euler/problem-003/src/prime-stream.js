"use strict"

var _ = require('highland')

var generator = () => {
  let i = 2
  return (push, next) => {
    if(i === 2){
      push(null, 2)
      i = 3
      next()
      return
    }
    if (i === 3) {
      push(null, 3)
      next()
      i = 5
      return
    }
    push(null, i)
    i += 2
    next()
  }
}

module.exports = () => {
  let primes = []
  return _(generator())
    .filter((x) => {
      for( let i=0; i<primes.length; i++ ){
        if(x % primes[i] === 0 ) {
          return false
        }
      }
      primes.push(x)
      return true
    })
}
