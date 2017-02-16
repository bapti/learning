const scores = {
  a: 0,  b: 1,  c: 2,  d: 3,  e: 4,  f: 5,  g: 6,  h: 7,  i: 8,
  j: 9,  k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17,
  s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25
}
const getChar = (shift) =>
  String.fromCharCode('a'.charCodeAt() + shift)

const getShift = (char, offset, action) =>
  action(scores[char], scores[offset]) % 26

const shiftChar = (char, offset, action) =>
  getChar(getShift(char, offset, action))

const convert = (key, text, action) =>
  text.split('')
    .map( (char, i) => shiftChar(char, key[i], action) )
    .join('')

const encode = (key, text) => convert(key, text, (a, b) => a + b)
const decode = (key, text) => convert(key, text, (a, b) => a - b)

const validateSeed = (seed) => {
  if( seed === undefined ) return 'abcdefghij'
  if( seed === '' ) throw new Error('Bad key')
  if( !seed.match(/^[a-z]+$/) ) throw new Error('Bad key')
  return seed
}

export default (seed) => {
  const key = validateSeed(seed)
  return {
    key,
    encode: encode.bind(null, key),
    decode: decode.bind(null, key)
  }
}
