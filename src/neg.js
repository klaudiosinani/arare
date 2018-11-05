'use strict'
const curry = require('./curry')

function neg(x) {
  return -Number(x)
}

module.exports = curry(neg)
