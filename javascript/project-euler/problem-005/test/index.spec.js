"use strict"

let should = require('should')
let sut = require('./../src/index')

// What is the largest prime factor of the number 600851475143 ?
//
describe( 'Smallest multiple', () => {
  it( 'should 2520 with numbers 1-10', (done) =>{
      sut(10, (err, result) =>{
        result.should.equal(2520)
        done()
      })
  }),

  it( 'should 232792560 with numbers 1-20', (done) =>{
      sut(20, (err, result) =>{
        result.should.equal(232792560)
        done()
      })
  })
})
