'use strict'
const curry = require('./curry')
const eq = require('./eq')
const len = require('./len')
const notStr = require('./not-str')
const takeRight = require('./take-right')

function endsWith(x, xs) {
  if (notStr(xs))
    throw new TypeError('[endsWith] Last argument must be a string')

  return eq(takeRight(len(x), xs), x)
}

module.exports = curry(endsWith)
