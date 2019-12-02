const totalize = require("./totalize");
const repl = require("repl");

repl.start("> ").context.totalize = totalize;
