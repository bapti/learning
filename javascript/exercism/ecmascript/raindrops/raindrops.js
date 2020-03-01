const factors = [
  [3, "Pling"],
  [5, "Plang"],
  [7, "Plong"]
]

class Raindrops {
  convert(n){
    let result = factors.reduce((acc, [factor, text]) => {
      acc += n % factor === 0 ? text : ''
      return acc
    }, '')
    return result === '' ? n.toString() : result
  }
}

export default Raindrops
