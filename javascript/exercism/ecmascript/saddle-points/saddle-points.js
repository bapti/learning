function * saddles(rows, columns) {
  for(let r = 0; r < rows.length; r++) {
    for(let c = 0; c < columns.length; c++) {
      if(isSaddlePoint(rows[r][c], rows[r], columns[c])) {
        yield [r, c]
      }
    }
  }
}

const isSaddlePoint = (value, row, column) =>
  Math.max(...row) === value && Math.min(...column) === value

const range = (n) => [...Array(n).keys()]

const matrix = (stringMatrix) => {
  const rows = stringMatrix.split("\n").map(row => row.split(" ").map(Number))
  const columns = range(rows.length).map(i => rows.map(row => row[i]))
  const saddlePoints = [...saddles(rows, columns)]

  return { rows, columns, saddlePoints }
}

export default matrix
