printer = require './prime-table-console-printer'
machina = require 'machina'
inquirer = require 'inquirer'

question1 =
    type: 'list'
    name: 'action'
    message: 'What do you want to do?'
    choices: [
        'Print a prime table'
        'Exit'
    ]

tableSizeQuestion =
    type: "input",
    name: "tableSize",
    message: "What size of table would you like",
    validate: ( value ) ->
        num = parseInt(value)
        if Number(value) == num
            true
        else
            "Please enter a valid table size (whole number)"


program = new (machina.Fsm)(
    initialize: (options) ->
        @data = {}
    namespace: 'primes-table'
    initialState: 'uninitialized'
    states:
        uninitialized: '*': ->
            @deferUntilTransition()
            @transition 'welcome'
        welcome:
            _onEnter: ->
                console.log """
                =================================================

                Welcome to the prime table printer

                =================================================
                """
                @transition 'promptForInput'
        promptForInput:
            _onEnter: ->
                inquirer.prompt [question1],(answers) =>
                    if answers.action == 'Exit'
                        @transition 'exit'
                    else
                        inquirer.prompt [tableSizeQuestion], (answers) =>
                            @data.tableSize = answers.tableSize
                            @transition 'drawTable'
        drawTable:
            _onEnter: ->
                printer.print @data.tableSize
                @transition 'promptForInput'
        exit:
            _onEnter: ->
                console.log """
                =================================================

                Thanks for using the prime table printer

                =================================================
                """
                process.exit(0)
    welcome: ->
        @handle 'welcome'
)

program.welcome()
