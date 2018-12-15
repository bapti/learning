const { readFileToArray } = require("./utils");
const _ = require("lodash");
day2();

async function day2() {
  const ids = await readFileToArray("./day2-input.txt", function(line) {
    const map = [...line].reduce((acc, item) => {
      acc[item] = !acc[item] ? 1 : acc[item] + 1;
      return acc;
    }, {});

    const filtered = _.pickBy(map, x => x > 1);

    const result = new Set(Object.values(filtered));

    return [...result];
  });

  const { 2: twos, 3: threes } = _.countBy(_.flatten(ids), x => x);

  console.log(twos * threes);
}
