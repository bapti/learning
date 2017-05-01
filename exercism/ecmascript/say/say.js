const numberLookups = {
  0: 'zero', 1: 'one',  2: 'two',  3: 'three',  4: 'four',
  5: 'five', 6: 'six',  7: 'seven',  8: 'eight',  9: 'nine',
  10: 'ten', 11: 'eleven',  12: 'twelve',
  20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
  60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
  100: 'hundred', 1000: 'thousand',
  1000000: 'million', 1000000000: 'billion',
}

const divisionRules = [
  {
    divideBy: 1000000000,
    matchOn: (n) => n / 1000000000 > 0,
    numberOf: (x, divideBy) => Math.floor(x / divideBy)
  }
]

const translate(n, quantityOf) => {

}

const inEnglish = (n) => {
  return divisionRules.reduce(({numberLeft, english}, {matchOn, numberOf}) => {
    if(!matchOn(numberLeft)) return {numberLeft, english}

    const nextN = numberOf(numberLeft, divideBy)
    const nextE = translate(nextN, divideBy)
    return { number, english: `${english} ${nextE}` }
  }, {numberLeft: n, english: ''})
}

const validNumbers = (fn) => (n) => {
  if(n < 0 || n > 999999999999) {
    throw new Error('Number must be between 0 and 999,999,999,999.')
  }
  return fn(n)
}

export default () => ({ inEnglish: validNumbers(inEnglish) })
