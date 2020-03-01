/*

*/

const { readFileToArray } = require("./utils");

module.exports = {
  parseLineInstruction,
  findIntersections,
  findClosestManhattenDistancePoint,
  closestIntersectionBySteps,
  solveA,
  solveB
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

async function solveA() {
  const [line1, line2] = await readFileToArray(
    "./day03-input.txt",
    parseLineInstruction
  );
  const intersectionPoints = [...findIntersections(line1, line2)];
  const closestDistance = findClosestManhattenDistancePoint(intersectionPoints);
  return closestDistance;
}

async function solveB() {
  const [line1, line2] = await readFileToArray(
    "./day03-input.txt",
    parseLineInstruction
  );

  return closestIntersectionBySteps(line1, line2);
}

function closestIntersectionBySteps(line1, line2) {
  const intersections = [...findIntersections(line1, line2)];
  intersections.sort((a, b) => {
    return a.line1Steps + a.line2Steps - (b.line1Steps + b.line2Steps);
  });
  return intersections[0].line1Steps + intersections[0].line2Steps;
}

function findClosestManhattenDistancePoint(points) {
  points.sort(({ pos: [xa, ya] }, { pos: [xb, yb] }) => {
    return Math.abs(xa) + Math.abs(ya) - (Math.abs(xb) + Math.abs(yb));
  });

  const [
    {
      pos: [x, y]
    }
  ] = points;

  return Math.abs(x) + Math.abs(y);
}

function* findIntersections(line1, line2) {
  const pointsMap = {};
  let pos = [0, 0];
  let numberOfSteps = 0;

  for (const {
    direction: [dx, dy],
    distance
  } of line1) {
    for (let i = 0; i < distance; i++) {
      numberOfSteps++;
      pos = [dx + pos[0], dy + pos[1]];
      pointsMap[`${pos[0]}_${pos[1]}`] = {
        pos,
        line1Steps: numberOfSteps
      };
    }
  }

  pos = [0, 0];
  numberOfSteps = 0;

  for (const {
    direction: [dx, dy],
    distance
  } of line2) {
    for (let i = 0; i < distance; i++) {
      numberOfSteps++;
      pos = [dx + pos[0], dy + pos[1]];
      if (pointsMap[`${pos[0]}_${pos[1]}`] !== undefined) {
        yield {
          ...pointsMap[`${pos[0]}_${pos[1]}`],
          line2Steps: numberOfSteps
        };
      }
    }
  }
}
