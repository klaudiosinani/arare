'use strict';
const curry = require('./curry');

function cons(x) {
  return () => {
    return x;
  };
}

module.exports = curry(cons);
