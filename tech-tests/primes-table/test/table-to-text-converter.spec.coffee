sut = require './../src/table-to-text-converter'



describe 'A text to table converter', () ->
    describe 'Convert to text', () ->
        it 'Passing a 3x3 table gives back that table in text', () ->
            sut.convertToText(
                [
                    [1,2,3],
                    [2,4,6],
                    [3,6,9]
                ]
            )
            .should.match("""
                -------------
                | 1 | 2 | 3 |
                -------------
                | 2 | 4 | 6 |
                -------------
                | 3 | 6 | 9 |
                -------------
                """)


        it 'Passing a 4x4 table gives back that table in text with extra padding', () ->
            sut.convertToText(
                [
                    [1,  2,  3,  5],
                    [2,  4,  6, 10],
                    [3,  6,  9, 15],
                    [5, 10, 15, 25]
                ]
            )
            .should.match("""
                ---------------------
                |  1 |  2 |  3 |  5 |
                ---------------------
                |  2 |  4 |  6 | 10 |
                ---------------------
                |  3 |  6 |  9 | 15 |
                ---------------------
                |  5 | 10 | 15 | 25 |
                ---------------------
                """)

        it 'Passing a 2x2 table gives back that table in text with extra padding', () ->
            sut.convertToText(
                [
                    [1,  10],
                    [10,  100]
                ]
            )
            .should.match("""
                -------------
                |   1 |  10 |
                -------------
                |  10 | 100 |
                -------------
                """)
