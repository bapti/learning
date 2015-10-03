"use strict"

var _ = require('highland')

var fibonacciGenerator = function() {
    let a = 1, b = 2
    return (push, next) => {
        push(null, a)
        b = a + b;
        a = b - a;
        next()
    }
};

var takeWhile = (f) => {
  return (err, x, push, next) => {
    if (err) {
      // pass errors along the stream and consume next value
      push(err);
      next();
    }
    else if (x === _.nil) {
      // pass nil (end event) along the stream
      push(null, x);
    }
    else {
      // pass on the value only if the value passes the predicate
      if (f(x)) {
        push(null, x);
        next();
      } else {
        push(null, _.nil)
      }
    }
  }
}

module.exports.sumEvensLessThan = (count, done) => {
  _(fibonacciGenerator())
    .consume(takeWhile((x) => {
      return x < count
    }))
    .filter((item) => {
      return item % 2 === 0
    })
    .reduce(0, (a , b) => {
      return a + b
    })
    .toArray( (result) => {
      done(null, result[0])
    })
}
