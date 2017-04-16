const isSorted = (arr) => {
  return arr.every((n, i) => arr[i+1] ? n <= arr[i+1] : true)
}

const indexOf = (data) => (n) => {
  return bisect(data, n, 0, data.length-1, Math.floor)
}

const bisect = (data, searchN, lowIndex, highIndex, roundingFn) => {
  const midpointIndex = roundingFn((highIndex+lowIndex)/2)
  const candidate = data[midpointIndex]
  if(searchN === candidate) return midpointIndex
  if(midpointIndex === lowIndex || midpointIndex === highIndex) return -1
  return bisect(
    data,
    searchN,
    searchN > candidate ? midpointIndex : lowIndex,
    searchN > candidate ? highIndex : midpointIndex,
    searchN < candidate ? Math.floor : Math.ceil
  )
}

class BinarySearch {
  constructor(data){
    this.array = isSorted(data) ? data : undefined
    this.indexOf = indexOf(this.array)
  }
}

export default BinarySearch
