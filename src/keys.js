'use strict'
const curry = require('./curry')

function keys(x) {
  return Object.keys(x)
}

module.exports = curry(keys)
