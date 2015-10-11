"use strict"

import 'should'
import naturalNumbers from './../src/natural-numbers'
import _ from 'highland'

describe( 'Natural numbers', () =>
    it( 'First 10 should increment be 1-10', (done) => {
        console.log(naturalNumbers);
        _(naturalNumbers()).take(10).toArray((result) => {
          result.should.match([1,2,3,4,5,6,7,8,9,10])
          done()
        })
    })
)
