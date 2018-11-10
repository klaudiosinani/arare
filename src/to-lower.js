'use strict'
const curry = require('./curry')
const notStr = require('./not-str')

function toLower(xs) {
  if (notStr(xs))
    throw new TypeError('[toLower] Argument must be a string')

  return xs.toLowerCase()
}

module.exports = curry(toLower)
