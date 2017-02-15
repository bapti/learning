const scores = {
  a: 0,  b: 1,  c: 2,  d: 3,  e: 4,  f: 5,  g: 6,  h: 7,  i: 8,
  j: 9,  k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17,
  s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25
}

const shiftChar = (char, cipher) => {
  const diff = scores[char] - scores[cipher] <= 0
    ? scores[char] + scores[cipher]
    : scores[char] + scores[cipher] - 26
  console.log(char, cipher);
  const newChar = String.fromCharCode('a'.charCodeAt() + diff)
  return newChar
}

const encode = (key, text) => {
  return text.split('')
    .reduce((acc, char, i) => {
      return [...acc, shiftChar(char, key[i])]
    },[])
    .join('')
}

const decode =  (key, text) => {
  return text.split('')
    .reduce((acc, char, i) => {
      return [...acc, shiftChar(key[i], char)]
    },[])
    .join('')
}

export default (seed) => {
  const key = !seed ? 'abcdefghij' : ''
  return {
    key,
    encode: encode.bind(null, key),
    decode: decode.bind(null, key)
  }
}
