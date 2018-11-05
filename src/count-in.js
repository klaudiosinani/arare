'use strict'
const assignWith = require('./assign-with')
const curry = require('./curry')
const flip = require('./flip')
const incr = require('./incr')
const range = require('./range')
const reduce = require('./reduce')
const sub = require('./sub')
const zeros = require('./zeros')
const zipObj = require('./zip-obj')

function countIn(l, h, xs) {
  const n = sub(incr(h), l)
  return reduce(flip(assignWith(incr)), zipObj(range(l, incr(h), 1), zeros(n)), xs)
}

module.exports = curry(countIn)
