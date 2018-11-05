'use strict'
const curry = require('./curry')
const isArr = require('./is-arr')

function arrayify(x) {
  return isArr(x) ? x : [x]
}

module.exports = curry(arrayify)
