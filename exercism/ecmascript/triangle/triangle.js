const rules = [
  {
    rule: ({a,b,c}) => a === 0 || b === 0 || c === 0,
    type: () => { throw new Error('Triangle can\'t have 0 size side') }
  },
  {
    rule: ({a,b,c}) => a <= 0 || b <= 0 || c <= 0,
    type: () => { throw new Error('Triangle can\'t have negative or zero side') }
  },
  {
    rule: ({a,b,c}) => a + b <= c || a + c <= b || b + c < a,
    type: () => { throw new Error('Triangle is impossible') }
  },
  {
    rule: ({a,b,c}) => a === b && a === c,
    type: () => 'equilateral'
  },
  {
    rule: ({a,b,c}) => a === b || a === c || b === c,
    type: () => 'isosceles'
  },
  {
    rule: ({a,b,c}) => a !== b && a !== c && b !== c,
    type: () => 'scalene'
  },
  {
    rule: () => true,
    type: () => { throw new Error('We\'re missing a rule') }
  },
]

class Triangle {
  constructor(a,b,c){
    this.sides = {a,b,c}
  }

  kind() {
    return rules
      .find(({rule}) => rule(this.sides))
      .type()
  }
}

export default Triangle
