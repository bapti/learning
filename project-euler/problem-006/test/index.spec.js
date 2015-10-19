"use strict"

let should = require('should')
let sut = require('./../src/index')

//Sum square difference
//
describe( 'Sum square difference', () => {
  it( 'should be 2640 with numbers 1-10', (done) =>{
      sut.difference(10, (err, result) =>{
        result.should.equal(2640)
        done()
      })
  }),

  it( 'should be 25164150 with numbers 1-100', (done) =>{
      sut.difference(100, (err, result) =>{
        result.should.equal(25164150)
        done()
      })
  })
})

describe( 'Sum square difference2', () => {
  it( 'should be 2640 with numbers 1-10', () =>{
      sut.difference2(10)
        .should.equal(2640)
  }),

  it( 'should be 25164150 with numbers 1-100', () =>{
      sut.difference2(100).should.equal(25164150)
  })
})
