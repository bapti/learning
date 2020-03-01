"use strict"

let should = require('should')
let sut = require('./../src/index')

// What is the largest prime factor of the number 600851475143 ?
//
describe( 'Prime factors', () =>{
  describe( 'The largest prime factor of 2', () =>
    it( 'should be 2', (done) =>{
        sut(2, (err,result) =>{
          result.should.equal(2)
          done()
        })
    })
  ),

  describe( 'The largest prime factor of 3', () =>
    it( 'should be 3', (done) =>{
        sut(3, (err,result) =>{
          result.should.equal(3)
          done()
        })
    })
  ),

  describe( 'The largest prime factor of 29', () =>
    it( 'should be 29', (done) =>{
        sut(29, (err,result) =>{
          result.should.equal(29)
          done()
        })
    })
  ),

  describe( 'The largest prime factor of 13195', () =>
    it( 'should be 29', (done) =>{
        sut(13195, (err,result) =>{
          result.should.equal(29)
          done()
        })
    })
  ),

  describe( 'The largest prime factor of 600851475143', function(){
    this.timeout(15000);
    it( 'should be 6857', (done) => {
        sut(600851475143, (err,result) =>{
          result.should.equal(6857)
          done()
        })
    })
  })
})
