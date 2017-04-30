const reverseNumber = (n, reverse = 0) => {
  if(n === 0) return reverse
  return reverseNumber(Math.floor(n / 10), reverse * 10 + n % 10)
}

const isPalindrome = n => n === reverseNumber(n)

function * generatePalindromes(low, high){
  for(var i = low; i <= high; i++) {
    for(var j = i; j <= high; j++) {
      const product = i*j
      if(isPalindrome(product)) {
        yield { factors: [i, j], value: product }
      }
    }
  }
}

function generate({ minFactor = 1, maxFactor = Number.MAX_VALUE }) {
  const sorted = [...generatePalindromes(minFactor, maxFactor)]
    .sort(({value: a}, {value: b}) => a - b)

  return { smallest: sorted.shift(), largest: sorted.pop() }
}

export default generate;
