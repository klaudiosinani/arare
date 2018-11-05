'use strict'
const curry = require('./curry')

function spread(fn) {
  return arg => fn(...arg)
}

module.exports = curry(spread)
