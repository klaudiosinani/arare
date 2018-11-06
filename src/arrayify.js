'use strict'
const copy = require('./copy')
const curry = require('./curry')
const isArr = require('./is-arr')

function arrayify(x) {
  return isArr(x) ? copy(x) : [x]
}

module.exports = curry(arrayify)
