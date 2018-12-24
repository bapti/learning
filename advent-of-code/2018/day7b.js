const { readFileToArray } = require("./utils");
const _ = require("lodash");
const alphabet = [..."ABCDEF"].reduce((acc, id) => {
  //const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].reduce((acc, id) => {
  acc[id] = { id, dependencies: [] };
  return acc;
}, {});
const STEP_SECONDS = 0;

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
  const steps = await readFileToArray("./day7-test-input.txt", readLine);

  const groupedSteps = steps.reduce((acc, { id, dependsOn }) => {
    acc[id] = acc[id] || { id, dependencies: [] };
    acc[id].dependencies.push(dependsOn);
    return acc;
  }, alphabet);

  const stepsLeft = Object.values(groupedSteps);
  let completedSteps = "";
  let seconds = 0;
  let workers = Array(2)
    .fill(0)
    .map(() => ({ seconds: 0, step: "." }));

  console.log(`.    1  2  3  4  5`);

  while (stepsLeft.length > 0 || workers.some(x => x.step !== ".")) {
    for (const worker of workers) {
      if (worker.step !== "." && worker.seconds === 0) {
        for (const step of stepsLeft) {
          step.dependencies = step.dependencies.filter(x => x !== worker.step);
        }
        completedSteps += worker.step;
        worker.step = ".";
      }
    }

    for (const worker of workers) {
      if (worker.step === ".") {
        tryAssignNextStep(worker, stepsLeft);
      }
    }

    for (const worker of workers) {
      if (worker.seconds > 0) {
        worker.seconds--;
      }
    }

    console.log(
      `${seconds}  ${workers.reduce(
        (acc, i) => `${acc}  ${i.step}`,
        ""
      )}    ${completedSteps}`
    );

    seconds++;
    const eh = false;
  }
}

function tryAssignNextStep(worker, stepsLeft) {
  if (stepsLeft.length === 0) return;
  stepsLeft.sort(compareGroups);
  if (stepsLeft[0].dependencies.length === 0) {
    const { id } = stepsLeft.shift();
    worker.step = id;
    worker.seconds = id.charCodeAt() - 64 + STEP_SECONDS;
  }
}
