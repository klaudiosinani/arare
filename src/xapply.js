'use strict';
const apply = require('./apply');
const curry = require('./curry');
const decr = require('./decr');
const lte = require('./lte');

function xapply(x, fn, y) {
  if (lte(x, 0)) {
    return y;
  }
  return xapply(decr(x), fn, apply(y, fn));
}

module.exports = curry(xapply);
