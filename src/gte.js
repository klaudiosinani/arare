'use strict';
const curry = require('./curry');

function gte(x, y) {
  return x >= y;
}

module.exports = curry(gte);
