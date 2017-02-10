const accumulate = (array, predicate) => {
  return array.reduce((acc, item) => {
    return [...acc, predicate(item)]
  }, [])
}

export default accumulate
