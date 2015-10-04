"use strict"

let should = require('should')
let sut = require('./../src/index')

// What is the largest prime factor of the number 600851475143 ?
//
describe( 'Prime factors', () =>
  describe( 'The largest prime factor of 13195', () =>
    it( 'should be 29', (done) =>{
        sut.largetPrimeFactor(13195, (err,result) =>{
          result.should.equal(29)
          done()
        })
    })
  ),

  describe( 'The largest prime factor of 600851475143', function(){
    this.timeout(15000);
    it( 'should be 6857', (done) => {
        sut.largetPrimeFactor(600851475143, (err,result) =>{
          result.should.equal(6857)
          done()
        })
    })
  })
)
