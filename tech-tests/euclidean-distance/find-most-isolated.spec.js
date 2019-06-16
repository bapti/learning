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
    y: 1002710,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 5,
    x: 4023834,
    y: 4748684,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 6,
    x: 8637793,
    y: 2528606,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  }
];

const testData2 = [
  {
    id: 0,
    x: 1312573,
    y: 8418602,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 1,
    x: 4038083,
    y: 9103890,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 2,
    x: 8899296,
    y: 9013490,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 3,
    x: 988534,
    y: 8667395,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  }
];

const testDataAll = [
  {
    id: 0,
    x: 1312573,
    y: 8418602,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 1,
    x: 4038083,
    y: 9103890,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 2,
    x: 8899296,
    y: 9013490,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 3,
    x: 988534,
    y: 8667395,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 4,
    x: 2810125,
    y: 1002710,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 5,
    x: 4023834,
    y: 4748684,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  },
  {
    id: 6,
    x: 8637793,
    y: 2528606,
    nearestId: -1,
    nearestDistance: Number.MAX_SAFE_INTEGER
  }
];
