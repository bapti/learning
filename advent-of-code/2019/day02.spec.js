const { calcIntcodes, main } = require("./day02");

describe("Day2 part 1", () => {
  it.each([
    [
      [1, 0, 0, 0, 99],
      [2, 0, 0, 0, 99]
    ],
    [
      [2, 3, 0, 3, 99],
      [2, 3, 0, 6, 99]
    ],
    [
      [2, 4, 4, 5, 99, 0],
      [2, 4, 4, 5, 99, 9801]
    ],
    [
      [1, 1, 1, 4, 99, 5, 6, 0, 99],
      [30, 1, 1, 4, 2, 5, 6, 0, 99]
    ],
    [
      [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50],
      [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]
    ]
  ])("calcIntcode(%p) should be %p", (input, expected) => {
    expect(calcIntcodes(input)).toEqual(expected);
  });
});

describe("Main", () => {
  it.only("should return result", async () => {
    const result = await main();
    console.log(result);
  });
});
