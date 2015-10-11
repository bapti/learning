"use strict"

let should = require('should')
let sut = require('./../src/index')

// What is the largest prime factor of the number 600851475143 ?
//
describe( 'Smallest multiple', () =>
  it( 'should 2520 with numbers 1-10', (done) =>{
      sut.smallestMultiple([6,7,8,9,10],(err,result) =>{
        result.should.equal(2520)
        done()
      })
  }),

  // it( 'should be x with numbers 1-20', (done) =>{
  //     sut.smallestMultiple([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],(err,result) =>{
  //       result.should.equal(2520)
  //       done()
  //     })
  // }),

  it( 'should be x with numbers 1-20', (done) =>{
      sut.smallestMultiple([11,12,13,14,15,16,17,18,19,20],(err,result) =>{
        result.should.equal(2520)
        done()
      })
  })


)
