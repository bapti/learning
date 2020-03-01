const { readFileToArray } = require("./utils");
const _ = require("lodash");
const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
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

function applyFullPolymerReaction(polymer) {
  let foundReaction = true;
  do foundReaction = applyNextReaction(polymer);
  while (foundReaction);
}

async function main() {
  const lines = await readFileToArray("./day5-input.txt", readLine);
  const fullPolymer = _.flatten(lines);

  const results = alphabet.map(char => {
    const filteredPolymer = fullPolymer.filter(x => x.toLowerCase() !== char);
    applyFullPolymerReaction(filteredPolymer);
    return { char: char, polymerLength: filteredPolymer.length };
  });

  results.sort((a, b) => a.polymerLength - b.polymerLength);

  console.log("Shortest polymer:", results[0].char, results[0].polymerLength);

  process.exit(0);
}
