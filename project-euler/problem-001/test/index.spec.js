"use strict"

import should from 'should'
import sut from './../src/index'

// Sum of 3s and 5s
//
describe( 'Sum of numbers divisible by 3 and 5', () =>{

  it( 'should be 23 with numbers 1-9', (done) =>{
      sut(9, (err,result) =>{
        result.should.equal(23)
        done()
      })
  }),

  it( 'should be 233168 with numbers 1-999', (done) =>{
      sut(999, (err,result) =>{
        result.should.equal(233168)
        done()
      })
  })
})
