const pairs = {
  '{': '}',
  '[': ']',
  '(': ')'
}

const errorCatcher = (fn) => (input) => {
  try {
    return fn(input)
  } catch (err) {
    if(err === "Bad brackets") return false
    throw err
  }
}

const bracket = (input) => {
  const stack = [...input].reduce((stack, bracket) => {
    if(pairs[bracket]) {
      stack.push(pairs[bracket])
      return stack
    }
    if(stack[stack.length-1] === bracket) {
      stack.pop()
      return stack
    }
    throw "Bad brackets"
  }, [])

  return stack.length === 0
}

export default errorCatcher(bracket)
