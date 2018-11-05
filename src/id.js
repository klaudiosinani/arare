'use strict'
const curry = require('./curry')

function id(x) {
  return x
}

module.exports = curry(id)
