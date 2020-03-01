/*

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:

For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
For a mass of 1969, the fuel required is 654.
For a mass of 100756, the fuel required is 33583.
The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?

*/
const { fuelCalc, fullFuelCalc } = require("./day01.js");

describe.skip("Day 1a tests", () => {
  it.each([
    [12, 2],
    [14, 2],
    [1969, 654],
    [100756, 33583]
  ])("fuelCalc(%d) should be %d", (input, expected) => {
    expect(fuelCalc(input)).toBe(expected);
  });
});

describe.skip("Day 1b tests", () => {
  it.each([
    [1969, [654, 216, 70, 21, 5]],
    [100756, [33583, 11192, 3728, 1240, 411, 135, 43, 12, 2]]
  ])("fullFuelCalc(%d) should be %p", (input, expected) => {
    expect([...fullFuelCalc(input)]).toEqual(expected);
  });
});
