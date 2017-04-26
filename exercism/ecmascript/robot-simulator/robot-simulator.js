const compass = {
  north: {
    right: 'east',
    left: 'west',
    advance: ([x, y]) => [x, ++y]
  },
  east: {
    right: 'south',
    left: 'north',
    advance: ([x, y]) => [++x, y]
  },
  south: {
    right: 'west',
    left: 'east',
    advance: ([x, y]) => [x, --y]
  },
  west: {
    right: 'north',
    left: 'south',
    advance: ([x, y]) => [--x, y]
  }
}

const instructions = (str) => {
  const data = { R: 'turnRight', A: 'advance', L: 'turnLeft' }
  return str.split('').map(i => data[i])
}

const evaluate = (position, str) => {
  const fns = { turnRight, advance, turnLeft }
  instructions(str).forEach(x => fns[x](position))
}

const orient = (position, bearing) => {
  if(!compass[bearing]) throw 'Invalid Robot Bearing'
  position.bearing = bearing
}

const turnRight = p => orient(p, compass[p.bearing].right)
const turnLeft = p => orient(p, compass[p.bearing].left)
const at = (position, xy) => position.coordinates = xy

const advance = (p) => {
  at(p, compass[p.bearing].advance(p.coordinates))
}

export default () => {
  const position = {}
  return {
    orient: (direction) => orient(position, direction),
    turnRight: () => turnRight(position),
    turnLeft: () => turnLeft(position),
    at: (x, y) => at(position, [ x, y ]),
    advance: () => advance(position),
    instructions: instructions,
    place: ({ x, y, direction}) => {
      orient(position, direction)
      at(position, [x,y])
    },
    evaluate: (str) => evaluate(position, str),
    get bearing() { return position.bearing },
    get coordinates() { return position.coordinates }
  }
}
