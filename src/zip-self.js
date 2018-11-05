'use strict'
const curry = require('./curry')
const zip = require('./zip')

function zipSelf(xs) {
  return zip(xs, xs)
}

module.exports = curry(zipSelf)
