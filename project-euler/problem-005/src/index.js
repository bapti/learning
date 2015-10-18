"use strict"

import _ from 'highland'
import {reducers, primeFactors, naturalNumbers} from  "./../../highland-utils/src/index"

var reducePrimeFactors = () => {
  let primesAndProducts = []
  return (err, arrayOfPrimes, push, next) => {
    if (err) {
      push(err)
      next()
    }
    else if (arrayOfPrimes === _.nil) {
      primesAndProducts.forEach((item) => {
        push(null, item.arrayOfPrimes)
      })
      push(null, _.nil);
    }
    else {
      let prime = arrayOfPrimes[0]
      let product = arrayOfPrimes.reduce(reducers.product)
      let primeAndProduct = primesAndProducts.find((element) => {
        return element.prime == prime
      })
      if( primeAndProduct ) {
        if ( primeAndProduct.product < product ) {
          primeAndProduct.product = product
          primeAndProduct.arrayOfPrimes = arrayOfPrimes
        }
      } else {
        primesAndProducts.push({
          prime,
          product,
          arrayOfPrimes
        })
      }
      next()
    }
  }
}

var primeFactorGenerator = (n) => {
  return _(primeFactors.generator(n))
    .group(x => { return x })
    .flatMap(x => { return _.values(x) })
}

export default (n, done) => {
  return _(naturalNumbers())
    .take(n)
    .flatMap(x => primeFactorGenerator(x))
    .consume(reducePrimeFactors())
    .flatten()
    .reduce1(reducers.product)
    .pull(done)
}
