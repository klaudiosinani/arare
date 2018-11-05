'use strict'
const curry = require('./curry')
const eq = require('./eq')

function isStr(x) {
  return eq(Object.prototype.toString.call(x), '[object String]')
}

module.exports = curry(isStr)
