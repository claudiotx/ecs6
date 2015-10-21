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
	},10);
}

// Make Requests - wraps the request() function which controls the generator workflow
function makeRequests(generator){	
	// Wrapper Function with builtin callback
	function request(url){
		makeAjaxRequest(url, function(response){
			it.next(response); //reference to iterator
		});
	}

	// Call main and yield the response to us
	// 1st time - runs once only
	var it = generator(request); // generates the iterator -> doesnt start 
	it.next(); 	// start execution of the iterator
}

// Call the makeRequests function and send a generator as parameter
makeRequests(function *(request){	
	var result = yield request('www.google.com'); // PAUSE EXECUTION of this generator function
	console.log(result)

	result = yield request('www.yahoo.com');
	console.log(result)	

	result = yield request('www.aeiou.com');
	console.log(result)		
});


// OLD SCHOOL: Using Callbacks
// makeAjaxRequest('www.google.com',function(result){
// 	console.log('callback function printing: ', result)
// });

console.log('+-----------------------------------------+');