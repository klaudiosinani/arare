'use strict';
const assignWith = require('./assign-with');
const curry = require('./curry');
const ext = require('./ext');
const incr = require('./incr');
const isDef = require('./is-def');
const one = require('./one');
const reduce = require('./reduce');

function countBy(fn, xs) {
  return reduce((acc, x) => {
    const k = fn(x);
    const v = ext(k, acc);
    return isDef(v) ? assignWith(incr, k, acc) : assignWith(one, k, acc);
  }, {}, xs);
}

module.exports = curry(countBy);
