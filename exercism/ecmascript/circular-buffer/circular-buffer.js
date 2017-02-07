var data = []
var maxSize = 0

const bufferEmptyException = () => new Error('Buffer is empty')
const bufferFullException = () => new Error('Buffer is full')

const checkBufferEmpty = fn => (...args) => {
  if(data.length === 0){
    throw bufferEmptyException()
  }
  return fn(...args)
}

const discardInvalid = fn => value => !value ? null : fn(value)


const checkBufferFull = (fn) => (...args) => {
  if(data.length >= maxSize){
    throw bufferFullException()
  }
  return fn(...args)
}

const read = () => {
  var result = data[0]
  data = data.slice(1, data.length)
  return result
}

const write = value => data.push(value)
const clear = () => data = []

const forceWrite = value => {
  if(data.length >= maxSize){
    read()
  }
  write(value)
}

const circularBuffer = size => {
  clear()
  maxSize = size
  return {
    read: checkBufferEmpty(read),
    write: checkBufferFull(discardInvalid(write)),
    forceWrite,
    clear
  }
}

export default circularBuffer
export {
  bufferFullException,
  bufferEmptyException
}
