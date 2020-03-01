
const convertToDecimal = (arr, base) => {
  return arr.reduce((acc, n, i) => {
    return acc + (n * (base ** i))
  }, 0)
}

const findHighestPower = (num, base, power = Math.floor(num / base)) => {
  if(num >= base ** power) return power
  return findHighestPower(num, base, --power)
}

const convertToBase = (
  num,
  base,
  inBase = [],
  power = findHighestPower(num, base)
) => {
  if(power === -1) return inBase

  const divisor = base ** power
  const remainder = num % divisor
  const divisions = Math.floor(num / divisor)

  return convertToBase(
    remainder,
    base,
    [...inBase, divisions],
    --power
  )
}

const convert = (arr, base, newBase) => {
  const decimal = convertToDecimal(arr.reverse(), base)
  const inBase = convertToBase(decimal, newBase)
  return inBase
}

const checkValidBase = (base, msg) => {
  if(base <= 1 || base === undefined || !Number.isInteger(base)) {
    throw new Error(msg)
  }
}

const handleSpecialCases = (fn) => (arr, base, newBase) => {
  checkValidBase(base, 'Wrong input base')
  checkValidBase(newBase, 'Wrong output base')
  if(arr.length === 1 && arr[0] === 0) {
    return [0]
  }
  if(arr.length === 0
    || arr[0] === 0
    || arr.some(x => x < 0)
    || arr.some(x => x >= base)
  ) {
    throw new Error('Input has wrong format')
  }
  return fn(arr, base, newBase)
}

export default () => {
  return { convert: handleSpecialCases(convert) }
}
