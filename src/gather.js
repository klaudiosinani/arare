'use strict';
const curry = require('./curry');

function gather(fn) {
  return (...arg) => {
    return fn(arg);
  };
}

module.exports = curry(gather);
