const { sut } = require("./day03");

describe("Day3 part 1", () => {
  it.each([])("calc(%p) should be %p", (input, expected) => {
    expect(sut(input)).toEqual(expected);
  });
});
