import _  from 'highland'

export default (n) => {
  return (push, next) => {
    let lastFactor = 1

    // special case for divisible by 2
    let factor = 2
    if(n % factor == 0){
      push(null, factor)
      lastFactor = factor
      n = n / factor
      while(n % factor == 0){
        n = n / factor
      }
    }

    factor = 3
    let maxFactor = Math.sqrt(n)
    while( n > 1 && factor <= maxFactor){
      if( n % factor == 0 ){
        push(null, factor)
        lastFactor = factor
        n = n / factor
        while( n % factor == 0){
          n = n / factor
          maxFactor = n
        }
      }
      factor = factor + 2
    }

    if( n !== 1 ){
      push(null, n)
    }

    push(null, _.nil)
  }
}
