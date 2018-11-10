'use strict'
const and = require('./and')
const curry = require('./curry')
const eq = require('./eq')
const notStr = require('./not-str')
const toLower = require('./to-lower')
const toUpper = require('./to-upper')
const uneq = require('./uneq')

function isUpper(xs) {
  if (notStr(xs))
    return false

  return and(eq(xs, toUpper(xs)), uneq(xs, toLower(xs)))
}

module.exports = curry(isUpper)
