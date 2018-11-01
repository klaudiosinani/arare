'use strict';
const curry = require('./curry');

function hasProp(x, obj) {
  return Object.prototype.hasOwnProperty.call(obj, x);
}

module.exports = curry(hasProp);
