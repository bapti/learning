fs = require('fs')


readable = fs.createReadStream("./data/sequence.txt", {
    encoding: 'utf8',
    fd: null,
});

readable.on 'readable', () ->
  while (null != (chunk = readable.read(1)))
    console.log(chunk); # chunk is one symbol
