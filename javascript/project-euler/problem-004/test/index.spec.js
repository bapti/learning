"use strict"

let should = require('should')
let sut = require('./../src/index')

// What is the largest prime factor of the number 600851475143 ?
//
describe( 'Larget 3 digit product palindrome', () =>
  it( 'should be 580085', (done) =>{
      sut.larget3DigitPalindrome((err,result) =>{
        result.should.equal(906609)
        done()
      })
  })
)
