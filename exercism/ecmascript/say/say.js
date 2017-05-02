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

const translate = (value) => {
  const english = numberLookups.reduce(({remainder, parts}, {n, word}) => {
    if(remainder < n) return {remainder, parts}

    const value = Math.floor(remainder / n)
    // const translated = translate(value)
    return {
      remainder: remainder - (value * n),
      parts: [...parts, word]
    }
  }, {remainder: value, parts: []})

  return english.parts.join(" ")
}

const decorateQuantity = (str, quantity) => {
  const quant = quantity ? ` ${quantity}` : ''
  return `${str}${quant}`
}

const inEnglish = (numberToTranslate) => {
  return chunkNumber(numberToTranslate)
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

export default () => ({ inEnglish: validNumbers(inEnglish) })

const numberLookups = [
  { n: 1, word: 'one'},
  { n: 2, word: 'two'},
  { n: 3, word: 'three' },
  { n: 4, word: 'four' },
  { n: 5, word: 'five' },
  { n: 6, word: 'six' },
  { n: 7, word: 'seven' },
  { n: 8, word: 'eight' },
  { n: 9, word: 'nine' },
  { n: 10, word: 'ten' },
  { n: 11, word: 'eleven' },
  { n: 12, word: 'twelve' },
  { n: 13, word: 'thirteen' },
  { n: 14, word: 'fourteen' },
  { n: 15, word: 'fifteen' },
  { n: 16, word: 'sixteen' },
  { n: 17, word: 'seventeen' },
  { n: 18, word: 'eightteen' },
  { n: 19, word: 'nineteen' },
  { n: 20, word: 'twenty' },
  { n: 30, word: 'thirty' },
  { n: 40, word: 'forty' },
  { n: 50, word: 'fifty' },
  { n: 60, word: 'sixty' },
  { n: 70, word: 'seventy' },
  { n: 80, word: 'eighty' },
  { n: 90, word: 'ninety' },
  { n: 100, word: 'hundred' }
]
