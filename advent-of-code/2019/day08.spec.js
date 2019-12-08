const { parseLine, printImage } = require("./day08");

describe("Day8 part 2", () => {
  it("should split 0222112222120000 into an array of number", () => {
    const input = parseLine("0222112222120000");
    expect(input).toEqual([0, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0]);
  });

  it("should finish 0222112222120000 and 2,2 with an output of [01][10]", () => {
    const input = [
      [0, 2, 2, 2],
      [1, 1, 2, 2],
      [2, 2, 1, 2],
      [0, 0, 0, 0]
    ];
    expect(printImage(input, 2, 2)).toEqual("01\n10");
  });
});
