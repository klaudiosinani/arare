'use strict'
const curry = require('./curry')

function ite(x, y, z) {
  if (x)
    return y

  return z
}

module.exports = curry(ite)
