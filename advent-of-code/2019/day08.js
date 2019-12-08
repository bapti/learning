const { readFileToArray } = require("./utils");

module.exports = {
  parseLine,
  main,
  printImage
};

function parseLine(line) {
  return line.split("").map(x => Number(x));
}

async function main() {
  const [numbers] = await readFileToArray("./day08-input.txt", parseLine);
  const layers = chunk(numbers, 25 * 6);
  layers.sort((a, b) => countOfN(a, 0) - countOfN(b, 0));
  const layer = layers[0];
  return countOfN(layer, 1) * countOfN(layer, 2);
}

async function main2() {
  const [numbers] = await readFileToArray("./day08-input.txt", parseLine);
  const layers = chunk(numbers, 25 * 6);
  return printImage(layers, 6);
}

function printImage(layers, height, width) {
  const image = [];
  for (let pixelIndex = 0; pixelIndex < height * width; pixelIndex++) {
    for (let layer of layers) {
      const pixel = layer[pixelIndex];
      if (pixel === 0 || pixel === 1) {
        image.push(pixel);
        continue;
      }
    }
  }
  const printed = chunk(image, height)
    .map(row => row.join(""))
    .flat()
    .join("/n");

  return printed;
}

function countOfN(layer, lookingForN) {
  return layer.reduce((acc, item) => {
    acc += item === lookingForN ? 1 : 0;
    return acc;
  }, 0);
}

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
