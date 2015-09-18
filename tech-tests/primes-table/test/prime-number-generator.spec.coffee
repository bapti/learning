sut = require './../src/prime-number-generator'

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
