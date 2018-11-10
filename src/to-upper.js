'use strict'
const curry = require('./curry')
const notStr = require('./not-str')

function toUpper(xs) {
  if (notStr(xs))
    throw new TypeError('[toUpper] Argument must be a string')

  return xs.toUpperCase()
}

module.exports = curry(toUpper)
