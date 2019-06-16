const { findMostIsolatedPlace } = require("./find-most-isolated");

describe("findMostIsolatedPlace", function() {
  it("should resond place 6", function() {
    const result = findMostIsolatedPlace(testData1);
    expect(result.id).toEqual(6);
  });

  it("should resond place 4", function() {
    const result = findMostIsolatedPlace(testData2);
    expect(result.id).toEqual(2);
  });

  it("should resond place 6", function() {
    const result = findMostIsolatedPlace(testDataAll);
    expect(result.id).toEqual(6);
  });
});

const testData1 = [
  {
    id: 4,
    x: 2810125,
    y: 1002710
  },
  {
    id: 5,
    x: 4023834,
    y: 4748684
  },
  {
    id: 6,
    x: 8637793,
    y: 2528606
  }
];

const testData2 = [
  {
    id: 0,
    x: 1312573,
    y: 8418602
  },
  {
    id: 1,
    x: 4038083,
    y: 9103890
  },
  {
    id: 2,
    x: 8899296,
    y: 9013490
  },
  {
    id: 3,
    x: 988534,
    y: 8667395
  }
];

const testDataAll = [
  {
    id: 0,
    x: 1312573,
    y: 8418602
  },
  {
    id: 1,
    x: 4038083,
    y: 9103890
  },
  {
    id: 2,
    x: 8899296,
    y: 9013490
  },
  {
    id: 3,
    x: 988534,
    y: 8667395
  },
  {
    id: 4,
    x: 2810125,
    y: 1002710
  },
  {
    id: 5,
    x: 4023834,
    y: 4748684
  },
  {
    id: 6,
    x: 8637793,
    y: 2528606
  }
];
