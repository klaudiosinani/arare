'use strict'
const append = require('./append')
const arrayMax = require('./array-max')
const arrayMin = require('./array-min')
const curry = require('./curry')
const isPair = require('./is-pair')
const not = require('./not')
const pair = require('./pair')

function minMax(xs, x) {
  if (not(isPair(xs)))
    throw new Error('[minMax] First argument must be an array of length 2')

  return pair(arrayMin(append(x, xs)), arrayMax(append(x, xs)))
}

module.exports = curry(minMax)
