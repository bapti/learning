const sieve = limit => {
  const sieve = new Array(limit+1).fill(true)

  for(let i=3; i < Math.sqrt(limit); i+=2) {
    if(sieve[i]) {
      for(let notPrime = 2*i; notPrime < limit; notPrime += i) {
        sieve[notPrime] = false
      }
    }
  }

  return sieve
}

function * primes(sieve) {
  yield 2
  for(let i = 3; i <= sieve.length; i += 2) {
    if(sieve[i]) yield i
  }
}

const eratosthenes = limit => [...primes(sieve(limit))]

export default (limit) => {
  return {
    primes: eratosthenes(limit)
  }
}
