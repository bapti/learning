const isSorted = (arr) => {
  return arr.every((n, i) => arr[i+1] ? n <= arr[i+1] : true)
}

const bisect = (data, n, lowIndex = 0, highIndex = data.length) => {
  const midpointIndex = Math.floor((highIndex+lowIndex)/2)
  const candidate = data[midpointIndex]
  if(n === candidate) return midpointIndex
  if(midpointIndex === lowIndex || midpointIndex === highIndex) return -1
  if(n > candidate) return bisect(data, n, midpointIndex, highIndex)
  return bisect(data, n, lowIndex, midpointIndex)
}

class BinarySearch {
  constructor(data){
    this.array = isSorted(data) ? data : undefined
    this.indexOf = (n) => bisect(data, n)
  }
}

export default BinarySearch
