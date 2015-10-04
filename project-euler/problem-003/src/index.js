"use strict"
require("babel/register");
var _ = require('highland')
var utils = require('./utils')
var primeFactorStream = require('./prime-factors')

module.exports.largetPrimeFactor = (number, done) => {
  return primeFactorStream(number)
    .last()
    .toArray((result) =>
      done(null, result[0])
    )
}
