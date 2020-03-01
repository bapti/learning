const allergens = [
  ['eggs',          1],
  ['peanuts',       2],
  ['shellfish',     4],
  ['strawberries',  8],
  ['tomatoes',     16],
  ['chocolate',    32],
  ['pollen',       64],
  ['cats',        128]
]

class Allergies {
  constructor(n){
    this._allergies = allergens
      .reduce((acc, [k, flag]) => flag & n ? [...acc, k] : acc, [])

    this.list = () => this._allergies
    this.allergicTo = allergy => this._allergies.includes(allergy)
  }
}

export default Allergies
