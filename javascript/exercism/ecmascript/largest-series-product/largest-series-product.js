const seqProduct = (arr) =>
  arr.reduce((acc, x) => acc * Number(x), 1)

const largestProduct = (str) => (n) => {
  if(n > str.length) throw new Error('Slice size is too big.')
  if(n < 0) throw new Error('Invalid input.')
  if(!str && n === 0) return 1
  if(!str.match(/^\d+$/)) throw new Error('Invalid input.')
  if(n === 0) return 1

  return str.split('')
    .reduce((acc, _, i, arr) => {
      const slice = arr.slice(i, i + n)
      if(slice.length === n) {
        const product = seqProduct( slice )
        acc.push(product)
      }
      return acc
    }, [])
    .reduce((max, cur) => Math.max( max, cur ), -Infinity)
}

function Series(str) {
  return { largestProduct: largestProduct(str) }
}

export default Series
