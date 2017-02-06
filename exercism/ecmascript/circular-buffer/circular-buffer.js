
const bufferEmptyException = () => {
  throw new Error("Buffer is empty")
}
const bufferFullException = () => {
  throw new Error("Buffer is full")
}
// const xyz = (x) => () =>

const circularBuffer = (size) => {
  return {
    buffer: [],
    read: (x) => {
      console.log('hi');
      if(buffer.length === 0){
        bufferEmptyException()
      }
    },
    write: (x) => {
      console.log('hi');

      if(buffer.length === size){
        bufferFullException()
      }
    }
  }
}

export default circularBuffer
export {
  bufferFullException,
  bufferEmptyException
}
