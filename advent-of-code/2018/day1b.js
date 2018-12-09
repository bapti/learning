const { readFileToArray } = require('./utils');

day1b();

async function day1b(frequencyMap = {}, currentFrequency = 0) {

  const frequencies = await readFileToArray('./day1-input.txt', function (line) {
    return Number(line);
  })

  frequencies.reduce((acc, item) => {
    currentFrequency += item;
    if (!acc[currentFrequency]) {
      acc[currentFrequency] = 1
      return acc;
    }

    console.log(currentFrequency);
    process.exit(0);
  }, frequencyMap);

  day1b(frequencyMap, currentFrequency);
}

