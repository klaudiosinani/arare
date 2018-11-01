'use strict';
const curry = require('./curry');

function bool(x) {
  return Boolean(x);
}

module.exports = curry(bool);
