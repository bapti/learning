const { readFileToArray } = require("./utils");
const _ = require("lodash");
const INPUT_FILE = "./day8-input.txt";

main();

// A header, which is always exactly two numbers:
// The quantity of child nodes.
// The quantity of metadata entries.
// Zero or more child nodes (as specified in the header).
// One or more metadata entries (as specified in the header).

function parseTree(input, node = { children: [], metadata: [] }) {
  while (input.length > 0) {
    let [numberOfChildren, numberOfMetadata] = input.splice(0, 2);
    while (numberOfChildren > 0) {
      const childNode = parseTree(input);
      node.children.push(childNode);
      numberOfChildren--;
    }
    node.metadata = input.splice(0, numberOfMetadata);
    return node;
  }
}

function readLine(line) {
  return line.split(" ").map(x => Number(x));
}

function totalMetadata(node) {
  let total = 0;
  for (const child of node.children) {
    total += totalMetadata(child);
  }
  return total + node.metadata.reduce((sum, x) => sum + x, 0);
}

async function main() {
  const [input] = await readFileToArray(INPUT_FILE, readLine);

  const tree = parseTree(input);

  const total = totalMetadata(tree);

  console.log(total);

  const stop = false;
}
