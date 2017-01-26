const defaultPhoneNumber = "0000000000"

const removeAll = (str, ...chars) => {
  return chars.reduce((acc, char) => {
    return acc.split(char).join("")
  }, str)
}

class PhoneNumber {
  constructor(input) {
    this.phoneNumber = this.clean(input)
  }

  clean(input) {
    var cleaned = removeAll(input, "(", ")", "-", ".", " ")

    if(cleaned.length < 10) {
      return defaultPhoneNumber;
    }

    if(cleaned.length > 10) {
      if(cleaned[0] === "1"){
        return cleaned.substring(1,11)
      }
      return defaultPhoneNumber;
    }

    return cleaned
  }

  number() {
    return this.phoneNumber
  }

  areaCode() {
    return this.phoneNumber.substring(0,3)
  }

  toString() {
    var part1 = this.areaCode()
    var part2 = this.phoneNumber.substring(3,6)
    var part3 = this.phoneNumber.substring(6,10)
    return `(${part1}) ${part2}-${part3}`
  }
}

export default PhoneNumber
