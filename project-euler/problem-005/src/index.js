"use strict"
require("babel/register");
var _ = require('highland')

var generator = () => {
  let i = 20
  return (push, next) => {
    i++
    push(null, i)
    next()
  }
}

module.exports.smallestMultiple = (tests, done) => {
  return _(generator())
    .filter( (i) => {
      if (i%10 === 0){
        console.log("Trying " + i);
      }

      let isDivEven = true
      tests.forEach((x) => {
        isDivEven = isDivEven && (i % x === 0)
      })

      return isDivEven
    })
    .take(1)
    .toArray((result) =>
      done(null, result[0])
    )
}
