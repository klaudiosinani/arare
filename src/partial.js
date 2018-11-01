'use strict';
const curry = require('./curry');

function partial(fn, xs) {
  return (...ys) => {
    return fn(...xs, ...ys);
  };
}

module.exports = curry(partial);
