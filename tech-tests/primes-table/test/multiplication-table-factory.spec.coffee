sut = require './../src/multiplication-table-factory'

describe 'A multiplcation table factory', () ->
  describe 'create table', () ->
    it 'should return a 3x3 table when passed a list of 3', () ->
        sut.createTable([100,500])
            .should.match([
                [0,     100,    500],
                [100, 10000,  50000],
                [500, 50000, 250000]
            ])

    it 'should return a 5x5 table when passed a list of 4', () ->
        sut.createTable([2,3,4,5])
            .should.match([
                [0,  2,  3,  4,  5],
                [2,  4,  6,  8, 10],
                [3,  6,  9, 12, 15],
                [4,  8, 12, 16, 20],
                [5, 10, 15, 20, 25]
            ])

    it 'should return a 4x4 table when passed a list of 3 primes', () ->
        sut.createTable([2,3,5])
            .should.match([
                [0,  2,  3,  5],
                [2,  4,  6, 10],
                [3,  6,  9, 15],
                [5, 10, 15, 25]
            ])
