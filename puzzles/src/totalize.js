/*
Start number, then 9 calculations gives answer
Each calculation step must result in a whole, positive number
At least one each of: +, -, x, ÷ (fractions and percentages can count as x and ÷)
No consecutive identical functions unless in different format
All steps and answers <1000 (*Excludes Adult puzzles – See separate note below)
Halve it, double it etc., can fall into any step location

Must have:
Start number <10
All intermediate steps < or =100
Answers <12

Can include:
Multiples up to 12 x 12
Half of it, Double it
    */
const operations = [
  {
    name: "Add",
    fn: (a, b) => a + b
  },
  {
    name: "Divide",
    fn: (a, b) => a / b
  },
  {
    name: "Multiply",
    fn: (a, b) => a * b
  },
  {
    name: "Subtract",
    fn: (a, b) => a - b
  },
  {
    name: "Double",
    fn: a => 2 * a
  },
  {
    name: "Half",
    fn: a => a / 2
  }
];

const easyRules = {
  start: () => random(1, 9),
  isValidStep: num => num <= 100 && Number.isInteger(num),
  isValidEnd: num => num < 12
};

const modes = {
  EASY: {
    rules: easyRules
  }
};

function getNextValidStep({ previousSteps, operations, stepValidators }) {}

function totalize({ mode }) {
  const rules = modes[mode];
  const steps = [];
  const initialValue = rules.start();

  for (const stepNum of range(9)) {
    const step = getNextValidStep({
      previousSteps: steps,
      operations: rules.operations,
      stepValidators:
        stepNum === 9
          ? [rules.isValidStep, rules.isValidEnd]
          : [rules.isValidStep]
    });

    steps.push(step);
  }
}

module.exports = totalize;

function random(min, max) {
  const min = Math.ceil(min);
  const max = Math.ceil(max);
  //The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

function range(length) {
  return Array(length)
    .fill(1)
    .map((x, y) => x + y);
}
