/*
	ES6 Generators - Iterators
	Generator Function will run and pause at YIELD points
	it.next(); makes the function continue to run	
 */
console.log('+-----------------------------------------+');

function *testIterator(){
	console.log('running test')
	yield 1; //pause here
	yield testFunction();  //pause here
	yield *test2Iterator(); //pause here
	yield 4; //pause here
	yield 5; //pause here
}

function testFunction(){
	return 'test function was called';	
}

function *test2Iterator(){
	yield 2;
	yield 2.1;
	yield 2.2;
}

var iterator = testIterator(); // Warning! Assigning a resulting object of a generator function to a variable does not run all the function. It will YIELD on 1st line. DESIGN RESTRICTION
// console.log('printing return object',iterator);

var output = iterator.next();
// console.log('printing output object',output); // printing output object { value: 1, done: false } >> done=false, means that there are more yield points on the function

output = iterator.next(); //calling to a normal JS function
// console.log('printing output object normal JS function',output);

output = iterator.next(); //calling to an iterator function -> YIELD control passes to 2nd iterator function
// console.log('printing output object generator function',output);
// 
// 
// 
/*
	Example 2
 */
function *anotherIterator(){
	console.log('running another iterator function')
	console.log(yield 1);
	yield; //undefined yeld
	console.log('ending another iterator function')	
	return 'return value'; //not a good idea to use return values with generator functions
}

var itx = anotherIterator(); // run and pause immediatelly the iterator function, producing an iterator generator object - no lines executed
var output = itx.next(); //resume the function the 1st line of the function
console.log('output', output);

itx.next('x99955x');	// resume the function

// finish the iterator
itx.next();

// try to go further - done:true
console.log(itx.next()); // { value: undefined, done: true }
console.log(itx.next());

console.log('+-----------------------------------------+');