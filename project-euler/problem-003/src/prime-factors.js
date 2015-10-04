"use strict"
require("babel/register");
var _ = require('highland')
var utils = require('./utils')
var primeStream = require('./prime-stream')

module.exports = (number) => {
  return primeStream()
    .consume(utils.takeWhile((x) => {
      return (x*x) <= number
    }))
    .filter((prime) => {
      return number % prime === 0
    })
}
