export default class CustomSet {
  constructor(arr = []) {
    this._set = new Set(arr)
  }

  get set() {
    return this._set
  }

  delete(n) {
    this._set.delete(n)
    return this
  }

  eql({set: testSet}) {
    if (this._set.size !== testSet.size) return false;
    return [...this._set].every((n) => testSet.has(n));
  }

  difference({set: testSet}) {
    const diff = [...this._set].reduce((acc, n) => {
      if(!testSet.has(n)) return [...acc, n]
      return [...acc]
    },[])
    return new CustomSet(diff)
  }

  intersection({set: testSet}) {
    const diff = [...this._set].reduce((acc, n) => {
      if(testSet.has(n)) return [...acc, n]
      return [...acc]
    },[])
    return new CustomSet(diff)
  }

  member(n) {
    return this.set.has(n)
  }

  union({set: addSet}){
    [...addSet].forEach(x => this.set.add(x))
    return this
  }

  toList() {
    return [...this.set]
  }

  subset({set: testSet}) {
    return [...testSet].every((n) => this.set.has(n));
  }

  disjoint({set: testSet}) {
    return [...this._set].every((n) => !testSet.has(n));
  }

  put(n) {
    this._set.add(n)
    return this
  }

  size() {
    return this._set.size
  }

  empty() {
    this._set.clear()
    return this
  }
}
