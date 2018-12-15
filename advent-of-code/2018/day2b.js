const { readFileToArray } = require("./utils");
const _ = require("lodash");
day2b();

function intersection(line1, line2) {
  const result = [];
  for (let i = 0; i <= 25; i++) {
    if (line1[i] === line2[i]) {
      result.push(line1[i]);
    }
  }
  return result;
}

function intersectionLength(line1, line2) {
  let length = 0;
  for (let i = 0; i <= 25; i++) {
    if (line1[i] === line2[i]) {
      length++;
    }
  }
  return length;
}

async function day2b() {
  const lines = await readFileToArray("./day2-input.txt", line => [...line]);

  for (let [i, line1] of lines.entries()) {
    for (let [j, line2] of lines.entries()) {
      if (i !== j) {
        const length = intersectionLength(line1, line2);
        if (length == 25) {
          const result = intersection(line1, line2);
          console.log(result.join(""));
          console.log("-------------");
          process.exit(0);
        }
      }
    }
  }
}
