'use strict';
const cons = require('./cons');
const curry = require('./curry');
const setNthWith = require('./set-nth-with');

function setNth(i, x, xs) {
  return setNthWith(i, cons(x), xs);
}

module.exports = curry(setNth);
