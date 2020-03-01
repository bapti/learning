
import fs from 'fs'
import _ from 'highland'


function makeBatcher(size) {
  var batch = [];
  return function (err, x, push, next) {
    if (err) {
      push(err);
      next();
    } else if (x === _.nil) {
      push(null, x);
    } else {
      batch.push(x);
      if (batch.length === size) {
        push(null, batch);
        batch.shift(1);
      }
      next();
    }
  }
}




// let chunk =

let splitter = (err, x, push, next) => {
  if (err) {
    push(err);
    next();
  }
  else if (x === _.nil) {
    push(null, x);
  }
  else{
    for (var i = 0; i < x.length; i++) {
      push(null, x[i])
    }
    next()
  }
}

let file = fs.createReadStream("./data/sequence.txt", {
  encoding: 'utf8',
  fd: null,
});

export default (done) => {
  _(file)
    .consume(splitter)
    .map( x => {
      return  parseInt(x)
    })
    .filter( x => {
      return parseInt(Number(x)) == x
    })
    .consume(makeBatcher(13))
    .map(x => {
      return x.reduce((a,b) => {
        return a*b;
      })
    })
    .reduce1((a,b) => {
      return a > b ? a : b
    })
    .map(x => {
      console.log(x);
      return x
    })
    .toArray(res => {
      done(null, res)
    })
}
