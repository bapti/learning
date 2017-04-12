const tokens = [
  { regex: /^[-+]?\d+/,      action: (x) => Number(x) },
  { regex: /^plus/,          action: (x) => (y) => x + y },
  { regex: /^minus/,         action: (x) => (y) => x - y },
  { regex: /^multipliedby/,  action: (x) => (y) => x * y },
  { regex: /^dividedby/,     action: (x) => (y) => x / y },
  { regex: /^.+/,            action: () => { throw new Error('Argument Error') } }
]

const applyTokens = (str, acc) => {
  if(!str) return acc

  const { regex, action } = tokens.find((t) => str.match(t.regex))
  const matchedValue = str.match(regex)[0]
  const strRemaining = str.replace(regex, '')

  acc = typeof acc === 'function'
    ? acc(action(matchedValue))
    : action(acc)

  return applyTokens(strRemaining, acc)
}

const parseQuestion = (question) => {
  const trimmed = question.replace(/ |\?|What is/g, '') // remove crud
  return applyTokens(trimmed, x => x)
}

class WordProblem {
  constructor(question) {
    this.answer = parseQuestion.bind(null, question)
  }
}

const ArgumentError = () =>
  new Error('Argument Error')

export default {
  WordProblem,
  ArgumentError
}
