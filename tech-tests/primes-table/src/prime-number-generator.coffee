# Eratosthenes algorithm to find all primes under n
# https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
eratosthenes = (n) ->
    primeTracker = []
    upperLimit = Math.sqrt(n)
    primes = []

    for i in [0..n]
        primeTracker.push true

    # Mark everything that's not a prime
    for potentialPrime in [2..upperLimit]
        if primeTracker[potentialPrime]
            for notAPrime in [(potentialPrime + potentialPrime)..n] by potentialPrime
                primeTracker[notAPrime] = false

    # Create a new array of the primes
    for index in [2..n]
        if primeTracker[index]
            primes.push index
    primes

# https://en.wikipedia.org/wiki/Prime_number_theorem
getUpperLimit = (nthPrime) ->
    Math.trunc(nthPrime * Math.log(nthPrime * Math.log(nthPrime)))

firstTenPrimes = [2,3,5,7,11,13,17,19,23,29]

module.exports.generateListOfPrimes = (numberOfPrimes) ->
    if numberOfPrimes <= 10
        return firstTenPrimes.slice(0, numberOfPrimes)

    upperLimit = getUpperLimit(numberOfPrimes)
    primes = eratosthenes(upperLimit)
    primes.slice(0, numberOfPrimes)
