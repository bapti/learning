class School {
  constructor() {
    this.db = {}
  }

  roster() {
    return Object
      .keys(this.db)
      .reduce((acc, prop) => {
        acc[prop] = [ ...this.db[prop] ]
        return acc
      }, {})
  }

  add(name, grade) {
    !this.db[grade]
      ? this.db[grade] = [name]
      : this.db[grade] = [...this.db[grade], name].sort()
  }

  grade(grade) {
    return !this.db[grade]
      ? []
      : [ ...this.db[grade] ]
  }
}

export default School
