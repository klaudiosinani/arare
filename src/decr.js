'use strict';
const curry = require('./curry');
const sub = require('./sub');

function decr(x) {
  return sub(x, 1);
}

module.exports = curry(decr);
