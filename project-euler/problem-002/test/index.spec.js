"use strict"

let should = require('should')
let sut = require('./../src/index')

describe( 'Fibonacci evens', () =>
  describe( 'First 10 in sequence', () =>
    it( 'should return 44 when the value is less than 100', () =>
        sut.sumEvensLessThan(100)
          .should.equal(44)
    )
  )
)
