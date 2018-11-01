'use strict';
const curry = require('./curry');
const len = require('./len');
const lte = require('./lte');
const slice = require('./slice');

function drop(n, xs) {
  if (lte(n, 0)) {
    return xs;
  }
  return slice(n, len(xs), xs);
}

module.exports = curry(drop);
