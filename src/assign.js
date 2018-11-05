'set strict'
const copy = require('./copy')
const curry = require('./curry')
const str = require('./str')

function assign(k, v, obj) {
  const cpy = copy(obj)
  cpy[str(k)] = v
  return cpy
}

module.exports = curry(assign)
