'use strict';
const curry = require('./curry');
const isArr = require('./is-arr');
const not = require('./not');

function notArr(xs) {
  return not(isArr(xs));
}

module.exports = curry(notArr);
