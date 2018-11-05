'use strict'
const curry = require('./curry')
const isNil = require('./is-nil')
const not = require('./not')

function notNil(x) {
  return not(isNil(x))
}

module.exports = curry(notNil)
