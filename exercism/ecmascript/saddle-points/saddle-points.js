function * allCoordinates(rowsMax, colsMax) {
  for(let row = 0; row < rowsMax; row++) {
    for(let col = 0; col < colsMax; col++) {
      yield [row, col]
    }
  }
}

const getSaddlePoints = (rows, columns) => {
  return [...allCoordinates(rows.length, columns.length)]
    .reduce((acc, [rowIndex, colIndex]) => {
      const result = isSaddlePoint(rowIndex, colIndex, rows, columns)
      return result ? [...acc, [rowIndex, colIndex]] : acc
    }, [])
}

const isSaddlePoint = (rowIndex, colIndex, rows, columns) => {
  return isGreatestInRow(colIndex, rows[rowIndex])
    && isLeastInColumn(rowIndex, columns[colIndex])
}

const isGreatestInRow = (colIndex, row) =>
  row.every(n => row[colIndex] >= n)

const isLeastInColumn = (rowIndex, column) =>
  column.every(n => column[rowIndex] <= n )

const range = (n) => [...Array(n).keys()]

const matrix = (stringMatrix) => {
  const rows = stringMatrix
    .split("\n")
    .map(row => row.split(" ").map(n => Number(n)))

  const columns = range(rows.length)
    .map(i => rows.map(row => row[i]))

  const saddlePoints = getSaddlePoints(rows, columns)

  return { rows, columns, saddlePoints }
}

export default matrix
