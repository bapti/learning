const sq = n => n**2

const isPythagorean = (a,b,c) =>
  sq(a) + sq(b) === sq(c)

const sum = (sides) =>
  sides.reduce((acc, n) => acc + n, 0)

const product = (sides) =>
  sides.reduce((acc, n) => acc * n, 1)

const sumEqualsFilter = sumToEqual => sides =>
  !sumToEqual ? true : sum(sides) === sumToEqual

const triplet = (...sides) => {
  return {
    isPythagorean: isPythagorean.bind(null, ...sides.sort()),
    sum: sum.bind(null, sides),
    product: product.bind(null, sides)
  }
}

triplet.where = (options) =>
  [...allTriplets(options)]
    .filter(sumEqualsFilter(options.sum))
    .filter(sides => isPythagorean(...sides))
    .map(sides => triplet(...sides))

function * allTriplets({minFactor = 1, maxFactor}) {
  for(let a = minFactor; a <= maxFactor-2; a++ ) {
    for(let b = a+1; b <= maxFactor-1; b++) {
      for(let c = b+1; c <= maxFactor; c++ ) {
        yield [a,b,c]
      }
    }
  }
}

export default triplet
