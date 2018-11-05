'use strict'
const curry = require('./curry')

function partialRight(fn, xs) {
  return (...ys) => fn(...ys, ...xs)
}

module.exports = curry(partialRight)
