"use strict"

let should = require('should')
let sut = require('./../src/index')

describe( 'Fibonacci evens', () =>
  describe( 'First 10 in sequence', () => {
    it( 'should return 44 when the value is less than 100', (done) => {
        sut.sumEvensLessThan(100, (err,result) => {
          result.should.equal(44)
          done()
        })
    })

    it( 'should return 2 when the value is less than 3', (done) =>
        sut.sumEvensLessThan(3, (err,result) => {
          result.should.equal(2)
          done()
        })
    )

    it( 'should return 10 when the value is less than 9', (done) =>
        sut.sumEvensLessThan(9, (err,result) => {
          result.should.equal(10)
          done()
        })
    )

    it( 'should return 4613732 when the value is less than 4000000', (done) =>
        sut.sumEvensLessThan(4000000, (err,result) => {
          result.should.equal(4613732)
          done()
        })
    )
  })
)
