function * allMultiples (multiple, limit) {
  for(let j = multiple; j < limit; j+=multiple ) {
    yield j
  }
}

const flatten = (acc, arr) => [...acc, ...arr]
const sum = (acc, n) => acc + n
const unique = (n, i, arr) => arr.indexOf(n) === i

const sumOfMultiples = (multiples) => {
  return {
    to: (limit) => {
      return multiples
        .map((n) => [...allMultiples(n, limit)])
        .reduce(flatten, [])
        .filter(unique)
        .reduce(sum, 0)
    }
  }
}

export default sumOfMultiples
