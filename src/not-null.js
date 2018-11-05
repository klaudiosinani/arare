'use strict'
const curry = require('./curry')
const isNull = require('./is-null')
const not = require('./not')

function notNull(x) {
  return not(isNull(x))
}

module.exports = curry(notNull)
