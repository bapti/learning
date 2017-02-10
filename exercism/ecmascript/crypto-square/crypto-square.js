class Crypto {
  constructor(text){
    this._text = text.replace(/[^A-Za-z1-9]/g, '').toLowerCase()
    this._size = Math.ceil(Math.sqrt(this._text.length))
    this._numCols =
    this._rows = this._text.match(new RegExp(`.{1,${this._size}}`, 'g'))
    this.normalizePlaintext = () => this._text
    this.size = () => this._size
    this.plaintextSegments = () => this._rows
  }

  ciphertext(){
    const rowReducer = (columnIndex) =>
      (acc, row) => `${acc}${row[columnIndex] || ''}`

    return new Array(this._size).fill(0)
      .map((_, i) => this._rows.reduce(rowReducer(i), ''))
      .join('')
  }
}

export default Crypto
