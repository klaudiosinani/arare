'use strict';
const curry = require('./curry');
const fst = require('./fst');
const isPair = require('./is-pair');
const max = require('./max');
const min = require('./min');
const not = require('./not');
const pair = require('./pair');
const snd = require('./snd');

function minMax(xs, x) {
  if (not(isPair(xs))) {
    throw new Error('[minMax] First argument must be an array of length 2');
  }
  return pair(min(fst(xs), x), max(snd(xs), x));
}

module.exports = curry(minMax);
