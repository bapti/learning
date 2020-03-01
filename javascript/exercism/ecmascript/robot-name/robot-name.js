const robotNames = new Set();

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

const nextName = () => {
  var a = String.fromCharCode('A'.charCodeAt() + getRandomInt(0,25))
  var b = String.fromCharCode('A'.charCodeAt() + getRandomInt(0,25))
  var c = (getRandomInt(0,999) + 1000).toString().substr(1,3)

  return `${a}${b}${c}`
}

class Robot {
  constructor() {
    this._setName()
  }

  _setName() {
    do {
      var next = nextName()
    } while( robotNames.has(next) )
    robotNames.add(next)
    this._name = next
  }

  reset() {
    this._setName()
  }

  get name () {
    return this._name
  }
}

export default Robot
