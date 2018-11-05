'use strict'
const curry = require('./curry')
const eq = require('./eq')

function isNil(x) {
  return eq(x, 0)
}

module.exports = curry(isNil)
