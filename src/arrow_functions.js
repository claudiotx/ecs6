// Arrow Functions
// **********************************************
console.info('------------------------'); //for readability when using nodemon
function asyncAdd(a,b,cb){
	var c = a + b;
	cb(c);
};

// advantage: got rid of curly braces
asyncAdd(1,5, result => console.warn('the sum is', result));

asyncAdd(1,5, result => { 
	console.warn('the sum is', result)
});

// **********************************************
// Managing "this"
function Adder(a,b){
	this.a = a;
	this.b = b;
}

// Add method to Adder object
Adder.prototype.execute = function(cb){
	var sum = this.a + this.b;
	cb.bind(this, undefined, sum)();
}

var add = new Adder(1,2);
add.execute(function(error, sum){
	if(error){
		throw error;
	}
	console.log('context is', this.a); //prints OK

	setImmediate(function(){
		console.log('the sum', sum);
		console.log('context using function is', this.a, this.b);
	});

	// no need for var that = this;
	setImmediate(() => {
		console.log('the sum', sum);
		console.log('context using => ', this.a, this.b);
	});	
})



console.info('------------------------');