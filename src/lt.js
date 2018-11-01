'use strict';
const curry = require('./curry');

function lt(x, y) {
  return x < y;
}

module.exports = curry(lt);
