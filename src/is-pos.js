'use strict'
const curry = require('./curry')
const gt = require('./gt')

function isPos(x) {
  return gt(x, 0)
}

module.exports = curry(isPos)
