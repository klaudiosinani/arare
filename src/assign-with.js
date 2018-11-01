'use strict';
const apply = require('./apply');
const assign = require('./assign');
const curry = require('./curry');
const ext = require('./ext');

function assignWith(fn, k, obj) {
  return assign(k, apply(ext(k, obj), fn), obj);
}

module.exports = curry(assignWith);
