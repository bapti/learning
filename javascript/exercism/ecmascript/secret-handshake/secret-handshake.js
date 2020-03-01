const data = [
  [ 0x1,  acc => [...acc, "wink"] ],
  [ 0x2,  acc => [...acc, "double blink"] ],
  [ 0x4,  acc => [...acc, "close your eyes"] ],
  [ 0x8,  acc => [...acc, "jump"] ],
  [ 0x10, acc => acc.reverse() ]
]

const commands = (hex) =>
  data.reduce((acc, [mask, action]) => {
    return mask & hex ? action(acc) : acc
  }, [])

const secretHandshake = (hex) => {
  if(!Number.isInteger(hex)){
    throw new Error('Handshake must be a number')
  }
  return {
    commands: () => commands(hex)
  }
}

export default secretHandshake
