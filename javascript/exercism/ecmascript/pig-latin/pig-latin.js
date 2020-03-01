const firstVowel = word =>  {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  const vowel = word.split('').find(x => vowels.has(x))
  return { vowel, index: word.indexOf(vowel) }
}

const breakWordIntoParts = word => {
  let { vowel, index } = firstVowel(word)
  if(index === 0) return [ word, '' ]
  if(word[index-1] == 'q') index++
  return [
    word.substring(0, index),
    word.substring(index, word.length)
  ]
}

const translateWord = (word) =>
  breakWordIntoParts(word).reverse().join('') + 'ay'

const translate = (sentance) =>
  sentance.split(' ').map(translateWord).join(' ')

export default () => ({ translate })
