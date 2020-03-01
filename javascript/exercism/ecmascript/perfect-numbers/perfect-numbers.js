function * factors(number) {
  var i = 0

  while(i < number/2) {
    if(number % ++i === 0) {
      yield i
    }
  }
}

const aliquotSum = (n) =>
  [...factors(n)].reduce((acc, x) => acc + x, 0)

const classify = (number) => {
  if(number === 1) return "deficient"
  if(number < 1) return "Classification is only possible for natural numbers."

  const sum = aliquotSum(number)

  if(sum === number) return "perfect"
  if(sum < number) return "deficient"
  return "abundant"
}

export default function() {
  return { classify }
}
