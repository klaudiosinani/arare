'use strict'
const applyArgs = require('./apply-args')
const curry = require('./curry')
const eq = require('./eq')
const ext = require('./ext')
const map = require('./map')

function eqProp(prop, xs, ys) {
  return applyArgs(map(ext(prop), [xs, ys]), eq)
}

module.exports = curry(eqProp)
