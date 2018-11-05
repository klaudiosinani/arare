'use strict'
const and = require('./and')
const curry = require('./curry')
const gte = require('./gte')
const len = require('./len')
const lt = require('./lt')
const notArr = require('./not-arr')
const notStr = require('./not-str')

function adjustIndex(min, max, xs, i) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[adjustIndex] Third argument must be an array or a string')

  return lt(i, 0) ? min : gte(i, len(xs)) ? max : i
}

module.exports = curry(adjustIndex)
