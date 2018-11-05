'use strict'
const curry = require('./curry')

function gt(x, y) {
  return x > y
}

module.exports = curry(gt)
