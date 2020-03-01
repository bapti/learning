sut = require './../src/prime-number-generator'
should = require 'should'

describe 'A prime nummber generator', () ->
    describe 'Generate List', () ->
        it 'Should give back a list of primes of length 3', () ->
            sut.generateListOfPrimes(3)
                .should.match([2,3,5])

        it 'Should give back a list of primes of length 7', () ->
            sut.generateListOfPrimes(7)
                .should.match([2,3,5,7,11,13,17])

        it 'Should give back a list of primes of length 10', () ->
            sut.generateListOfPrimes(10)
                .should.match([2,3,5,7,11,13,17,19,23,29])

        it 'Should give back a list of primes of length 11', () ->
            sut.generateListOfPrimes(11)
                .should.match([2,3,5,7,11,13,17,19,23,29,31])

        it 'Should give back a list of primes of length 15', () ->
            sut.generateListOfPrimes(15).length
                .should.equal(15)

        it 'Should give back a list of primes of length 150', () ->
            sut.generateListOfPrimes(150).length
                .should.equal(150)

        it 'Should give back a list of primes of length 100000', () ->
            sut.generateListOfPrimes(100000).length
                .should.equal(100000)

        it 'Should give back a list of primes of length 1000000', () ->
            sut.generateListOfPrimes(1000000).length
                .should.equal(1000000)
