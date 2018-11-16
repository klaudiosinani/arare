'use strict'
const curry = require('./curry')
const isUpper = require('./is-upper')
const not = require('./not')

function notUpper(x) {
  return not(isUpper(x))
}

module.exports = curry(notUpper)
