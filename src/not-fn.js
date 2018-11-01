'use strict';
const curry = require('./curry');
const isFn = require('./is-fn');
const not = require('./not');

function notFn(x) {
  return not(isFn(x));
}

module.exports = curry(notFn);
