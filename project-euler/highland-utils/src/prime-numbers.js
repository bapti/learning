import _ from 'highland'

var isPrime = (n) => {
  if( n === 1){
    return false
  }
  if( n < 4 ) {
    return true
  }
  if( n % 2 === 0 ){
    return false
  }
  if( n < 9 ) { //we have already excluded 4,6 and 8.
    return true
  }
  if( n % 3 === 0 ){
    return false
  }
  let r = Math.floor( Math.sqrt(n) ) // n rounded to the greatest integer r so that r*r<=n
  let f = 5
  while( f <= r){
    if ((n % f) === 0) {
      return false
    }
    if((n % (f+2)) === 0){
      return false
    }
    f = f + 6
  }
  return true
}

export function primeGenerator(){
  let i = 2
  return (push, next) => {
    if(i === 2){
      push(null, 2)
      i = 3
      next()
      return
    }
    if (i === 3) {
      push(null, 3)
      next()
      i = 5
      return
    }
    if (isPrime(i)){
      push(null, i)
    }
    i += 2
    next()
  }
}

export function primeGeneratorEratosthenes(limit){
  if (limit < 2) {
    throw new Error("Can't generate primes smaller than 2")
  }

  let primes = [] // start with an empty Array...
  for (let i = 2; i <= limit; i++) {// and
    primes.push(i); // only initialize the Array once...
  }
  let sqrtlmt = Math.sqrt(limit) - 2;
  let i = 0

  return (push, next) => {
    if(i <= sqrtlmt) {
      let p = primes[i]
      if (p) {
        for (let j = p * p - 2; j < primes.length; j += p){
          primes[j] = false;
        }
        push(null, p)
      }
      i += 2;
      next()
    } else {
      push(null, _.nil)
    }
  }
}
