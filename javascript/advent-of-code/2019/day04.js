/*

*/

module.exports = {
  validatePassword1,
  validatePassword2,
  numberOfValidPasswords
};

function numberOfValidPasswords(validator) {
  const validPasswords = [];
  for (let i = 134792; i <= 675810; i++) {
    if (validator(i)) {
      validPasswords.push(i);
    }
  }
  return validPasswords.length;
}

function validatePassword1(number) {
  const chars = [...number.toString()].map(x => Number(x));

  const isIncreasing = chars.reduce((acc, digit, index, array) => {
    if (index === 0) return true;
    return acc && digit >= array[index - 1];
  }, true);

  const hasDouble = chars.reduce((acc, digit, index, array) => {
    if (index === 0) return false;
    if (digit === array[index - 1]) {
      return true;
    }
    return acc;
  }, false);

  return isIncreasing && hasDouble;
}

function validatePassword2(number) {
  const chars = [...number.toString()].map(x => Number(x));

  const isIncreasing = chars.reduce((acc, digit, index, array) => {
    if (index === 0) return true;
    return acc && digit >= array[index - 1];
  }, true);

  const hasDouble = chars.reduce((acc, digit, index, array) => {
    if (index === 0) return false;
    if (
      digit === array[index - 1] &&
      (array[index - 2] ? digit !== array[index - 2] : true) &&
      (array[index + 1] ? digit !== array[index + 1] : true)
    ) {
      return true;
    }
    return acc;
  }, false);

  return isIncreasing && hasDouble;
}
