// primeFactorsOfNumberStream

"use strict"

let should = require('should')
let primeFactorsOfNumberStream = require('./../src/prime-factors')

describe( 'The prime factors of 13195', () => {
  it( 'should be 5, 7, 13 and 29', (done) => {
      primeFactorsOfNumberStream(13195)
        .toArray((result) => {
          result.should.match([5,7,13,29])
          done()
        })
  })
})
