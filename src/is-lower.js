'use strict'
const and = require('./and')
const curry = require('./curry')
const eq = require('./eq')
const notStr = require('./not-str')
const toLower = require('./to-lower')
const toUpper = require('./to-upper')
const uneq = require('./uneq')

function isLower(xs) {
  if (notStr(xs))
    return false

  return and(eq(xs, toLower(xs)), uneq(xs, toUpper(xs)))
}

module.exports = curry(isLower)
