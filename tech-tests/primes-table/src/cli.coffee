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

    namespace: 'primes-table'
    initialState: 'uninitialized'
    states:
        uninitialized: '*': ->
            @deferUntilTransition()
            @transition 'welcome'
        welcome:
            _onEnter: (client) ->
                console.log """
                =================================================

                Welcome to the prime table printer

                =================================================
                """
                @transition( client, 'promptForInput' )
        promptForInput:
            _onEnter: (client) ->
                inquirer.prompt [question1],(answers) =>
                    if answers.action == 'Exit'
                        @transition( client, 'exit')
                    else
                        inquirer.prompt [tableSizeQuestion], (answers) =>
                            client.tableSize = answers.tableSize
                            @transition( client, 'drawTable' )
        drawTable:
            _onEnter: (client) ->
                printer.print client.tableSize
                @transition( client, 'promptForInput' )
        exit:
            _onEnter: (client) ->
                console.log """
                =================================================

                Thanks for using the prime table printer

                =================================================
                """
                process.exit(0)
    welcome: (client) ->
        @handle( 'welcome', client )
)

client = {}
program.welcome(client)
