

module.exports.createTable = (arrayOfInts) ->
    table = []
    table.push [0].concat( arrayOfInts )
    for i in arrayOfInts
        row = []
        row.push i
        for j in arrayOfInts
            row.push i*j
        table.push row
    table
