/*
	Async Generators
	Running Asynchronous code, Synchronously
 */
console.log('+-----------------------------------------+');


// Old School Ajax Request
function makeAjaxRequest(url,cb){
	// async simulation
	setTimeout(function(){
		cb('{"id":1, "url":"' + url + '"}');
	},1000);
}

// Asyncrhonous Call to a RESTFul Method
// @uses ECMAScript 6 Promise
function request(url){
	return new Promise(function(resolve, reject){
		makeAjaxRequest(url, function(val){
			resolve(val);
		});
	});
}

function bar(a){
	return a + 'fooooooooooooo';
}

// FLOW CONTROL LIBRARY
function async(generator){
	var it = generator(); // 2. generates an instance of the iterator function -> it DOES NOT start

	// Flow Control
	function run(val){		
		var result = it.next(val); 	// 4. START generator function (Once) / RESUME yielded instruction
		if(result.done){ return; }	// 6. Control return object of the request function (is an ES6 Promise)
		var promise = result.value;
		// promise finished
		if(promise.then){			// 7. Check if it is a promise object or a simple primitive data type
			promise.then(function(val){
				run(val);			// 8. Recursion -> call again run() to RESUME yielded instruction
			});		
		}
		else{
			run(result.value);
		}	
	}

	// 3. auto start method -> called ONCE on the generation of the iterator function
	run();	
}


// 1. Call the Flow Control Function with a generator as parameter
async(function *(){
	var result = yield request('www.google.com'); // 5.then PAUSE EXECUTION here and WAIT (doesnt block the workflow)
	console.log(result)

	result = yield request('www.yahoo.com'); // 9. Call request(), then PAUSE EXECUTION here and WAIT (doesnt block the workflow)
	console.log(result)

	result = yield request('www.1.com');
	console.log(result)

	result = yield bar('www.1.com');
	console.log(result)	
});


// OLD SCHOOL: Using Callbacks
// makeAjaxRequest('www.google.com',function(result){
// 	console.log('callback function printing: ', result)
// });

console.log('+-----------------------------------------+');