const { readFileToArray } = require("./read-file-to-array");
const { findMostIsolatedPlace } = require("./find-most-isolated");

async function main() {
  const places = await readFileToArray("./problem_big.txt");
  const mostIsolated = findMostIsolatedPlace(places);
  console.log(`Most isolated is place${mostIsolated.id}`);
}

main();
