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

export function nPrimesUpperLimit(nPrimes){
  return nPrimes < 5
    ? 11
    : Math.trunc(nPrimes * Math.log(nPrimes * Math.log(nPrimes)))
}

export function primeGeneratorEratosthenes(upperLimit){
  if (upperLimit === undefined) {
    throw new Error("upper limit must be provided for Eratosthenes")
  }
  if (upperLimit < 2) {
    throw new Error("Can't generate primes smaller than 2")
  }

  let sieve = [false, false, true, true, false, true] // start with 0-5

  for (let i = 6; i <= upperLimit; i++) {
    if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0) {
      sieve.push(false); // definitely not a prime
    } else {
      sieve.push(true);
    }
  }
  let i = 2

  return (push, next) => {
    if(i < 6){
      if(sieve[i]){
        push(null,i)
      }
      i += i === 5 ? 2 : 1
      return next()
    }

    if(i < upperLimit) {
      if (sieve[i]) {
        for (let j = i + i; j < sieve.length; j += i){
          sieve[j] = false;
        }
        push(null, i)
      }
      i += 2;
      return next()
    }

    push(null, _.nil)
  }
}
