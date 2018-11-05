'use strict'
const and = require('./and')
const concat = require('./concat')
const curry = require('./curry')
const ite = require('./ite')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const str = require('./str')

function append(x, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[append] Last argument must be an array or a string')

  return concat(xs, ite(notArr(xs), str(x), [x]))
}

module.exports = curry(append)
