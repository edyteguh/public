// function

function myFunction() {
	function greet() {
		return "Hello world";
	}
	return greet();
	function greet() {
		return "Second here";
	}
}
alert(myFunction());

/*
function declaration:
function Identifier(FormalParameterList optional) {
	Function-Body
}

function expression represents a value, which is a function object
*/

// this is not an assignment, there is an identifier, and it's in the
// global scope, so it's a function declaration 
function myBlankFunction() {
	//body
}

// this is part of an assignment so it is a function expression
var myOtherFunction = function foo() {
	// body
}

// part of a new expression, so it is a function expression
new function myThirdFunction() {
	// body

	// this is part of a function body, so it is a
	// function declaration 
	function myInternalFunction() {
		// internal body
	}
}

// assignment function expressions are hoisted just like variable declarations, 
// but only their declaration expression is hoisted,
// not their assignment expression 
function myTestFunction() {
	var myInternalFunction = function() {
		return "Hello world";
	}
	return myInternalFunction();
	var myInternalFunction = function() {
		return "Second definition";
	}
	// i think it will be hoisted like this :
	/*
	var myInternalFunction;
	return myInternalFunction();
	myInternalFunction = ...
	*/
}
alert(myTestFunction());	// hello world or second definition?

// invoke function
// 1.invoker : ()

var myObject = {
	myMethod : function() {
		alert(this===myObject);
	}
}
function myGlobalFunction() {
	alert(this===window);
	function mySubFunction() {
		alert(this===window);
	};
	mySubFunction();
}
myObject.myMethod();
myGlobalFunction();

//2. as constructors
function myConstructorFunction() {
	alert('Hello world');
}
new myConstructorFunction;
// a common convention for constructors is to capitalize their first letter
function Kitty() {
	this.soft = true;
	this.temperature = "warm";
	this.vocalize = function() {
		alert('Purr,purr,purr');
	}
}
var myKitty = new Kitty;
alert(myKitty.soft);
alert(myKitty.temperature);
myKitty.vocalize();

//3. using apply() and call()
var contextObject = {
	testContext : 10;
}
var otherContextObject = {
	testContext: " Hello world";
}
var testContext = 15;

function testFunction() {
	alert(this.testContext);
}

testFunction();
testFunction.call(contextObject);
testFunction.apply(otherContextObject);
