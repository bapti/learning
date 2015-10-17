"use strict"

import _  from 'highland'

var primeFactors = (err, n, push, next) => {
  if (err) {
    push(err);
    next();
  }
  else if (n === _.nil) {
    push(null, n);
  }
  else{
    let lastFactor = 1

    // special case for divisible by 2
    let factor = 2
    if(n % factor == 0){
      push(null, factor)
      lastFactor = factor
      n = n / factor
      while(n % factor == 0){
        n = n / factor
      }
    }

    factor = 3
    let maxFactor = Math.sqrt(n)
    while( n > 1 && factor <= maxFactor){
      if( n % factor == 0 ){
        push(null, factor)
        lastFactor = factor
        n = n / factor
        while( n % factor == 0){
          n = n / factor
          maxFactor = n
        }
      }
      factor = factor + 2
    }

    if( n !== 1 ){
      push(null, n)
    }

    next()
  }
}

var max = (a, b) => {
  return a >= b ? a : b
}

export default (number, done) => {
  return _([number])
    .consume(primeFactors)
    .map((x) => {
      console.log(x);
      return x;
    })
    .reduce1(max)
    .pull(done)
}
