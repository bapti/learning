function findMostIsolatedPlace(places) {
  let mostIsolated = places[0];
  for (let i = 0; i < places.length; i++) {
    const { x: xA, y: yA } = places[i];

    for (let j = i + 1; j < places.length; j++) {
      const { x: xB, y: yB } = places[j];
      const euclidenaDistance = Math.abs(xA - xB) + Math.abs(yA - yB);
      setNearestNeighbor(places[i], places[j], euclidenaDistance);
    }

    if (mostIsolated.nearestDistance < places[i].nearestDistance) {
      mostIsolated = places[i];
    }
  }

  return mostIsolated;
}

function setNearestNeighbor(placeA, placeB, distance) {
  if (placeA.nearestDistance > distance) {
    placeA.nearestId = placeB.id;
    placeA.nearestDistance = distance;
  }
  if (placeB.nearestDistance > distance) {
    placeB.nearestId = placeA.id;
    placeB.nearestDistance = distance;
  }
}

module.exports = {
  findMostIsolatedPlace
};
