'use strict';
const curry = require('./curry');
const reverse = require('./reverse');
const zip = require('./zip');

function zipReverse(xs) {
  return zip(xs, reverse(xs));
}

module.exports = curry(zipReverse);
