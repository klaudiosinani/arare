'use strict';
const curry = require('./curry');
const eqProp = require('./eq-prop');
const not = require('./not');

function uneqProp(prop, xs, ys) {
  return not(eqProp(prop, xs, ys));
}

module.exports = curry(uneqProp);
