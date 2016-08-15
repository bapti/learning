//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const answers = {
  whoa: "Whoa, chill out!",
  sure: 'Sure.',
  whatever: 'Whatever.',
  fine: 'Fine. Be that way!'
}

const numbers = ["1","2","3","4","5","6","7","8","9", "0"]

const not = (fn) => (...args) => !fn(...args);
const endsWith = (endStr) => (str) => str.endsWith(endStr)

const statement = endsWith('.')
const question = (str) => str.endsWith('?');
const forcefully = (str) => str.endsWith('!');
const shouting = (str) => str === str.toUpperCase();
const silence = (str) => str.trim() === "";
const onlyNumbers = (str) =>  parseInt(str.split('')
                                .filter((x) => numbers.some((y) => y === x) )
                                .join('')) > 0;
const calmly = not(shouting);

const tests = [
  {
    predicates: [forcefully, question],
    response: answers.whoa
  },
  {
    predicates: [onlyNumbers, question],
    response: answers.sure
  },
  {
    predicates: [onlyNumbers, shouting, forcefully],
    response: answers.whoa
  },
  {
    predicates: [onlyNumbers],
    response: answers.whatever
  },
  {
    predicates: [silence],
    response: answers.fine
  },
  {
    predicates: [statement],
    response: answers.whatever
  },
  {
    predicates: [shouting],
    response: answers.whoa
  },
  {
    predicates: [question],
    response: answers.sure
  },
  {
    predicates: [forcefully],
    response: answers.whatever
  },
  {
    predicates: [calmly],
    response: answers.whatever
  }
]


class Bob {
  hey(message) {
    //
    // YOUR CODE GOES HERE
    //
    const reducer = (acc, predicate) => predicate(message) && acc;

    return tests
      .find(({predicates}) => predicates.reduce(reducer, true))
      .response;
  }
}

export default Bob;
