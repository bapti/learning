const { parseLine } = require("./line-parser");
describe("parseLine", function() {
  it("should parse line correctly", function() {
    const result = parseLine("place0 1312573 8418602", 0);
    expect(result).toEqual({
      id: 0,
      x: 1312573,
      y: 8418602
    });
  });
});
