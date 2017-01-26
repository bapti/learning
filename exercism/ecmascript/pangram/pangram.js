class Pangram {
  constructor(input){
    this.input = input.toLowerCase()
  }

  isPangram() {
    var regex = /([a-z])(?!.*\1)/g;
    return (this.input.match(regex) || []).length === 26;
  }
}

export default Pangram
