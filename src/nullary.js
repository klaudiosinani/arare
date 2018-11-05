'use strict'
const arity = require('./arity')
const curry = require('./curry')

function nullary(fn) {
  return arity(0, fn)
}

module.exports = curry(nullary)
