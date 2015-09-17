sut = require './../src/table-to-text-converter'

describe 'A text to table converter', () ->
  describe 'Convert to text', () ->
    it 'Give back a table but in text form', () ->
        sut.convertToText([1,2,3])
            .should.match("""
            -------------
            | 1 | 2 | 3 |
            -------------
            | 2 | 4 | 6 |
            -------------
            | 3 | 6 | 9 |
            -------------
            """)
