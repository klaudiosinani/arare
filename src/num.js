'use strict'
const curry = require('./curry')

function num(x) {
  return Number(x)
}

module.exports = curry(num)
