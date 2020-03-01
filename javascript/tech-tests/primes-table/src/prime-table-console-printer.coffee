_ = require 'highland'
tableFactory = require './multiplication-table-factory'
primeGenerator = require './prime-number-generator'
textConverter = require './table-to-text-converter'

module.exports.print = (size) ->
  _([size])
    .map(primeGenerator.generateListOfPrimes)
    .map(tableFactory.createTable)
    .map(textConverter.convertToText)
    .each(_.log)
