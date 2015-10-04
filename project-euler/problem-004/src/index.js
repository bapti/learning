"use strict"
require("babel/register");
var _ = require('highland')

var generator = () => {
  let i = 100
  let j = 100
  return (push, next) => {
    if(i > 999 && j > 999){
      push(null, _.nil)
      return
    }

    if(i > 999){
      i = 100
      j++
      push(null, i*j)
      next()
      return
    }

    push(null, i*j)
    i++
    next()
  }
}

var max = () => {
  let max = 0
  return (err, x, push, next) => {
    if (err) {
      push(err);
      next();
    }
    else if (x === _.nil) {
      push(null, max);
      push(null, _.nil);
    }
    else {
      if (x > max) {
        max = x
      }
      next();
    }
  }
}


module.exports.larget3DigitPalindrome = (done) => {
  return _(generator())
    .filter( (product) => {
      let str = product.toString()
      return str == str.split('').reverse().join('');
    })
    .consume(max())
    .toArray((result) =>
      done(null, result[0])
    )
}
