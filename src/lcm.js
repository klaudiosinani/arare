'use strict'
const curry = require('./curry')
const div = require('./div')
const gcd = require('./gcd')
const mult = require('./mult')

function lcm(x, y) {
  return div(mult(x, y), gcd(x, y))
}

module.exports = curry(lcm)
