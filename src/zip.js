'use strict';
const curry = require('./curry');
const pair = require('./pair');
const zipWith = require('./zip-with');

function zip(xs, ys) {
  return zipWith(pair, xs, ys);
}

module.exports = curry(zip);
