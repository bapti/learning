import 'should'
import * as sut from './../src/index'

describe( 'Nth prime', () =>{

  it( '1st should be 2', (done) =>{
      sut.slow(1, (err,result) =>{
        result.should.equal(2)
        done()
      })
  }),

  it( '2nd should be 3', (done) =>{
      sut.slow(2, (err,result) =>{
        result.should.equal(3)
        done()
      })
  }),

  it( '3rd should be 5', (done) =>{
      sut.slow(3, (err,result) =>{
        result.should.equal(5)
        done()
      })
  }),

  it( '10001st should be 104743', (done) =>{
      sut.slow(10001, (err,result) =>{
        result.should.equal(104743)
        done()
      })
  }),

  it( '10001st should be 104743', (done) =>{
      sut.fast(10001, (err,result) =>{
        result.should.equal(104743)
        done()
      })
  })
})
