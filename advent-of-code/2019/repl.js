const { readFileToArray } = require("./utils");
const repl = require("repl");

repl.start("> ").context.readFileToArray = readFileToArray;
