sut = require './../multiplcation-table-factory'

describe 'A multiplcation table factory', () ->
  describe 'create', () ->
    it 'should return a table when passed a list', () ->
        sut.createTable([1,2,3])
            .should.equal([
                [1,2,3],
                [2,4,6],
                [3,6,9]
            ])
