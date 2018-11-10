'use strict'
const abs = require('./abs')
const curry = require('./curry')
const mult = require('./mult')

function neg(x) {
  return mult(abs(x), -1)
}

module.exports = curry(neg)
