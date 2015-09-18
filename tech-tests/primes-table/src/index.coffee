_ = require 'highland'
tableFactory = require './multiplication-table-factory'
primeGenerator = require './prime-number-generator'
textConverter = require './table-to-text-converter'
prompt = require 'prompt'

printPrimes = (size) ->
    _([size])
        .map(primeGenerator.generateListOfPrimes)
        .map(tableFactory.createTable)
        .map(textConverter.convertToText)
        .each(_.log)

console.log """
=================================================

Welcome to the prime table printer

=================================================
"""
schema =
    properties:
        size:
            description: 'Enter the size of table you would like'
            type: 'Number'
            required: true

prompt.start()

prompt.get schema, (err, result) ->
    printPrimes(result.size)
