_ = require 'highland'
tableFactory = require './multiplication-table-factory'
primeGenerator = require './prime-number-generator'
textConverter = require './table-to-text-converter'

primes = primeGenerator.generateListOfPrimes(10)
table = tableFactory.createTable(primes)
text = textConverter.convertToText(table)

console.log text
