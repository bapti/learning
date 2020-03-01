const { readFileToArray } = require('./utils');

async function day1() {
  const results = await readFileToArray('./day1-input.txt', function (line) {
    return Number(line);
  })

  const frequency = results.reduce((acc, item) => (acc + item), 0)

  console.log(frequency);
}

day1();