//97=a 122=z
const aScore = 'a'.charCodeAt()
const zScore = 'z'.charCodeAt()

const convertChar = char =>
  String.fromCharCode(aScore + zScore - char.charCodeAt())

const rejectNonChars = fn => char =>
  char.charCodeAt() >= aScore && char.charCodeAt() <= zScore
    ? fn(char)
    : char

const joinCharsReducer = (acc, char, i) =>
  i > 0 && i % 5 === 0
    ? `${acc} ${char}`
    : `${acc}${char}`

const encode = text =>
  text.toLowerCase()
    .replace(/ |,|\./g,'')
    .split('')
    .map(rejectNonChars(convertChar))
    .reduce(joinCharsReducer,'')

export default {
  encode
}
