

module.exports.createTable = (arrayOfInts) ->
    table = []
    for i in arrayOfInts
        row = []
        for j in arrayOfInts
            row.push i*j
        table.push row
    table
