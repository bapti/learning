const { readFileToArray } = require("./utils");
const _ = require("lodash");
main();

function readLine(line, index) {
  const [x, y] = line.split(",").map(i => Number(i));
  return {
    x: Number(x),
    y: Number(y),
    isInfinite: false,
    id: index,
    area: 0,
    distance: (x1, y1) => Math.abs(x1 - x) + Math.abs(y1 - y)
  };
}

async function main() {
  const points = await readFileToArray("./day6-input.txt", readLine);
  const matrix = Array(400)
    .fill([])
    .map(x => Array(400).fill("."));

  for (let x1 = 0; x1 < 400; x1++) {
    for (let y1 = 0; y1 < 400; y1++) {
      points.sort((a, b) => a.distance(x1, y1) - b.distance(x1, y1));

      const [a, b] = points;
      if (a.distance(x1, y1) < b.distance(x1, y1)) {
        matrix[x1][y1] = a.id;
      }
    }
  }

  points.sort((a, b) => a.id - b.id);

  for (let x1 = 0; x1 < 400; x1++) {
    for (let y1 = 0; y1 < 400; y1++) {
      const pointId = matrix[x1][y1];
      if (pointId !== ".") {
        points[pointId].area++;
        if (x1 === 0 || x1 === 399 || y1 === 0 || y1 === 399) {
          points[pointId].isInfinite = true;
        }
      }
    }
  }

  const nonInfinite = points.filter(x => !x.isInfinite);
  nonInfinite.sort((a, b) => b.area - a.area);
  const [biggest] = nonInfinite;

  console.log(biggest.area, biggest.id);

  process.exit(0);
}
