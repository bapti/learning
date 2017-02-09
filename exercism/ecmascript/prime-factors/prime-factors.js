class PrimeFactors {
  for(n, factors = []) {
    if(n === 1) return factors

    let factor = 2
    while(n % factor !== 0) factor++

    return this.for(n/factor, [...factors, factor])
  }
}

export default PrimeFactors
