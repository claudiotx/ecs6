/*
	Generator Iterator - Design Pattern which allows to step through an ordered set of values one at a time by calling .next()
	Rule 1 - When passing an argument to the generator function, the first .next() arguments will be ignored

 */
'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var marked0$0 = [iterator, forOf].map(_regeneratorRuntime.mark);
console.log('+-----------------------------------------+');

function iterator(arg) {
	var y, z;
	return _regeneratorRuntime.wrap(function iterator$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return arg + 1;

			case 2:
				context$1$0.t0 = context$1$0.sent;
				y = 2 * context$1$0.t0;
				context$1$0.next = 6;
				return y + 3;

			case 6:
				z = context$1$0.sent;
				return context$1$0.abrupt('return', arg + y + z);

			case 8:
			case 'end':
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

// initialize
var it = iterator(1); // (passed 1 as an argument to iterator function)

// start iterator
var countOutput = it.next(); // return { 2*1 }
console.log(countOutput);

countOutput = it.next(2); // return { 4+3 } (passed 2 for result of 1st yield)
console.log(countOutput);

countOutput = it.next(1); // return { 1 + 4 + 1 } (passed 1 for result of 2nd yield)
console.log(countOutput); // done: true, countOutput:3

/*
	For...Of iterator pattern
 */
console.log('for...of ITERATOR PATTERN');
function forOf() {
	return _regeneratorRuntime.wrap(function forOf$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				context$1$0.next = 2;
				return 1;

			case 2:
				context$1$0.next = 4;
				return 2;

			case 4:
				context$1$0.next = 6;
				return 3;

			case 6:
				return context$1$0.abrupt('return', 66);

			case 7:
			case 'end':
				return context$1$0.stop();
		}
	}, marked0$0[1], this);
}

//ignored by the for of loop
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = _getIterator(forOf()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var v = _step.value;

		console.log(v);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator['return']) {
			_iterator['return']();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

console.log('+-----------------------------------------+');
// return { arg+1 }
//# sourceMappingURL=ecm5.js.map
