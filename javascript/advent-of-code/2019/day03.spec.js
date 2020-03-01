const {
  findIntersections,
  parseLineInstruction,
  findClosestManhattenDistancePoint,
  closestIntersectionBySteps,
  solveA,
  solveB
} = require("./day03");

describe.skip("Day3 part 1", () => {
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

describe.skip("Day3 test cases", () => {
  it("should have distance of 159", () => {
    expect(
      findClosestManhattenDistancePoint([
        ...findIntersections(
          parseLineInstruction("R75,D30,R83,U83,L12,D49,R71,U7,L72"),
          parseLineInstruction("U62,R66,U55,R34,D71,R55,D58,R83")
        )
      ])
    ).toEqual(159);
  });

  it("should have distance of 135", () => {
    expect(
      findClosestManhattenDistancePoint([
        ...findIntersections(
          parseLineInstruction("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51"),
          parseLineInstruction("U98,R91,D20,R16,D67,R40,U7,R15,U6,R7")
        )
      ])
    ).toEqual(135);
  });

  it("should solve part A", async () => {
    const result = await solveA();
    expect(result).toEqual(1211);
  });
});

describe.skip("Day 3 part B", () => {
  it("should take 30 steps to first intersection", () => {
    expect(
      closestIntersectionBySteps(
        parseLineInstruction("R8,U5,L5,D3"),
        parseLineInstruction("U7,R6,D4,L4")
      )
    ).toEqual(30);
  });

  it("should take 30 steps to first intersection", () => {
    expect(
      closestIntersectionBySteps(
        parseLineInstruction("R75,D30,R83,U83,L12,D49,R71,U7,L72"),
        parseLineInstruction("U62,R66,U55,R34,D71,R55,D58,R83")
      )
    ).toEqual(610);
  });

  it("should take 30 steps to first intersection", () => {
    expect(
      closestIntersectionBySteps(
        parseLineInstruction("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51"),
        parseLineInstruction("U98,R91,D20,R16,D67,R40,U7,R15,U6,R7")
      )
    ).toEqual(410);
  });

  it("should solve part B", async () => {
    const result = await solveB();
    expect(result).toEqual(101386);
  });
});
