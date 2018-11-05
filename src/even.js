'use strict'
const curry = require('./curry')
const eq = require('./eq')
const mod = require('./mod')

function even(x) {
  return eq(mod(x, 2), 0)
}

module.exports = curry(even)
