'use strict';
const abs = require('./src/abs');
const absDiff = require('./src/abs-diff');
const add = require('./src/add');
const and = require('./src/and');
const apply = require('./src/apply');
const cube = require('./src/cube');
const curry = require('./src/curry');
const decr = require('./src/decr');
const div = require('./src/div');
const drop = require('./src/drop');
const empty = require('./src/empty');
const eq = require('./src/eq');
const even = require('./src/even');
const ext = require('./src/ext');
const gcd = require('./src/gcd');
const gt = require('./src/gt');
const gte = require('./src/gte');
const id = require('./src/id');
const incr = require('./src/incr');
const isArr = require('./src/is-arr');
const isDate = require('./src/is-date');
const isDef = require('./src/is-def');
const isEmpty = require('./src/is-empty');
const isFn = require('./src/is-fn');
const isInt = require('./src/is-num');
const isNeg = require('./src/is-neg');
const isNil = require('./src/is-nil');
const isNull = require('./src/is-null');
const isNum = require('./src/is-num');
const isObj = require('./src/is-obj');
const isPos = require('./src/is-pos');
const isRegExp = require('./src/is-reg-exp');
const isStr = require('./src/is-str');
const isUndef = require('./src/is-def');
const ite = require('./src/ite');
const lcm = require('./src/lcm');
const len = require('./src/len');
const lt = require('./src/lt');
const lte = require('./src/lte');
const max = require('./src/max');
const min = require('./src/min');
const mod = require('./src/mod');
const mult = require('./src/mult');
const nand = require('./src/nand');
const neg = require('./src/neg');
const nor = require('./src/nor');
const not = require('./src/not');
const notArr = require('./src/not-arr');
const notDate = require('./src/not-date');
const notEmpty = require('./src/not-empty');
const notFn = require('./src/not-fn');
const notInt = require('./src/not-int');
const notNil = require('./src/not-nil');
const notNull = require('./src/not-null');
const notNum = require('./src/not-num');
const notObj = require('./src/not-obj');
const notRegExp = require('./src/not-reg-exp');
const notStr = require('./src/not-str');
const odd = require('./src/odd');
const or = require('./src/or');
const pow = require('./src/pow');
const slice = require('./src/slice');
const square = require('./src/square');
const startsWith = require('./src/starts-with');
const sub = require('./src/sub');
const take = require('./src/take');
const takeRight = require('./src/take-right');
const uneq = require('./src/uneq');
const xcurry = require('./src/xcurry');

module.exports = {
  abs,
  absDiff,
  add,
  and,
  apply,
  cube,
  curry,
  decr,
  div,
  drop,
  empty,
  eq,
  even,
  ext,
  gcd,
  gt,
  gte,
  id,
  incr,
  isArr,
  isDate,
  isDef,
  isEmpty,
  isFn,
  isInt,
  isNeg,
  isNil,
  isNull,
  isNum,
  isObj,
  isPos,
  isRegExp,
  isStr,
  isUndef,
  ite,
  lcm,
  len,
  lt,
  lte,
  max,
  min,
  mod,
  mult,
  nand,
  neg,
  nor,
  not,
  notArr,
  notDate,
  notEmpty,
  notFn,
  notInt,
  notNil,
  notNull,
  notNum,
  notObj,
  notRegExp,
  notStr,
  odd,
  or,
  pow,
  slice,
  square,
  startsWith,
  sub,
  take,
  takeRight,
  uneq,
  xcurry
};
