'use strict'
const curry = require('./curry')

function mod(x, y) {
  return Number(x) % Number(y)
}

module.exports = curry(mod)
