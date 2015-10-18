import _  from 'highland'

var primeFactors = (n, push) => {
  let lastFactor = 1
  // special case for divisible by 2
  let factor = 2

  while(n % factor == 0){
    lastFactor = factor
    push(null, factor)
    n = n / factor
  }

  factor = 3
  let maxFactor = Math.sqrt(n)
  while( n > 1 && factor <= maxFactor){
    while( n % factor == 0){
      push(null, factor)
      lastFactor = factor
      n = n / factor
      maxFactor = n
    }
    factor = factor + 2
  }

  if( n !== 1 ){
    push(null, n)
  }
}

var generator = (n) => {
  return (push, next) => {
    primeFactors(n, push)
    push(null, _.nil)
  }
}

var consume = (err, x, push, next) => {
  if (err) {
    push(err)
    next()
  }
  else if (x === _.nil) {
    push(null, x);
  }
  else {
    primeFactors(x, push)
    next()
  }
}

export default {
  generator,
  consume
}
