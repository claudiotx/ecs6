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

// Controls the generator workflow
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

// FLOW CONTROL FUNCTION
function async(generator){
	var it = generator(); // generates the iterator -> doesnt start

	function run(val){		
		var result = it.next(val); 	// iterator result
		if(result.done){ return; }		
		var promise = result.value;
		// promise finished
		if(promise.then){
			promise.then(function(val){
				run(val);
			});		
		}
		else{
			run(result.value);
		}	
	}
	run();	
}

// No Blocking
// Call the makeRequests function and send a generator as parameter
async(function *(){
	var result = yield request('www.google.com'); // PAUSE EXECUTION of this generator function and WAIT (doesnt block the workflow)
	console.log(result)

	result = yield request('www.yahoo.com');
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