const linkedList = () => {
  const data = []

  return {
    pop: () => data.pop(),
    push: (x) => data.push(x),
    shift: () => data.shift(),
    unshift: (x) => data.unshift(x),
    count: () => data.length,
    delete: (n) => {
      if(data.indexOf(n) !== -1) {
        data.splice(data.indexOf(n), 1)
      }
    }
  }
}

export default linkedList
