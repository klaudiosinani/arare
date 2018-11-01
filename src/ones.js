'use strict';
const curry = require('./curry');
const fill = require('./fill');

function ones(n) {
  return fill(n, 1);
}

module.exports = curry(ones);
