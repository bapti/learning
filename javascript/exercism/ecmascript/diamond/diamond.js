const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const range = n => [...Array(n).keys()].map(n => n+1)
const mapLetter = size => n =>
  n > size ? ALPHABET[size - Math.abs(size - n) - 1] : ALPHABET[n-1]

const format = (size, width) => (letter, row) => {
  const offset =  Math.abs(size - row - 1)
  return range(width)
    .map((_, col) =>
      col - offset === 0 || col + offset === width - 1
        ? letter
        : ' '
    )
    .join('')
}

const makeDiamond = letter => {
  const size = ALPHABET.indexOf(letter) + 1
  const width = (size*2)-1
  return range(width)
    .map(mapLetter(size))
    .map(format(size, width))
    .join('\n') + '\n'
}

export default () => ({makeDiamond})
