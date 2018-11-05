'use strict'
const curry = require('./curry')
const mult = require('./mult')

function square(x) {
  return mult(x, x)
}

module.exports = curry(square)
