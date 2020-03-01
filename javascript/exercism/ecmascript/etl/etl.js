const transform = (input) => {
  return Object
    .keys(input)
    .reduce((acc, key) => {
      input[key].forEach(value => {
        acc[value.toLowerCase()] = parseInt(key)
      })
      return acc
    },{})
}

export default transform
