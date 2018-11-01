'use strict';
const curry = require('./curry');
const empty = require('./empty');
const lte = require('./lte');
const slice = require('./slice');

function take(n, xs) {
  if (lte(n, 0)) {
    return empty(xs);
  }
  return slice(0, n, xs);
}

module.exports = curry(take);
