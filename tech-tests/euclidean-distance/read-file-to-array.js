const fs = require("fs");
const readline = require("readline");
const stream = require("stream");

// Example input place0 1312573 8418602
function parseLine(line, id) {
  const [, x, y] = line.split(" ");
  return {
    id,
    x: Number(x),
    y: Number(y),
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  };
}

async function readFileToArray(filePath) {
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
