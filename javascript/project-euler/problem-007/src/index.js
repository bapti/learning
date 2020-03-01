import _ from 'highland'
import { primes } from "./../../highland-utils/src/index"

console.log(primes);
export function slow(nthPrime, done) {
  return _(primes.primeGenerator())
    .take(nthPrime)
    .last()
    .pull( done )
}

export function fast(nthPrime, done) {
  return _(primes.primeGeneratorEratosthenes(nthPrime))
    .take(nthPrime)
    .last()
    .pull( done )
}
