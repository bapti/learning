const nearley = require('nearley')
const fs = require('fs')
const grammar = require('./grammar')
const parser = new nearley.Parser(grammar.ParserRules, grammar.ParserStart);

const feed = data => {
  try {
    parser.feed(data);
  } catch(parseError) {
    console.log(`Error at character ${parseError.offset}`)
    console.log(parseError)
  }
}

const gedcom = filePath => {
  const data = fs.readFileSync(filePath)
  parser.feed(data)
  return parser.results
}

module.exports = gedcom
