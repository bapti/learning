import prime from 'get-primes'

const primeNumbers = prime(900000);

class PrimeFactors {
  for(n, factors = []) {
    if(n === 1) return factors.sort((a,b) => a > b)

    let factor = primeNumbers.find(x => n % x === 0)

    return this.for(n/factor, [...factors, factor])
  }
}

export default PrimeFactors
