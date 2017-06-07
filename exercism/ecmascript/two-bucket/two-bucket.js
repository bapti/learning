
const fillToGoal = (b1, b2, g, startWith, b1v=0, b2v=0, i=0) => {
  if (b1v === g || b2v === g) {
    return { b1v, b2v, i }
  }

  if(startWith === 'one')

  return fillToGoal(b1, b1v, b2, b2v, g, ++i)
}

const twoBucket = (bucketOne, bucketTwo, goal, startWith) => {
  const {b1v, b2v, i} = fillToGoal(bucketOne, bucketTwo, goal, startWith)

  return {
    moves: () => i,
    goalBucket: b1v === goal ? 'one' : 'two',
    otherBucket: b1v === goal ? b2v : b1v
  }
}

export default twoBucket
