/*
	ES6 Generators - Iterators / Observers / Coroutines
	Generators are functions that can be paused and resume (multitasking) - good for async programming
	Definitions
		Coroutine -> Yeld the execution of a function, go to another function to do some work, come back and resume the yeld and continue the original function execution routine
 */
console.log('+-----------------------------------------+');

/*
	Generator function
	Warning: cannot yeld inside generator functions
 */
function* listThings(){
	// Iterator using an arrow function
	var values = ['1','2','3'];
	for(var idx in values){
		var val = values[idx];		
		yield val;		
	}

	yield 'a',
	yield 'b',
	yield 'c',
	yield 'd'
}

for (let val of listThings()){
	console.log(val)
}

var val = listThings();

// Example 2 (using destructuring)
let [a,b,c,d,e,f,g,h] = listThings();
console.warn(a,b,c,d,e,f,g,h)


















console.log('+-----------------------------------------+');