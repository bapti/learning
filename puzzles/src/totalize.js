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
Answers <= 12

Can include:
Multiples up to 12 x 12
Half of it, Double it
    */
const DIFFICULTY_LEVELS = {
  EASY: 1,
  MEDIUM: 2,
  HARD: 3
};

const easyRules = {
  start: () => random(1, 9),
  isValidStep: num => num <= 100 && Number.isInteger(num),
  isValidEndResult: num => num <= 12,
  rules: allRules.filter(x => x.difficulty === DIFFICULTY_LEVELS.EASY)
};

function getNextValidStep({ previousSteps, operations, stepValidators }) {}

function totalize({ mode }) {
  const rules = MODES[mode];
  const steps = [];
  const initialValue = rules.start();

  for (const stepNum of range(9, 1)) {
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

const range = (end, start = 0, step = 1) =>
  Array.from(
    { length: Math.ceil((end - start + 1) / step) },
    (v, i) => i * step + start
  );

const operations = [
  {
    name: "Add",
    fn: (a, b) => a + b,
    difficulty: DIFFICULTY_LEVELS.EASY
  },
  {
    name: "Divide",
    fn: (a, b) => a / b,
    difficulty: DIFFICULTY_LEVELS.EASY,
    isValid: (a, b) => a % b === 0
  },
  {
    name: "Multiply",
    fn: (a, b) => a * b,
    difficulty: DIFFICULTY_LEVELS.EASY
  },
  {
    name: "Subtract",
    fn: (a, b) => a - b,
    difficulty: DIFFICULTY_LEVELS.EASY
  }
];

const percentages = [
  {
    name: "50%",
    fn: n * 0.5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "100%",
    fn: n * 1.0,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "150%",
    fn: n * 1.5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "200%",
    fn: n * 2.0,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "250%",
    fn: n * 2.5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "300%",
    fn: n * 3.0,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "350%",
    fn: n * 3.5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "400%",
    fn: n * 4.0,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "450%",
    fn: n * 4.5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "500%",
    fn: n * 5.0,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "550%",
    fn: n * 5.5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "600%",
    fn: n * 6.0,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "650%",
    fn: n * 6.5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "700%",
    fn: n * 7.0,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "750%",
    fn: n * 7.5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "800%",
    fn: n * 8.0,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "850%",
    fn: n * 8.5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "900%",
    fn: n * 9.0,
    difficulty: DIFFICULTY_LEVELS.HARD
  }
];

const multiplications = [
  {
    name: "Double it",
    fn: n => n * 2,
    difficulty: DIFFICULTY_LEVELS.EASY
  },
  {
    name: "Triple it",
    fn: n => n * 3,
    difficulty: DIFFICULTY_LEVELS.MEDIUM
  },
  {
    name: "Quadruple it",
    fn: n => n * 4,
    difficulty: DIFFICULTY_LEVELS.MEDIUM
  }
];

const divisions = [
  {
    name: "Half of it",
    fn: n => n / 2,
    difficulty: DIFFICULTY_LEVELS.EASY
  },
  {
    name: "Third of it",
    fn: n => n / 3,
    difficulty: DIFFICULTY_LEVELS.MEDIUM
  },
  {
    name: "Quarter of it",
    fn: n => n / 4,
    difficulty: DIFFICULTY_LEVELS.MEDIUM
  }
];

const fractions = [
  {
    name: "1/2",
    fn: n => n / 2,
    difficulty: DIFFICULTY_LEVELS.MEDIUM
  },
  {
    name: "1/3",
    fn: n => n / 3,
    difficulty: DIFFICULTY_LEVELS.MEDIUM
  },
  {
    name: "2/3",
    fn: n => (2 * n) / 3,
    difficulty: DIFFICULTY_LEVELS.MEDIUM
  },
  {
    name: "1/4",
    fn: n => n / 4,
    difficulty: DIFFICULTY_LEVELS.MEDIUM
  },
  {
    name: "3/4",
    fn: n => (3 * n) / 4,
    difficulty: DIFFICULTY_LEVELS.MEDIUM
  },
  {
    name: "1/5",
    fn: n => n / 5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "2/5",
    fn: n => (2 * n) / 5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "3/5",
    fn: n => (3 * n) / 5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "4/5",
    fn: n => (4 * n) / 5,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "1/6",
    fn: n => n / 6,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "5/6",
    fn: n => (5 * n) / 6,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "1/7",
    fn: n => (1 * n) / 7,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "2/7",
    fn: n => (2 * n) / 7,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "3/7",
    fn: n => (3 * n) / 7,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "4/7",
    fn: n => (4 * n) / 7,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "5/7",
    fn: n => (5 * n) / 7,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "6/7",
    fn: n => (5 * n) / 7,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "1/8",
    fn: n => n / 8,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "3/8",
    fn: n => (3 * n) / 8,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "5/8",
    fn: n => (5 * n) / 8,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "7/8",
    fn: n => (7 * n) / 8,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "1/9",
    fn: n => n / 9,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "2/9",
    fn: n => (2 * n) / 9,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "4/9",
    fn: n => (4 * n) / 9,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "5/9",
    fn: n => (5 * n) / 9,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "7/9",
    fn: n => (7 * n) / 9,
    difficulty: DIFFICULTY_LEVELS.HARD
  },
  {
    name: "8/9",
    fn: n => (8 * n) / 9,
    difficulty: DIFFICULTY_LEVELS.HARD
  }
];

const allRules = [
  ...operations,
  ...percentages,
  ...fractions,
  ...divisions,
  ...multiplications
];
