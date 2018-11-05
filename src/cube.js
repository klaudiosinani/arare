'use strict'
const curry = require('./curry')
const mult = require('./mult')
const square = require('./square')

function cube(x) {
  return mult(x, square(x))
}

module.exports = curry(cube)
