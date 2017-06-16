const X = 'X'
const O = 'O'

const convertBoard = board => board.map(line => line.split(' '))

const isXLeftToRight = (lines) => {
  lines.forEach()
}

const isOTopToBottom = (board) => {
}

const isPointOnLeft = (colIndex) => colIndex === 0
const isPointOnRight = (rowSize, colIndex) => rowSize === colIndex + 1
const isPointOnTop = (rowIndex) => rowIndex === 0
const isPointOnBottom = (colSize, rowIndex) => colSize === rowIndex + 1

const connect = (board) => () => {
  const converted = convertBoard(board)
  if(isXWinner(converted)) return X
  if(isOWinner(converted)) return O
  return ''
}

export default (board) => ({ winner: connect(board) })
