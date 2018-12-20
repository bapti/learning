const { readFileToArray } = require("./utils");
const _ = require("lodash");
const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].reduce((acc, id) => {
  acc[id] = { id, dependencies: [] };
  return acc;
}, {});
main();

function readLine(line) {
  const bits = line.split(" ");
  return {
    id: bits[7],
    dependsOn: bits[1]
  };
}

function compareGroups(a, b) {
  if (a.dependencies.length === 0 && b.dependencies.length === 0) {
    return a.id.charCodeAt(0) - b.id.charCodeAt(0);
  }
  return a.dependencies.length - b.dependencies.length;
}

async function main() {
  const steps = await readFileToArray("./day7-input.txt", readLine);

  const groupedSteps = steps.reduce((acc, { id, dependsOn }) => {
    acc[id] = acc[id] || { id, dependencies: [] };
    acc[id].dependencies.push(dependsOn);
    return acc;
  }, alphabet);

  const groups = Object.values(groupedSteps);
  const orderedSteps = [];

  while (groups.length > 0) {
    groups.sort(compareGroups);
    const { id } = groups.shift();
    orderedSteps.push(id);
    for (const group of groups) {
      group.dependencies = group.dependencies.filter(x => x !== id);
    }
  }

  console.log(orderedSteps.join(""), orderedSteps.join("").length);
}
