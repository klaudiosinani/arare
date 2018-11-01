'use strict';
const curry = require('./curry');

function head([x]) {
  return x;
}

module.exports = curry(head);
