const { readFileToArray } = require("./read-file-to-array");
const { parseLine } = require("./line-parser");

describe("readFileToArray", function() {
  it("should resond with test data", async function() {
    const actualData = await readFileToArray("./problem_small.txt", parseLine);
    expect(actualData).toEqual(testData);
  });
});

const testData = [
  {
    id: 0,
    x: 1312573,
    y: 8418602
  },

  {
    id: 1,
    x: 4038083,
    y: 9103890
  },
  {
    id: 2,
    x: 8899296,
    y: 9013490
  },

  {
    id: 3,
    x: 988534,
    y: 8667395
  },
  {
    id: 4,
    x: 2810125,
    y: 1002710
  },
  {
    id: 5,
    x: 4023834,
    y: 4748684
  },
  {
    id: 6,
    x: 8637793,
    y: 2528606
  }
];
