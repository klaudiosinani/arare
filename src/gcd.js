'use strict'
const curry = require('./curry')
const eq = require('./eq')
const mod = require('./mod')

function gcd(x, y) {
  return eq(x, 0) ? y : gcd(mod(y, x), x)
}

module.exports = curry(gcd)
