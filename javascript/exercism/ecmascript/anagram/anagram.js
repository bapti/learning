const hashSet = (word) => {
  return word
    .toLowerCase()
    .replace(/ /g, '')
    .split('')
    .reduce( (acc, letter) => {
      !acc[letter] ? acc[letter] = 1 : acc[letter] += 1
      return acc
    },{})
}

const hashMatch = (hash1, hash2) => {
  if(Object.keys(hash1).length !== Object.keys(hash2).length){
    return false
  }

  for (var prop in hash1) {
    if(hash2[prop] !== hash1[prop]){
      return false
    }
  }

  return true
}

const flatten = array => array.reduce(
  (acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item), []
);

class Anagram {
  constructor(input) {
    this.inputWord = input.toLowerCase()
    this.hashedInput = hashSet(input)
  }

  matches(...words) {

    return flatten(words).reduce((acc, word) => {
      if (word.toLowerCase() === this.inputWord) {
        return acc
      }
      if (hashMatch(this.hashedInput, hashSet(word))) {
        acc.push(word)
      }
      return acc
    }, [])
  }
}

export default Anagram
