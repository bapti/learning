"use strict"

import _  from 'highland'
import {reducers, primeFactors} from  "./../../highland-utils/src/index"

export default (number, done) => {
  return _(primeFactors(number))
    .reduce1(reducers.max)
    .pull(done)
}
