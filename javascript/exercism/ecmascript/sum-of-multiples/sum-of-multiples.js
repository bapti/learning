const sum = (acc, n) => acc + n
const range = n => [...Array(n).keys()]

const sumOfMultiples = (multiples) => {
  return {
    to: (limit) => {
      return range(limit)
        .filter(i => multiples.some(multiple => i % multiple === 0))
        .reduce(sum, 0)
    }
  }
}

export default sumOfMultiples
