// Immediatelly Invoked Function Expression for Wrapping Isolation from Global Namespace
//(function(){
	// **********************************************
	// Scoping Example
	var a = "first a";

	if(true){		
		let a = "second a";
		console.info(a);
	}
	console.log(a);

	// **********************************************
	// Destructuring Example (access the value of the keys directly)
	// example 1 - literal object with let
	let obj = { 
		first: 'Jane', last: 'Doe' 
	};

	let { 
		first: newProp, //take value from 'first' attribute and assign to variable newProp
		last: testProp 
	} = obj; // (A)	
	//console.warn(newProp,testProp);

	// example 2 - literal object with var
	function takeMyObject(){
		var obj = {
			make: 'porsche',
			model: '911'
		};	
		return obj;
	};		

	var {make: xx, model: yy} = takeMyObject();
	//console.log(xx,yy)

	// example 3 - array
	function takeMyArray(){
		var arr = ['Race','Mode'];
		return arr;
	}

	var [var1,var2] = takeMyArray();
	//console.log(var1)

	// example 4 - array
	function takeFromAnotherArray(){
		var arr = ['X','Y',,'Z']; //amazing no syntax error
		return arr;
	}
	let [first,second,third,forth] = takeFromAnotherArray();
	console.warn(first,second,third,forth);
	//

	// limited scoping using 'let'
	// for (let i = 0; i < 5; i++) {
	// 	console.warn(i);
	// };	

//})();
