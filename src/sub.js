'use strict'
const curry = require('./curry')

function sub(x, y) {
  return Number(x) - Number(y)
}

module.exports = curry(sub)
