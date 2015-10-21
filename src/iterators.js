/*
	Generator Iterator - Design Pattern which allows to step through an ordered set of values one at a time by calling .next()
	Rule 1 - When passing an argument to the generator function, the first .next() arguments will be ignored

 */
console.log('+-----------------------------------------+');

function *iterator(arg){
	var y = 2 * (yield (arg+1)); // return { arg+1 }
	var z = yield(y+3);
	return arg + y + z;
}


// initialize
var it = iterator(1); // (passed 1 as an argument to iterator function)

// start iterator
var countOutput = it.next(); // return { 2*1 }
console.log(countOutput)

countOutput = it.next(2); // return { 4+3 } (passed 2 for result of 1st yield)
console.log(countOutput)

countOutput = it.next(1); // return { 1 + 4 + 1 } (passed 1 for result of 2nd yield)
console.log(countOutput) // done: true, countOutput:3

/*
	For...Of iterator pattern
 */
console.log('for...of ITERATOR PATTERN');
function *forOf(){	
	yield 1;
	yield 2;
	yield 3;
	return 66; //ignored by the for of loop
}

for (var v of forOf()) {
	console.log(v)
}

console.log('+-----------------------------------------+');
