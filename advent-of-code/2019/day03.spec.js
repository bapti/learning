const { closestIntersection, parseLineInstruction } = require("./day03");

describe("Day3 part 1", () => {
  it("should parse a line instruction", () => {
    const line = parseLineInstruction("U4,D123,L23,R54");
    expect(line).toEqual([
      { direction: [0, 1], distance: 4 },
      { direction: [0, -1], distance: 123 },
      { direction: [-1, 0], distance: 23 },
      { direction: [1, 0], distance: 54 }
    ]);
  });

  it("should parse another line instruction", () => {
    const line = parseLineInstruction("R8,U5,L5,D3");
    expect(line).toEqual([
      { direction: [1, 0], distance: 8 },
      { direction: [0, 1], distance: 5 },
      { direction: [-1, 0], distance: 5 },
      { direction: [0, -1], distance: 3 }
    ]);
  });

  it("should parse yet another line instruction", () => {
    const line = parseLineInstruction("U7,R6,D4,L4");
    expect(line).toEqual([
      { direction: [0, 1], distance: 7 },
      { direction: [1, 0], distance: 6 },
      { direction: [0, -1], distance: 4 },
      { direction: [-1, 0], distance: 4 }
    ]);
  });
});

describe("Day3 test cases", () => {
  it("should have coords of 0, 0", () => {
    expect(
      closestIntersection(
        parseLineInstruction("R8,U5,L5,D3"),
        parseLineInstruction("U7,R6,D4,L4")
      )
    ).toEqual([0, 0]);
  });

  it.skip("should have distance of X", () => {
    expect(
      closestIntersection(
        parseLineInstruction("R75,D30,R83,U83,L12,D49,R71,U7,L72"),
        parseLineInstruction("U62,R66,U55,R34,D71,R55,D58,R83")
      )
    ).toEqual(159);
  });

  it.skip("should have distance of 135", () => {
    expect(
      closestIntersection(
        parseLineInstruction("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51"),
        parseLineInstruction("U98,R91,D20,R16,D67,R40,U7,R15,U6,R7")
      )
    ).toEqual(135);
  });
});
