## Arare API Documentation

The following is an alphabetically ordered list of all available functions along with usage examples.

In case you spotted an error or think that an example or description is not clear enough and should be further improved, please feel free to open an [issue](https://github.com/klauscfhq/arare/issues/new/choose) or [pull request](https://github.com/klauscfhq/arare/compare).

#### `absDiff(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/abs-diff.js)

Accepts two numbers `x` & `y`, and returns `|x - y|`, the absolute value of their difference.

```js
absDiff(5, 10) //=> 5
absDiff(-5, -10) //=> 15
absDiff(5)(10) //=> 5
```

#### `abs(x)`

- x: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/abs.js)

Accept a number `x`, and returns `|x|`, its absolute value.

```js
abs(5) //=> 5
abs(-5) //=> 5
map(abs, [-5, 5]) //=> [5, 5]
```

#### `add(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/add.js)

Accepts two numbers `x` & `y`, and returns `x + y`, their sum.

```js
add(5, 5) //=> 10
add(5)(5) //=> 10
```

#### `adjustIndex(min, max, xs, idx)`

- min: `Number`
- max: `Number`
- xs: `Array|String`
- idx: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/adjust-index.js)

Accepts two numbers `min` & `max`, an array or string `xs`, a number `idx`, checks whether `idx` is negative, and if so returns `min`, otherwise checks whether `idx` is equal to or greater than the length of `xs`, and if so returns `max`. If none of the two above holds, then `idx` is returned as is, since `0 <= idx < xs.length`.

```js
adjustIndex(0, 2, [1, 2, 3], 5) //=> 2
adjustIndex(0, 2, [1, 2, 3], -1) //=> 0
adjustIndex(0, 2, [1, 2, 3], 1) //=> 1
adjustIndex(0, 2, [1, 2, 3])(1) //=> 1
adjustIndex(0, 2)([1, 2, 3], 1) //=> 1
adjustIndex(0)(2)([1, 2, 3])(1) //=> 1
```

#### `and(x, y)`

- x: `Boolean`
- y: `Boolean`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/and.js)

Accepts two booleans `x` & `y`, and returns `x && y`, the result of applying the logical `AND` operator between `x` and `y`. Values `x`, `y` are automatically coerced to booleans if not provided as such.

```js
and(true, true) //=> true
and(true)(true) //=> true
and(true, false) //=> false
and(true)(false) //=> false
and(false, false) //=> false
and(false)(false) //=> false
```

#### `appendTo(xs, x)`

- xs: `Array|String`
- x: `Any`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/append-to.js)

Accepts an array or a string `xs`, a value `x`, and returns a new array or string, containing all elements of `xs` as well as `x`, with `x` set as the last element.

```js
appendTo(ones(1), 3) //=> [1, 3]
appendTo(ones(1))(3) //=> [1, 3]
appendTo(pair(1, 2), 3) //=> [1, 2, 3]
appendTo(pair(1, 2))(3) //=> [1, 2, 3]
appendTo(pair(1)(2))(3) //=> [1, 2, 3]
appendTo('fo', 'o') //=> 'foo'
appendTo('fo')('o') //=> 'foo'
```

#### `append(x, xs)`

- x: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/append.js)


Accepts a value `x`, an array or a string `xs`, and returns a new array or string, containing all elements of `xs`, as well as `x`, with `x` set as the last element.

```js
append(3, ones(1)) //=> [1, 3]
append(3)(ones(1)) //=> [1, 3]
append(3, pair(1, 2)) //=> [1, 2, 3]
append(3)(pair(1, 2)) //=> [1, 2, 3]
append(3)(pair(1)(2)) //=> [1, 2, 3]
appendTo('o', 'fo') //=> 'foo'
appendTo('o')('fo') //=> 'foo'
```

#### `applyArgs(args, fn)`

- args: `Array`
- fn: `Function`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/apply-args.js)

Accepts an array of arguments `args`, a function `fn`, and returns the result of applying `fn` to the arguments stored in `args`. Note that the `args` array is spread when passed to `fn`.

```js
applyArgs([1, 2], add) //=> 3
applyArgs([1, 2])(add) //=> 3
```

#### `apply(x, fn)`

- x: `Any`
- fn: `Function`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/apply.js)

Accepts a value `x`, a function `fn`, applies `fn` to `x` and returns the result.

```js
apply(-1, abs) //=> 1
apply(1, add(2)) //=> 3
apply(1)(add(2)) //=> 3
apply(apply(-1, abs))(apply(2, add)) //=> 3
```

#### `arity(n, fn)`

- n: `Number`
- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/arity.js)

Accepts a number `n`, a function `fn`, and returns a wrapper function of `fn` of [arity](https://en.wikipedia.org/wiki/Arity) `n`, which when invoked with arguments returns the results of supplying only `n` of these arguments to `fn`.

```js
const array5 = arity(5, array)

array5(1, 2, 3) //=> [1, 2, 3]
array5(1, 2, 3, 4, 5) //=> [1, 2, 3, 4, 5]
array5(1, 2, 3, 4, 5, 6, 7) //=> [1, 2, 3, 4, 5]
```

#### `arrayMax(xs)`

- xs: `Array`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/array-max.js)

Accepts an array `xs`, and returns the largest number in `xs`.

```js
arrayMax([]) //=> -Infinity
arrayMax([1, 2, 3, 4]) //=> 4
```

#### `arrayMinMax(xs)`

- xs: `Array`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/array-min-max.js)

Accepts an array `xs`, and returns a new array `[min, max]`, where `min` is the smallest number and `max` is the largest number, in `xs`.

```js
arrayMinMax([]) //=> [-Infinity, Infinity]
arrayMinMax([1, 2, 3]) //=> [1, 3]
```

#### `arrayMin(xs)`

- xs: `Array`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/array-min.js)

Accepts an array `xs` and returns the smallest number in `xs`.

```js
arrayMin([]) //=> Infinity
arrayMin([1, 2, 3, 4]) //=> 1
```

#### `array(x[, x])`

- x: `Any`
- Returns: `Function`
- Curried: `False`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/array.js)

Accepts one of more `x` arguments, and returns an array containing those `x` arguments. Please note that the functions in not curried by default, but can easily become so by using [`xcurry`]().

```js
array() //=> []
array(1, 2, 3) //=> [1, 2, 3]
```

#### `arrayify(x)`

- x: `Any`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/arrayify.js)

Accepts a value `x`, and returns an array holding that single value `x` only if `x` is not already an array. If `x` is indeed an array, then it returns a shallow copy of `x`.

```js
arrayify([]) //=> []
arrayify(5) //=> [5]
arrayify([5]) //=> [5]
```

#### `assignWith(fn, k, obj)`

- fn: `Function`
- k: `String`
- obj: `Object`
- Returns: `Object`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/assign-with.js)

Accepts a function `fn`, a string `k`, an object `obj`, and returns a shallow copy of `obj` where the value corresponding to the property `k` is replaced by result of applying `fn` to the initial value stored under `k`.

```js
assignWith(add(10), 'a', { a: 1, b: 2 }) //=> { a: 11, b: 2}
assignWith(add(10), 'a')({ a: 1, b: 2 }) //=> { a: 11, b: 2}
assignWith(add(10))('a')({ a: 1, b: 2 }) //=> { a: 11, b: 2}
```

#### `assign(k, v, obj)`

- k: `String`
- v: `Any`
- obj: `Object`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/assign.js)

Accepts a string `k`, a value `v`, an object `obj`, and returns a shallow copy of `obj` where the value corresponding to the property `k` is replaced by `v`.

```js
assignWith(10, 'a', { a: 1, b: 2 }) //=> { a: 10, b: 2}
assignWith(10, 'a')({ a: 1, b: 2 }) //=> { a: 10, b: 2}
assignWith(10)('a')({ a: 1, b: 2 }) //=> { a: 10, b: 2}
```

#### `binary(fn)`

- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/binary.js)

Accepts a number `n`, a function `fn`, and returns a wrapper function of `fn` with an [arity](https://en.wikipedia.org/wiki/Arity) of `2`, which when invoked with its own arguments returns the result of supplying only `2` of those arguments to `fn`.

```js
const array2 = binary(array)

array2(1, 2) //=> 1 2
array2(1, 2, 3) //=> [1, 2]
```

#### `bool(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/bool.js)

Accepts a value `x`, converts it to a boolean and returns the result. Can be considered as a curried version of default `Boolean` function.

```js
bool(0) //=> false
bool(1) //=> true
```

#### `breakWhen(fn, xs)`

- fn: `Function`
- xs: `Array|String`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/break-when.js)

Accepts a predicate function `fn`, an array or a string `xs`, and returns a new two-element array `[passed, rest]`, where the first element `passed` is an array or a string holding the very first elements of `xs`, from the left to the right side, which do not satisfy the predicate `fn`, and the second element `rest` is an array or a string holding the remaining elements of `xs`.

```js
breakWhen(odd, [0, 2, 4, 1, 2, 3]) //=> [[0, 2, 4], [1, 2, 3]]
breakWhen(odd)([0, 2, 4, 1, 2, 3]) //=> [[0, 2, 4], [1, 2, 3]]
breakWhen(eq('-'), '123-456-78') //=> ['123', '-456-78']
breakWhen(eq('-'))('123-456-78') //=> ['123', '-456-78']
```

#### `ceil(x)`

- x: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/ceil.js)

Accepts a number `x`, and returns the smallest integer greater than or equal to `x`.

```js
ceil(5) //=> 5
ceil(5.123) //=> 6
ceil(div(5, 10)) //=> 1
ceil(div(5)(10)) //=> 1
```

#### `comp(fn[, fn])`

- fn: `Function`
- Returns: `Function`
- Curried: `False`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/comp.js)

Accepts one or more functions `fn`, and returns a new function that is the [composition](https://en.wikipedia.org/wiki/Function_composition), from right to left, of the given `fn` functions. 
Note that the returned composed function is not automatically curried, but can easily become so by using the [`xcurry`]() module.

```js
const absAdd5 = comp(add(5), abs)
// comp(add(5), abs) <=> x => add(5)(abs(x))
absAdd5(-5) //=> 10
```

#### `concat(xs, ys)`

- xs: `Array|String`
- ys: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/concat.js)

Accepts an array or a string `xs`, an array or a string `ys`, and returns an new array where `xs` is concatenated with `ys`, only if `xs` is an array, or a string where `xs` is concatenated with `ys`, only if `xs` is a string.

```js
concat('foo', 'bar') //=> 'foobar'
concat([1, 2], [3, 4]) //=> [ 1, 2, 3, 4 ]
concat([1, 2], 'bar') //=> [ 1, 2, 'bar']
concat('foo', [3, 4]) //=> 'foo3, 4'
```

#### `cons(x)`

- x: `Any`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/cons.js)

Accepts a value `x` and return a new constant zero arity function that when invoked returns always `x`.

```js
const zero = cons(0)
zero() //=> 0
zero('a') //=> 0
map(zero, range(5, 0, -1) //=> [0, 0, 0, 0, 0]
map(zero)(range(5, 0, -1) //=> [0, 0, 0, 0, 0]
```

#### `copy(xs)`

- xs: `Array|Object`
- Returns: `Array|Object`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/copy.js)

Accepts an array or an object `xs`, and returns a shallow copy of `xs`.

```js
copy([]) //=> []
copy({}) //=> {}
copy([1, 2]) //=> [1, 2]
copy({a: 1, b: 2}) //=> {a: 1, b: 2}
copy(range(1, 10, 3)) //=> [1, 4, 7]
copy(range(1)(10)(3)) //=> [1, 4, 7]
```

#### `countAll(xs)`

- xs: `Array`
- Returns: `Object`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/count-all.js)

Accepts an array `xs`, and returns an object where the keys are the elements of `xs` and each key has as a value the number of times it appears in `xs`. Can be considered as a variation of [`countBy`] where [`id`] is used the transforming function.

```js
countAll([]) //=> {}
countAll(['a', 'a', 'b', 'c', 'c']) //=> {a: 2, b: 1, c: 2}
countAll(concat(zeros(5), ones(4))) //=> {0: 5, 1: 4}
countAll(concat(zeros(5))(ones(4)))
```

#### `countBy(fn, xs)`

- xs: `Array`
- Returns: `Object`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/count-by.js)

Accepts a function `fn`, an array `xs`, and returns an object where its keys are the results of applying `fn` to each element of `xs`, and each key has as a value the total number of times the result of each `fn` application appears.

```js
countBy(abs, [1, 2, 3, -1, -2, 4]) //=> {1: 2, 2: 2, 3: 1, 4: 1 }
countBy(abs)([1, 2, 3, -1, -2, 4]) //=> {1: 2, 2: 2, 3: 1, 4: 1 }
countBy(toUpper, concat(fill(3, 'a'), fill(4, 'b'))) //=> {A: 3, B: 4}
countBy(toUpper)(concat(fill(3, 'a'), fill(4, 'b'))) //=> {A: 3, B: 4}
countBy(toUpper)(concat(fill(3)('a'), fill(4)('b'))) //=> {A: 3, B: 4}
countBy(toUpper)(concat(fill(3)('a'))(fill(4)('b'))) //=> {A: 3, B: 4}
```

#### `countIn(min, max, xs)`

- min: `Number`
- max: `Number`
- xs: `Array`
- Returns: `Object`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/count-in.js)

Accepts two numbers `min` & `max`, an array `xs`, and returns an object where its keys are all the integer numbers `i`, where `min <= i <= max`, and each key has as a value the total number of times `i` appears in `xs`.

```js
countIn(0, 4, [1, 2, 2, 3, 3]) //=> {0: 0, 1: 1, 2: 2, 3: 2, 4: 0}
countIn(0, 4)([1, 2, 2, 3, 3]) //=> {0: 0, 1: 1, 2: 2, 3: 2, 4: 0}
countIn(0)(4, [1, 2, 2, 3, 3]) //=> {0: 0, 1: 1, 2: 2, 3: 2, 4: 0}
countIn(0)(4)([1, 2, 2, 3, 3]) //=> {0: 0, 1: 1, 2: 2, 3: 2, 4: 0}
countIn(0, 4, mapcat(fill(5), [1, 2, 3, 4])) //=> {0: 0, 1: 5, 2: 5, 3: 5, 4: 5}
countIn(0, 4)(mapcat(fill(5), [1, 2, 3, 4])) //=> {0: 0, 1: 5, 2: 5, 3: 5, 4: 5}
countIn(0)(4, mapcat(fill(5), [1, 2, 3, 4])) //=> {0: 0, 1: 5, 2: 5, 3: 5, 4: 5}
countIn(0)(4)(mapcat(fill(5))([1, 2, 3, 4])) //=> {0: 0, 1: 5, 2: 5, 3: 5, 4: 5}
```

#### `count(x, xs)`

- x: `Any`
- xs: `Array|String`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/count.js)

Accepts a value `x`, an array or a string `xs`, and returns the the total number of times `x` appears in `xs`.

```js
count(2, [1, 3, 3, 5]) //=> 2
count(2)([1, 3, 3, 5]) //=> 2
count('o', 'foo') //=> 2
count('o')('foo') //=> 2
```

#### `cube(x)`

- x: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/cube.js)

Accepts a number `x`, and returns the result of `x` to the power of 3.

```js
cube(2) //=> 8
cube(5) //=> 125
```

#### `curry(fn)`

- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/curry.js)

Accepts a function `fn`, and returns a variadic curried version of `fn`.
Note that the property [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) of `fn` is used to infer its arity, in order for it to be automatically curried. If your function uses any default parameter values or the rest parameter syntax in its signature then please switch to [`xcurry`](), to manually curry it, since the value returned by `fn.length` will not represent the actual number of arguments expected by `fn`.

```js
const add3 = (x, y, z) => x + y + z;
const curryAdd3 = curry(add3); // add3.length => 3
curryAdd3(1, 2, 3) //=> 6
curryAdd3(1, 2)(3) //=> 6
curryAdd3(1)(2, 3) //=> 6
curryAdd3(1)(2)(3) //=> 6
```

#### `decr(x)`

- x: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/decr.js)

Accepts a number `x`, and returns the value of `x` decremented by `1`.

```js
decr(4) //=> 3
decr(-1) //=> -2
map(decr, zeros(3)) //=> [-1, -1, -1]
map(decr)(zeros(3)) //=> [-1, -1, -1]
```

#### `div(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/div.js)

Accepts two numbers `x` & `y`, and returns the results of `x` divided by `y`.

```js
div(10, 2) //=> 5
div(10)(2) //=> 5
map(div(2), fill(3, 10)) //=> [5, 5, 5]
map(div(2))(fill(3, 10)) //=> [5, 5, 5]
map(div(2))(fill(3)(10)) //=> [5, 5, 5]
```

#### `dropRightWhile(fn, xs)`

- fn: `Function`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/drop-right-while.js)

Accepts a predicate function `fn`, an array or a string `xs`, and returns a new array or a string where all the first elements, from the right to left side of `xs`, which satisfy the predicate `fn`, are not included.

```js
dropRightWhile(odd, [2, 4, 6, 1, 3, 5]) //=> [2, 4, 6] 
dropRightWhile(odd)([2, 4, 6, 1, 3, 5]) //=> [2, 4, 6] 
dropRightWhile(eq('.'), 'foo...') //=> 'foo' 
dropRightWhile(eq('.'))('foo...') //=> 'foo' 
```

#### `dropRight(n, xs)`

- n: `Number`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/drop-right.js)

Accepts a number `n`, an array or a string `xs`, and returns a new array or a string, where the `n` first elements, from the right to the left side of `xs`, are not included.

```js
dropRight(2, [1, 2, 3, 4]) //=> [1, 2]
dropRight(2)([1, 2, 3, 4]) //=> [1, 2]
dropRight(3, 'foo...') //=> 'foo'
dropRight(3)('foo...') //=> 'foo'
```

#### `dropWhile(fn, xs)`

- fn: `Function`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/drop-while.js)

Accepts a predicate function `fn`, an array or a string `xs`, and returns a new array or a string, where all the first elements, from the left to right side of `xs`, which satisfy the predicate `fn`, are not included.

```js
dropWhile(even, [2, 4, 6, 1, 3, 5]) //=> [1, 3, 5] 
dropWhile(even)([2, 4, 6, 1, 3, 5]) //=> [1, 3, 5] 
dropWhile(uneq('.'), 'foo...') //=> '...'
dropWhile(uneq('.'))('foo...') //=> '...'
```

#### `drop(n, xs)`

- n: `Number`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/drop.js)

Accepts a number `n`, an array or a string `xs`, and returns a new array or a string, where the `n` first elements, from the left to the right side of `xs`, are not included.

```js
drop(2, [1, 2, 3, 4]) //=> [3, 4]
drop(2)([1, 2, 3, 4]) //=> [3, 4]
drop(3, 'foo..') //=> '...'
drop(3)('foo..') //=> '...'
```

#### `empty(xs)`

- x: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/empty.js)

Accepts an array or a string `xs`, and returns an empty array or an empty string.

```js
empty([]) //=> []
empty([1, 2]) //=> []
empty('') //=> ''
empty('foo') //=> ''
```

#### `endsWith(x, xs)`

- x: `String`
- xs: `String`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/ends-with.js)

Accepts a string `x`, a string `xs`, and returns `true` if `xs` ends with the string `x`, or `false` if it does not.

```js
endsWith('...', 'foo...') //=> true
endsWith('...')('foo...') //=> true
endsWith('bar', 'foo...') //=> false
endsWith('bar')('foo...') //=> false
```

#### `entries(obj)`

- obj: `Object`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/entries.js)

Accepts an object `obj`, and returns an array of all enumerable own properties and values of `obj`, where each corresponding pair of property/value is represented as a two-element array.

```js
entries({a: 1, b: 2, c: 3}) //=> [['a', 1], ['b', 2], ['c', 3]]
entries(zipObj(range(0, 10, 2), zeros(4))) //=> {'0': 0, '2': 0, '4': 0, '6': 0, '8': 0}
entries(zipObj(range(0, 10, 2))(zeros(4))) //=> {'0': 0, '2': 0, '4': 0, '6': 0, '8': 0}
entries(zipObj(range(0)(10)(2))(zeros(4))) //=> {'0': 0, '2': 0, '4': 0, '6': 0, '8': 0}
```

#### `eqProp(prop, xs, ys)`

- prop: `String`
- xs: `Object`
- ys: `Object`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/eq-prop.js)

Accepts a string `prop`, two objects `xs` & `ys`, and returns `true` if both object have an equal value corresponding to the `prop` property, or `false` if they do not. The equality check is accomplished by using the [`eq`]() module.

```js
eqProp('a', {'a': 'foo'}, {'b': 'foo'}) //=> true
eqProp('a')({'a': 'foo'}, {'b': 'foo'}) //=> true
eqProp('a', {'a': 2}, {'b': 3}) //=> false
eqProp('a')({'a': 2}, {'b': 3}) //=> false
```

#### `eq(x, y)`

- x: `Any`
- y: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/eq.js)

Accepts two values `x` & `y`, and returns `true` if both are strictly equal (`===`), or `false` if they are not.

```js
eq(1, 2) //=> false
eq(1)(2) //=> false
eq('1', 1) //=> false
eq('1')(1) //=> false
eq(1, 1) //=> true
eq(1)(1) //=> true
```

#### `erase(i, j, xs)`

- i: `Number`
- j: `Number`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/erase.js)

Accepts two numbers `i` & `j`, an array or a string `xs`, and returns a new array or a string that contains all elements of `xs`, except for the elements between the indices `i` & `j`, without including the element corresponding to the index `j`.

```js
erase(1, 5, range(0, 6, 1)) //=> [1, 5]
erase(1, 5)(range(0, 6, 1)) //=> [1, 5]
erase(1)(5)(range(0, 6, 1)) //=> [1, 5]
erase(1)(5)(range(0)(6)(1)) //=> [1, 5]
erase(1, 5, 'foobar') //=> 'for'
erase(1, 5)('foobar') //=> 'for'
erase(1)(5)('foobar') //=> 'for'
```

#### `even(x)`

- x: `Number`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/even.js)

Accepts a number `x`, and returns `true` if `x` is an even number, or `false` if it is an odd.

```js
even(0) //=> true
even(3) //=> false
dropWhile(even, [1, 3, 5, 7]) //=> []
dropWhile(even)([1, 3, 5, 7]) //=> []
```

#### `every(fn, xs)`

- fn: `Function`
- xs: `Array|String`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/every.js)

Accepts a predicate function `fn`, an array or a string `xs`, and returns `true` if all elements in `xs` satisfy the predicate `fn`, or `false` if at least one element in `xs` does not satisfy it.

```js
every(odd, [1, 3, 6]) //=> false
every(odd)([1, 3, 6]) //=> false
every(isPos, [1, 3, 6]) //=> true
every(isPos)([1, 3, 6]) //=> true
every(eq('.'), '....') //=> true
every(eq('.'))('....') //=> true
every(eq('.'), 'foo....') //=> false
every(eq('.'))('foo....') //=> false
```

#### `excludes(x, xs)`

- x: `Any`
- xs: `Array|String`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/excludes.js)

Accepts a value `x`, an array or a string `xs`, and returns `true` if `x` does not belong in `xs`, or `false` if `x` is part of `xs`. The check is accomplished by using the [`eq`]() module. 

```js
excludes(1, [1, 2, 3]) //=> false
excludes(1)([1, 2, 3]) //=> false
excludes(4, [1, 2, 3]) //=> true
excludes(4)([1, 2, 3]) //=> true
excludes('foo', 'foo-bar') //=> false
excludes('foo')('foo-bar') //=> false
```

#### `ext(prop, obj)`

- prop: `String`
- obj: `Object`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/ext.js)

Accepts a string `prop`, an object `obj`, and extracts the value corresponding to the `prop` property of `obj`.

```js
ext('a', {'a': 1}) //=> 1
ext('a')({'a': 1}) //=> 1
map(ext('a'), [{'a': 1}, {'a': 2}, {'a': 3}]) //=> [1, 2, 3]
map(ext('a'))([{'a': 1}, {'a': 2}, {'a': 3}]) //=> [1, 2, 3]
```

#### `F()`

- Returns: `Boolean`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/F.js)

A constant function, which always returns `false` when invoked, regardless of the provided arguments.

```js
F() //=> false
F([1, 2]) //=> false
map(F, range(1, 4, 1)) //=> [false, false, false]
map(F)(range(1, 4, 1)) //=> [false, false, false]
map(F)(range(1)(4)(1)) //=> [false, false, false]
```

#### `fact(x)`

- x: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/fact.js)

Accepts a number `x`, and returns its factorial value.

```js
fact(0) //=> 1
fact(3) //=> 6
map(fact, range(1, 5, 1)) //=> [1, 2, 6, 24]
map(fact)(range(1, 5, 1)) //=> [1, 2, 6, 24]
map(fact)(range(1)(5)(1)) //=> [1, 2, 6, 24]
```

#### `fill(n, x)`

- n: `Number`
- x: `Any`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/fill.js)

Accepts a number `n`, a value `x`, and returns an array containing `n` times the value `x`.

```js
fill(5, 'a') //=> ['a', 'a', 'a', 'a', 'a']
fill(5)('a') //=> ['a', 'a', 'a', 'a', 'a']
mapcat(fill(2), ['a', 'b']) //=> [ 'a', 'a', 'b', 'b' ]
mapcat(fill(2))(['a', 'b']) //=> [ 'a', 'a', 'b', 'b' ]
```

#### `filter(fn, xs)`

- fn: `Function`
- xs: `Array`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/filter.js)

Accepts a predicate function `fn`, an array `xs`, and returns a new array containing all elements of `xs`, that satisfy the predicate `fn`.

```js
filter(even, range(0, 5, 1)) //=> [0, 2, 4]
filter(even)(range(0, 5, 1)) //=> [0, 2, 4]
filter(even)(range(0)(5)(1)) //=> [0, 2, 4]
```

#### `findIndex(fn, xs)`

- fn: `Function`
- xs: `Array`
- Return: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/find-index.js)

Accepts a predicate function `fn`, an array or a string `xs`, and returns the index of the first element in `xs` that satisfies the predicate. The elements of `xs` are scanned from left to right. If no element satisfies the predicate, then `-1` is returned.

```js
findIndex(odd, [2, 4, 6, 7, 8]) //=> 3
findIndex(odd)([2, 4, 6, 7, 8]) //=> 3
findIndex(odd, range(0, 10, 2)) //=> -1
findIndex(odd)(range(0, 10, 2)) //=> -1
```

#### `find(fn, xs)`

- fn: `Function`
- xs: `Array|String`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/find.js)

Accepts a predicate function `fn`, an array or a string `xs`, and returns the first element of `xs` that satisfies the predicate. The elements of `xs` are scanned from left to right. If no element satisfies the predicate, then `undefined` is returned.

```js
find(even, [1, 1, 1, 0, 1]) //=> 3
find(even)([1, 1, 1, 0, 1]) //=> 3
find(even, range(1, 10, 2)) //=> undefined
find(even)(range(1, 10, 2)) //=> undefined
```

#### `flatten(xs)`

- xs: `Array`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/faltten.js)

Accepts an array `xs`, and returns a new array, where all nested arrays residing in `xs` are flattened out.

```js
flatten([]) //=> []
flatten([1, 2, [3,3, 4
flatten([1, 2, [3, 4, [5, 6], 7]]) //=> [1, 2, 3, 4, 5, 6, 7]
```

#### `flip(fn)`

- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/flip.js)

Accepts a function `fn`, and returns a function of arity `2`, which wraps `fn`, and once invoked it passes the first `2` of the given arguments, in a flipped order, to `fn`.

```js
const flippedDiv = flip(div)
div(10, 5) //=> 2
flippedDiv(10, 5) //=> 0.5
flippedDiv(10)(5) //=> 0.5
```

#### `forEach(fn, xs)`

- fn: `Function`
- xs: `Array`
- Returns: `Undefined`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/for-each.js)

Accepts a function `fn`, an array `xs`, and iterates over `xs` applying `fn` to every element.

```js
forEach(incr, [1, 2, 3]) //=> 2 3 4
```

#### `Fs(n)`

- n: `Number`
- Returns: `Array`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/Fs.js)

Accepts a number `n`, and returns an array of length `n`, containing only the value `false`.

```js
Fs(0) //=> []
Fs(1) //=> [false]
Fs(3) //=> [false, false, false]
map(not, Fs(3)) //=> [true, true, true]
```

#### `gather(fn)`

- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/gather.js)

Accepts a function `fn`, and returns a new function, which wraps `fn`, gathers all given arguments to an array, and returns the result of applying `fn` to those arguments. Note that the returned wrapper function is not automatically curried.

```js
const maximum = gather(arrayMax)
maximum(1, 2, 3, 4) //=> 4
const gatherAndReverse = gather(reverse)
gatherAndReverse(1, 2, 3, 4) //=> [4, 3, 2, 1]
```

#### `gcd(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/gcd.js)

Accepts two number `x` & `y`, and returns their greatest common divisor.

```js
gcd(24, 8) //=> 8
gcd(24)(8) //=> 8
```

#### `getNth(idx, xs)`

- idx: `Number`
- xs: `Array|String`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/get-nth.js)

Accepts a number `idx`, an array or a string `xs`, and returns the element of `xs` which corresponds to the `idx` index.

```js
getNth(0, [1, 2, 3]) //=> 1
getNth(0)([1, 2, 3]) //=> 1
getNth(0, 'foo') //=> 'f'
getNth(0)('foo') //=> 'f'
```

#### `gt(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/gt.js)

Accepts two numbers `x` & `y`, and returns `true` if `x` is greater than `y`, or `false` if `x` is less than or equal to `y`. 

```js
gt(1, 2) //=> false
gt(1)(2) //=> false
gt(2, 2) //=> false
gt(2)(2) //=> false
gt(3, 2) //=> true
gt(3)(2) //=> true
every(gt(1), range(2, 10, 2)) //=> false
every(gt(1))(range(2, 10, 2)) //=> false
every(gt(1))(range(2)(10)(2)) //=> false
```

#### `gte(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/gte.js)

Accepts two numbers `x` & `y`, and returns `true` if `x` is greater
 than or equal to `y`, or `false` if `x` is less than `y`. 

```js
gte(1, 2) //=> false
gte(1)(2) //=> false
gte(2, 2) //=> true
gte(2)(2) //=> true
gte(3, 2) //=> true
gte(3)(2) //=> true
every(gte(1), range(1, 10, 2)) //=> true
every(gte(1))(range(1, 10, 2)) //=> true
every(gte(1))(range(1)(10)(2)) //=> true
```

#### `halve(xs)`

- xs: `Array|String`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/halve.js)

Accepts an array or a string `xs`, partitions `xs` in half and returns a new array containing the two halves.

```js
halve([]) //=> [[], []]
halve('') //=> ['', '']
halve(ones(1)) //=> [[1], []]
halve('1') //=> ['1', '']
halve(range(1, 7, 1)) //=> [[1, 2, 3], [4, 5, 6]]
halve(range(1)(7)(1)) //=> [[1, 2, 3], [4, 5, 6]]
halve('foobar') //=> ['foo', 'bar']
```

#### `hasProp(prop, obj)`

- prop: `String`
- obj: `Object`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/has-prop.js)

Accepts a string `prop`, an object `obj`, and returns `true` if `obj` has the property `prop`, or `false` if it does not.

```js
hasProp('a', {'a': 1}) //=> true
hasProp('a')({'a': 1}) //=> true
hasProp('b', {'a': 1}) //=> false
hasProp('b')({'a': 1}) //=> false
```

#### `head(xs)`

- xs: `Array|String`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/head.js)

Accepts an array or a string `xs`, and return the first element of `xs`.

```js
head([]) //=> undefined
head('') //=> undefined
head([1, 2]) //=> 1
head('12') //=> '1'
map(head, array(zeros(2), ones(2)) //=> //=> [0, 1]
map(head)(array(zeros(2), ones(2)) //=> //=> [0, 1]
```

#### `id(x)`

- x: `Any`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/id.js)

Accepts a value `x`, and returns `x`.

```js
id(5) //=> 5
map(id, range(1, 5, 1)) //=> [1, 2, 3, 4]
map(id)(range(1, 5, 1)) //=> [1, 2, 3, 4]
map(id)(range(1)(5)(1)) //=> [1, 2, 3, 4]
filter(id, zeros(3)) //=> []
filter(id)(zeros(3)) //=> []
```

#### `includes(x, xs)`

- x: `Any`
- xs: `Array|String`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/includes.js)

Accepts a values `x`, an array or a string `xs`, and returns `true` if `x` is included in `xs`, or `false` if `x` is not included in `xs`.

```js
includes(4, range(0, 8, 2)) //=> true
includes(4)(range(0, 8, 2)) //=> true
includes('oba', 'foobar') //=> true
includes('oba')('foobar') //=> true
```

#### `incr(x)`

- x: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/incr.js)

Accepts a number `x`, and returns the value of `x` incremented by `1`.

```js
incr(0) //=> 0
incr(4) //=> 5
map(incr, zeros(3)) //=> [1, 1, 1]
map(incr)(zeros(3)) //=> [1, 1, 1]
```

#### `init(xs)`

- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/init.js)

Accepts an array or a string `xs`, and returns a new array or a string containing all elements of `xs`, with the exception of the last one.

```js
init([]) //=> []
init('') //=> ''
init(range(1, 6, 1)) //=> [1, 2, 3, 4]
init(range(1)(6)(1)) //=> [1, 2, 3, 4]
init('foobar!') //=> 'foobar'
```

#### `isArr(x)`

- xs: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-arr.js)

Accepts a value `x`, and returns `true` if `xs` is an array.

```js
isArr([1, 2]) //=> true
isArr('') //=> false
```

#### `isDate(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-date.js)

Accepts a value `x`, and returns `true` if that value is a date.

```js
isDate(new Date()) //=> true
isDate([]) //=> false
```

#### `isDef(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-def.js)

Accepts a value `x`, and returns `true` if that value is not equal to `undefined`.

```js
isDef(50) //=> true
isDef(undefined) //=> false
```

#### `isEmpty(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-empty.js)

Accepts a value `x`, and returns `true` if `xs` is an array or a string and has a length equal to zero.

```js
isEmpty('') //=> true
isEmpty([]) //=> true
isEmpty(zeros(0)) //=> true
isEmpty(ones(1)) //=> false
isEmpty('foo')  //=> false
```

#### `insert(idx, x, xs)`

- idx: `Number`
- x: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.3.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/insert.js)

Accepts a number `idx`, a value `x`, an array or a string `xs`, and returns a shallow copy of `xs`, that contains the value `x`, inserted at the position corresponding to the index `idx`.

```js
insert(0, 20, []) //=> [20]
insert(0, 20, '') //=> '20'
insert(2, 20, range(1, 5, 1)) //=> [1, 2, 20, 3, 4]
insert(2)(20)(range(1)(5)(1)) //=> [1, 2, 20, 3, 4]
insert(3, '-', 'foobar') //=> 'foo-bar'
insert(3)('-')('foobar') //=> 'foo-bar'
```

#### `isFn(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-fn.js)

Accepts a value `x`, and returns `true` if `x` is a function.

```js
isFn(odd) // => true
isFn(5) //=> false
```

#### `isInt(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-int.js)

Accepts a value `x`, and returns `true` if `x` is an integer.

```js
isInt(5) //=> true
isInt(0.1) //=> false
```

#### `isLower(xs)`

- xs: `String`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-lower.js)

Accepts a string `xs`, and returns `true` if every character in `xs` is in lower case.

```js
isLower('foo') //=> true
isLower('FOO') //=> false
isLower('100') //=> false
isUpper('%$^') //=> false
```

#### `isNeg(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-neg.js)

Accepts a value `x`, and returns `true` if `x` is negative number.

```js
isNeg(5) //=> true
isNeg(-5) //=> false
```

#### `isNil(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-nil.js)

Accepts a value `x`, and returns `true` if `x` is equal to `0`.

```js
isNil(0) //=> true
isNil(zero()) //=> true
isNil(10) //=> false
```

#### `isNull(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-null.js)

Accepts a value `x`, and returns `true` if `x` is equal to `null`.

```js
isNull(null) //=> true
isNull(10) //=> false
```

#### `isNum(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-num.js)

Accepts a value `x`, and returns `true` if `x` is a number.

```js
isNum(5) //=> true
isNum('foo') //=> false
```

#### `isObj(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-obj.js)

Accepts a value `x`, and returns `true` if `x` is an object.

```js
isObj({'a': 1}) //=> true
isObj(5) //=> false
```

#### `isPair(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-pair.js)

Accepts a value `x`, and returns `true` if `x` is an array of length `2`.

```js
isPair([1, 2]) //=> true
isPair(ones(2)) //=> true
isPair(take(2, range(5, 0, -1))) //=> true
isPair(take(2)(range(5, 0, -1))) //=> true
isPair(take(2)(range(5)(0)(-1))) //=> true
isPair([1]) //=> false
isPair('fo') //=> false
```

#### `isPos(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-pos.js)

Accepts a value `x`, and returns `true` if `x` is a positive number.

```js
isPos(5) //=> true
isPos(neg(-1)) //=> true
isPos(abs(-1)) //=> true
isPos(-5) //=> false
isPos(neg(1)) //=> false
```

#### `isRegExp(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-reg-exp.js)

Accepts a value `x`, and returns `true` if `x` is a regular expression.

```js
isRegExp(/\nfoo/g) //=> true
isRegExp(5) //=> false
```

#### `isStr(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-str.js)

Accepts a value `x`, and returns `true` if `x` is a string.

```js
isStr('foo') //=> true
isStr(drop(3, 'foo')) //=> true
isStr(drop(3)('foo')) //=> true
isStr(str(5)) //=> true
isStr(5) //=> false
isStr(num('foo')) //=> false
```

#### `isUndef(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-undef.js)

Accepts a value `x`, and returns `true` if `x` is equal to `undefined`. 

```js
isUndef(undefined) //=> true
isUndef('foo') //=> false
```

#### `isUpper(xs)`

- xs: `String`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/is-upper.js)

Accepts a string `xs`, and returns `true` if every character in `xs` is in upper case.

```js
isUpper('foo') //=> false
isUpper('FOO') //=> true
isUpper('100') //=> false
isUpper('%$^') //=> false
```

#### `ite(fn, x, y)`

- fn: `Function`
- x: `Any`
- y: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/ite.js)

Accepts a predicate function `fn`, two values `x` & `y`, and returns `x` if `x` satisfies the predicate `fn`, or `y` if `xs` does not. Can be considered as a curried version of the ternary operator. Note that `x` & `y` need to be calculated since both are passed as arguments to `ite`.

```js
ite(even, 1, 2) //=> 2
ite(even, 1)(2) //=> 2
ite(even)(1, 2) //=> 2
ite(even)(1)(2) //=> 2
ite(odd, 1, 2) //=> 1
```

#### `join(x, xs)`

- x: `String`
- xs: `Array`
- Return: `String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/join.js)

Accepts a string `x`, an array `xs`, and returns a new string by concatenating all element of `xs`, while including `x` between each pair of adjacent `xs` elements.

```js
join('-', [123, 456, 789]) //=> '123-456-789'
join('-')([123, 456, 789]) //=> '123-456-789'
join('-', range(0, 11, 2)) //=> '0-2-4-6-8-10'
join('-', range(0)(11)(2)) //=> '0-2-4-6-8-10'
join(str(0), ones(3)) //=> '10101'
join(str(0))(ones(3)) //=> '10101'
```

#### `keys(obj)`

- obj: `Object`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/keys.js)

Accepts an object `obj`, and returns an array containing all enumerable own properties of `obj`.

```js
keys({a: 1, b: 2, c: 4}) //=> ['a','b','c']
keys(zipObj(range(0, 3, 1), ones(3))) //=> ['0', '1', '2']
keys(zipObj(range(0, 3, 1))(ones(3))) //=> ['0', '1', '2']
keys(zipObj(range(0)(3)(1), ones(3))) //=> ['0', '1', '2']
```

#### `last(xs)`

- xs: `Array|String`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/last.js)

Accepts an array or a string `xs`, and return the last element of `xs`.

```js
last([]) //=> undefined
last('') //=> undefined
last([1, 2, 3]) //=> 3
last('foobar') //=> 'r'
map(last, array(ones(2), zeros(2))) //=> [1, 0]
map(last)(array(ones(2), zeros(2))) //=> [1, 0]
```

#### `lcm(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/lcm.js)

Accepts two numbers `x` & `y`, and returns their least common multiple.

```js
lcm(12, 32) //=> 96
lcm(12)(32) //=> 96
```

#### `len(xs)`

- xs: `Array|String`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/len.js)

Accepts an array or a string `xs`, and returns its length.

```js
len([]) //=> 0
len('') //=> 0
len([1, 2, 3]) //=> 3
len('foobar') //=> 6
map(len, array(ones(3), zeros(3))) //=> [3, 3]
map(len)(array(ones(3), zeros(3))) //=> [3, 3]
```

#### `lt(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/lt.js)

Accepts two numbers `x` & `y`, and returns `true` if `x` is less than `y`, or `false` if `x` is greater than or equal to `y`. 

```js
lt(1, 2) //=> true
lt(1)(2) //=> true
lt(2, 2) //=> false
lt(2)(2) //=> false
lt(3, 2) //=> false
lt(3)(2) //=> false
```

#### `lte(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/lte.js)

Accepts two numbers `x` & `y`, and returns `true` if `x` is less than or equal to `y`, or `false` if `x` is greater than `y`. 

```js
lt(1, 2) //=> true
lt(1)(2) //=> true
lt(2, 2) //=> true
lt(2)(2) //=> true
lt(3, 2) //=> false
lt(3)(2) //=> false
```

#### `map(fn, xs)`

- fn: `Function`
- xs: `Array`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/map.js)

Accepts a function `fn`, an array `xs`, and returns a new array containing as elements the result of applying `fn` to each and every element of `xs`.

```js
map(incr, zeros(3)) //=> [1, 1, 1]
map(incr)(zeros(3)) //=> [1, 1, 1]
map(add(10), range(1, 4, 1)) //=> [11, 12, 13]
map(add(10))(range(1, 4, 1)) //=> [11, 12, 13]
map(add(10))(range(1)(4)(1)) //=> [11, 12, 13]
map(bool, ['', 1, 0, -1]) //=> [false, true, false, true]
map(bool)(['', 1, 0, -1]) //=> [false, true, false, true]
```

#### `mapcat(fn, xs)`

- fn: `Function`
- xs: `Array`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/mapcat.js)

Accepts a function `fn`, an array `xs`, and returns the result of concatenating each outcome from the application of `fn` to each element of `xs`.

```js
mapcat(reverse, array(range(3, 0, -1), range(6, 3, -1))) //=> [1, 2, 3, 4, 5, 6]
mapcat(reverse)(array(range(3, 0, -1), range(6, 3, -1))) //=> [1, 2, 3, 4, 5, 6]
mapcat(reverse)(array(range(3)(0)(-1), range(6)(3)(-1))) //=> [1, 2, 3, 4, 5, 6]
mapcat(take(2), array(fill(4, 'a'), fill(4, 'b')) //=> [ 'a', 'a', 'b', 'b' ]
mapcat(take(2), array(fill(4)('a'), fill(4)('b')) //=> [ 'a', 'a', 'b', 'b' ]
```

#### `max(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/max.js)

Accepts two numbers `x` & `y`, and returns the largest of the two.

```js
max(1, 10) //=> 10
max(1)(10) //=> 10
```

#### `mergeBy(fn, xs, ys)`

- fn: `Function`
- xs: `Array`
- ys: `Array`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/merge-by.js)

Accepts a comparing function `fn`, two arrays `xs` & `ys`, and returns a new array, which is the result of merging `xs` with `ys`. The order of the elements in the returned array is deemed by the `fn` function, which compares each two consecutive elements of `xs` & `ys`, and forwards the one that satisfies the comparison, to the returned array.

```js
mergeBy(gte, range(1, 7, 2), range(2, 7, 2)) //=> [2, 4, 6, 1, 3, 5]
mergeBy(gte)(range(1, 7, 2), range(2, 7, 2)) //=> [2, 4, 6, 1, 3, 5]
mergeBy(gte, range(1, 7, 2))(range(2, 7, 2)) //=> [2, 4, 6, 1, 3, 5]
mergeBy(gte)(range(1, 7, 2))(range(2, 7, 2)) //=> [2, 4, 6, 1, 3, 5]
mergeBy(gte)(range(1)(7)(2))(range(2)(7)(2)) //=> [2, 4, 6, 1, 3, 5]
```

#### `merge(xs, ys)`

- xs: `Array`
- ys: `Array`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/merge.js)

Accepts two arrays `xs` & `ys`, and returns a new array, which the result of merging `xs` and `ys` by the smallest number.

```js
merge(range(1, 7, 2), range(2, 7, 2)) //=> [1, 2, 3, 4, 5, 6]
merge(range(1, 7, 2))(range(2, 7, 2)) //=> [1, 2, 3, 4, 5, 6]
merge(range(1)(7)(2))(range(2)(7)(2)) //=> [1, 2, 3, 4, 5, 6]
```

#### `minMax(xs, x)`

- xs: `Array`
- x: `Number`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/min-max.js)

Accepts an array `xs` of length `2`, `[min, max]`, also known as `pair`, a number `x`, and returns a new `pair`, which contains the updated smallest and largest values, between `x`, `min` and `max`. 

```js
minMax(pair(6, 8), 1) //=> [1, 8]
minMax(pair(6, 8))(1) //=> [1, 8]
minMax(pair(6)(8))(1) //=> [1, 8]
minMax(take(2, range(100, 0, -1)), 1) //=> [1, 100]
minMax(take(2, range(100, 0, -1)))(1) //=> [1, 100]
minMax(take(2)(range(100, 0, -1)))(1) //=> [1, 100]
minMax(take(2)(range(100)(0)(-1)))(1) //=> [1, 100]
```

#### `min(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/min.js)

Accepts two numbers `x` & `y`, and returns the smallest of the two.

```js
min(1, 10) //=> 1
min(1)(10) //=> 1
reduce(min, Infinity, appendTo(range(1, 10, 1), 0)) //=> 0
reduce(min)(Infinity, appendTo(range(1, 10, 1), 0)) //=> 0
reduce(min, Infinity)(appendTo(range(1, 10, 1), 0)) //=> 0
reduce(min)(Infinity)(appendTo(range(1, 10, 1), 0)) //=> 0
reduce(min)(Infinity)(appendTo(range(1)(10)(1))(0)) //=> 0
```

#### `mod(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/mod.js)

Accepts two number `x` & `y`, and returns the remainder of their division.

```js
mod(10, 3) //=> 1
mod(10)(3) //=> 1
map(apply(2, flip(mod)), range(0, 5, 1)) //=> [ 0, 1, 0, 1, 0 ]
map(apply(2, flip(mod)))(range(0, 5, 1)) //=> [ 0, 1, 0, 1, 0 ]
map(apply(2)(flip(mod)))(range(0, 5, 1)) //=> [ 0, 1, 0, 1, 0 ]
map(apply(2)(flip(mod)))(range(0)(5)(1)) //=> [ 0, 1, 0, 1, 0 ]
```

#### `mult(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/mult.js)

Accepts two number `x` & `y`, and returns the result of their multiplication.

```js
mult(10, 3) //=> 30
mult(10)(3) //=> 30
map(mult(10), ones(3)) //=> [10, 10, 10]
map(mult(10))(ones(3)) //=> [10, 10, 10]
```

#### `nand(x, y)`

- x: `Boolean`
- y: `Boolean`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/nand.js)

Accepts two booleans `x` & `y`, and returns `!(x && y)`, the result of applying the logical `NAND` operator between `x` and `y`. Values `x`, `y` are automatically coerced to booleans if not provided as such.

```js
nand(0, 0) //=> true
nand(0)(0) //=> true
nand(0, 1) //=> true
nand(0)(1) //=> true
nand(1, 1) //=> false
nand(1)(1) //=> false
```

#### `neg(x)`

- x: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/neg.js)

Accepts a number `x`, converts it to a negative and returns the new value.

```js
neg(5) //=> -5
neg(-5) //=> -5
map(neg, range(1, 10, 2)) //=> [-1, -3, -5, -7, -9]
map(neg)(range(1, 10, 2)) //=> [-1, -3, -5, -7, -9]
map(neg)(range(1)(10)(2)) //=> [-1, -3, -5, -7, -9]
```

#### `none(fn, xs)`

- fn: `Function`
- xs: `Array`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/none.js)

Accepts a predicate function `fn`, an array `xs`, and returns `true` if none of the elements in `xs` satisfy the predicate, or `false` if even one element satisfies it.

```js
none(isPos, range(1, 4, 1)) //=> false
none(isPos)(range(1, 4, 1)) //=> false
none(isPos)(range(1)(4)(1)) //=> false
none(isNeg, range(1, 4, 1)) //=> true
none(isNeg)(range(1, 4, 1)) //=> true
none(isNeg)(range(1)(4)(1)) //=> true
```

#### `nor(x, y)`

- x: `Boolean`
- y: `Boolean`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/nor.js)

Accepts two booleans `x` & `y`, and returns `!(x || y)`, the result of applying the logical `NOR` operator between `x` and `y`. Values `x`, `y` are automatically coerced to booleans if not provided as such.

```js
nor(0, 0) //=> true
nor(0)(0) //=> true
nor(0, 1) //=> false
nor(0)(1) //=> false
nor(1, 1) //=> false
nor(1)(1) //=> false
```

#### `notArr(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-arr.js)

Accepts a value `x`, and returns `true` if `x` is not an array.

```js
notArr(5) //=> true
notArr([]) //=> false
notArr(zero(0)) //=> false
```

#### `notDate(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-date.js)

Accepts a value `x`, and returns `true` if `xs` is not a date.

```js
notDate(5) //=> true
notDate(new Date()) //=> false
```

#### `notEmpty(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-empty.js)

Accepts a value `x`, and returns `true` if `xs` is not an array or a string of length equal to `0`.

```js
notEmpty([1]) //=> true
notEmpty('foo') //=> true
notEmpty(zeros(1)) //=> true
notEmpty([]) //=> false
notEmpty('') //=> false
notEmpty(zeros(0)) //=> false
```

#### `notFn(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-fn.js)

Accepts a value `x`, and returns `true` if `xs` is not a function.

```js
notFn([]) //=> true
notFn(zero()) //=> true
notFn(even) //=> false
notFn(map(mult(10))) //=> false
```

#### `notInt(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-int.js)

Accepts a value `x`, and returns `true` if `xs` is not an integer.

```js
notInt(0.1) //=> true
notInt(div(2, 10)) //=> true
notInt(div(2)(10)) //=> true
notInt(5) //=> false
notInt(applyArgs(pair(2, 10), flip(div))) //=> false
```

#### `notLower(xs)`

- xs: `String`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-lower.js)

Accepts a string `xs`, and returns `true` if every character in `xs` is not in lower case.

```js
notLower('foo') //=> false
notLower('FOO') //=> true
notLower('100') //=> true
notLower('%$^') //=> true
```

#### `notNil(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-nil.js)

Accepts a value `x`, and returns `true` if `xs` is not equal to `0`.

```js
notNil([]) //=> true
notNil(head(ones(2))) //=> true
notNil(0) //=> false
notNil(head(zeros(2))) //=> false
```

#### `notNull(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-null.js)

Accepts a value `x`, and returns `true` if `xs` is not a equal to `null`.

```js
notNull({}) //=> true
notNull(fill(1, null)) // => true
notNull(null) //=> false
notNull(last(fill(1, null))) // => false
```

#### `notNum(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-num.js)

Accepts a value `x`, and returns `true` if `xs` is not a number.

```js
notNum('5') //=> true
notNum(str(5)) //=> true
notNum(head('foo')) //=> true
notNum(5) //=> false
notNum(num('5')) //=> false
notNum(len('foo')) //=> false
```

#### `notObj(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-obj.js)

Accepts a value `x`, and returns `true` if `xs` is not a object.

```js
notObj('foo') //=> true
notObj(range(1, 5, 1)) //=> true
notObj({a: 1}) //=> false
```

#### `notPair(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-pair.js)

Accepts a value `x`, and returns `true` if `xs` is not an array of length equal to `2`.

```js
notPair(range(1, 4, 1)) //=> true
notPair(range(1)(4)(1)) //=> true
notPair(pair(1, 0)) //=> false
notPair(pair(1)(0)) //=> false
notPair(take(2, ones(3))) //=> false
notPair(take(2)(ones(3))) //=> false
```

#### `notRegExp(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-reg-exp.js)

Accepts a value `x`, and returns `true` if `xs` is not a regular expression.

```js
notRegExp(/\nbar/g) //=> false
notRegExp('bar') //=> true
```

#### `notStr(x)`

- x: `Any`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-str.js)

Accepts a value `x`, and returns `true` if `xs` is not a string.

```js
notStr('bar') //=> false
notStr(range(1, 4, 1)) //=> true
notStr(range(1)(4)(1)) //=> true
```

#### `notUpper(xs)`

- xs: `String`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not-upper.js)

Accepts a string `xs`, and returns `true` if every character in `xs` is not in upper case.

```js
notUpper('foo') //=> true
notUpper('FOO') //=> false
notUpper('100') //=> true
notUpper('%$^') //=> true
```

#### `not(x)`

- x: `Boolean`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/not.js)

Accepts a boolean `x`, and returns the logical negation of `x`.

```js
not(id(0)) //=> true
not(even(1)) //=> true
not(odd(1)) //=> false
not(not(id(0))) //=> false
```

#### `nullary(fn)`

- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/nullary.js)

Accepts a function `fn`, and returns a wrapper function of `fn`, with an arity of `0`, which when invoked its own arguments returns the result of supplying `1` of those arguments to `fn`.

```js
const array0 = nullary(array)
array0() //=> []
array0(1) //=> []
array0(1, 2) //=> []
```

#### `num(x)`

- x: `Any`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/num.js)

Accepts a value `x`, converts it to a number and returns the result. Can be considered as a curried version of default `Number` function.

```js
num('') //=> 0
num(5) //=> 5
num('5') //=> 5
map(num, pair('1', '2')) //=> [1, 2]
map(num)(pair('1', '2')) //=> [1, 2]
map(num)(pair('1')('2')) //=> [1, 2]
```

#### `odd(x)`

- x: `Number`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/odd.js)

Accepts a number `x`, and returns `true` if `x` is an odd number, or `false` if it is an even.

```js
odd(5) //=> true
odd(len(zeros(3))) //=> false
filter(odd, range(0, 9, 1)) //=> [1, 3, 5, 7]
filter(odd)(range(0, 9, 1)) //=> [1, 3, 5, 7]
filter(odd)(range(0)(9)(1)) //=> [1, 3, 5, 7]
```

#### `one()`

- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/one.js)

A constant function, which always returns the number `1` when invoked, regardless of the provided arguments.

```js
one() //=> 1
one([1, 2]) //=> 1 
map(one, range(1, 4, 1)) //=> [1, 1, 1]
map(one)(range(1, 4, 1)) //=> [1, 1, 1]
map(one)(range(1)(4)(1)) //=> [1, 1, 1]
```

#### `ones(n)`

- n: `Number`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/ones.js)

Accepts a number `n`, and returns an array of `n` length, containing `n` times the number `1`.

```js
ones(0) //=> []
ones(1) //=> [1]
ones(3) //=> [1, 1, 1]
map(ones, range(1, 4, 1)) //=> [[1], [1, 1], [1, 1, 1]]
map(ones)(range(1, 4, 1)) //=> [[1], [1, 1], [1, 1, 1]]
map(ones)(range(1)(4)(1)) //=> [[1], [1, 1], [1, 1, 1]]
```

#### `or(x, y)`

- x: `Boolean`
- y: `Boolean`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/or.js)

Accepts two booleans `x` & `y`, and returns `x || y`, the result of applying the logical `OR` operator between `x` and `y`. Values `x`, `y` are automatically coerced to booleans.

```js
or(0, 0) //=> false
or(0)(0) //=> false
or(0, 1) //=> true
or(0)(1) //=> true
or(1, 1) //=> true
or(1)(1) //=> true
```

#### `pair(x, y)`

- x: `Any`
- y: `Any`
- Return: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/pair.js)

Accepts two values `x` & `y`, and returns an array of length `2`, also known as a pair, containing the two `x` & `y` values.

```js
pair(1, 2) //=> [1, 2]
pair(1)(2) //=> [1, 2]
```

#### `partialRight(fn, args)`

- args: `Array`
- fn: `Function`
- Returns: fn
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/partial-right.js)

Accepts an array of arguments `args`, a function `fn`, and returns a new wrapper function of `fn`, which when invoked with its own arguments, returns the result of applying `fn` to a new group of arguments consisted of the later provided wrapper function arguments, followed by the initial `args` arguments.

```js
const divYAddZ = (x, y, z) => add(div(x, y), z);
const div10Add5 = partialRight([10, 5], div)
div10Add5(10) //=> 5
div10Add5(100) // => 15
```

#### `partial(fn, args)`

- fn: `Function`
- args: `Array`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/partial.js)

Accepts an array of arguments `args`, a function `fn`, and returns a new wrapper function of `fn`, which when invoked with its own arguments, returns the result of applying `fn` to a new group of arguments consisted of the initial `args` arguments, followed by the later provided wrapper function arguments.

```js
const incrementAll = partial(map, [incr])
incrementAll(pair(1, 2)) //=> [2, 3]
incrementAll(pair(1)(2)) //=> [2, 3]
incrementAll(range(1, 5, 1)) //=> [2, 3, 4, 5]
incrementAll(range(1)(5)(1)) //=> [2, 3, 4, 5]
```

#### `partitionAt(idx, xs)`

- idx: `Number`
- xs: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/partition-at.js)

Accepts a number `idx`, an array or a string `xs`, and returns a new array containing two elements. The first one is an array or a string holding all elements of `xs` from index `0` up to index `idx`, except for the element corresponding to index `idx`, and the second one is an array or a string holding all of the remaining elements in `xs`.

```js
partitionAt(3, range(1, 7, 1)) //=> [[1, 2, 3], [4, 5, 6]]
partitionAt(3)(range(1, 7, 1)) //=> [[1, 2, 3], [4, 5, 6]]
partitionAt(3)(range(1)(7)(1)) //=> [[1, 2, 3], [4, 5, 6]]
partitionAt(3, 'foobar') //=> ['foo', 'bar']
partitionAt(3)('foobar') //=> ['foo', 'bar']
```

#### `partition(fn, xs)`

- fn: `Function`
- xs: `Array`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/partition.js)

Accepts a predicate function `fn`, an array or a string `xs`, and returns a new array containing two elements. The first one is an array or a string holding all elements of `xs` that satisfy the predicate `fn`, and the second one an array or a string holding all elements that do not satisfy the predicate `fn`.

```js
partition(even, range(1, 7, 1)) //=> [[2, 4, 6], [1, 3, 5]]
partition(even)(range(1, 7, 1)) //=> [[2, 4, 6], [1, 3, 5]]
partition(even)(range(1)(7)(1)) //=> [[2, 4, 6], [1, 3, 5]]
partition(isUpper, 'AbCdEfG') //=> ['ACEG', 'bdf']
partition(isUpper)('AbCdEfG') //=> ['ACEG', 'bdf']
partition(isLower, 'AbCdEfG') //=> ['bdf', 'ACEG']
partition(isLower)('AbCdEfG') //=> ['bdf', 'ACEG']

```

#### `pipe(fn[, fn])`

- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/pipe.js)

Accepts one or more functions `fn`, and returns a new function that is the [composition](https://en.wikipedia.org/wiki/Function_composition), from left to right, of the given `fn` functions. Note that the returned function is not automatically curried, but can easily become so by using [`xcurry`]().

```js
const Add5Mult10 = pipe(add(5), mult(10))
// pipe(add(5), mult(10)) <=> x => mult(10)(add(5)(x))
absAdd5(1) //=> 60
```

#### `pow(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/pow.js)

Accepts two numbers `x` & `y`, and returns the result of `x` to the power of `y`.

```js
pow(4, 0) //=> 1
pow(4)(0) //=> 1
pow(5, 2) //=> 25
pow(5)(2) //=> 25
```

#### `prependTo(xs, x)`

- xs: `Array|String`
- x: `Any`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/prepend-to.js)

Accepts an array or a string `xs`, a value `x` and returns a new array or string with `x` included at the start of `xs`.

```js
appendTo(ones(1), 3) //=> [3, 0]
appendTo(ones(1))(3) //=> [3, 0]
prependTo(pair(2, 3), 1) //=> [1, 2, 3]
prependTo(pair(2, 3))(1) //=> [1, 2, 3]
prependTo(pair(2)(3))(1) //=> [1, 2, 3]
prependTo('oo', 'f') //=> 'foo'
prependTo('oo')('f') //=> 'foo'
```

#### `prepend(x, xs)`

- x: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/prepend.js)

Accepts a value `x`, an array or a string `xs` and returns a new array or string with `x` included to the start of `xs`. Can be considered the the flipped version of `prependTo`.

```js
prepend(3, ones(1)) //=> [3, 1]
prepend(3)(ones(1)) //=> [3, 1]
prepend(1)(pair(2, 3)) //=> [1, 2, 3]
prepend(1)(pair(2)(3)) //=> [1, 2, 3]
prepend('f', 'oo') //=> 'foo'
prepend('f')('oo') //=> 'foo'
```

#### `prod(xs)`

- xs: `Array`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/prod.js)

Accepts an array `xs`, and returns the total product of all numbers in the array.

```js
sum([]) //=> 1
sum(pair(6, 5)) //=> 30
sum([1, 2, 3, 4]) //=> 24
```

#### `props(obj)`

- obj: `Object`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/props.js)

Accepts an object `obj`, and returns an array containing all own properties of `obj`.

```js
keys({a: 1, b: 2, c: 4}) //=> [ 'a', 'b', 'c' ]
keys(zipObj(range(1, 4, 1), zeros(3))) //=> [ '1', '2', '3' ] 
keys(zipObj(range(1, 4, 1))(zeros(3))) //=> [ '1', '2', '3' ] 
keys(zipObj(range(1)(4)(1))(zeros(3))) //=> [ '1', '2', '3' ] 
```

#### `range(x, y, step)`

- x: `Number`
- y: `Number`
- step: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/range.js)

Accepts two numbers `x` & `y`, a number `step`, and returns a new array, containing all elements from `x` to `y`, without including `y`. Note that if `x` is less that `y`, the `step` must be a positive number, thus the returning array will contain numbers ascending from `x` to `y`, and if `x` is greater than `y`, then the step must be a negative number, thus the returning array will contain numbers descending from `x` to `y`.

```js
range(1, 4, 1) // => [1, 2, 3]
range(1, 4)(1) // => [1, 2, 3]
range(1)(4)(1) // => [1, 2, 3]
range(4, 1, 1) // => [4, 3, 2]
range(4, 1)(-1) // => [4, 3, 2]
range(4)(1)(-1) // => [4, 3, 2]
```

#### `recip(x)`

- x: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/recip.js)

Accepts a number `x`, and returns `1 / x`, its reciprocal value.

```js
recip(1) //=> 1
recip(10) //=> 0.1
apply(10, pipe(recip, recip)) //=> 10 
```

#### `reduce(fn, acc, xs)`

- fn: `Function`
- acc: `Any`
- xs: `Array`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/reduce.js)

Accepts a reducer function `fn`, a accumulative value `acc`, an array `xs`, and returns a single value resulting from the application of the reducer `fn` on each element of the array `xs`, along with the accumulative value `acc`. The result of each iteration is passed as the new accumulative value to next one. Note that elements of the array are scanned from left to right.

```js
reduce(add, 0, fill(3, 5)) //=> 15
reduce(add, 0)(fill(3, 5)) //=> 15
reduce(add)(0)(fill(3, 5)) //=> 15
reduce(add)(0)(fill(3)(5)) //=> 15
reduce(mult, 1, fill(3, 5)) //=> 125
reduce(mult, 1)(fill(3, 5)) //=> 125
reduce(mult)(1)(fill(3, 5)) //=> 125
reduce(mult)(1)(fill(3)(5)) //=> 125
```

#### `reduceRight(fn, acc, xs)`

- fn: `Function`
- acc: `Any`
- xs: `Array`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/reduce-right.js)

Accepts a reducer function `fn`, a accumulative value `acc`, an array `xs`, and returns a single value resulting from the application of the reducer `fn` on each element of the array `xs`, along with the accumulative value `acc`. The result of each iteration is passed as the new accumulative value to next one. Note that elements of the array are scanned from right to left.

```js
reduce(add, 0, fill(3, 5)) //=> 15
reduce(add, 0)(fill(3, 5)) //=> 15
reduce(add)(0)(fill(3, 5)) //=> 15
reduce(add)(0)(fill(3)(5)) //=> 15
reduce(mult, 1, fill(3, 5)) //=> 125
reduce(mult, 1)(fill(3, 5)) //=> 125
reduce(mult)(1)(fill(3, 5)) //=> 125
reduce(mult)(1)(fill(3)(5)) //=> 125
```

#### `reject(fn, xs)`

- fn: `Function`
- xs: `Array`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/reject.js)

Accepts a predicate function `fn`, an array `xs`, and returns a new array containing all elements of `xs` that do not satisfy the predicate `fn`.

```js
reject(even, range(0, 6, 1)) //=> [1, 3, 5]
reject(even)(range(0, 6, 1)) //=> [1, 3, 5]
reject(even)(range(0)(6)(1)) //=> [1, 3, 5]
```

#### `remove(x, xs)`

- x: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/remove.js)

Accepts a value `x`, an array or a string `xs`, and returns a new array or a string, where the first occurrence of `x` in `xs`, from the left to right side, is removed.

```js
remove(0, concat(pair(0, 20), pair(0, 50))) //=> [20, 0, 50]
remove(0)(concat(pair(0, 20), pair(0, 50))) //=> [20, 0, 50]
remove(0)(concat(pair(0, 20))(pair(0, 50))) //=> [20, 0, 50]
remove(0)(concat(pair(0)(20))(pair(0)(50))) //=> [20, 0, 50]
remove('!', 'b!r!') //=> 'br!'
remove('!')('b!r!') //=> 'br!'
```

#### `removeAll(x, xs)`

- x: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/remove-all.js)

Accepts a value `x`, an array or a string `xs`, and returns a new array or a string, where all occurrence of `x` in `xs`, are removed.

```js
removeAll(0, concat(pair(0, 20), pair(0, 50))) //=> [20, 50]
removeAll(0)(concat(pair(0, 20), pair(0, 50))) //=> [20, 50]
removeAll(0)(concat(pair(0, 20))(pair(0, 50))) //=> [20, 50]
removeAll(0)(concat(pair(0)(20))(pair(0)(50))) //=> [20, 50]
removeAll('!', 'b!r!') //=> 'br'
removeAll('!')('b!r!') //=> 'br'
```

#### `removeRight(x, xs)`

- x: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/remove-right.js)

Accepts a value `x`, an array or a string `xs`, and returns a new array or a string, where the first occurrence of `x` in `xs`, from the right to left side, is removed.

```js
removeRight(0, concat(pair(0, 20), pair(0, 50))) //=> [0, 20, 50]
removeRight(0)(concat(pair(0, 20), pair(0, 50))) //=> [0, 20, 50]
removeRight(0)(concat(pair(0, 20))(pair(0, 50))) //=> [0, 20, 50]
removeRight(0)(concat(pair(0)(20))(pair(0)(50))) //=> [0, 20, 50]
removeRight('!', 'b!r!') //=> 'b!r'
removeRight('!')('b!r!') //=> 'b!r'
```

#### `replace(x, rep, xs)`

- x: `Any`
- rep: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/replace.js)

Accepts a value `x`, a value `rep`, an array or a string `xs`, and returns a new array or a string, where the first occurrence of `x` in `xs` is replaced by `rep`. If `xs` is a string, then `rep` is automatically converted to a string. Note that elements in `xs` are scanned from left to right.

```js
replace(0, 10, concat(pair(0, 20), pair(0, 50))) //=> [10, 10, 10, 0]
replace(0, 10)(concat(pair(0, 20), pair(0, 50))) //=> [10, 10, 10, 0]
replace(0)(10)(concat(pair(0, 20), pair(0, 50))) //=> [10, 10, 10, 0]
replace(0)(10)(concat(pair(0, 20))(pair(0, 50))) //=> [10, 10, 10, 0]
replace(0)(10)(concat(pair(0)(20))(pair(0)(50))) //=> [10, 10, 10, 0]
replace('!', 'a', 'b!r!') //=> 'bar!'
replace('!', 'a')('b!r!') //=> 'bar!'
replace('!')('a')('b!r!') //=> 'bar!'
```

#### `replaceAll(x, rep, xs)`

- x: `Any`
- rep: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/replace-all.js)

Accepts a value `x`, a value `rep`, an array or a string `xs`, and returns a new array or a string, where all occurrences of `x` in `xs` are replaced by `rep`. If `xs` is a string, then `rep` is automatically converted to a string.

```js
replaceAll(1, 10, concat(pair(1, 20), pair(1, 50))) //=> [10, 20, 10, 50]
replaceAll(1, 10)(concat(pair(1, 20), pair(1, 50))) //=> [10, 20, 10, 50]
replaceAll(1)(10)(concat(pair(1, 20), pair(1, 50))) //=> [10, 20, 10, 50]
replaceAll(1)(10)(concat(pair(1, 20))(pair(1, 50))) //=> [10, 20, 10, 50]
replaceAll(1)(10)(concat(pair(1)(20))(pair(1)(50))) //=> [10, 20, 10, 50]
replaceAll('_', 'o', 'f__bar') //=> 'foobar'
replaceAll('_', 'o')('f__bar') //=> 'foobar'
replaceAll('_')('o')('f__bar') //=> 'foobar'
```

#### `reverseArgs(fn)`

- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/reverse-args.js)

Accepts a function `fn`, and returns a new wrapper function of `fn`, which when invoked with its own arguments, returns the result of applying `fn` to these arguments in a reverse order.

```js
const revDiv = reverseArgs(div)
div(10, 2) //=> 5
revDiv(10, 2) //=> 0.2
const revArray = reverseArgs(array)
array(1, 2, 3, 4) //=> [1, 2, 3, 4]
revArray(1, 2, 3, 4) //=> [4, 3, 2, 1]
```

#### `reverse(xs)`

- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/reverse.js)

Accepts an array or a string `xs`, and returns a new array or string containing all `xs` elements in a reversed order.

```js
reverse(range(0, 11, 2)) //=> [10, 8, 6, 4, 2, 0]
reverse(range(0)(11)(2)) //=> [10, 8, 6, 4, 2, 0]
reverse('foobar') //=> 'raboof'
```

#### `setHeadWith(fn, xs)`

- fn: `Function`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/set-head-with.js)

Accepts a function `fn`, an array or a string `xs`, and returns a shallow copy of `xs`, where the first element is replaced by the result of the application of `fn` to the originally first element of `xs`. 

```js
setHeadWith(add(10), range(10, 30, 10)) //=> [20, 20]
setHeadWith(add(10))(range(10, 30, 10)) //=> [20, 20]
setHeadWith(add(10))(range(10)(30)(10)) //=> [20, 20]
setHeadWith(toUpper, 'hello') //=> Hello
setHeadWith(toUpper)('hello') //=> Hello
```

#### `setHead(x, xs)`

- x: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/set-head.js)

Accepts a value `x`, an array or a string `xs`, and returns a shallow copy of `xs`, where the originally first element is replaced by `x`.

```js
setHead(20, range(10, 30, 10)) //=> [20, 20]
setHead(20)(range(10, 30, 10)) //=> [20, 20]
setHead(20)(range(10)(30)(10)) //=> [20, 20]
setHead('F', '_oo') //=> 'Foo'
setHead('F')('_oo') //=> 'Foo'
```

#### `setLastWith(fn, xs)`

- fn: `Function`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/set-last-with.js)

Accepts a function `fn`, an array or a string `xs`, and returns a shallow copy of `xs`, where the last element is replaced by the result of the application of `fn` to the originally last element of `xs`.

```js
setLastWith(add(10), pair(20, 10)) //=> [20, 20]
setLastWith(add(10))(pair(20, 10)) //=> [20, 20]
setLastWith(add(10))(pair(20)(10)) //=> [20, 20]
setLastWith(toLower, 'foO') //=> 'foo'
setLastWith(toLower)('foO') //=> 'foo'
```

#### `setLast(x, xs)`

- x: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/set-last.js)

Accepts a value `x`, an array or a string `xs`, and returns a shallow copy of `xs`, where the last element is replaced by `x`.

```js
setLast(30, pair(10, 20)) //=> [10, 30]
setLast(30)(pair(10, 20)) //=> [10, 30]
setLast(30)(pair(10)(20)) //=> [10, 30]
setLast('o', 'fo_') //=> 'foo'
setLast('o')('fo_') //=> 'foo'
```

#### `setNthWith(n, fn, xs)`

- n: `Number`
- fn: `Function`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/set-nth-with.js)

Accepts a function `fn`, an array or a string `xs`, and returns a shallow copy of `xs`, where the element corresponding to the `nth` index is replaced by the result of the application of `fn` to the original value of the `nth` element in `xs`.

```js
setLastWith(1, mult(2), range(10, 40, 10)) //=> [10, 40, 30]
setLastWith(1, mult(2))(range(10, 40, 10)) //=> [10, 40, 30]
setLastWith(1)(mult(2), range(10, 40, 10)) //=> [10, 40, 30]
setLastWith(1)(mult(2))(range(10, 40, 10)) //=> [10, 40, 30]
setLastWith(1)(mult(2))(range(10)(40)(10)) //=> [10, 40, 30]
setLastWith(1, toLower, 'fOo') //=> 'foo'
setLastWith(1, toLower)('fOo') //=> 'foo'
setLastWith(1)(toLower)('fOo') //=> 'foo'
```

#### `setNth(n, x, xs)`

- n: `Number`
- x: `Any`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/set-nth.js)

Accepts a value `x`, an array or a string `xs`, and returns a shallow copy of `xs`, where the element corresponding to the `nth` index is replaced by `x`.

```js
setNth(1, 40, range(10, 40, 10)) //=> [10, 40, 30]
setNth(1)(40, range(10, 40, 10)) //=> [10, 40, 30]
setNth(1, 40)(range(10, 40, 10)) //=> [10, 40, 30]
setNth(1)(40)(range(10, 40, 10)) //=> [10, 40, 30]
setNth(1)(40)(range(10)(40)(10)) //=> [10, 40, 30]
setNth(1, 'o', 'f_o') //=> 'foo'
setNth(1, 'o')('f_o') //=> 'foo'
setNth(1)('o')('f_o') //=> 'foo'
```

#### `shiftLeft(xs)`

- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/shift-left.js)

Accepts an array or a string `xs`, and returns a new array or a string containing all elements of `xs`, with the difference that each element has its position shifted once, towards the left side.

```js
shiftLeft(range(1, 4, 1)) //=> [2, 3, 1]
shiftLeft(range(1)(4)(1)) //=> [2, 3, 1]
shiftLeft('foo') //=> 'oof'
```

#### `shift(xs)`

- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/shift.js)

Accepts an array or a string `xs`, and returns a new array or a string, containing all elements of `xs`, with the difference that each element has its position shifted once, towards the right side.

```js
shift(range(1, 4, 1)) //=> [3, 1, 2]
shift(range(1)(4)(1)) //=> [3, 1, 2]
shift('foo') //=> 'ofo'
```

#### `slice(i, j, xs)`

- i: `Number`
- j: `Number`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/slice.js)

Accepts two numbers `i` & `j`, an array of a string `xs`, and returns a shallow copy of `xs`, containing only the elements from index `i` to `j`, except for the element corresponding to index `j`.

```js
slice(0, 3, range(1, 7, 1)) //=> [1, 2, 3]
slice(0)(3, range(1, 7, 1)) //=> [1, 2, 3]
slice(0, 3)(range(1, 7, 1)) //=> [1, 2, 3]
slice(0)(3)(range(1, 7, 1)) //=> [1, 2, 3]
slice(0)(3)(range(1)(7)(1)) //=> [1, 2, 3]
slice(0, 3, 'foobar') //=> 'foo'
slice(0)(3, 'foobar') //=> 'foo'
slice(0, 3)('foobar') //=> 'foo'
slice(0)(3)('foobar') //=> 'foo'
```

#### `snd(xs)`

- xs: `Array|String`
- Returns: `Any`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/snd.js)

Accepts an array or a string `xs`, and returns the second element.

```js
snd([1, 2]) //=> 2
snd(pair(1, 2)) //=> 2
snd(pair(1)(2)) //=> 2
```

#### `some(fn, xs)`

- fn: `Function`
- xs: `Array`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/some.js)

Accepts an predicate function `fn`, an array or a string `xs`, and returns `true` if at least one elements in `xs` satisfies the predicate `fn`, or `false` if no element in `xs` satisfies it.

```js
some(odd, [1, 4, 6]) //=> true
some(odd)([1, 4, 6]) //=> true
some(isPos, [-1, -3, 6]) //=> true
some(isPos)([-1, -3, 6]) //=> true
some(eq('.'), 'foo..') //=> true
some(eq('.'))('foo..') //=> true
some(eq('.'), 'foo') //=> false
some(eq('.'))('foo' //=> false
```

#### `split(x, xs)`

- sep: `String`
- xs: `String`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/split.js)

Accepts a string `x`, a string `xs`, and returns a new array containing only substrings of `xs`, resulting from the removal of every occurrence of `x` in `xs`. In other words, `x` is used as a separator to determine where to make each split should take place in `xs`.

```js
split('-', 'foo-bar') //=> ['foo', 'bar']
split('-')('foo-bar') //=> ['foo', 'bar']
mapcat(split(','), pair('1,2,3', '4,5,6')) //=> ['1', '2', '3', '4', '5', '6']
mapcat(split(','))(pair('1,2,3', '4,5,6')) //=> ['1', '2', '3', '4', '5', '6']
mapcat(split(','))(pair('1,2,3')('4,5,6')) //=> ['1', '2', '3', '4', '5', '6']
```

#### `spread(fn)`

- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/spread.js)

Accepts a function `fn`, and returns a new function, which wraps `fn`, accepts an array of arguments, spreads the array and returns the result of applying to those arguments. Note that the returned wrapper function is not automatically curried.

```js
const spreadAdd = spread(add)
spreadAdd(pair(1, 2)) //=> 3
spreadAdd(pair(1)(2)) //=> 3
const spreadDiv = spread(div)
map(spreadDiv, array(pair(10, 2), pair(20, 4))) //=> [5, 5]
map(spreadDiv)(array(pair(10, 2), pair(20, 4))) //=> [5, 5]
map(spreadDiv)(array(pair(10, 2))(pair(20, 4))) //=> [5, 5]
map(spreadDiv)(array(pair(10)(2))(pair(20)(4))) //=> [5, 5]
```

#### `square(x)`

- x: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/square.js)

Accepts a number `x` and returns the result of `x` to the power of `2`.

```js
square(2) //=> 4
square(5) //=> 25
map(square, range(2, 11, 2)) //=> [4, 16, 36, 64, 100]
map(square)(range(2, 11, 2)) //=> [4, 16, 36, 64, 100]
map(square)(range(2)(11)(2)) //=> [4, 16, 36, 64, 100]
```

#### `startsWith(x, xs)`

- x: `String`
- xs: `String`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/starts-with.js)

Accepts a string `x`, a string `xs`, and returns `true` if `xs` starts with the string `x`, or `false` if it does not.

```js
startsWith('foo', 'foo...') //=> true
startsWith('foo')('foo...') //=> true
startsWith('bar', 'foo...') //=> false
startsWith('bar')('foo...') //=> false
```

#### `str(x)`

- x: `Any`
- Returns: `String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/str.js)

Accepts a value `x`, converts it to string and returns the result. Can be considered as a curried version of the default `String()` function.

```js
str(0) //=> '0'
str(range(1, 4, 1)) //=> '1, 2, 3'
str(range(1)(4)(1)) //=> '1, 2, 3'
```

#### `sub(x, y)`

- x: `Number`
- y: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/sub.js)

Accepts two numbers `x` & `y`, and returns `x - y`, the result of subtracting `y` from `x`.

```js
sub(10, 5) //=> 5
sub(10)(5) //=> 5
map(apply(5, flip(sub)), fill(4, 5)) //=> [ 0, 0, 0, 0 ]
map(apply(5, flip(sub)))(fill(4, 5)) //=> [ 0, 0, 0, 0 ]
map(apply(5)(flip(sub)))(fill(4)(5)) //=> [ 0, 0, 0, 0 ]
```

#### `sum(xs)`

- xs: `Array`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/sum.js)

Accepts an array `xs`, and returns the total sum of all number in the array.

```js
sum([]) //=> 0
sum(empty(pair(10, 10))) //=> 0
sum(range(1, 4, 1)) //=> 6
sum(range(1)(4)(1)) //=> 6
```

#### `swap(i, j, xs)`

- i: `Number`
- j: `Number`
- xs: `Array|String`
- return: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/swap.js)

Accepts two numbers `i` & `j`, an array or a string `xs`, and returns a shallow copy of `xs`, where the element corresponding to the index `i` is swapped with the element corresponding to the index `j`.

```js
swap(1, 3, range(1, 6, 1)) //=> [1, 4, 3, 2, 5]
swap(1, 3)(range(1, 6, 1)) //=> [1, 4, 3, 2, 5]
swap(1)(3, range(1, 6, 1)) //=> [1, 4, 3, 2, 5]
swap(1)(3)(range(1, 6, 1)) //=> [1, 4, 3, 2, 5]
swap(1)(3)(range(1)(6)(1)) //=> [1, 4, 3, 2, 5]
swap(1, 4, 'foobar') //=> 'faobor'
swap(1)(4, 'foobar') //=> 'faobor'
swap(1, 4)('foobar') //=> 'faobor'
swap(1)(4)('foobar') //=> 'faobor'
```

#### `T()`

- Returns: `Boolean`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/T.js)

A constant function, which always returns `true` when invoked, regardless of the provided arguments.

```js
T() //=> true
T([1, 2]) //=> true
map(T, range(1, 4, 1)) //=> [true, true, true]
map(T)(range(1, 4, 1)) //=> [true, true, true]
map(T)(range(1)(4)(1)) //=> [true, true, true]
```

#### `tail(xs)`

- xs: `Array|String`
- return: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/tail.js)

Accepts an array or a string `xs`, and returns a new array of a string containing all elements of `xs` except for the first element.

```js
tail('') //=> ''
tail([]) //=> []
tail(pair(1, 2)) //=> [2]
tail(pair(1)(2)) //=> [2]
tail(range(1, 4, 1)) //=> [2, 3]
tail(range(1)(4)(1)) //=> [2, 3]
tail('bar') //=> 'ar'
```

#### `takeRightWhile(fn, xs)`

- fn: `Function`
- xs: `Array|String`
- return: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/take-right-while.js)

Accepts a predicate function `fn`, an array or a string `xs`, and returns a new array or a string, where only the first elements of `xs`, from the right to left side, that satisfy the predicate `fn`, are included.

```js
dropRightWhile(odd, [2, 4, 6, 1, 3, 5]) //=> [1, 3, 5] 
dropRightWhile(odd)([2, 4, 6, 1, 3, 5]) //=> [1, 3, 5] 
dropRightWhile(eq('.'), 'foo...') //=> '...' 
dropRightWhile(eq('.'))('foo...') //=> '...' 
```

#### `takeRight(n, xs)`

- n: `Number`
- xs: `Array|String`
- return: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/take-right.js)

Accepts a number `n`, an array or a string `xs`, and returns a new array or a string, where only the `n` first elements of `xs`, from the right to the left side, are included.

```js
takeRight(2, [1, 2, 3, 4]) //=> [3, 4]
takeRight(2)([1, 2, 3, 4]) //=> [3, 4]
takeRight(3, 'foo...') //=> '...'
takeRight(3)('foo...') //=> '...'
```

#### `takeWhile(fn, xs)`

- fn: `Function`
- xs: `Array|String`
- return: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/take-while.js)

Accepts a predicate function `fn`, an array or a string `xs`, and returns a new array or a string, where only the first elements of `xs`, from the left to right side, that satisfy the predicate `fn`, are included.

```js
takeWhile(even, [2, 4, 6, 1, 3, 5]) //=> [2, 4, 6] 
takeWhile(even)([2, 4, 6, 1, 3, 5]) //=> [2, 4, 6] 
takeWhile(uneq('.'), 'foo...') //=> 'foo'
takeWhile(uneq('.'))('foo...') //=> 'foo'
```

#### `take(n, xs)`

- n: `Number`
- xs: `Array|String`
- return: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/take.js)

Accepts a number `n`, an array or a string `xs`, and returns a new array or a string, where only the `n` first elements of `xs`, from the left to the right side, are included.

```js
take(2, [1, 2, 3, 4]) //=> [1, 2]
take(2)([1, 2, 3, 4]) //=> [1, 2]
take(3, 'foo..') //=> 'foo'
take(3)('foo..') //=> 'foo'
```

#### `ternary(fn)`

- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/ternary.js)

Accepts a function `fn`, and returns a wrapper function of `fn` with an arity of `3`, which when invoked with its own arguments returns the result of supplying only `3` of those arguments to `fn`.

```js
const array3 = ternary(array)
array3() //=> []
array3(1) //=> [1]
array3(1, 2) //=> [1, 2]
array3(1, 2, 3) //=> [1, 2, 3]
array3(1, 2, 3, 4) //=> [1, 2, 3]
```

#### `toLower(xs)`

- xs: `String`
- Returns: `String`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/to-lower.js)

Accepts a string `xs`, and returns the same string containing all characters in lower upper.

```js
toLower('foo') //=> 'foo'
toLower('FOO') //=> 'foo'
map(toLower, pair('FOO', 'BAR')) //=> ['foo', 'bar']
map(toLower)(pair('FOO', 'BAR')) //=> ['foo', 'bar']
map(toLower)(pair('FOO')('BAR')) //=> ['foo', 'bar']
```

#### `toUpper(xs)`

- xs: `String`
- Returns: `String`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/to-upper.js)

Accepts a string `xs`, and returns the same string containing all characters in upper case.

```js
toUpper('foo') //=> 'FOO'
toUpper('FOO') //=> 'FOO'
map(toUpper, pair('foo', 'bar')) //=> ['FOO', 'BAR']
map(toUpper)(pair('foo', 'bar')) //=> ['FOO', 'BAR']
map(toUpper)(pair('foo')('bar')) //=> ['FOO', 'BAR']
```

#### `trd(xs)`

- xs: `Array|String`
- Returns: `Any`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/trd.js)

Accepts an array or a string `xs`, and returns the third element.

```js
trd([1, 2, 3]) //=> 3
trd('foo') //=> 'o'
trd(range(1, 4, 1)) //=> 3
trd(range(1)(4)(1)) //=> 3
```

#### `trunc(x)`

- x: `Number`
- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/trunc.js)

Accepts a number `x`, and returns the integer part of `x`.

```js
trunc(5) //=> 5
trunc(5.123) //=> 5
trunc(div(5, 10)) //=> 0
trunc(div(5)(10)) //=> 0
```

#### `Ts(n)`

- n: `Number`
- Returns: `Array`
- Curried: `True`
- Added on: `0.2.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/Ts.js)

Accepts a number `n`, and returns an array of length `n`, containing only the value `true`.

```js
Ts(0) //=> []
Ts(1) //=> [true]
Ts(3) //=> [true, true, true]
map(not, Ts(3)) //=> [false, false, false]
```

#### `unary(fn)`

- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/unary.js)

Accepts a function `fn`, and returns a wrapper function of `fn`, with an arity of `1`, which when invoked with its own arguments returns the result of supplying only `1` of those arguments to `fn`.

```js
const array1 = unary(array)
array1() //=> []
array1(1) //=> [1]
array(1, 2) //=> [1]
```

#### `uneqProp(prop, obj1, obj2)`

- prop: `String`
- obj1: `Object`
- obj2: `Object`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/uneq-prop.js)

Accepts a string `prop`, two objects `xs` & `ys`, and returns `true` if both objects do not have an equal value corresponding to the `prop` property, or `false` if they do. The equality check is accomplished by using the [`eq`]() module.

```js
uneqProp('a', {'a': 'foo'}, {'b': 'foo'}) //=> false
uneqProp('a')({'a': 'foo'}, {'b': 'foo'}) //=> false
uneqProp('a', {'a': 2}, {'b': 3}) //=> true
uneqProp('a')({'a': 2}, {'b': 3}) //=> true
```

#### `uneq(x, y)`

- x: `Any`
- y: `Any`
- Returns: `Boolean`
- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/uneq.js)

Accepts two values `x` & `y`, and returns `true` if both are not strictly equal (`===`), or `false` if they are.

```js
uneq(1, 2) //=> true
uneq(1)(2) //=> tre
uneq('1', 1) //=> true
uneq('1')(1) //=> tre
uneq(1, 1) //=> false
uneq(1)(1) //=> false
```

#### `values(obj)`

- obj: `Object`
- Returns: `Array`
- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/values.js)

Accepts an object `obj`, and returns an array of all the values of `obj`.

```js
values({a: 1, b: 2, c: 3}) //=> [ 1, 2, 3 ]
values(zipObj(pair('a', 'b'), pair(1, 2))) //=> [1, 2]
values(zipObj(pair('a', 'b'))(pair(1, 2))) //=> [1, 2]
values(zipObj(pair('a')('b'))(pair(1)(2))) //=> [1, 2]
```

#### `xapply(x, y, fn)`

- x: `Number`
- y: `Any`
- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/xapply.js)

Accepts a number `x`, a value `y`, a function `fn`, and returns the result of consequently applying `x` times the `fn` function to the value `y`.

```js
xapply(3, 5, mult(-1)) //=> -5
xapply(3, 5)(mult(-1)) //=> -5
xapply(3)(5)(mult(-1)) //=> -5
xapply(2, 100, apply(10, flip(div)))
xapply(2, 100)(apply(10, flip(div)))
xapply(2)(100, apply(10, flip(div)))
xapply(2)(100)(apply(10, flip(div)))
xapply(2)(100)(apply(10)(flip(div)))
```

#### `xarray(x)`

- x: `Number`
- Returns: `Function`
- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/xarray.js)

Accepts a number `x`, and returns a curried function of arity `x`, that when invoked with total number `x` of arguments, returns an array of all `x` given arguments.

```js
const array2 = xarray(3)
array(1, 2, 3) //=> [1, 2, 3]
array(1)(2, 3) //=> [1, 2, 3]
array(1, 2)(3) //=> [1, 2, 3]
array(1)(2)(3) //=> [1, 2, 3]
```

#### `xcurry(x, fn)`

- x: `Number`
- fn: `Function`
- Returns: `Function`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/xcurry.js)

Accepts a number `x`, a function `fn`, and returns a curried version of `fn` with an arity of `x`.

```js
const add = (x, y) => x + y
const curriedAdd = xcurry(2, add)
curriedAdd(5, 5) //=> 10
curriedAdd(5)(5) //=> 10
```

#### `xnor(x, y)`

- x: `Boolean`
- y: `Boolean`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/xnor.js)

Accepts two booleans `x` & `y`, and returns the result of applying the logical complement of the `Exclusive OR` operator between `x` and `y`. Values `x`, `y` are automatically coerced to booleans.

```js
xnor(0, 0) //=> true
xnor(0)(0) //=> true
xnor(1, 0) //=> false
xnor(1)(0) //=> false
xnor(1, 1) //=> true
xnor(1)(1) //=> true
```

#### `xor(x, y)`

- x: `Boolean`
- y: `Boolean`
- Returns: `Boolean`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/xor.js)

Accepts two booleans `x` & `y`, and returns the result of applying the logical `Exclusive OR` operator between `x` and `y`. Values `x`, `y` are automatically coerced to booleans.

```js
xor(0, 0) //=> false
xor(0)(0) //=> false
xor(1, 0) //=> true
xor(1)(0) //=> true
xor(1, 1) //=> false
xor(1)(1) //=> false
```

#### `xshiftLeft(x, xs)`

- x: `Number`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/xshift-left.js)

Accepts a number `x`, an array or a string `xs`, and returns a shallow copy of `xs`, with the difference that each element has its position shifted `x` times towards the left side.

```js
xshiftLeft(3, range(1, 6, 1)) //=> [4, 5, 1, 2, 3]
xshiftLeft(3)(range(1, 6, 1)) //=> [4, 5, 1, 2, 3]
xshiftLeft(3)(range(1)(6)(1)) //=> [4, 5, 1, 2, 3]
```

#### `xshift(x, xs)`

- x: `Number`
- xs: `Array|String`
- Returns: `Array|String`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/xshift.js)

Accepts a number `x`, an array or a string `xs`, and returns a shallow copy of `xs`, with the difference that each element has its position shifted `x` times towards the right side.

```js
xshift(3, range(1, 6, 1)) //=> [3, 4, 5, 1, 2]
xshift(3)(range(1, 6, 1)) //=> [3, 4, 5, 1, 2]
xshift(3)(range(1)(6)(1)) //=> [3, 4, 5, 1, 2]
```

#### `zero()`

- Returns: `Number`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/zero.js)

A zero-arity constant function, which always returns the number `0` when invoked, regardless of the provided arguments.

```js
zero() //=> 0
zero(1) //=> 0 
map(zero, range(1, 6, 1)) //=> [0, 0, 0, 0, 0]
map(zero)(range(1, 6, 1)) //=> [0, 0, 0, 0, 0]
map(zero)(range(1)(6)(1)) //=> [0, 0, 0, 0, 0]
```

#### `zeros(n)`

- n: `Number`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/zeros.js)

Accepts a number `n`, and returns an array of length `n`, containing `n` times the number `0`.

```js
zeros(0) //=> []
zeros(1) //=> [0]
zeros(3) //=> [0, 0, 0]
map(incr, zeros(3)) //=> [1, 1, 1]
```

#### `zipObj(xs, ys)`

- xs: `Array|String`
- ys: `Array|String`
- Returns: `Object`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/zip-obj.js)

Accepts two arrays or strings `xs` & `ys`, and returns an object, where the elements of `xs` are its properties and the elements of `ys` are its values.

```js
zipObj('abc', range(1, 4, 1)) //=> { a: 1, b: 2, c: 3 }
zipObj('abc')(range(1, 4, 1)) //=> { a: 1, b: 2, c: 3 }
zipObj('abc')(range(1)(4)(1)) //=> { a: 1, b: 2, c: 3 }
zipObj('bar', zeros(4)) //=> { b: 0, a: 0, r: 0 }
zipObj('bar')(zeros(4)) //=> { b:0 1, a: 0, r: 0 }
```

#### `zipReverse(xs)`

- xs: `Array|String`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/zip-reverse.js)

Accepts an array or a string `xs`, and returns a new array, where each element of `xs` is paired to its corresponding element in the reverse of `xs`.

```js
zipReverse('foo') //=> [['f', 'o'], ['o', 'o'], ['o', 'f']]
zipReverse(range(1, 4, 1)) //=> [[1, 3], [2, 2], [3, 1]]
zipReverse(range(1)(4)(1)) //=> [[1, 3], [2, 2], [3, 1]]
```

#### `zipSelf(xs)`

- xs: `Array|String`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/zip-self.js)

Accepts an array or a string `xs`, and returns a new array, where each element of `xs` is paired to itself.

```js
zipSelf('foo') //=> [['f', 'f'], ['o', 'o'], ['o', 'o']] 
zipSelf(range(1, 4, 1)) //=> [[1, 1], [2, 2], [3, 3]]
zipSelf(range(1)(4)(1)) //=> [[1, 1], [2, 2], [3, 3]]
```

#### `zipTail(xs)`

- xs: `Array|String`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/zip-tail.js)

Accepts an array or a string `xs`, and returns a new array, where each element of `xs` is paired to its corresponding element in the tail of `xs`.

```js
zipTail('bar') //=> [['b', 'a'], ['a', 'r']] 
zipTail(range(1, 4, 1)) //=> [[1, 2], [2, 3]]
```

#### `zipWith(fn, xs, ys)`

- fn: `Function`
- xs: `Array|String`
- ys: `Array|String`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/zip-with.js)

Accepts a reducer function of arity `2`, two arrays or strings `xs` & `ys`, and returns a new array containing the result of applying the reducer `fn` to each pair of elements of `xs` & `ys`.

```js
zipWith(gather(reverse), range(1, 4, 1), 'foo') //=> [['f', 1], ['o', 2], ['o', 3]]
zipWith(gather(reverse), range(1, 4, 1))('foo') //=> [['f', 1], ['o', 2], ['o', 3]]
zipWith(gather(reverse))(range(1, 4, 1), 'foo') //=> [['f', 1], ['o', 2], ['o', 3]]
zipWith(gather(reverse))(range(1, 4, 1))('foo') //=> [['f', 1], ['o', 2], ['o', 3]]
zipWith(gather(reverse))(range(1)(4)(1))('foo') //=> [['f', 1], ['o', 2], ['o', 3]]
```

#### `zip(xs, ys)`

- xs: `Array|String`
- ys: `Array|String`
- Returns: `Array`
- Curried: `True`
- Added on: `0.1.0`
- [Go to source](https://github.com/klauscfhq/arare/tree/master/src/zip.js)

Accepts two arrays or strings `xs` & `ys`, and returns a new array containing, as pairs, all elements of `xs` & `ys`.

```js
zip(range(1, 4, 1), 'bar') //=> [[1, 'f'], [2, 'o'], [3, 'o']]
zip(range(1, 4, 1))('bar') //=> [[1, 'f'], [2, 'o'], [3, 'o']]
zip(range(1)(4)(1))('bar') //=> [[1, 'f'], [2, 'o'], [3, 'o']]
```
