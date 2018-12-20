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
  let area = 0;

  for (let x1 = 0; x1 < 400; x1++) {
    for (let y1 = 0; y1 < 400; y1++) {
      if (points.reduce((acc, p) => acc + p.distance(x1, y1), 0) < 10000) {
        matrix[x1][y1] = "#";
      }
    }
  }

  for (let x1 = 0; x1 < 400; x1++) {
    for (let y1 = 0; y1 < 400; y1++) {
      if (matrix[x1][y1] === "#") {
        area++;
      }
    }
  }

  console.log(area);

  process.exit(0);
}
