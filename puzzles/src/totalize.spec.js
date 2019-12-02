const totalize = require("./totalize");

const operations = {
  Add: (a, b) => a + b,
  Divide: (a, b) => a / b,
  Multiply: (a, b) => a * b,
  Subtract: (a, b) => a - b
};

describe("Checking test data", () => {
  it("should work fine", () => {
    let total = testData.initialValue;

    for (step of testData.intermediates) {
      total = operations[step.name](total, eval(step.operand));
      expect(total).toEqual(step.value);
    }

    expect(total).toEqual(testData.finalValue);
  });
});

describe("Kids easy mode", () => {
  it("test 1", () => {
    totalize({
      mode: "KIDS_EASY"
    });
  });
});

const testData = {
  abbreviation: "CD",
  name: "Countdown",
  puzzleID: "ab2963c8d06b49e09d08f1ee79df4063",
  initialValue: 120,
  intermediates: [
    {
      step: 1,
      name: "Add",
      description: "+ 5/6 of it",
      input: 120,
      operand: "5/6*120",
      value: 220
    },
    {
      step: 2,
      name: "Divide",
      description: "÷ 11",
      input: 220,
      operand: "11",
      value: 20
    },
    {
      step: 3,
      name: "Subtract",
      description: "Take away 2",
      input: 20,
      operand: "2",
      value: 18
    },
    {
      step: 4,
      name: "Divide",
      description: "÷ 9",
      input: 18,
      operand: "9",
      value: 2
    },
    {
      step: 5,
      name: "Multiply",
      description: "500% of it",
      input: 2,
      operand: "5",
      value: 10
    },
    {
      step: 6,
      name: "Add",
      description: "+ 4855",
      input: 10,
      operand: "4855",
      value: 4865
    },
    {
      step: 7,
      name: "Divide",
      description: "Divide by 7",
      input: 4865,
      operand: "7",
      value: 695
    },
    {
      step: 8,
      name: "Add",
      description: "+ 2264",
      input: 695,
      operand: "2264",
      value: 2959
    },
    {
      step: 9,
      name: "Divide",
      description: "÷ 11",
      input: 2959,
      operand: "11",
      value: 269
    }
  ],
  finalValue: 269,
  isValid: true
};
