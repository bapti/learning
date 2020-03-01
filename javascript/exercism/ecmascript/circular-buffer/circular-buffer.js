var data = []
var maxSize = 0

const bufferEmptyException = () => new Error('Buffer is empty')
const bufferFullException = () => new Error('Buffer is full')
const throwError = fn => { throw fn() }
const clear = () => data = []

const checkBufferEmpty = fn => (...args) =>
  data.length === 0
    ? throwError(bufferEmptyException)
    : fn(...args)

const checkBufferFull = fn => value =>
  data.length >= maxSize
    ? throwError(bufferFullException)
    : fn(value)

const discardInvalid = fn => value =>
  !value ? null : fn(value)

const read = () => {
  var result = data[0]
  data = data.slice(1, data.length)
  return result
}

const readIfMax = fn => value => {
  if(data.length >= maxSize){
    read()
  }
  fn(value)
}

const write = value => data.push(value)
const safeWrite = checkBufferFull(discardInvalid(write))
const safeRead = checkBufferEmpty(read)

const circularBuffer = size => {
  clear()
  maxSize = size
  return {
    read: safeRead,
    write: safeWrite,
    forceWrite: readIfMax(safeWrite),
    clear
  }
}

export default circularBuffer
export {
  bufferFullException,
  bufferEmptyException
}
