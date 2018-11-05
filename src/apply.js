'use strict'
const curry = require('./curry')

function apply(x, fn) {
  return fn(x)
}

module.exports = curry(apply)
