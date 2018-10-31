'use strict';
const curry = require('./curry');

function or(x, y) {
  return x || y;
}

module.exports = curry(or);
