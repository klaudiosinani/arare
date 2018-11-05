'use strict'
const curry = require('./curry')

function div(x, y) {
  return Number(x) / Number(y)
}

module.exports = curry(div)
