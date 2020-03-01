const chunkNumber = (numberToTranslate) => {
  const sections = [
    { divisor: 10**9, word: 'billion' },
    { divisor: 10**6, word: 'million' },
    { divisor: 10**3, word: 'thousand' },
    { divisor: 1,     word: ''}
  ]

  return sections.reduce(({remainder, chunks}, {divisor, word}) => {
      const chunk = { value: Math.floor(remainder / divisor), word }
      const r = remainder - (chunk.value * divisor)

      return { remainder: r, chunks: [...chunks, chunk] }
    }, {remainder: numberToTranslate, chunks: []}
  ).chunks
}

const hundreds = (rem) => {
  if(rem < 100) return {rem}
  const nHundreds = Math.floor(rem/100)
  const {word} = numberLookups.find(({n}) => n === nHundreds)
  return { rem: rem - (nHundreds*100), text: `${word} hundred` }
}

const tens = (rem) => {
  if(rem < 20) return {rem}
  const nTens = (rem % 100) - (rem % 10)
  const nSingles = rem % 10
  const {word: tensWord} = numberLookups.find(({n}) => n === nTens)
  const {word: singlesWord} = numberLookups.find(({n}) => n === nSingles)
  return { rem: 0, text: nSingles === 0 ? tensWord : `${tensWord}-${singlesWord}`}
}

const teensOrSingles = (rem) => {
  if(rem === 0) return {rem}
  const {word} = numberLookups.find(({n}) => n === rem)
  return { rem: 0, text: word }
}

const translate = (value) => {
  const results = [hundreds, tens, teensOrSingles].reduce(({rem, words}, fn) => {
    const {rem: n, text} = fn(rem)
    return {rem: n, words: text ? [...words, text] : words }
  }, {rem: value, words: []})

  return results.words.join(" ")
}

const decorateQuantity = (str, quantity) => {
  const quant = quantity ? ` ${quantity}` : ''
  return `${str}${quant}`
}

const inEnglish = (numberToTranslate) => {
  const chunks = chunkNumber(numberToTranslate)
  return chunks
    .filter(({value}) => value > 0)
    .map(({value, word}) => {
      const num = translate(value)
      return decorateQuantity(num, word)
    })
    .join(" ")
}

const validNumbers = (fn) => (n) => {
  if(n < 0 || n > 999999999999) {
    throw new Error('Number must be between 0 and 999,999,999,999.')
  }
  return fn(n)
}

const zeroCase = (fn) => (n) => {
  if(n === 0) return "zero"
  return fn(n)
}

export default () => ({ inEnglish: validNumbers(zeroCase(inEnglish)) })

const numberLookups = [
  { n: 0,   word: 'zero' },
  { n: 1,   word: 'one' },
  { n: 2,   word: 'two' },
  { n: 3,   word: 'three' },
  { n: 4,   word: 'four' },
  { n: 5,   word: 'five' },
  { n: 6,   word: 'six' },
  { n: 7,   word: 'seven' },
  { n: 8,   word: 'eight' },
  { n: 9,   word: 'nine' },
  { n: 10,  word: 'ten' },
  { n: 11,  word: 'eleven' },
  { n: 12,  word: 'twelve' },
  { n: 13,  word: 'thirteen' },
  { n: 14,  word: 'fourteen' },
  { n: 15,  word: 'fifteen' },
  { n: 16,  word: 'sixteen' },
  { n: 17,  word: 'seventeen' },
  { n: 18,  word: 'eightteen' },
  { n: 19,  word: 'nineteen' },
  { n: 20,  word: 'twenty' },
  { n: 30,  word: 'thirty' },
  { n: 40,  word: 'forty' },
  { n: 50,  word: 'fifty' },
  { n: 60,  word: 'sixty' },
  { n: 70,  word: 'seventy' },
  { n: 80,  word: 'eighty' },
  { n: 90,  word: 'ninety' }
]
