const { readFileToArray } = require("./utils");
const _ = require("lodash");
main();

function printSquare(matrix, x1, x2, y1, y2) {
  let output = "";

  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      try {
        output += `${matrix[x][y]} `;
      } catch (err) {
        console.log(err);
      }
    }
    output += "\n";
  }

  console.log(output);
}

async function main() {
  const squares = await readFileToArray("./day3-input.txt", line => {
    const [, a, b, an, bn] = line.split(/[@,:x]+/g);
    return {
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
        try {
          matrix[x][y] += 1;
        } catch (err) {
          console.log(err);
        }
      }
    }
    // printSquare(matrix, x1, x2, y1, y2);
  }

  const overlaps = matrix.reduce((acc, row) => {
    return acc + row.filter(x => x > 1).length;
  }, 0);

  console.log(overlaps);
}
