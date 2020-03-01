import BigInt from './big-integer';

class Grains {
  square(n){
    return BigInt(2).pow(n-1).toString()
  }

  total(){
    return [...Array(65).keys()]
      .reduce((acc, x) => acc.add(this.square(x)), BigInt(0))
      .toString()
  }
}

export default Grains
