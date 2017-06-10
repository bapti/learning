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

const fillToGoal = (bucket1, bucket2, goalVol, moves=0) => {
  if (bucket1.vol === goalVol || bucket2.vol === goalVol) {
    return {
      goalBucket: bucket1.vol === goalVol ? bucket1 : bucket2,
      otherBucket: bucket1.vol === goalVol ? bucket2 : bucket1,
      moves
    }
  }

  if(bucket2.vol === 0) {
    bucket2 = fillBucket(bucket2)
  } else if (bucket1.vol === bucket1.max) {
    bucket1 = emptyBucket(bucket1)
  } else {
    let result = pourBuckets(bucket1, bucket2)
    bucket1 = result.bucket1
    bucket2 = result.bucket2
  }

  return fillToGoal(bucket1, bucket2, goalVol, ++moves)
}

const twoBucket = (bucket1Max, bucket2Max, goalVol, startWith) => {
  const b1 = { max: bucket1Max, vol: 0, name: 'one'}
  const b2 = { max: bucket2Max, vol: 0, name: 'two'}
  const {goalBucket, otherBucket, moves} = fillToGoal(
    startWith === 'one' ? b2 : b1,
    startWith === 'one' ? b1 : b2,
    goalVol
  )

  return {
    moves: () => moves,
    goalBucket: goalBucket.name,
    otherBucket: otherBucket.vol
  }
}

export default twoBucket
