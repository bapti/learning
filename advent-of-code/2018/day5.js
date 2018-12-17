const { readFileToArray } = require("./utils");
const _ = require("lodash");
main();

function readLine(line) {
  return [...line];
}

function applyNextReaction(polymer) {
  for (let i = 0; i < polymer.length - 1; i++) {
    const charDiff = polymer[i].charCodeAt(0) - polymer[i + 1].charCodeAt(0);
    if (Math.abs(charDiff) === 32) {
      polymer.splice(i, 2);
      return true;
    }
  }

  return false;
}

async function main() {
  const lines = await readFileToArray("./day5-input.txt", readLine);
  const polymer = _.flatten(lines);
  let foundReaction = true;
  do foundReaction = applyNextReaction(polymer);
  while (foundReaction);
  console.log("Polymer length", polymer.length);
  process.exit(0);
}
