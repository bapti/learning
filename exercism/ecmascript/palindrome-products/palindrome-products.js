function generate({ minFactor = 1, maxFactor = Number.MAX_VALUE }) {
  const sorted = [...palindromes(minFactor, maxFactor)]
    .sort((a, b) => a.value - b.value)

  return { smallest: sorted[0], largest: sorted[sorted.length - 1] }
}

function * palindromes(low, high){
  for(var i = low; i <= high; i++) {
    for(var j = i; j <= high; j++) {
      const product = i*j
      if(isPalindrome(product.toString())) {
        yield { factors: [i, j], value: product }
      }
    }
  }
}

const isPalindrome = str => str.split("").reverse().join("") === str

export default generate;
