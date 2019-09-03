const { readFileToArray } = require("./read-file-to-array");
const { findMostIsolatedPlace } = require("./find-most-isolated");
const { parseLine } = require("./line-parser");

async function main() {
  const places = await readFileToArray("./problem_big.txt", parseLine);
  const mostIsolated = findMostIsolatedPlace(places);
  console.log(`Most isolated is place${mostIsolated.id}`);
}

main();
