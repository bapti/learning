//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var answers = {
  whoa: "Whoa, chill out!",
  sure: 'Sure.',
  whatever: 'Whatever.',
  fine: 'Fine. Be that way!'
};

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var not = function not(fn) {
  return function () {
    return !fn.apply(undefined, arguments);
  };
};
var statement = function statement(str) {
  return str.endsWith('.');
};
var question = function question(str) {
  return str.endsWith('?');
};
var forcefully = function forcefully(str) {
  return str.endsWith('!');
};
var shouting = function shouting(str) {
  return str === str.toUpperCase();
};
var silence = function silence(str) {
  return str.trim() === "";
};
var forcefulQuestion = function forcefulQuestion(str) {
  return forcefully(str) && question(str);
};
var onlyNumbers = function onlyNumbers(str) {
  return parseInt(str.split('').filter(function (x) {
    return numbers.some(function (y) {
      return y === x;
    });
  }).join('')) > 0;
};
var calmly = not(shouting);

var tests = [{
  predicates: [forcefully, question],
  response: answers.whoa
}, {
  predicates: [onlyNumbers, question],
  response: answers.sure
}, {
  predicates: [onlyNumbers, shouting, forcefully],
  response: answers.whoa
}, {
  predicates: [onlyNumbers],
  response: answers.whatever
}, {
  predicates: [silence],
  response: answers.fine
}, {
  predicates: [statement],
  response: answers.whatever
}, {
  predicates: [shouting],
  response: answers.whoa
}, {
  predicates: [question],
  response: answers.sure
}, {
  predicates: [forcefully],
  response: answers.whatever
}, {
  predicates: [calmly],
  response: answers.whatever
}];

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);
  }

  _createClass(Bob, [{
    key: 'hey',
    value: function hey(message) {
      //
      // YOUR CODE GOES HERE
      //
      var reducer = function reducer(acc, predicate) {
        return predicate(message) && acc;
      };

      return tests.find(function (_ref) {
        var predicates = _ref.predicates;
        return predicates.reduce(reducer, true);
      }).response;
    }
  }]);

  return Bob;
})();

exports['default'] = Bob;
module.exports = exports['default'];