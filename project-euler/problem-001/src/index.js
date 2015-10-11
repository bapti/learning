"use strict"
require("babel/register");

import _ from 'highland'
import { naturalNumbers, takeWhile } from "./../../highland-utils/src/index"

var add = function (a, b) {
    return a + b;
};

export default (max, done) => {
  return _(naturalNumbers())
    .take(max)
    .filter( (x) => {
      return x % 3 === 0 || x % 5 === 0
    })
    .reduce1( add )
    .pull( done )
}
