'use strict'
const curry = require('./curry')

function add(x, y) {
  return Number(x) + Number(y)
}

module.exports = curry(add)
