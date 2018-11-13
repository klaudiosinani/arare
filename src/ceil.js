'use strict'
const curry = require('./curry')

function ceil(x) {
  return Math.ceil(x)
}

module.exports = curry(ceil)
