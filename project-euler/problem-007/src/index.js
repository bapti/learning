import _ from 'highland'
import { primeNumbers } from "./../../highland-utils/src/index"

export default (nthPrime, done) => {
  return primeNumbers()
    .take(nthPrime)
    .last()
    .pull( done )
}
