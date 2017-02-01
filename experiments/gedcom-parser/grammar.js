// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "expression", "symbols": ["N", "MS", "N", "MS", "N"], "postprocess": d => d.join('')},
    {"name": "MS", "symbols": [{"literal":"+"}], "postprocess": d => d[0]},
    {"name": "MS", "symbols": [{"literal":"-"}], "postprocess": d => d[0]},
    {"name": "N$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "N$ebnf$1", "symbols": [/[0-9]/, "N$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "N", "symbols": ["N$ebnf$1"], "postprocess": d => d[0].join('')}
]
  , ParserStart: "expression"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
