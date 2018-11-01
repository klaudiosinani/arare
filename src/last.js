'use strict';
const curry = require('./curry');
const decr = require('./decr');
const getNth = require('./get-nth');
const len = require('./len');

function last(xs) {
  return getNth(decr(len(xs)), xs);
}

module.exports = curry(last);
