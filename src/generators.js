console.log('+-----------------------------------------+');
/* 
	Javascript Single Threading Environment
	We still can use Web Workers -> separate thread for a part of our JS code to run in paralell with our main thread. (Not Multi-threading since the
	communicaton will only happen via async events, which will obey to the 1 at a time beahvior of js functions where functions run to completion)
*/
/*
	ES6 Generators
	No more run to completion functions.
	Cooperarive Behavior Special Functions - can be paused in the middle "n" times and resumed later, allowing other functions to run whilst paused.
	Note: In the opposite, a preemptive function can be interrupted abnormally

	Rule 1: In the generator function we can ONLY use the 'yield' keyword as a way to pause the function from its body.
	Rule 2: After paused, the generator function CANNOT resume autmatically, some external control process needs to give that instruction via .next();

	Tip 1: while(true){ ... } can be safely used with generator functions
	Tip 2: Pausing and Resuming a generator creates a HOOK for a 2-way message channel in and out of the generator,
	namely: the controller function sends parameters to generator on the resume, and receiving parameters from the generator at each yield.

	function *myFunction() {  } 
 */

 /*
 	Example 1 - Sending and Receiving messages on yield expressions pause points
  */

function *sendReceive(){
	var x = yield 'outbound_message'; //requests value
	console.log('generator has received this message: ',x);
	moreComputeStuff(yield x); //pause waiting for a parameter to pass for moreComputeStuff()
}

var it = sendReceive();
var output = it.next();

console.log('Start: ', output);
// Do stuff with the output from the generator eg.5 minutes later
var inboundMessage = computeStuff();

setTimeout(function() {
// Resume generator
	output = it.next(inboundMessage);
	console.log('Resume 1: ',output);

	output = it.next('message');	
	console.log('Resume 2: ',output); // done=true
}, 5000);


function computeStuff(){
	return 'inbound_message';
}

function moreComputeStuff(x){
	console.log('more computing stuff, received something: ', x)
	return 'more stuff'
}



console.log('+-----------------------------------------+');