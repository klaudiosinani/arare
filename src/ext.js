'use strict';
const curry = require('./curry');

function ext(key, object) {
  return object[String(key)];
}

module.exports = curry(ext);
