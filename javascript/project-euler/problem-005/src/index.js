"use strict"

import _ from 'highland'
import {reducers, primeFactors, naturalNumbers} from  "./../../highland-utils/src/index"

var reducePrimeFactors = (a, b) => {
  let prime = b[0]
  let product = b.reduce(reducers.product)
  let existingPrimeArray = a.find((element) => {
    return element[0] == prime
  })

  if( existingPrimeArray ) {
    let existingPrimeProduct = existingPrimeArray.reduce(reducers.product)
    if ( product > existingPrimeProduct ) {
      a[a.indexOf(existingPrimeArray)] = b
    }
  } else {
    a.push(b)
  }
  return a
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
    .reduce([], reducePrimeFactors)
    .flatten()
    .reduce1(reducers.product)
    .pull(done)
}
