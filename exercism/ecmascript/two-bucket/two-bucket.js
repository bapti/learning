const fillBucket = ({max, name}) => ({ vol: max, max, name })
const emptyBucket = ({max, name}) => ({ vol: 0, max, name })
const pourBuckets = (bucket1, bucket2) => {
  if (bucket1.vol + bucket2.vol > bucket1.max) {
    bucket2.vol -= bucket1.max - bucket1.vol
    bucket1.vol = bucket1.max
  } else {
    bucket1.vol += bucket2.vol
    bucket2.vol = 0
  }
  return { bucket1, bucket2 }
}
const goalResult = ({name}, {vol}, moves) =>
  ({goalBucket: name, otherBucket: vol, moves: () => moves})

const findGoal = (b1, b2, goalVol, moves=0) => {
  if (b1.vol === goalVol) return goalResult(b1, b2, moves)
  if (b2.vol === goalVol) return goalResult(b2, b1, moves)
  if (b2.vol === 0) return findGoal(b1, fillBucket(b2), goalVol, ++moves)
  if (b1.vol === b1.max) return findGoal(emptyBucket(b1), b2, goalVol, ++moves)

  const result = pourBuckets(b1, b2)
  return findGoal(result.bucket1, result.bucket2, goalVol, ++moves)
}

const twoBucket = (bucket1Max, bucket2Max, goalVol, startWith) => {
  const b1 = { vol: 0, max: bucket1Max, name: 'one' }
  const b2 = { vol: 0, max: bucket2Max, name: 'two' }
  return startWith === 'one'
    ? findGoal(b2, b1, goalVol)
    : findGoal(b1, b2, goalVol)
}

export default twoBucket
