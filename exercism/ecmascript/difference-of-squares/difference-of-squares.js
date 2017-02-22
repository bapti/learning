const range = (n) =>
  [...Array(n).keys()].map(n => n+1)

const squareOfSums = (n) =>
  range(n).reduce((sum, b) => sum + b) ** 2

const sumOfSquares = (n) =>
  range(n).reduce((sum, b) => sum + (b ** 2))

const squares = (n) => {
  const a = squareOfSums(n)
  const b = sumOfSquares(n)
  return {
    squareOfSums: a,
    sumOfSquares: b,
    difference: a - b
  }
}

export default squares
