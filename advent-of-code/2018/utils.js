const fs = require('fs'),
  readline = require('readline'),
  stream = require('stream');

async function readFileToArray(filePath, lineIterator) {
  return new Promise(function (resolve, reject) {
    const outArray = [];
    var instream = fs.createReadStream(filePath);
    var outstream = new stream;
    outstream.readable = true;
    outstream.writable = true;

    var rl = readline.createInterface({
      input: instream,
      output: outstream,
      terminal: false
    });

    rl.on('line', function (line) {
      const formattedLine = lineIterator(line);
      outArray.push(formattedLine);
    });

    rl.on('close', function () {
      resolve(outArray);
    })

    rl.on('error', function (err) {
      reject(err);
    })
  });
}

module.exports = {
  readFileToArray
}