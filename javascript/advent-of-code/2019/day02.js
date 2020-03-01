/*
an intcode program is a list of integers separated by commas (like 1,0,0,3,99).
to run one, start by looking at the first integer (called position 0).
here, you will find an opcode - either 1, 2, or 99.
the opcode indicates what to do; for example, 99 means that the program is finished and should immediately halt.
 encountering an unknown opcode means something went wrong.

For example, if your Intcode computer encounters 1,10,20,30, it should read the values 
at positions 10 and 20, add those values, and then overwrite the value at position 30 with their sum.

Opcode 2 works exactly like opcode 1, except it multiplies the two inputs instead of adding them. 
Again, the three integers after the opcode indicate where the inputs and outputs are, not their values.

Once you're done processing an opcode, move to the next one by stepping forward 4 positions.
*/

const { readFileToArray } = require("./utils");

module.exports = {
  calcIntcodes,
  main,
  main2
};

async function main() {
  const [numbers] = await readFileToArray("./day02-input.txt", x =>
    x.split(",").map(y => Number(y))
  );

  numbers[1] = 12;
  numbers[2] = 2;

  calcIntcodes(numbers);

  return numbers[0];
}

async function main2() {
  const [numbers] = await readFileToArray("./day02-input.txt", x =>
    x.split(",").map(y => Number(y))
  );

  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      const testNumbers = [...numbers];
      testNumbers[1] = noun;
      testNumbers[2] = verb;
      calcIntcodes(testNumbers);
      if (testNumbers[0] === 19690720) {
        return 100 * noun + verb;
      }
    }
  }

  throw "Didn't find 19690720";
}

function calcIntcodes(numbers) {
  for (let i = 0; i < numbers.length; i += 4) {
    const [a, b, c, d] = numbers.slice(i, i + 4);
    if (a === 1) {
      numbers[d] = numbers[b] + numbers[c];
    } else if (a === 2) {
      numbers[d] = numbers[b] * numbers[c];
    } else if (a === 99) {
      return numbers;
    } else {
      throw new Error(
        `Found code ${a} at ${i} where [a ${a}, b ${b}, c ${c}, d ${d}] `
      );
    }
  }
}
