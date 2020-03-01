const { readFileToArray } = require("./utils");
const _ = require("lodash");
main();

async function main() {
  const guardRotations = await readFileToArray("./day4-input.txt", readLine);
  guardRotations.sort((a, b) => a.date - b.date);

  const { rotations: filteredRotations } = guardRotations.reduce(
    (acc, rotation) => {
      if (rotation.guardId) {
        acc.guardId = rotation.guardId;
        return acc;
      }
      rotation.guardId = acc.guardId;
      acc.rotations.push(rotation);
      return acc;
    },
    { guardId: null, rotations: [] }
  );

  const groupedRotations = _.groupBy(filteredRotations, "guardId");

  const guardMetedata = Object.entries(groupedRotations).reduce(
    (acc, [guardId, rotations]) => {
      const minutes = Array(60).fill(0);

      for (let i = 0; i < rotations.length - 1; i += 2) {
        const { minute: start } = rotations[i];
        const { minute: end } = rotations[i + 1];
        for (j = start; j < end; j++) {
          minutes[j]++;
        }
      }

      const max = Math.max(...minutes);

      acc.push({
        guardId,
        totalMinutes: minutes.reduce((acc, i) => acc + i, 0),
        mostCommon: minutes.findIndex(x => x == max)
      });
      return acc;
    },
    []
  );

  guardMetedata.sort((a, b) => b.totalMinutes - a.totalMinutes);

  const { guardId, mostCommon } = guardMetedata[0];

  console.log("Strategy A:", mostCommon * guardId);
}

function parseAction(action) {
  if (action.endsWith("shift")) {
    return {
      type: "startsShift",
      guardId: action.match(/\d+/)[0]
    };
  }
  if (action.endsWith("up")) {
    return {
      type: "wakesUp"
    };
  }
  return {
    type: "fallsAsleep"
  };
}

function readLine(line) {
  const [, year, month, day, hour, minute, ...action] = line.split(
    /[\[\-\:\]\s]+/g
  );
  const data = {
    year: Number(year),
    month: Number(month),
    day: Number(day),
    hour: Number(hour),
    minute: Number(minute),
    date: new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute)
    ),
    ...parseAction(action.join(" "))
  };
  return data;
}
