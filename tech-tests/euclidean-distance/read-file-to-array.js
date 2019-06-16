const fs = require("fs");
const readline = require("readline");
const stream = require("stream");

async function readFileToArray(filePath, parseLine) {
  return new Promise(function(resolve, reject) {
    const outArray = [];
    var instream = fs.createReadStream(filePath);
    var outstream = new stream();
    outstream.readable = true;
    outstream.writable = true;

    var rl = readline.createInterface({
      input: instream,
      output: outstream,
      terminal: false
    });

    rl.on("line", function(line) {
      const formattedLine = parseLine(line, outArray.length);
      outArray.push(formattedLine);
    });

    rl.on("close", function() {
      resolve(outArray);
    });

    rl.on("error", function(err) {
      reject(err);
    });
  });
}

module.exports = {
  readFileToArray
};
