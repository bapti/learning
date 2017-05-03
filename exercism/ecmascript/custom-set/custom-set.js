
const del = (set, n) => {
  if(set[n]) delete set[n]
  return this
}

const equal = (set1, set2) => {
  const keys1 = Object.keys(set1)
  const keys2 = Object.keys(set2)
  if(keys1.length !== keys2.length) return false
  return keys1.reduce((acc, _, i) => acc && keys1[i] === keys2[i], true)
}

const makeSet = (arr) => {
  return { ...acc }
}

export default (arr) => {
  const set = makeSet(arr)
  console.log(set);

  return {
    delete: del.apply(null, set),
    eql: equal.apply(null, set)
  }
}
