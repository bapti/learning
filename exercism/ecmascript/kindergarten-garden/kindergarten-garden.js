const defaultChildren = [
  'Alice', 'Bob', 'Charlie', 'David',
  'Eve', 'Fred', 'Ginny', 'Harriet',
  'Ileana', 'Joseph', 'Kincaid', 'Larry'
]

const plantCodeMap = {
  G: 'grass',
  V: 'violets',
  C: 'clover',
  R: 'radishes'
}

const plants = (row1, row2) => (i) => {
  return [row1[i*2], row1[(i*2)+1], row2[i*2], row2[(i*2)+1]]
    .map(plantCode => plantCodeMap[plantCode])
}

class Garden {
  constructor(layout, children = defaultChildren) {
    const [ windowRow, innerRow ] = layout.split('\n')
    const setPlants = plants(windowRow, innerRow)

    children.sort().forEach((child, i) => {
      this[child.toLowerCase()] = setPlants(i)
    })
  }
}

export default Garden
