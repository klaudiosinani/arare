'use strict'
const curry = require('./curry')

function isInt(x) {
  return Number.isInteger(x)
}

module.exports = curry(isInt)
