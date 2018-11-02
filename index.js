'use strict';
const abs = require('./src/abs');
const absDiff = require('./src/abs-diff');
const add = require('./src/add');
const adjustIndex = require('./src/adjust-index');
const and = require('./src/and');
const append = require('./src/append');
const apply = require('./src/apply');
const applyArgs = require('./src/apply-args');
const arity = require('./src/arity');
const array = require('./src/array');
const arrayify = require('./src/arrayify');
const arrayMax = require('./src/array-max');
const arrayMin = require('./src/array-min');
const assign = require('./src/assign');
const assignWith = require('./src/assign-with');
const binary = require('./src/binary');
const breakWhen = require('./src/break-when');
const bool = require('./src/bool');
const comp = require('./src/comp');
const concat = require('./src/concat');
const cons = require('./src/cons');
const copy = require('./src/copy');
const count = require('./src/count');
const countAll = require('./src/count-all');
const countBy = require('./src/count-by');
const cube = require('./src/cube');
const curry = require('./src/curry');
const decr = require('./src/decr');
const div = require('./src/div');
const drop = require('./src/drop');
const dropRight = require('./src/drop-right');
const dropRightWhile = require('./src/drop-right-while');
const dropWhile = require('./src/drop-while');
const empty = require('./src/empty');
const endsWith = require('./src/ends-with');
const eq = require('./src/eq');
const eqProp = require('./src/eq-prop');
const even = require('./src/even');
const ext = require('./src/ext');
const fill = require('./src/fill');
const filter = require('./src/filter');
const flip = require('./src/flip');
const fst = require('./src/fst');
const gather = require('./src/gather');
const gcd = require('./src/gcd');
const getNth = require('./src/get-nth');
const gt = require('./src/gt');
const gte = require('./src/gte');
const hasProp = require('./src/has-prop');
const head = require('./src/head');
const id = require('./src/id');
const incr = require('./src/incr');
const init = require('./src/init');
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
const isPair = require('./src/is-pair');
const isPos = require('./src/is-pos');
const isRegExp = require('./src/is-reg-exp');
const isStr = require('./src/is-str');
const isUndef = require('./src/is-def');
const ite = require('./src/ite');
const keys = require('./src/keys');
const last = require('./src/last');
const lcm = require('./src/lcm');
const len = require('./src/len');
const lt = require('./src/lt');
const lte = require('./src/lte');
const map = require('./src/map');
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
const notPair = require('./src/not-pair');
const notRegExp = require('./src/not-reg-exp');
const notStr = require('./src/not-str');
const nullary = require('./src/nullary');
const num = require('./src/num');
const odd = require('./src/odd');
const one = require('./src/one');
const ones = require('./src/ones');
const or = require('./src/or');
const pair = require('./src/pair');
const partial = require('./src/partial');
const partialRight = require('./src/partial-right');
const pipe = require('./src/pipe');
const pow = require('./src/pow');
const prepend = require('./src/prepend');
const prod = require('./src/prod');
const props = require('./src/props');
const range = require('./src/range');
const recip = require('./src/recip');
const reduce = require('./src/reduce');
const reduceRight = require('./src/reduce-right');
const reverse = require('./src/reverse');
const reverseArgs = require('./src/reverse-args');
const slice = require('./src/slice');
const snd = require('./src/snd');
const spread = require('./src/spread');
const square = require('./src/square');
const startsWith = require('./src/starts-with');
const str = require('./src/str');
const sub = require('./src/sub');
const sum = require('./src/sum');
const tail = require('./src/tail');
const take = require('./src/take');
const takeRight = require('./src/take-right');
const takeWhile = require('./src/take-while');
const ternary = require('./src/ternary');
const trunc = require('./src/trunc');
const unary = require('./src/unary');
const uneq = require('./src/uneq');
const uneqProp = require('./src/uneq-prop');
const values = require('./src/values');
const xarray = require('./src/xarray');
const xcurry = require('./src/xcurry');
const xnor = require('./src/xnor');
const xor = require('./src/xor');
const zero = require('./src/zero');
const zeros = require('./src/zeros');

module.exports = {
  abs,
  absDiff,
  add,
  adjustIndex,
  and,
  append,
  apply,
  applyArgs,
  arity,
  array,
  arrayify,
  arrayMax,
  arrayMin,
  assign,
  assignWith,
  binary,
  breakWhen,
  bool,
  comp,
  concat,
  cons,
  copy,
  count,
  countAll,
  countBy,
  cube,
  curry,
  decr,
  div,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  empty,
  endsWith,
  eq,
  eqProp,
  even,
  ext,
  fill,
  filter,
  flip,
  fst,
  gather,
  gcd,
  getNth,
  gt,
  gte,
  hasProp,
  head,
  id,
  incr,
  init,
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
  isPair,
  isPos,
  isRegExp,
  isStr,
  isUndef,
  ite,
  keys,
  last,
  lcm,
  len,
  lt,
  lte,
  map,
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
  notPair,
  notRegExp,
  notStr,
  nullary,
  num,
  odd,
  one,
  ones,
  or,
  pair,
  partial,
  partialRight,
  pipe,
  pow,
  prepend,
  prod,
  props,
  range,
  recip,
  reduce,
  reduceRight,
  reverse,
  reverseArgs,
  slice,
  snd,
  spread,
  square,
  startsWith,
  str,
  sub,
  sum,
  tail,
  take,
  takeRight,
  takeWhile,
  ternary,
  trunc,
  unary,
  uneq,
  uneqProp,
  values,
  xarray,
  xcurry,
  xnor,
  xor,
  zero,
  zeros
};
