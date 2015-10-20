import 'should'
import * as sut from './../src/index'

describe( 'Sum of primes under 2 million', () =>{

  it( 'Should be', (done) =>{
      sut.fast((err,result) =>{
        result.should.equal(142913828922)
        done()
      })
  })
})
