const fs = require('fs'),
      readline = require('readline'),
      stream = require('stream');

var currentFrequency = 0;
var instream = fs.createReadStream('./day1-input.txt');
var outstream = new stream;
outstream.readable = true;
outstream.writable = true;

var rl = readline.createInterface({
    input: instream,
    output: outstream,
    terminal: false
});

rl.on('line', function(line) {
    currentFrequency += Number(line);
});

rl.on('close', function() {
    console.log(currentFrequency);
})