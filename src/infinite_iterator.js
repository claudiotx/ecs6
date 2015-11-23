/*
	Finitely iterate over Infinite Data
	Useful for inifinit scroll web apps, where load data as the user scrolls
	How to:
	a) Load data in chunks
	b) Display a subset of items from that chunk
	c) Once user achieves a certain spot, continue to iterate thorugh the data

	Advantages using generators:
	- More options: preloading data and only rendering a certain number of items
	- Iteration happens when we want
	- No need to mess with arrays

 */
console.log('+-----------------------------------------+');

// Mock generation of infinite data -- simulates getting data and yieldint it one a time
function *generateInfinite(){	
	// Infinite loop
	while (true){		

		// yield the generator iterator
		yield counter;

		// increment and reset avoiding number overflow
		counter += 1;		
		console.warn('running counter')
	}
}

// Mock printer function
var printItem = (value) => console.log(value); 

// Render 10 times p/ time
var counter = 10;
var max = 10;


// Run only 10 times -- the code is manually iterated via .next() over the iterator returned from the generator function
function listIterator(it, max){

	// run first iteration, it would yield
	var result = it.next();

    // iterate the max number of times
	var i = 0;
	while((i < max) && !(result.done)){
		// render item
		printItem(result.value);

		// move iterator pointer
		result = it.next();

		// local incrementor
		i++;
	}
}

// manager
function renderItemsManager(max){
	// get iterator -- THIS DOES NOT STARTS FUNCTION -- Remember, it's a generator!!!
	var it = generateInfinite();

	function continueRendering(){
		listIterator(it, max)
	}

	// first round
	continueRendering(max);

	// API - allows continues rendering
	return {
		continue: continueRendering
	}
}

// SIMULATION (for example, click more button)
var renderer = renderItemsManager(10); // FIRST AUTO LOADING
renderer.continue(); // +10 items
renderer.continue(); // +10 items

console.log('+-----------------------------------------+');