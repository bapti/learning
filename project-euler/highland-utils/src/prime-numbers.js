import _ from 'highland'

var generator = () => {
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
    push(null, i)
    i += 2
    next()
  }
}

export default () => {
  let primes = []
  return _(generator())
    .filter((x) => {
      for( let i=0; i<primes.length; i++ ){
        if(x % primes[i] === 0 ) {
          return false
        }
      }
      primes.push(x)
      return true
    })
}

// eratosthenes = (n) ->
//     primeTracker = []
//     upperLimit = Math.sqrt(n)
//     primes = []
//
//     for i in [0..n]
//         primeTracker.push true
//
//     # Mark everything that's not a prime
//     for potentialPrime in [2..upperLimit]
//         if primeTracker[potentialPrime]
//             for notAPrime in [(potentialPrime + potentialPrime)..n] by potentialPrime
//                 primeTracker[notAPrime] = false
//
//     # Create a new array of the primes
//     for index in [2..n]
//         if primeTracker[index]
//             primes.push index
//     primes
