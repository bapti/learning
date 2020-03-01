const slices = (digits) => (sliceSize) => {
  if(sliceSize > digits.length){
    throw new Error('Slice size is too big.')
  }
  return digits.reduce((acc, _, i, array) => {
    if(i+sliceSize <= array.length) {
      acc.push(array.slice(i,i+sliceSize))
    }
    return acc
  }, [])
}

const series = text => {
  const digits = text.split('').map(Number)

  return {
    digits,
    slices: slices(digits)
  }
}

export default series
