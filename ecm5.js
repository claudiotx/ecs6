// Immediatelly Invoked Function Expression for Wrapping Isolation from Global Namespace
//(function(){
// **********************************************
// Scoping Example
//var a = "first a";

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

if (true) {
	var _a = "second a";
	console.info(_a);
}
console.log(a);

// **********************************************
// Destructuring Example (access the value of the keys directly)
// example 1 - literal object with let
var obj = {
	first: 'Jane', last: 'Doe'
};

var newProp = obj.first;
var testProp = obj.last;
// (A)	
//console.warn(newProp,testProp);

// example 2 - literal object with var
function takeMyObject() {
	var obj = {
		make: 'porsche',
		model: '911'
	};
	return obj;
};

var _takeMyObject = takeMyObject();

var xx = _takeMyObject.make;
var yy = _takeMyObject.model;

//console.log(xx,yy)

// example 3 - array
function takeMyArray() {
	var arr = ['Race', 'Mode'];
	return arr;
}

var _takeMyArray = takeMyArray();

var _takeMyArray2 = _slicedToArray(_takeMyArray, 2);

var var1 = _takeMyArray2[0];
var var2 = _takeMyArray2[1];

//console.log(var1)

// example 4 - array
function takeFromAnotherArray() {
	var arr = ['X', 'Y',, 'Z']; //amazing no syntax error
	return arr;
}

var _takeFromAnotherArray = takeFromAnotherArray();

var _takeFromAnotherArray2 = _slicedToArray(_takeFromAnotherArray, 4);

var first = _takeFromAnotherArray2[0];
var second = _takeFromAnotherArray2[1];
var third = _takeFromAnotherArray2[2];
var forth = _takeFromAnotherArray2[3];

//console.warn(first,second,third,forth);
//

// limited scoping using 'let'
// for (let i = 0; i < 5; i++) {
// 	console.warn(i);
// };	

//})();
//take value from 'first' attribute and assign to variable newProp
//# sourceMappingURL=ecm5.js.map
