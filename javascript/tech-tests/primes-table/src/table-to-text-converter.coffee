horizontalLine = (character, width) ->
    if width == 0
        ""
    else
        Array( width + 1 ).join(character);

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

createRowText = (listOfNumbers, maxNumberWidth) ->
    row = "|"
    for number in listOfNumbers
        paddingWidth = maxNumberWidth - number.toString().length
        padding = horizontalLine(" ", paddingWidth)
        numberText = if number != 0 then number.toString() else " "
        row = row + " #{padding}#{numberText} |"
    row

createTextTable = (listOfLists, tableWidth, maxNumberWidth) ->
    textTable = ""
    for list in listOfLists
        textTable += horizontalLine("-", tableWidth) + "\n"
        textTable += createRowText(list, maxNumberWidth) + "\n"
    textTable += horizontalLine("-", tableWidth)

module.exports.convertToText = (listOfLists, padding = 1) ->
    maxNumberWidth = findLargestNumberWidth(listOfLists)
    tableWidth = getTableWidth(listOfLists.length, maxNumberWidth, padding)

    createTextTable(listOfLists, tableWidth, maxNumberWidth)
