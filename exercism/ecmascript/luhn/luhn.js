const hasLengthGreaterThanOne = (digits) =>
  digits.length > 1

const isAllDigits = (digits) =>
  digits.match(/[0-9 ]+$/)

const hasValidScore = (digits) => {
  const adujustScore = (digit, i) => {
    if((i + 1) % 2 === 0) {
      digit = digit * 2
      digit -= digit > 9 ? 9 : 0
    }
    return digit
  }

  const sumReducer = (acc, digit, i) => acc + adujustScore(digit, i)

  const total = digits
    .replace(/ /g, '')
    .split('')
    .map(x => Number(x))
    .reduceRight(sumReducer, 0)

  return total % 10 === 0
}

const validRules = [
  isAllDigits,
  hasLengthGreaterThanOne,
  hasValidScore
]

const luhn = (digits) => {
  return {
    valid: !validRules.find(fn => !fn(digits))
  }
}

export default luhn
