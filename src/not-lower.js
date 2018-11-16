'use strict'
const curry = require('./curry')
const isLower = require('./is-lower')
const not = require('./not')

function notLower(x) {
  return not(isLower(x))
}

module.exports = curry(notLower)
