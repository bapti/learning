const range = length => [...Array(length).keys()]
const isPositionEqual = (w, b) => sameColumn(w, b) && sameRow(w, b)
const sameColumn = ([x, y], [x2, y2]) => y === y2
const sameRow = ([x, y], [x2, y2]) => x === x2
const isOnDiagonal = ([x, y], [x2, y2]) => Math.abs(x - x2) === Math.abs(y - y2)

const toString = ([wX, wY], [bX, bY]) => {
  const board = range(8).map(x => range(8).fill('_'))
  board[wX][wY] = 'W'
  board[bX][bY] = 'B'
  return board.map((row) => row.join(' ')).join('\n') + '\n'
}

const canAttack = (w, b) =>
  sameRow(w, b) || sameColumn(w, b) || isOnDiagonal(w, b)

const queens = ({white, black} = {white: [0,3], black: [7,3]}) => {
  if(isPositionEqual(white, black)) {
    throw 'Queens cannot share the same space'
  }

  return {
    black,
    white,
    toString: toString.bind(null, white, black),
    canAttack: canAttack.bind(null, white, black)
  }
}

export default queens
