'use strict'
const apply = require('./apply')
const len = require('./len')
const pipe = require('./pipe')
const spread = require('./spread')
const xarray = require('./xarray')

function array(...xs) {
  return apply(xs, apply(xs, pipe(len, xarray, spread)))
}

module.exports = array
