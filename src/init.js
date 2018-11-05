'use strict'
const curry = require('./curry')
const decr = require('./decr')
const len = require('./len')
const slice = require('./slice')

function init(xs) {
  return slice(0, decr(len(xs)), xs)
}

module.exports = curry(init)
