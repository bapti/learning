const { kdTree } = require("kd-tree-javascript");

function findMostIsolatedPlace(places) {
  const tree = new kdTree(places, euclidenaDistance, ["x", "y"]);
  let mostIsolated = { nearestDistance: 0 };

  for (const place of places) {
    const [[nearest]] = tree.nearest(place, 2);

    place.nearestDistance = euclidenaDistance(place, nearest);

    if (mostIsolated.nearestDistance < place.nearestDistance) {
      mostIsolated = place;
    }
  }

  return mostIsolated;
}

function euclidenaDistance(pointA, pointB) {
  return Math.abs(pointA.x - pointB.x) + Math.abs(pointA.y - pointB.y);
}

module.exports = {
  findMostIsolatedPlace
};
