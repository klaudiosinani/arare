'use strict'
const curry = require('./curry')
const isStr = require('./is-str')
const not = require('./not')

function notStr(xs) {
  return not(isStr(xs))
}

module.exports = curry(notStr)
