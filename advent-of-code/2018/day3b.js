const { readFileToArray } = require("./utils");
const _ = require("lodash");
main();

function doesSquareHaveOverlaps(matrix, { x1, x2, y1, y2 }) {
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      if (matrix[x][y] > 1) {
        return true;
      }
    }
  }

  return false;
}

async function main() {
  const squares = await readFileToArray("./day3-input.txt", line => {
    const [id, a, b, an, bn] = line.split(/[@,:x]+/g);
    return {
      id,
      x1: Number(a),
      x2: Number(a) + Number(an) - 1,
      y1: Number(b),
      y2: Number(b) + Number(bn) - 1
    };
  });

  const matrix = new Array(1001).fill([]).map(x => new Array(1001).fill(0));

  for (const { x1, x2, y1, y2 } of squares) {
    for (let x = x1; x <= x2; x++) {
      for (let y = y1; y <= y2; y++) {
        matrix[x][y] += 1;
      }
    }
  }

  for (const square of squares) {
    if (!doesSquareHaveOverlaps(matrix, square)) {
      console.log(square.id);
      process.exit(0);
    }
  }
  process.exit(1);
}
