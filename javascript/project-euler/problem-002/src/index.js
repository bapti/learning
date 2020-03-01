"use strict"

import _ from 'highland'
import { fibonacci, takeWhile } from "./../../highland-utils/src/index"

module.exports.sumEvensLessThan = (count, done) => {
  _(fibonacci())
    .consume(takeWhile((x) => {
      return x < count
    }))
    .filter((item) => {
      return item % 2 === 0
    })
    .reduce1((a , b) => {
      return a + b
    })
    .pull( done )
}
