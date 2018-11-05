'use strict'
const curry = require('./curry')
const take = require('./take')
const gather = require('./gather')
const xcurry = require('./xcurry')

function xarray(x) {
  return xcurry(x, gather(take(x)))
}

module.exports = curry(xarray)
