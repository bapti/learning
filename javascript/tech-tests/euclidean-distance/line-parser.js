// Example input place0 1312573 8418602
function parseLine(line, id) {
  const [, x, y] = line.split(" ");
  return {
    id,
    x: Number(x),
    y: Number(y)
  };
}

module.exports = {
  parseLine
};
