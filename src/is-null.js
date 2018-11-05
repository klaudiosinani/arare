'use strict'
const curry = require('./curry')
const eq = require('./eq')

function isNull(x) {
  return eq(x, null)
}

module.exports = curry(isNull)
