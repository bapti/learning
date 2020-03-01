import _ from 'highland'
import { primes, reducers } from "./../../highland-utils/src/index"

export function fast(done) {
  return _( primes.primeGeneratorEratosthenes(2000000) )
    .reduce1( reducers.add )
    .pull( done )
}
