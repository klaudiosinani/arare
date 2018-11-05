'use strict'
const arity = require('./arity')
const curry = require('./curry')

function ternary(fn) {
  return arity(3, fn)
}

module.exports = curry(ternary)
