

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

createRow = (listOfNumbers, maxNumberWidth) ->
    row = "|"
    for number in listOfNumbers
        paddingWidth = maxNumberWidth - number.toString().length
        padding = horizontalLine(" ", paddingWidth)
        row = row + " #{padding}#{number} |"
    row

module.exports.convertToText = (listOfLists, padding = 1) ->
    maxNumberWidth = findLargestNumberWidth(listOfLists)
    widthOfNumbersInRow = listOfLists.length * maxNumberWidth
    widthOfPaddingInRow = listOfLists.length * padding * 2
    widthOfVerticalSeparatorsInRow = listOfLists.length + 1

    tableWidth = widthOfNumbersInRow +
        widthOfPaddingInRow +
        widthOfVerticalSeparatorsInRow

    textTable = ""
    for list in listOfLists
        textTable += horizontalLine("-", tableWidth) + "\n"
        textTable += createRow(list, maxNumberWidth) + "\n"
    textTable += horizontalLine("-", tableWidth)
    textTable
