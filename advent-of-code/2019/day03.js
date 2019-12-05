/*

*/

const { readFileToArray } = require("./utils");

module.exports = {
  parseLineInstruction,
  closestIntersection,
  main
};

const directions = {
  U: [0, 1],
  D: [0, -1],
  L: [-1, 0],
  R: [1, 0]
};

function parseLineInstruction(line) {
  return line.split(",").map(([direction, ...distance]) => {
    return {
      direction: directions[direction],
      distance: Number(distance.join(""))
    };
  });
}

async function main() {
  const [line1, line2] = await readFileToArray(
    "./day03-input.txt",
    parseLineInstruction
  );

  const [x, y] = closestIntersection(line1, line2);

  return x + y;
}

function closestIntersection(line1, line2) {
  return [1, 1];
}
