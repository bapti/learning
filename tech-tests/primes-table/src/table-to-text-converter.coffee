

horizontalLine = (character, width) ->
    line = ""
    while line.length < width
        line += character
    line

findLargestNumberWidth = (listOfLists) ->
    max = listOfLists[0][0]
    for list in listOfLists
        for number in list
            if number > max
                max = number
    max.toString().length

getTableWidth = (numberOfColumns, maxNumberWidth, padding) ->
    widthOfNumbersInRow = numberOfColumns * maxNumberWidth
    widthOfPaddingInRow = numberOfColumns * padding * 2
    widthOfVerticalSeparatorsInRow = numberOfColumns + 1
    widthOfNumbersInRow + widthOfPaddingInRow + widthOfVerticalSeparatorsInRow

createRow = (listOfNumbers, maxNumberWidth) ->
    row = "|"
    for number in listOfNumbers
        paddingWidth = maxNumberWidth - number.toString().length
        padding = horizontalLine(" ", paddingWidth)
        row = row + " #{padding}#{number} |"
    row

createTextTable = (listOfLists, tableWidth, maxNumberWidth) ->
    textTable = ""
    for list in listOfLists
        textTable += horizontalLine("-", tableWidth) + "\n"
        textTable += createRow(list, maxNumberWidth) + "\n"
    textTable += horizontalLine("-", tableWidth)

module.exports.convertToText = (listOfLists, padding = 1) ->
    maxNumberWidth = findLargestNumberWidth(listOfLists)
    tableWidth = getTableWidth(listOfLists.length, maxNumberWidth, padding)

    createTextTable(listOfLists, tableWidth, maxNumberWidth)
