'use strict'
const curry = require('./curry')

function str(x) {
  return String(x)
}

module.exports = curry(str)
