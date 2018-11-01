'use strict';
const curry = require('./curry');

function spread(fn) {
  return arg => {
    return fn(...arg);
  };
}

module.exports = curry(spread);
