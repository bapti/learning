const fs = require('fs'),
      readline = require('readline'),
      stream = require('stream');

var currentFrequency = 0;
var frequencyMap = {};
var finished = false;

runThroughFile();

function runThroughFile() {
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
        frequencyMap[currentFrequency] = !frequencyMap[currentFrequency] 
            ? 1 
            : frequencyMap[currentFrequency] + 1;
    
        if(frequencyMap[currentFrequency] > 1) {
            finished = true;
            rl.close();
        }
    });
    
    rl.on('close', function() {
        if(finished) {
            console.log("First double", currentFrequency);
        }
        if(!finished) {
            runThroughFile();
        }
    })
}

