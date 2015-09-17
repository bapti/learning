sut = require './../src/multiplication-table-factory'

describe 'A multiplcation table factory', () ->
  describe 'create table', () ->
    it 'should return a 3x3 table when passed a list of 3', () ->
        sut.createTable([1,2,3])
            .should.match([
                [1,2,3],
                [2,4,6],
                [3,6,9]
            ])

    it 'should return a 5x5 table when passed a list of 5', () ->
        sut.createTable([1,2,3,4,5])
            .should.match([
                [1,  2,  3,  4,  5],
                [2,  4,  6,  8, 10],
                [3,  6,  9, 12, 15],
                [4,  8, 12, 16, 20],
                [5, 10, 15, 20, 25]
            ])

    it 'should return a 4x4 table when passed a list of 4 primes', () ->
        sut.createTable([1,2,3,5])
            .should.match([
                [1,  2,  3,  5],
                [2,  4,  6, 10],
                [3,  6,  9, 15],
                [5, 10, 15, 25]
            ])
