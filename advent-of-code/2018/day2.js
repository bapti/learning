const { readFileToArray } = require('./utils');

day2();

async function day2() {

  const ids = await readFileToArray('./day2-input.txt', function (line) {
    const map = [...line].reduce((acc, item) => {
      acc[item] = !acc[item] ? 1 : acc[item] + 1;
      return acc;
    }, {});

    const twosAndThrees = Object.values(map).reduce((acc, value) => {
      if (value > 1) {
        acc[value] = true;
      }
      return acc;
    })

    return twosAndThrees;

  });


  console.log(ids)
}