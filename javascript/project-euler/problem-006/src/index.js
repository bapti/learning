"use strict"

import _ from 'highland'
import {reducers, naturalNumbers} from  "./../../highland-utils/src/index"


export function sumOfSquares(n) {
  return _(naturalNumbers())
    .take(n)
    .map((x) => {
       return x*x
    })
    .reduce1(reducers.add)
}

export function squareOfSum(n) {
  return _(naturalNumbers())
    .take(n)
    .reduce1(reducers.add)
    .map(x => {
      return x*x
    })
}

export function difference(n, done) {
  return squareOfSum(n)
    .concat(sumOfSquares(n))
    .take(2)
    .toArray((results) => {
      let difference = results[0] - results[1]
      done(null, difference)
    })
}

export function difference2(n){
  let sum = (n*(n+1))/2
  let sum_sq = (((2*n)+1)*(n+1)*n)/6
  return((sum*sum) - sum_sq)
}
