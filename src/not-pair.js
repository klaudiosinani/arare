'use strict';
const curry = require('./curry');
const isPair = require('./is-pair');
const not = require('./not');

function notPair(xs) {
  return not(isPair(xs));
}

module.exports = curry(notPair);
