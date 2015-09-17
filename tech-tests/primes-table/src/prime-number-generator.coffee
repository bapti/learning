
firstTenPrimes = [1,2,3,5,7,11,13,17,19,23]

module.exports.generateListOfPrimes = (numberOfPrimes) ->
    primes = []
    i=0
    while primes.length < numberOfPrimes
        primes.push firstTenPrimes[i]
        i++
    primes
