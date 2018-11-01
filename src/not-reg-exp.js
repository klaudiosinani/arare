'use strict';
const curry = require('./curry');
const isRegExp = require('./is-reg-exp');
const not = require('./not');

function notRegExp(x) {
  return not(isRegExp(x));
}

module.exports = curry(notRegExp);
