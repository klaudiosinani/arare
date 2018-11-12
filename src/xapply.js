'use strict'
const apply = require('./apply')
const curry = require('./curry')
const decr = require('./decr')
const lte = require('./lte')

function xapply(x, y, fn) {
  if (lte(x, 0))
    return y

  return xapply(decr(x), apply(y, fn), fn)
}

module.exports = curry(xapply)
