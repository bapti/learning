/*

*/

const { readFileToArray } = require("./utils");

module.exports = {
  calc,
  main
};

async function main() {
  const [numbers] = await readFileToArray("./day03-input.txt", x => x);
}

function calc(numbers) {}
