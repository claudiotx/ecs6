/*
	Before: Adding custom attributes to objects (no formalization), hopefully they will be unique
	Issues: polluting objects with attributes (JSON Stringify)
	
	Now: ES6 Symbol Primitive Type -> modify an existing object with our custom data, without polluting the object and stringify issues.
	We have now a way of assigning meaningful names to object attributes whilst protecting our custom "config" attribute from the code "config"	
	Symbols have instances (unique)
 */

console.log('--------------------------');
var x = Symbol('my symbol description 1');
var y = Symbol();
// console.log(x);
// console.log('type is', typeof(x));
// console.log(y);
// console.log('literal version of symbol:', x.toString())

var s1 = Symbol('Symbol S1 Description');
var s2 = Symbol('Symbol S2 Description');

// Symbols are not enumerable
var obj = {
	s1: 'string s1', // string
	[s2]:'symbol s2' 	// symbol
}
obj[s1] = 'symbol s1'; //symbol

console.log('show enumerables >>', Object.getOwnPropertyNames(obj)); //show enumerables
console.log('show symbols >>', Object.getOwnPropertySymbols(obj)); //show symbols
console.log('symbol S1 description >>', obj[s1]);
console.log('string S1 value >>', obj.s1);
console.log('stringifying object: ', JSON.stringify(obj, null,2));


// OLD WAY OF ADDING TEMPORARY PROERTIES TO AN OBJECT (problem: always need to keep a reference to the original object, cannot modify directly)
console.log(' ');
// Old way of adding flags in ES5
var wrapper = Object.create(obj);
wrapper.flag = true;
// console.log('printing wrapper object properties: ', wrapper.something, wrapper.flag);
// console.log('printing inner object properties: ', obj[s1], obj.flag); //not available in the inner object
// console.log('printing wrapper object properties: ', wrapper[s2], wrapper.flag); //not available in the inner object
// obj.test = 'test property';
// console.log('printing inner object new property: ', obj.test); //not available in the inner object
// console.log('printing wrapper object new property: ', wrapper.test,  wrapper.flag); //not available in the inner object


// -------------------------------------------------
// NEW WAY USING SYMBOLS PRIMITIVE TYPE
var xptoObject = {
	'myString':'value'
}


function addIsChcked() {
    var isChecked = Symbol('object is checked');
    xptoObject[isChecked] = true;
}

function anotherIsChcked(){
    var isChecked = Symbol('object is checked');
    xptoObject[isChecked] = true;
    // console.log('Printing object string value: ', xptoObject.myString)
    // console.log('Printing object symbol value: ', JSON.stringify(xptoObject, null, 2));	
}

addIsChcked();
anotherIsChcked();

// console.log('2 Instances of symbols', Object.getOwnPropertySymbols(xptoObject)); //can be avoid by using var isChecked = Symbol.for('object is checked');


// -------------------------------------------------
var isClicked = Symbol('object is clicked');
function addClicked(){
	xptoObject[isClicked] = true;
}
function anotherClicked(){
	xptoObject[isClicked] = false;
}
addClicked();
anotherClicked();
// console.log('1 Instances of symbols', Object.getOwnPropertySymbols(xptoObject));

// console.log('Symbol isClicked value >>', xptoObject[isClicked]); //value
// console.log(isClicked); //description

// console.log(obj[s2])
// console.info(JSON.stringify(obj,null,2));

// Good for flags or states

// --------------------------------------------------
var isPaused = Symbol('object is paused');

function addIsPaused(){
    var isPaused = Symbol.for('object is paused'); // GLOBAL REGISTRY
    xptoObject[isPaused] = true;
    // console.log('Printing object string value: ', xptoObject.myString)
    // console.log('Printing object symbol value: ', JSON.stringify(xptoObject, null, 2));	
}

function anotherIsPaused(){
    var isPaused = Symbol.for('object is paused'); // GLOBAL REGISTRY
    xptoObject[isPaused] = true;
    // console.log('Printing object string value: ', xptoObject.myString)
    // console.log('Printing object symbol value: ', JSON.stringify(xptoObject, null, 2));	
}

addIsPaused();
anotherIsPaused();

console.log('1 Instance of symbols', Object.getOwnPropertySymbols(xptoObject)); //can be avoid by using var isChecked = Symbol.for('object is checked');






















console.log('--------------------------');
