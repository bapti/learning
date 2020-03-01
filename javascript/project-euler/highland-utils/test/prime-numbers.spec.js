"use strict"

import 'should'
import * as sut from './../src/prime-numbers'
import _ from 'highland'

describe( 'Prime numbers', () => {
    it( 'First 5 should be returned', (done) => {
        _(sut.primeGeneratorEratosthenes(100))
          .take(5)
          .toArray((result) => {
            result.should.match([2,3,5,7,11])
            done()
          })
    }),

    it( 'First 6 should be returned', (done) => {
        _(sut.primeGeneratorEratosthenes(100))
          .take(6)
          .toArray((result) => {
            result.should.match([2,3,5,7,11,13])
            done()
          })
    }),

    it( 'First 10 should be returned', (done) => {
        _(sut.primeGeneratorEratosthenes(100))
          .take(10)
          .toArray((result) => {
            result.should.match([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
            done()
          })
    })
})
