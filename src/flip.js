'use strict'
const curry = require('./curry')

function flip(fn) {
  return curry((x, y) => fn(y, x))
}

module.exports = curry(flip)
