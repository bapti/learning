const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const range = n => [...Array(n).keys()]
const mapLetter = size => n =>
  n > size ? ALPHABET[size - Math.abs(size - n) - 1] : ALPHABET[n-1]

const format = (size, width) => (letter, row) => {
  return range(width)
    .map((_, col) => )
    .join('')
  const pad1 = Math.abs(i-size)
  console.log('size', size, 'letter', letter, 'i', i, 'width', width);
  return letter
}
const mapLog = x => {
  console.error(x);
  return x
}
const makeDiamond = letter => {
  const size = ALPHABET.indexOf(letter) + 1
  const width = (size*2)-1
  return range(width)
    .map(n => n+1)
    .map(mapLetter(size))
    .map(format(size, width))
    // .map(mapLog)
    .join('\n') + '\n'
}

export default () => ({makeDiamond})
