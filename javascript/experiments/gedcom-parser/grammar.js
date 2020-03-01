// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "file_start$string$1", "symbols": [{"literal":"0"}, {"literal":" "}, {"literal":"H"}, {"literal":"E"}, {"literal":"A"}, {"literal":"D"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "file_start", "symbols": ["file_start$string$1"], "postprocess": () => { fileInfo: {} }}
]
  , ParserStart: "file_start"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
