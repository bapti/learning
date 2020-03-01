const numberMap = {
  ' _ | ||_|   ': '0',
  '     |  |   ': '1',
  ' _  _||_    ': '2',
  ' _  _| _|   ': '3',
  '   |_|  |   ': '4',
  ' _ |_  _|   ': '5',
  ' _ |_ |_|   ': '6',
  ' _   |  |   ': '7',
  ' _ |_||_|   ': '8',
  ' _ |_| _|   ': '9'
}

const breakLines = (text) => {
  const allLines = text.split('\n')
  return range(allLines.length/4)
    .map(x => x*4)
    .map(x => [allLines[x], allLines[x+1], allLines[x+2], allLines[x+3]])
}

const range = n => [...Array(n).keys()]

const convertNumbers = lines => {
  return range(lines[0].length/3)
    .map(x => x*3)
    .map( i => {
      return lines.reduce((acc, line) => {
        return acc + line[i] + line[i+1] + line[i+2]
      }, '')
    })
    .map(line => numberMap[line] || '?')
}

const convertLine = (line) => convertNumbers(line).join('')
const convert = text => breakLines(text).map(convertLine).join(',')

const ocr = () => ({ convert })

export default ocr
