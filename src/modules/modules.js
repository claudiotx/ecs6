/*
	Modules in ES6
 */
console.log('+-----------------------------------------+');

// Import Single default exports
import add from "./myMath";
console.log(add(1,2));

// Import Multiple named exports
import { diag } from "./myMathMultiple";
console.log(diag(11,1));
// console.log(square(11)); // not defined, as expected

// Import Complete module (multiple exports)
import * as myMath from "./myMathMultiple";
console.log(myMath.square(11));

// Import Object (single export)
import ObjectMath from "./objectMath";
console.log(ObjectMath.add(2,2));

// Import Instantiable Function
console.log('Import Instantiable Function');
import InstantiableFunction from  "./instantiableFunction";
var adder = new InstantiableFunction();
console.log(adder.add(2,3));


console.log('+----------------------------------------+');