'use strict'
const curry = require('./curry')

function gather(fn) {
  return (...arg) => fn(arg)
}

module.exports = curry(gather)
