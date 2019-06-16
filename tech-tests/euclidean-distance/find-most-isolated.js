const { kdTree } = require("kd-tree-javascript");

function findMostIsolatedPlace(places) {
  const tree = new kdTree(places, euclidenaDistance, ["x", "y"]);

  for (const place of places) {
    const [[nearest]] = tree.nearest(place, 2);

    place.nearestDistance = euclidenaDistance(place, nearest);
  }

  places.sort((a, b) => b.nearestDistance - a.nearestDistance);

  return places[0];
}

function euclidenaDistance(pointA, pointB) {
  return Math.abs(pointA.x - pointB.x) + Math.abs(pointA.y - pointB.y);
}

module.exports = {
  findMostIsolatedPlace
};
