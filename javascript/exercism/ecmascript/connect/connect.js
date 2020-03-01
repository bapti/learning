const candidateOffsets = [
  [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0]
]

function * candidates(row, col, board, symbol, path) {
  for(const [x, y] of candidateOffsets) {
    const cx = row + x, cy = col + y
    if(!path.some((([px, py]) => px === cx && py === cy))) {
      if(board[cx] && board[cx][cy] === symbol) {
        yield [row + x, col + y]
      }
    }
  }
}

const traverse = (
  symbol,
  [row, col],
  board,
  predicate,
  path = []
) => {
  if(predicate(row, col)) return true
  return [...candidates(row, col, board, symbol, path)]
    .some(([x, y]) => {
      return traverse(
        symbol,
        [x,y],
        board,
        predicate,
        [...path, [row, col]]
      )
    })
}

const isXLeftToRight = (board) => {
  for(const [rowIndex, row] of board.entries()) {
    if(row[0] === 'X') {
      if(traverse('X', [rowIndex, 0], board, isPointOnRight(board))){
        return true
      }
    }
  }
  return false
}

const isOTopToBottom = (board) => {
  for(const [col, symbol] of board[0].entries()) {
    if(symbol === 'O') {
      if(traverse('O', [0, col], board, isPointOnBottom(board))) {
        return true
      }
    }
  }
  return false
}

const isPointOnRight = (board) => (row, col) =>
  board[0].length === col + 1

const isPointOnBottom = (board) => (row, col) =>
  board.length === row + 1

const connect = (board) => () => {
  if(isXLeftToRight(board)) return 'X'
  if(isOTopToBottom(board)) return 'O'
  return ''
}

export default (board) => ({
  winner: connect( board.map(line => line.trim().split(' ') ))
})
